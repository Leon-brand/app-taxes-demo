import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

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

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      <div
        className="bg-[white] text-[#143559] rounded-2xl shadow-2xl p-8 max-w-lg w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold hover:bg-red-700"
        >
          ×
        </button>

      </div>
    </div>
  )
}

export default ModalCloseSession

ModalCloseSession.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
