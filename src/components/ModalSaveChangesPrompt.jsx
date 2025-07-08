import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Save, CircleX } from 'lucide-react'

const ModalSaveChangesPrompt = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false) //  Controla visibilidad real del DOM

  const navigate = useNavigate()

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

  const handleExitWithoutSaving = () => {
    onClose()
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 100)
  }

  const handleSaveAndExit = () => {
    onClose()
    setTimeout(() => {
      alert('Progreso guardado')
      navigate('/', { replace: true })
    }, 200)
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      <div
        className="relative bg-[#F2F5F6] rounded-xl border-2 border-[#143559] shadow-2xl p-6 w-full max-w-[600px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-[#143559] mb-4 text-center">Estas saliendo de la pantalla de trabajo</h2>

        <p className="text-[#143559] mb-8 mt-8 text-center">
          Si sales de esta pantalla sin guardar tu progreso se perderá tu trabajo.
        </p>
        <p className='text-[#143559] font-bold mb-6 mt-6 text-center'>
           ¿Quieres guardar cambios antes de salir?
        </p>
        <div className='flex block justify-center gap-6'>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-[#143559] text-md font-bold transition-all duration-300 border-[#143559]
                  w-[160px] h-[56px] justify-center hover:bg-[#143559] hover:text-white"
            onClick={ handleSaveAndExit }
          >
            <Save size={36} className='ml-2 mr-0' />
            <span className="leading-tight">Guardar Cambios</span>
          </button>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-red-600 text-md font-bold transition-all duration-300 border-red-600
                  w-[160px] h-[56px] justify-center hover:bg-red-600 hover:text-white"
            onClick={ handleExitWithoutSaving }
          >
            <CircleX size={36} className='ml-2 mr-0' />
            <span className="leading-tight">Salir sin Guardar</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default ModalSaveChangesPrompt

ModalSaveChangesPrompt.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
