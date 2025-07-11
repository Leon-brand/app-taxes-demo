import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CustomDropDown from '@/components/CustomeDropDown'

const ModalCargaArchivos = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false)

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
  /*
  const handleAcceptAndClose = () => {
    onClose()
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 300)
  } */

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      <div
        className= "bg-[#F2F5F6] rounded-xl border border-[#143559] shadow-2xl py-6 px-12 w-[75vw] transition-all duration-500 ease-in-out"
      >
        <h1 className="text-3xl font-bold">Carga de Archivos</h1>
        <div className='flex gap-4 mt-4 mb-4'>

          <CustomDropDown
            className="w-[160px] h-[28px] text-center justify-center"
            placeholder="Año" 
          />
          <CustomDropDown
            className="w-[160px] h-[28px] text-center justify-center"
            placeholder="Mes" 
          />
          <CustomDropDown
            className="w-[160px] h-[28px] text-center justify-center"
            placeholder="Cáracter"
          />
          <CustomDropDown
            className="w-[160px] h-[28px] text-center justify-center"
            placeholder="Tipo de CFDI"
          />
        </div>
        <div className="bg-white rounded-xl border border-[#143559] p-6 w-full h-80 w-88 shadow-md">
        </div>
        <div className="flex flex-wrap justify-center gap-52 mb-8 mt-12">
          <button className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm text-[#337AB7] transition-all duration-300 border-[#337AB7]
                  w-[140px] h-[52px] justify-center hover:bg-[#337AB7] hover:text-white"
          >
 
            Cargar
          </button>
          <button className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm text-[red] border-[red] bg-white transition-all duration-300
                  w-[140px] h-[52px] justify-center hover:bg-[red] hover:text-white"
          >
            Cancelar
          </button>
        </div>

      </div>
    </div>
  )
}

export default ModalCargaArchivos

ModalCargaArchivos.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
