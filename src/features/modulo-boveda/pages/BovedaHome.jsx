import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Calculator, Landmark, Scroll } from 'lucide-react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined'
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined'

const BovedaHome = () => {

  const [ razonSocial, setRazonSocial ] = useState('')
  const [ rfc, setRFC ] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('rfc')
    if (data) {
      const [razon, rfcCompleto] = data.split(' / ')
      setRazonSocial(razon)
      setRFC(rfcCompleto)
    }
  }, [ razonSocial, rfc ])

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
          <div className="text-right">
            <h2 className="font-bold text-gray-500 text-2xl">{razonSocial}</h2>
            <h2 className="text-gray-500 text-md">{rfc}</h2>
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

