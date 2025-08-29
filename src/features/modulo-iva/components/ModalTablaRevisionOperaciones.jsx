
import PropTypes from 'prop-types'
import {  useEffect } from 'react'
import useLockBodyScroll from '@/hooks/useLockModalScroll'
const ModalUniversos = ({ isOpen, onClose }) => {
  useLockBodyScroll(isOpen)

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
        ${isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95'}
        duration-300`}
      onClick={onClose}
    >
      {/*Estilo original de background comentado*/}
      <div
        /* className=" bg-gradient-to-b from-[#143559] via-[#123458] to-[#F2F5F6] text-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full relative" */
        className=" bg-gradient-to-r from-[#0a0a1f] via-[#0f2e5a] to-[#155d9e] text-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl font-bold text-center mb-6">Detalless</h2>

      </div>

    </div>
  )
}

export default ModalUniversos

ModalUniversos.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

