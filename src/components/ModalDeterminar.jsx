import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined'
import { Target } from 'lucide-react'

const ModalDeterminar = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      setTimeout(() => setShowModal(false), 300)
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ${
        isOpen
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className="relative bg-[#F2F5F6] rounded-xl border-2 border-[#337AB7] text-black p-10 w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-6 right-4 text-[#337AB7]">
          <Target size={48} />
        </div>
        <h2 className="text-3xl font-bold text-[#337AB7] mb-10">Determinar</h2>
        <div className="flex justify-center gap-x-8 mb-8 mt-4">
          <button
            onClick={() => navigate('/iva-home')}
            className="flex flex-col items-center justify-center px-1 py-2 rounded-lg shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)]
              text-white bg-[#143559] hover:bg-[#0077FF] transition-all max-h-[120px] w-48"
          >
            <BookmarkAddedOutlinedIcon fontSize='large' className=' !w-12 !h-12'/>
            <span className="text-md font-semibold">IVA</span>
          </button>
          <button
            className="flex flex-col items-center justify-center px-4 py-6 rounded-lg border-2 border-[#848484]
              text-gray-600 bg-gray-200 hover:bg-gray-300 transition-all max-h-[120px] w-48 cursor-not-allowed" disabled
          >
            <svg className='w-12 h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M13.574 12.75h-2.033a1.342 1.342 0 0 0-.5
              2.587l2.064.826a1.342 1.342 0 0 1-.5 2.587h-2.031m1.5-6V12m0 7.5v-.75m-5.25-10.5h10.5M15.63 5.036l1.438-2.876a.75.75 0 0
              0-1.006-1.006l-1.9.948a.75.75 0 0 1-.959-.255l-.503-.763a.75.75 0 0 0-1.248 0l-.509.763a.75.75 0 0 1-.959.255l-1.897-.948A.751.751
              0 0 0 7.08 2.16l1.41 2.82"/><path d="m7.237 10.5l-2.76 3.2a5.932 5.932 0 0 0 4.7 9.549h5.79a5.932 5.932 0 0 0 4.7-9.549l-2.76-3.2"/>
            </g></svg>
            <span className="font-medium">ISR</span>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="flex flex-col items-center justify-center px-4 py-6 rounded-lg text-gray-600 bg-gray-200
              hover:bg-gray-300 border-2 border-[#848484] transition-all max-h-[120px] w-48 cursor-not-allowed" disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512" fill="none">
              <path d="M271.06 144.3L325.33 158.6C329.88 159.79 332 162.73 332 166.7C332 170.87 328.49 174 324.24 174H288.64C281.88 174 275.3 170.55 270.77
                165.97C267.31 162.46 262.07 162.1 258.25 165.68L239.26 183.19C236.37 185.91 235.51 190.25 237.45 193.78C241.69 201.42 251.45 209.39 271.6
                212.96V240C271.6 246.63 277.71 252 285.6 252H303.03C310.91 252 317.03 246.63 317.03 240V222.42C351.13 218.73 373.77 193.71 369.76 163.42C367.01
                143.11 350.47 124.91 327.51 118.96L273.24 104.66C268.69 103.47 266.56 100.52 266.56 96.55C266.56 92.38 270.07 89.25 274.32 89.25H309.92C316.68 89.25
                323.26 92.7 327.79 97.28C331.25 100.79 336.49 101.15 340.31 97.57L359.3 80.06C362.19 77.34 363.05 73 361.11 69.47C356.87 61.83 347.11 53.86 326.96
                50.29V23.6C326.96 16.97 320.84 11.6 312.96 11.6H295.59C287.71 11.6 281.6 16.97 281.6 23.6V41.2C248.71 44.8 223.75 72.2 228.09 104.2C230.83 124.51
                247.37 142.71 271.06 144.3Z" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
              <path fill="none" stroke='currentColor' strokeWidth="30 " strokeLinecap="round" strokeLinejoin="round" d="M565.27 328.1c-11.8-10.7-30.2-10-42.6 0l-92.4 73.9a63.64 63.64 0 0 1-40 14H272a16 16 0 0 1 0-32h78.29c15.9 0 30.71-10.9 33.25-26.6a31 31 0 0 0 .46-5.46A32 32 0 0 0 352 320H192a117.66 117.66 0 0 0-74.1 26.29L71.4 384H16a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h356.77a64 64 0 0 0 40-14L564 377a32 32 0 0 0 1.28-48.9Z"/>
            </svg>
            <span className="font-medium text-center">Retenciones ISR</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDeterminar

ModalDeterminar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
