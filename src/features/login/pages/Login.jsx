import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import CircularProgress from '@mui/material/CircularProgress'

const Login = () => {

  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isColumnLayout, setIsColumnLayout] = useState(false)
  const navigate = useNavigate()

  const mockCredentials = { usuario: 'admin', password: '1234' }
  //const url = 'https://d624-2806-107e-22-ea15-5b81-97f4-276a-71fd.ngrok-free.app/login'

  const handleSubmit = (credentials) => {//Funcion mock mientras se termina el endpoint
    setIsLoggingIn(true)

    setTimeout(() => {
      const isValid =
        credentials.username === mockCredentials.usuario &&
        credentials.password === mockCredentials.password

      setIsLoggingIn(false)

      if (isValid) {
        navigate('/')
      } else {
        setIsLoggingIn(false)
        setTimeout(() => {
          alert('Verifica tus credenciales por favor')
        }, 100)
      }
    }, 5000)
  }
  /*   const handleSubmit = async (credentials) => {
    setIsLoggingIn(true)

    const result = await verifyCredentials(credentials)
    if (result) {
      setTimeout(() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('token_type')
        navigate('/')
      }, 3000)
    } else {
      alert('Verifica tus credenciales por favor')
    }
    setIsLoggingIn(false)
  }

  async function verifyCredentials(credentials) {
    const body = {
      usuario: credentials.username,
      contrasena: credentials.password
    }

    console.log('Enviando body:', body)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        console.warn(`Error HTTP: ${response.status}`)
        return null
      }

      const data = await response.json()
      console.log('Login OK:', data)
      return data
    } catch (error) {
      console.error('Error de red o fetch:', error)
      return null
    }
  } */

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
        ${/* CHANGE: pasa a columna y centra todo cuando login */ ''}
        ${isLoggingIn ? 'flex-col items-center justify-start' : 'flex-col md:flex-row'}
        transition-all duration-900
      `}
    >
      {/* Panel izquierdo */}
      <div
        className={`
          w-full md:w-1/2 flex flex-col  p-6 gap-1 mt-5
          items-center
          transition-opacity duration-500
        `}
      >
        <div className="max-w-md relative">
          <img
            src="/logoTransparente.png"
            alt="Intelitax"
            className="w-[410px] h-[120px] mb-14 object-contain"
          />
          <h2
            className={`
                    absolute left-0 right-0 mx-auto max-w-md
                    text-3xl font-semibold text-left text-white
                    transition-all duration-300 ease-in-out transform
                    ${isLoggingIn ? 'opacity-0' : 'opacity-100 mb-10'}
                `}
          >
                Somos la plataforma de inteligencia fiscal-contable más confiable para empresas medianas y grandes.
          </h2>

        </div>
      </div>

      {/* Panel derecho */}
      <div className="w-full md:w-1/2 flex flex-col items-center p-10 order-2 relative">
        <div
          className={`
                transition-all duration-500 transform
                ${isLoggingIn
      ? 'opacity-0 scale-95 pointer-events-none absolute'
      : 'opacity-100 scale-100 relative'}
                `}
        >
          <LoginForm onSubmit={handleSubmit} isColumnLayout={isColumnLayout} />
        </div>
        <div
          className={`
            bg-white rounded-lg shadow-md p-6 flex flex-col items-center
            transition-all duration-500 transform w-[300px] h-[260px] delay-300 
            ${isLoggingIn
      ? 'opacity-100 scale-100 relative'
      : 'opacity-0 scale-95 pointer-events-none absolute'}
            `}
        >
          <h2 className="text-3xl font-extrabold text-[#123458] m-4">Iniciando</h2>

          <CircularProgress
            size="65px"
            thickness={5}
            className="mt-10"
            sx={{
              color: '#143559',
              animationDuration: '900ms',
            }}
          />
        </div>

        {/* Botón de ayuda, solo cuando NO está iniciando */}
        {!isLoggingIn && (
          <div className="mt-6 w-[400px] flex justify-center">
            <button
              className="
                flex items-center gap-1 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                bg-white text-[#143559] text-sm transition-all duration-300 border-[#143559] font-bold
                w-[160px] h-[46px] justify-center hover:bg-[#143559] hover:text-white
                "
            >
              <HelpOutlineOutlinedIcon fontSize="medium" />
              <span className="font-extrabold">Ayuda</span>
            </button>
          </div>
        )}
      </div>

    </div>
  )
}

export default Login
