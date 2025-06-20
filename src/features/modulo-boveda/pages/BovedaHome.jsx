import { useNavigate } from 'react-router-dom'

import { Calculator } from 'lucide-react'
import { BanknoteArrowUp } from 'lucide-react'
import { Landmark } from 'lucide-react'
import { ListTodo } from 'lucide-react'
import { Vault } from 'lucide-react'
import { Handshake } from 'lucide-react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import { Lan } from '@mui/icons-material'

const BovedaHome = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">        
        <div className="flex justify-between items-start w-full mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#143559]">Bóveda Fiscal</h1>
          </div>
          <div className="text-right">
            <Vault size={50} />
          </div>
        </div>

        <h2 className="text-xl text-left font-bold text-[#143559] mb-4">Selecciona el tipo de archivo</h2>
        <div className="bg-white rounded-lg border border-[#143559] p-6 w-full max-w-3xl shadow-sm">
          
          <div className="grid grid-cols-3 gap-12">
            <button
              className="flex flex-col items-center justify-center px-4 py-6 rounded-lg
                      text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]"
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
              className="flex flex-col items-center justify-center px-4 py-6 rounded-lg 
                      text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]">
              <Vault size={50} />
              <span className="font-semibold text-center">Bóveda Fiscal</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-6 border rounded-lg
                      text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px]">
              <Handshake size={50} />
              <span className="font-medium">Contrapartes</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-10 mt-10">
          <button className="flex items-center gap-2 px-4 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                            text-sm transition-all duration-300 border-[#143559]
                            w-32 justify-center hover:bg-[#143559] hover:text-white">
            <FileDownloadOutlinedIcon fontSize="large"/>
            Historial de Descargas
          </button>
          <button className="flex items-center gap-3 px-4 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                            text-sm transition-all duration-300 border-[#143559]
                            w-32 justify-center hover:bg-[#143559] hover:text-white">
            <FileUploadOutlinedIcon fontSize="large"/>
            Cargar Archivos
          </button>
        </div>
      </div>
    </>
  )
}

export default BovedaHome

