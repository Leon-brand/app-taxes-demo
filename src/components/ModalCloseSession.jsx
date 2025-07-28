import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { DoorOpen } from 'lucide-react'

const ModalCloseSession = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false) //  Controla visibilidad real del DOM

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()  // Si se presiona Escape, cerrar el modal
    window.addEventListener('keydown', handleEsc)             // Se añade el listener global
    return () => window.removeEventListener('keydown', handleEsc) // Limpieza del listener al desmontar
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      setTimeout(() => setShowModal(false), 100) //Espera a desmontar para permitir animación
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null // Espera a ocultar el DOM después de animar

  /**
   * Función para cerrar sesión, remueve el indicador de autenticación en localStorage
   * y redirige a la página de login.
   */
  const handleLogout = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('rfc')
    //localStorage.removeItem('hasSeenWelcomeModal')
    //sessionStorage.clear
    window.location.replace('/login')//prevenir navegación hacia atrás
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      <div
        className="relative bg-[#F2F5F6] rounded-xl border-2 border-[#143559] shadow-2xl p-4 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-[#143559] mb-4 text-center">Estas Cerrando sesión</h2>

        <p className="text-[#143559] mb-6 mt-6 text-center">
          ¿Estás seguro?
        </p>
        <div className='flex block justify-center gap-4'>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-[#143559] text-md font-bold transition-all duration-300 border-[#143559]
                  w-[160px] h-[56px] justify-center hover:bg-[#143559] hover:text-white"
            onClick={onClose}
          >
            <svg className='w-8 h-8 mr-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m2 14H2v-3c0-2.67 5.33-4 8-4c1 0 2.38.19 3.71.56c-.3.56-.48 1.18-.5 1.83c-.98-.29-2.1-.49-3.21-.49c-2.97 0-6.1 1.46-6.1 2.1v1.1H12z"/>
              <circle cx="18" cy="18.5" r="4" />
            </svg>

          Permanecer
          </button>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-red-600 text-md font-bold transition-all duration-300 border-red-600
                  w-[160px] h-[56px] justify-center hover:bg-red-600 hover:text-white"
            onClick={handleLogout}
          >
            <DoorOpen className="w-8 h-8 mr-1" />
          Cerrar Sesión
          </button>
        </div>

      </div>
    </div>
  )
}

export default ModalCloseSession

ModalCloseSession.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
