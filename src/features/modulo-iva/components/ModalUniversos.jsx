
import PropTypes from 'prop-types'
import {  useEffect } from 'react'
import useLockBodyScroll from '@/hooks/useLockModalScroll'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import { Landmark, Calculator  } from 'lucide-react'
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
        <h2 className="text-4xl font-bold text-center mb-6">Universos Intelitax</h2>
        <div className="border border-gray-400 rounded-xl p-2 text-center bg-black/30">
          {/* Fila 0: Encabezados */}
          <div className="flex items-center pb-2 mb-2 ml-2 font-semibold text-lg text-[#CFE5FF] tracking-wide">
            <span className="w-8 text-left">Universo</span>
            <div className="flex gap-2 w-[132px]"></div>
            <span className="w-48 ml-5 text-left">Nombre</span>
            <span className="flex-1 text-left">Descripción</span>
          </div>
          {/* Fila A */}
          <div className="flex items-center border-b border-[#4EEFD7] py-2">
            <span className="w-8 font-bold text-xl text-[#4EEFD7]">A</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">Coincidente</span>
            <span className="flex-1 text-sm text-left">
                Operaciones contabilizadas, reflejadas en bancos y facturadas
            </span>
          </div>
          {/* Fila B */}
          <div className="flex items-center border-b border-[#11D0B4] py-2">
            <span className="w-8 font-bold text-xl text-[#11D0B4]">B</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">No Facturado</span>
            <span className="flex-1 text-sm text-left">
                Operaciones contabilizadas y reflejadas en bancos
            </span>
          </div>
          {/* Fila C */}
          <div className="flex items-center border-b border-[#00B69B] py-2">
            <span className="w-8 font-bold text-xl text-[#00B69B]">C</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">No Bancos</span>
            <span className="flex-1 text-sm text-left">
                Operaciones contabilizadas y facturadas
            </span>
          </div>
          {/* Fila D */}
          <div className="flex items-center border-b border-[#FFC5A6] py-2">
            <span className="w-8 font-bold text-xl text-[#FFC5A6]">D</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">No Contabilizados</span>
            <span className="flex-1 text-sm text-left">
                Operaciones reflejadas en bancos y facturadas
            </span>
          </div>
          {/* Fila E */}
          <div className="flex items-center border-b border-[#FFAE83] py-2">
            <span className="w-8 font-bold text-xl text-[#FFAE83]">E</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">Solo Contabilizados</span>
            <span className="flex-1 text-sm text-left">
                Operaciones contabilizadas
            </span>
          </div>
          {/* Fila F */}
          <div className="flex items-center border-b border-[#FF9F9F] py-2">
            <span className="w-8 font-bold text-xl text-[#FF9F9F]">F</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">Solo Facturados</span>
            <span className="flex-1 text-sm text-left">
                Operaciones facturadas
            </span>
          </div>
          {/* Fila G */}
          <div className="flex items-center border-b border-[#FF8383] py-2">
            <span className="w-8 font-bold text-xl text-[#FF8383]">G</span>
            <div className="flex gap-2">
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <RequestPageOutlinedIcon style={{ fontSize: '22px' }} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-white text-[#00B69B]
                      justify-center cursor-none">
                <Calculator size={20} />
              </button>
              <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                      text-[8px] font-bold border-[#00B69B] w-8 h-8 bg-[#00B69B] text-white
                      justify-center cursor-none">
                <Landmark size={20}/>
              </button>
            </div>
            <span className="ml-12 w-48 font-semibold text-left">Solo Bancos</span>
            <span className="flex-1 text-sm text-left">
                Operaciones reflejadas en bancos
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          {/*Color orginal del logo comentado*/}
          {/*   <img src="/logoTransparente2.png" alt="Intelitax logo" className="h-14 w-auto object-contain" /> */}
          <img src="/logoTransparente.png" alt="Intelitax logo" className="h-14 w-auto object-contain" />
        </div>
      </div>

    </div>
  )
}

export default ModalUniversos

ModalUniversos.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

