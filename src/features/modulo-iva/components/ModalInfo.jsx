
import PropTypes from 'prop-types'
import {  useEffect } from 'react'
import useLockBodyScroll from '@/hooks/useLockModalScroll'

const ModalInfo = ({ isOpen, onClose, movimientos, cfdi, bancos }) => {
  useLockBodyScroll(isOpen)

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (

    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ${
        isOpen
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
      onClick={onClose}    >
      <div className="w-full max-w-2xl h-[200px] bg-[#F2F5F6] rounded-lg shadow overflow-hidden text-sm">
        <div className="flex">

          {/* Columna 1: CFDI */}
          <div className="flex-1 border-r-2 border-white">
            <div className="bg-[#143559] p-1 text-center">
              <label className="font-bold text-white text-2xl">CFDI</label>
            </div>
            <div className='flex my-2 px-4 justify-between text-lg font-semibold'>
              <label>Tipo</label>
              <label>Descargados</label>
            </div>
            <div className=" p-4 border-white">
              {
                Object.entries(cfdi).map(([key, value]) => (
                  <div key={key} className='flex justify-between'>
                    <label className='mb-2'>{key}</label>
                    <label className='mb-2'>{value}</label>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Columna 2: Bancos */}
          <div className="flex-1 border-r-2 border-white">
            <div className="bg-[#143559] p-1 text-center">
              <label className="font-bold text-white text-2xl">Bancos</label>
            </div>
            <div className='flex my-2 px-4 justify-between text-lg font-semibold'>
              <label>No. Cta</label>
              <label>Depósitos</label>
            </div>
            <div className=" p-2 border-white overflow-y-auto max-h-[100px]">
              {
                Object.entries(bancos).map(([key, value]) => (
                  <div key={key} className='flex justify-between'>
                    <label className='mb-2'>{key}</label>
                    <label className='mb-2'>{value}</label>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Columna 3: Contabilidad */}
          <div className="flex-1">
            <div className="bg-[#143559] p-1 text-center">
              <label className="font-bold text-white text-2xl">Contabilidad</label>
            </div>
            <label className='flex my-2 px-4 justify-center text-lg font-semibold'>Movimientos</label>
            <div className="h-full p-2 text-center">
              {movimientos}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModalInfo

ModalInfo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  movimientos: PropTypes.number,
  cfdi : PropTypes.object,
  bancos : PropTypes.object
}
