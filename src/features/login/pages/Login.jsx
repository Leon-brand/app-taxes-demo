import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import SelectRFC from '../components/SelectRFC'
import CircularProgress from '@mui/material/CircularProgress'

const Login = () => {

  const [isColumnLayout, setIsColumnLayout] = useState(false)
  const [step, setStep] = useState('login') // 'login' | 'selectRFC' | 'loading'
  const [ errorMsg, setErrorMsg ] = useState('')
  const navigate = useNavigate()

  const mockCredentials = { usuario: 'admin', password: '1234' }
  const handleSubmit = (credentials) => {
    const isValid =
      credentials.username === mockCredentials.usuario &&
      credentials.password === mockCredentials.password

    if (isValid) {
      setStep('selectRFC') // Avanza al siguiente paso
    } else {
      //alert('Verifica tus credenciales por favor')
      setErrorMsg('El usuario y contraseña son incorrectos')
    }
  }

  const handleRFCSelection = () => {
    setStep('loading')

    setTimeout(() => {
      localStorage.setItem('auth', 'true')
      navigate('/')
    }, 3000)
  }

  useEffect(()=> {
    // Función que evalúa el ancho de la ventana y actualiza el estado
    const checkLayout = () => {
      setIsColumnLayout(window.innerWidth < 768) //tipo columna (mobile)
    }
    checkLayout() // Ejecutamos la función una vez al cargar el componente
    // Nos suscribimos al evento 'resize' del navegador para actualizar el estado si el usuario cambia el tamaño
    window.addEventListener('resize', checkLayout)
    // Limpieza: eliminamos el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', checkLayout)
    }
  }, [])

  return (
    <div
      className={`
        bg-gradient-to-b from-[#143559] via-[#123458] to-[#F2F5F6]
        text-white min-h-screen w-full overflow-hidden p-20 flex
        transition-all duration-900
        ${
    step === 'selectRFC'
      ? 'flex-col items-center justify-start'
      : step === 'loading'
        ? 'flex-col items-center justify-start'
        : 'md:flex-row'
    }
      `}
    >
      {/* Panel izquierdo */}
      <div
        className={`
          w-full md:w-1/2 flex flex-col px-6 py-2 gap-1 mt-2
          items-center
          transition-opacity duration-800
        `}
      >
        <div className="max-w-md relative">
          <img
            src="/logoTransparente.png"
            alt="Intelitax"
            className="w-[410px] h-[120px] mb-6 object-contain"
          />
          <h2
            className={`
              absolute left-0 right-0 mx-auto max-w-md
              text-3xl font-semibold text-left text-white
              transition-all duration-500 ease-in-out transform
              ${
    step === 'selectRFC' || step === 'loading'
      ? 'opacity-0'
      : 'opacity-100 mb-10'
    }
            `}
          >
            Somos la plataforma de inteligencia fiscal-contable más confiable
            para empresas medianas y grandes.
          </h2>
        </div>
      </div>

      {/* Panel derecho */}
      <div
        className={`w-full flex flex-col items-center p-2 order-2 relative 
          ${step === 'loading' ? 'justify-center md:justify-center md:items-center md:w-full' : 'md:w-1/2'}`}
      >
        {/* LOGIN */}
        {step === 'login' && (
          <LoginForm
            onSubmit={handleSubmit}
            isColumnLayout={isColumnLayout}
            errorMsg={errorMsg}
          />
        )}

        {/* SELECT RFC */}
        <div
          className={`
            transition-opacity duration-800 absolute w-full flex justify-center
            ${
    step === 'selectRFC'
      ? 'opacity-100 pointer-events-auto relative'
      : 'opacity-0 pointer-events-none'
    }
          `}
        >
          <SelectRFC onSelect={handleRFCSelection} />
        </div>

        {/* LOADING*/}
        <div
          className={`
            transition-opacity duration-800 absolute w-full flex justify-center
            ${
    step === 'loading'
      ? 'opacity-100 pointer-events-auto relative'
      : 'opacity-0 pointer-events-none'
    }
          `}
        >
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-[400px] h-[260px]">
            <h2 className="text-3xl font-extrabold text-[#123458] m-4">Iniciando</h2>
            <CircularProgress
              size="65px"
              thickness={5}
              className="mt-2"
              sx={{ color: '#143559', animationDuration: '900ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Login
