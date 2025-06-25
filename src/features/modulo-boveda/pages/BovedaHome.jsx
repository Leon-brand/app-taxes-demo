import { useNavigate } from 'react-router-dom'

import { Calculator } from 'lucide-react'
import { BanknoteArrowUp } from 'lucide-react'
import { Landmark } from 'lucide-react'
import { Scroll } from 'lucide-react'
import { Vault } from 'lucide-react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined'

const BovedaHome = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">
        <div className="flex justify-between w-full mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="px-2 mr-4 rounded-md shadow-md bg-[#143559]
                         text-white hover:bg-[#0077FF] transition-all duration-300"
            >
              <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
              <span className="text-2xl"></span>
            </button>
            <h1 className="text-3xl font-bold">Bóveda Fiscal</h1>
          </div>
          <div>
            <Vault size={50} />
          </div>
        </div>
        <div>
          <h2 className="text-xl text-left font-bold text-[#143559] mb-4">Selecciona el tipo de archivo</h2>
          <div className="bg-white rounded-lg border border-[#143559] p-4 w-full max-w-4xl shadow-md">
            <div className="grid grid-cols-3 gap-12">
              <button
                className="flex flex-col items-center justify-center px-4 py-6 rounded-lg
                           text-white bg-[#143559] shadow-md hover:bg-[#0077FF] transition-all max-h-[120px]"
              >
                <RequestPageOutlinedIcon className='mb-1' style={{ fontSize: 50 }}/>
                <span className="text-sm">CFDIs</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-4 py-6 rounded-lg
                           text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]"
              >
                <Calculator size={50} />
                <span className="font-semibold">Contabilidad</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-4 py-6 rounded-lg
                           text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]"
              >
                <Landmark size={50} />
                <span className="font-medium">Bancos</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-4 py-6 rounded-lg
                           text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]"
              >
                <BanknoteArrowUp size={50}/>
                <span className="font-medium text-center">Declaraciones</span>
              </button>
              <button
                className="flex flex-col items-center justify-center px-2 py-3 rounded-lg
                           text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]">
                <Scroll size={48} />
                <span className="font-semibold text-center">Constancia de <br/> Situación Fiscal</span>
              </button>
              <button className="flex flex-col items-center justify-center px-4 py-6 border rounded-lg
                                 text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px]">
                <span className="mb-1 text-5xl font-bold">32-D</span>
                <span className="font-medium">Opinión de Cumplimiento</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-10 mt-10 w-full">
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

