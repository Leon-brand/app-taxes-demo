import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLockBodyScroll from '@/hooks/useLockModalScroll'
import { Save, CircleX } from 'lucide-react'
import CircularProgress from '@mui/material/CircularProgress'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

const ModalSaveChangesPrompt = ({ isOpen, onClose, route }) => {
  useLockBodyScroll(isOpen)

  const [showModal, setShowModal] = useState(false)
  const [ modalState, setModalState ] = useState('confirm') // 'confirm' | 'saving' | 'done'

  const navigate = useNavigate()

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()  // Si se presiona Escape, cerrar el modal
    window.addEventListener('keydown', handleEsc)             // Se añade el listener global
    return () => window.removeEventListener('keydown', handleEsc) // Limpieza del listener al desmontar
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      setModalState('confirm')
      setShowModal(true)
    } else {
      setTimeout(() => setShowModal(false), 100) //Espera a desmontar para permitir animación
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null // Espera a ocultar el DOM después de animar

  const handleExitWithoutSaving = () => {
    onClose()
    setTimeout(() => {
      navigate(route, { replace: true })
    }, 100)
  }

  const handleSaveAndExit = () => {
    setModalState('saving')
    // Simula guardado y muestra luego el modal final
    setTimeout(() => {
      setModalState('done')
    }, 5000)
  }

  const handleAcceptAndClose = () => {
    onClose()
    setTimeout(() => {
      navigate(route, { replace: true })
    }, 300)
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      <div
        className={`relative bg-[#F2F5F6] rounded-xl border-2 border-[#143559] shadow-2xl p-6 w-full transition-all duration-500 ease-in-out
          ${modalState === 'confirm' || modalState === 'saving' ? 'max-w-[450px]' : 'max-w-[600px] h-[400px] pt-12' }`}
        onClick={(e) => e.stopPropagation()}
      >
        {modalState === 'confirm' && (
          <>
            <h2 className="text-2xl font-bold text-[#143559] mb-4 text-center">
              Saliendo de la pantalla de trabajo
            </h2>
            <p className="text-[#143559] mb-8 mt-8 text-center">
              Si sales de esta pantalla sin guardar tu progreso, se perderá tu trabajo.
            </p>
            <p className='text-[#143559] font-bold mb-6 mt-6 text-center'>
              ¿Quieres guardar cambios antes de salir?
            </p>
            <div className='flex justify-center gap-6'>
              <button
                className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-[#143559] text-md font-bold transition-all duration-300 border-[#143559]
                  w-[160px] h-[56px] justify-center hover:bg-[#143559] hover:text-white"
                onClick={handleSaveAndExit}
              >
                <Save size={36} className='ml-2 mr-0' />
                <span className="leading-tight">Guardar Cambios</span>
              </button>
              <button
                className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-red-600 text-md font-bold transition-all duration-500 ease-in-out border-red-600
                  w-[160px] h-[56px] justify-center hover:bg-red-600 hover:text-white"
                onClick={handleExitWithoutSaving}
              >
                <CircleX size={36} className='ml-2 mr-0' />
                <span className="leading-tight">Salir sin Guardar</span>
              </button>
            </div>
          </>
        )}

        {modalState === 'saving' && (
          <div className="flex flex-col items-center justify-center h-[260px]">
            <h2 className="text-2xl font-bold text-[#143559] mb-6">Aplicando Cambios</h2>
            <div className="flex items-center justify-center">
              <CircularProgress
                size="75px"
                thickness={5}
                className="mt-10"
                sx={{
                  color: '#143559',
                  animationDuration: '900ms',
                }}
              />
            </div>
          </div>
        )}
        {modalState === 'done' && (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-[#143559] mb-4">Cambios Aplicados</h2>
            <div className="flex items-center justify-center  bg-white border border-[#143559] h-[200px] w-[350px] rounded-md py-6 px-12 shadow-sm text-center mb-6">
              <p className="text-[#143559] font-medium">
                Los cambios se guardaron exitosamente, puedes salir de la pantalla de trabajo
              </p>
            </div>
            <button
              onClick={handleAcceptAndClose}
              className="flex items-center gap-2 px-4 py-1 rounded-md border-2 text-[#143559] border-[#143559] font-bold
                hover:bg-[#143559] hover:text-white transition-all shadow-sm"
            >
              <CheckCircleOutlineOutlinedIcon fontSize="large"/>
              Aceptar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalSaveChangesPrompt

ModalSaveChangesPrompt.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired
}
