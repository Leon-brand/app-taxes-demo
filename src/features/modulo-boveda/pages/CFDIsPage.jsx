import SidebarBoveda from '../components/SidebarBoveda'
import CustomDropDown from '@/components/CustomeDropDown'

import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';

const CFDIsPage = () => {

  return (
    <div className="flex w-full">
      <SidebarBoveda/>
      <div className="w-full min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">
        <div className="flex justify-between w-full mb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">Bóveda Fiscal - CFDIs</h1>
          </div>
          <div>
            <RequestPageOutlinedIcon style={{ fontSize: 58 }} alt="CFDIs" titleAccess='CFDIs' />
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className="flex gap-3 mb-2">
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="RFC"
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Año"
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Mes"
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Cáracter"
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Tipo de CFDI"
            />
          </div>
          <h2 className="text-xl text-left font-bold text-[#143559] mb-2">Busdcador</h2>
          <div className="bg-white rounded-lg border border-[#143559] p-4 w-full max-w-6xl h-80 shadow-md">
          </div>
          <div className="flex justify-between gap-10 mt-6 w-full">
            <button className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm text-[#337AB7] transition-all duration-300 border-[#337AB7]
                  w-[140px] justify-center hover:bg-[#337AB7] hover:text-white"
            >
              <PlagiarismOutlinedIcon fontSize="large"/>
            Historial de Descargas
            </button>
            <button className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-md font-bold transition-all duration-300 border-[#143559]
                  w-[220px] justify-center hover:bg-[#143559] hover:text-white"
            >
              Descarga CSV
              <SystemUpdateAltOutlinedIcon fontSize="large"  className='ml-4'/>
          
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CFDIsPage
