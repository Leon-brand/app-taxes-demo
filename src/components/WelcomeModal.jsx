import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'// Español

/**
 * Componente modal de bienvenida que se muestra al abrir la app
 */
const WelcomeModal = ({ isOpen, onClose }) => {
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
      setTimeout(() => setShowModal(false), 300) //Espera a desmontar para permitir animación
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null // Espera a ocultar el DOM después de animar

  const now = new Date()
  const formattedDate = format(now, "dd 'de' MMMM yyyy - h:mm a", { locale: es })

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      <div
        className=" bg-gradient-to-b from-[#143559] via-[#123458] to-[#F2F5F6] text-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold hover:bg-red-700"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold text-center mb-6">¡Bienvenido a Intelitax!</h2>
        <div className="border-2 border-[#1571b8] rounded-xl p-4 text-center bg-white/10">
          <p className="text-lg font-semibold mb-2">Última actualización de CFDIs</p>
          <p className="text-sm text-gray-300 mb-4">{formattedDate}</p>
          <p className="text-green-400 font-semibold my-6">Tus E.firmas se encuentran vigentes</p>
          <p className="text-white">
            Conexión al SAT: <span className="text-green-400 font-bold">Activada.</span>
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <img src="/logoTransparente2.png" alt="Intelitax logo" className="h-14 w-auto  object-contain" />
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal

WelcomeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
