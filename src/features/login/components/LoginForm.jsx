import PropTypes from 'prop-types'
import { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'

const LoginForm = ({ onSubmit, isColumnLayout, errorMsg, onForgotPassword }) => {

  const isColumn = isColumnLayout

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    onSubmit({ username, password })  // pasa credenciales al padre
  }
  return (
    <form
      onSubmit={handleLogin} // conecta el submit al manejador
      className={`
        w-full max-w-[375px] min-w-[300px] bg-white rounded-lg shadow-md p-6
        ${isColumn ? 'mt-60' : 'mt-10'}
        transition-all duration-500
      `}
    >
      <h1 className="text-3xl font-extrabold text-center mb-12">
        Bienvenido
      </h1>
      {/* Usuario */}
      <div className="mb-4">
        <div className="flex items-center border rounded px-3 py-1">
          <input
            id="username"
            type="text"
            placeholder="Usuario"
            value={username}                   // valor controlado del estado
            onChange={(e) => setUsername(e.target.value)}  // actualiza estado
            className="w-full outline-none bg-transparent text-sm text-gray-800"
            style={{ fontSize: '18px' }}
            required
          />
          <PersonOutlineOutlinedIcon className="text-gray-400 ml-2" fontSize="medium" />
        </div>
      </div>
      {/*Contraseña*/}
      <div className="mb-6">
        <div className="flex items-center border rounded px-3 py-1">
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}                   // valor controlado del estado
            onChange={(e) => setPassword(e.target.value)}  // actualiza estado
            className="w-full outline-none bg-transparent text-sm text-gray-800"
            style={{ fontSize: '18px' }}
            required
          />
          <KeyOutlinedIcon className="text-gray-400 ml-2" fontSize="medium" />
        </div>
      </div>
      {errorMsg !== '' && <p className="text-red-600 text-sm mb-0 text-center">{errorMsg}</p>}

      <hr className="border-gray-300 my-10" />
      {/* Botón de envío */}
      <button
        type="submit"
        className="w-full h-[46px] bg-[#0e325a] hover:bg-[#0077FF] text-white font-semibold
                   px-4 rounded-md shadow-md flex items-center justify-center gap-2 transition-all duration-300"
      >
        <MeetingRoomOutlinedIcon fontSize="large" />
        Acceder
      </button>
      {/* Enlace de recuperación */}
      <div className="mt-6 mb-2 text-sm text-center">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-[#0077FF] hover:font-bold hover:underline transition-all duration-500"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isColumnLayout: PropTypes.bool,
  errorMsg: PropTypes.string,
  onForgotPassword: PropTypes.func
}

export default LoginForm
