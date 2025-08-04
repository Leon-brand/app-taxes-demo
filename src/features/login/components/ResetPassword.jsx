import PropTypes from 'prop-types'
import { useState } from 'react'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined'
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'
const ResetPassword = ({ onBackToLogin }) => {

  const [ step, setStep ] = useState('enterEmail')//'enterEmail' | 'backToLogin'
  const [ email, setEmail ] = useState('')

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  return (
    <>
      {
        step === 'enterEmail' &&
        <div
          className={`
            w-full max-w-[375px] min-w-[300px] bg-white rounded-lg shadow-md p-6 mt-10           
            transition-all duration-500`}
        >
          <h2 className="text-2xl text-[#143559] font-extrabold text-center mb-6">
            Restablece tu contraseña
          </h2>
          <p className="text-sm text-[#143559]  font-semibold leading-none text-justify mb-10">
            Si tienes problemas para recordar tu contraseña, ingresa el correo asociado a tu
            tu cuenta y te enviaremos un enlace para restablecerla.
          </p>
          {/* Correo */}
          <div className="mb-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo"
                value={email}                   // valor controlado del estado
                onChange={(e) => setEmail(e.target.value)}  // actualiza estado
                className="w-full outline-none bg-transparent text-sm text-gray-800"
                style={{ fontSize: '20px', fontWeight: '300' }}
                required
              />
              <MailOutlineOutlinedIcon className="text-gray-400 ml-2" fontSize="medium" />
            </div>
          </div>
          <hr className="border-gray-300 my-8" />
          {/* Botón de envío mail*/}
          <button
            type="button"
            onClick={() => setStep('backToLogin')}
            disabled={!email || !isValidEmail(email)}
            className={`
    w-full h-[46px] px-4 rounded-md shadow-md flex items-center justify-center gap-2
    transition-all duration-300
    ${!isValidEmail(email)
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-[#0e325a] hover:bg-[#0077FF] text-white font-semibold'
    }
  `}
          >
            <MailLockOutlinedIcon fontSize="large" />
            Enviar enlace
          </button>
          <div className="mt-6 mb-6 leading-none text-gray-400 text-center">
            <p className='text-center text-[11px]'>
                Te enviaremos un enlace seguro para restablecer tu contraseña.
            </p>
          </div>
        </div>
      }
      {step === 'backToLogin' && (
        <div
          className={`
            absolute w-full flex justify-center transform transition-all duration-700
            ${step === 'backToLogin'
          ? 'opacity-100 translate-y-0 pointer-events-auto relative'
          : 'opacity-0 translate-y-5 pointer-events-none'
        }
          `}
        >
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-[400px] h-[280px]">
            <h2 className="text-2xl text-[#143559] font-extrabold text-center mb-6">Enlace enviado</h2>
            <p className="text-sm text-[#143559] font-semibold leading-none text-justify mb-2">
              Revisa la bandeja de entrada de tu correo y haz click en el enlace que te enviaremos
              para restablecer tu contraseña de forma segura.
            </p>
            <hr className="w-full border-gray-300 my-6 mb-8" />
            <button
              type="button"
              onClick={onBackToLogin}
              className="w-full h-[46px] bg-[#0e325a] hover:bg-[#0077FF] text-white font-semibold
                      px-4 rounded-md shadow-md flex items-center justify-center gap-2 transition-all duration-300"
            >
              <MeetingRoomOutlinedIcon fontSize="large" />
              Volver al inicio
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ResetPassword

ResetPassword.propTypes = {
  onBackToLogin: PropTypes.func
}
