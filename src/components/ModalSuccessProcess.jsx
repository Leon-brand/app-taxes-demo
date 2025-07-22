import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

const ModalSuccessProcess = ({
  isOpen,
  onClose,
  processTitle = 'Procesando',
  successTitle = 'Completado',
  successMessage = 'Proceso finalizado con exito'
}) => {
  const [showModal, setShowModal] = useState(false)
  const [modalState, setModalState] = useState('processing') // | 'processing' | 'done'

  useEffect(() => {
    if (isOpen) {
      setModalState('processing')
      setShowModal(true)
      const timeout = setTimeout(() => {
        setModalState('done')
      }, 3000) // cambia a 'done'

      return () => clearTimeout(timeout) // Limpieza

    } else {
      setTimeout(() => setShowModal(false), 100) //Espera a desmontar para permitir animación
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null // Espera a ocultar el DOM después de animar

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${ isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95' }
       duration-300`}
    >
      <div
        className={`relative bg-[#F2F5F6] rounded-xl border-2 border-[#143559] shadow-2xl p-6 w-full
                    transition-all duration-500 ease-in-out
    ${
    modalState === 'processing'
      ? 'max-w-[450px]' : 'max-w-[600px] h-[400px] pt-12'}`}
      >
        {modalState === 'processing' && (
          <div className='flex flex-col items-center justify-center h-[260px]'>
            <h2 className='text-2xl font-bold text-[#143559] mb-6'>
              {processTitle}
            </h2>
            <div className='flex items-center justify-center'>
              <CircularProgress
                size='75px'
                thickness={5}
                className='mt-10'
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
            <h2 className="text-2xl font-bold text-[#143559] mb-4">
              {successTitle}
            </h2>
            <div className="flex items-center justify-center  bg-white border border-[#143559] h-[200px] w-[350px] rounded-md py-6 px-12 shadow-sm text-center mb-6">
              <p className="text-[#143559] font-medium">
                {successMessage}
              </p>
            </div>
            <button
              onClick={() => onClose()}
              className="flex items-center gap-2 px-4 py-1 rounded-md border-2 text-[#143559] border-[#143559] font-bold
                hover:bg-[#143559] hover:text-white transition-all shadow-[0_4px_12px_rgba(20,53,89,0.3)]"
            >
              <CheckCircleOutlineOutlinedIcon fontSize="large" />
              Aceptar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalSuccessProcess

ModalSuccessProcess.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  processTitle: PropTypes.string,
  successTitle: PropTypes.string,
  successMessage: PropTypes.string
}
