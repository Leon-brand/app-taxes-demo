import { useNavigate } from 'react-router-dom'

import { Calculator, Landmark, Scroll } from 'lucide-react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined'
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined'

const BovedaHome = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">
        <div className="flex justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="px-2 pt-1.5 rounded-md shadow-md bg-[#143559]
              text-white hover:bg-[#0077FF] transition-all duration-300"
            >
              <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
              <span className="text-2xl"></span>
            </button>
            <h1 className="text-3xl font-bold">Bóveda Fiscal</h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="58" viewBox="0 0 24 24"><path
              fill="currentColor" d="M12.75 9a.75.75 0 0 0-1.5 0v.354q-.32.09-.604.252a.75.75 0 0 0-1.04
                1.04a2.7 2.7 0 0 0-.252.604H9a.75.75 0 0 0 0 1.5h.354q.09.32.252.604a.75.75 0 0 0
                1.04 1.04q.283.161.604.252V15a.75.75 0 0 0 1.5 0v-.354q.32-.09.604-.252a.75.75 0 0 0
                1.04-1.04q.161-.283.252-.604H15a.75.75 0 0 0 0-1.5h-.354a2.7 2.7 0 0 0-.252-.604a.75.75 0 0
                0-1.04-1.04a2.7 2.7 0 0 0-.604-.252zM12 13.25A1.246 1.246 0 0 1 10.75 12A1.25 1.25 0 1 1 12 13.25"/>
            <path fill="currentColor" d="M14.633 2.25H9.367c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75
                4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0
                1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403
                1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18
                1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092
                0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057M5.525
                4.104c.304-.155.688-.251 1.309-.302c.63-.051 1.434-.052 2.566-.052h5.2c1.133 0 1.937 0 2.566.052c.62.05
                1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.051.63.052 1.434.052 2.566v5.2c0
                1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052H9.4c-1.132
                0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.155-.305-.251-.69-.302-1.31c-.051-.63-.052-1.434-.052-2.566V9.4c0-1.132
                0-1.937.052-2.566c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42"/>
            <path fill="currentColor" d="M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0M12 7.75a4.25 4.25
                0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5M3 6.5A1.5 1.5 0 0 1 4.5 8v1.5a1.5 1.5 0 0 1-3 0V8A1.5 1.5 0 0 1 3 6.5m1.5
                8a1.5 1.5 0 0 0-3 0V16a1.5 1.5 0 0 0 3 0z"/>
            </svg>
          </div>
        </div>
        <div>
          <h2 className="text-xl text-left font-bold text-[#143559] mb-4">Selecciona tu fuente de información</h2>
          <div className="bg-white rounded-lg border border-[#143559] p-6 w-full max-w-4xl shadow-md">
            <div className="grid grid-cols-3 gap-10">
              <button
                onClick={() => navigate('/cfdis')}
                className="flex flex-col items-center justify-center px-4 py-6 rounded-lg text-white bg-[#143559]
                          shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[120px]"
              >
                <RequestPageOutlinedIcon className='mb-1' style={{ fontSize: 50 }}/>
                <span className="text-sm">CFDIs</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-4 py-6 border-2 border-[#848484] rounded-lg
                           text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Contabilidad'
              >
                <Calculator size={50} />
                <span className="font-semibold">Contabilidad</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-4 py-6 border-2 border-[#848484] rounded-lg
                           text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Bancos'
              >
                <Landmark size={50} />
                <span className="font-medium">Bancos</span>
              </button>
              <button
                className="flex flex-col items-center justify-center border-2 border-[#848484] rounded-lg
                           text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Declaraciones'
              >
                <RealEstateAgentOutlinedIcon className="!w-14 !h-12 mb-2"/>
                <span className="font-medium text-center">Declaraciones</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-2 py-3 border-2 border-[#848484] rounded-lg
                           text-gray-500 bg-gray-100  hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Constancia de Situación Fiscal'>
                <Scroll size={48} />
                <span className="font-semibold text-center">Constancia de <br/> Situación Fiscal</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-4 py-6 border-2 border-[#848484] rounded-lg
                           text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Opinión de Cumplimiento'>
                <span className="mb-1 text-5xl font-bold">32-D</span>
                <span className="font-medium">Opinión de Cumplimiento</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-6 mt-6 w-full">
          <button className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm text-[#337AB7] transition-all duration-300 border-[#337AB7]
                  w-[140px] justify-center hover:bg-[#337AB7] hover:text-white"
          >
            <PlagiarismOutlinedIcon fontSize="large"/>
            Historial de Descargas
          </button>
          <button className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-[140px] justify-center hover:bg-[#143559] hover:text-white"
          >
            <FileUploadOutlinedIcon fontSize="large"/>
            Cargar Archivos
          </button>
        </div>
      </div>
    </>
  )
}

export default BovedaHome

