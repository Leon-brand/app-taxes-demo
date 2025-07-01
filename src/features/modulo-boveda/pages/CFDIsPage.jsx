import SidebarBoveda from '../components/SidebarBoveda'
import CustomDropDown from '@/components/CustomeDropDown'
import { useState, useEffect } from 'react'

import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined'
//import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined'
import { se } from 'date-fns/locale'

const CFDIsPage = () => {
  const [selectedRFC, setSelectedRFC] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [ selectedMonth, setSelectedMonth] = useState('')
  const [ selectedCharacter, setSelectedCharacter] = useState('')
  const [ selectedType, setSelectedType] = useState('')
  const [ showTable, setShowTable] = useState(false)

  const optionsRFC = [
    { value: 'ABYZ99009', label: 'ABYZ99009' },
    { value: 'XYZ112233', label: 'XYZ112233' },
    { value: 'MNO556677', label: 'MNO556677' },
    { value: 'PQR778899', label: 'PQR778899' },
    { value: 'YHNK88990', label: 'YHNK88990' },
    { value: 'OKMJK7777', label: 'OKMJK7777' },
    { value: 'RTUHH9999', label: 'RTUHH9999' },
  ]

  const optionsYear = [
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
  ]

  const optionsMonth = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Enero', label: 'Enero' },
    { value: 'Febrero', label: 'Febrero' },
    { value: 'Marzo', label: 'Marzo' },
    { value: 'Abril', label: 'Abril' },
    { value: 'Mayo', label: 'Mayo' },
    { value: 'Junio', label: 'Junio' },
    { value: 'Julio', label: 'Julio' },
    { value: 'Agosto', label: 'Agosto' },
    { value: 'Septiembre', label: 'Septiembre' },
    { value: 'Octubre', label: 'Octubre' },
    { value: 'Noviembre', label: 'Noviembre' },
    { value: 'Diciembre', label: 'Diciembre' },
  ]

  const optionsCharacter = [
    { value: 'Emisor', label: 'Emisor' },
    { value: 'Receptor', label: 'Receptor' },
    { value: 'Ambos', label: 'Ambos' },
  ]

  const optionsType = [
    { value: 'Ingreso', label: 'Ingreso' },
    { value: 'Egreso', label: 'Egreso' },
    { value: 'Pago', label: 'Pago' },
    { value: 'Nómina', label: 'Nómina' },
    { value: 'Traslado', label: 'Traslado' },
  ]

  useEffect(() => {
    console.log(selectedRFC, selectedYear, selectedMonth, selectedCharacter, selectedType)
    const urlLine = window.location.href
    console.log(urlLine)

  }, [ selectedRFC, selectedYear, selectedMonth, selectedCharacter, selectedType ])

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
              data={optionsRFC}
              value={selectedRFC}
              onChange={setSelectedRFC}
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Año"
              data={optionsYear}
              value={selectedYear}
              onChange={setSelectedYear}
              disabled={!selectedRFC}
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Mes"
              data={optionsMonth}
              value={selectedMonth}
              onChange={setSelectedMonth}
              disabled={!selectedYear}
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Cáracter"
              data={optionsCharacter}
              value={selectedCharacter}
              onChange={setSelectedCharacter}
              disabled={!selectedMonth}
            />
            <CustomDropDown
              className='w-[160px] h-[28px] text-center justify-center'
              placeholder="Tipo de CFDI"
              data={optionsType}
              value={selectedType}
              /* onChange={setSelectedType} */
              onChange={(value) => {
                setSelectedType(value)
                // Verifica que todos los anteriores estén llenos
                if (selectedRFC && selectedYear && selectedMonth && selectedCharacter && value) {
                  setShowTable(true)
                } else {
                  setShowTable(false) // Por si retrocede
                }
              }}
              disabled={!selectedCharacter}
            />
          </div>
          <h2 className="text-xl text-left font-bold text-[#143559] mb-2">Buscador</h2>
          {showTable ? (
            <div className="bg-white rounded-lg p-0 w-full max-w-6xl h-80 shadow-md overflow-auto">
              <table className="table-auto w-full h-full border-collapse">
                <thead className="bg-[#CFE5FF] text-[#143559]">
                  <tr>
                    <th className="border px-4 py-2">RFC</th>
                    <th className="border px-4 py-2">Año</th>
                    <th className="border px-4 py-2">Mes</th>
                    <th className="border px-4 py-2">Carácter</th>
                    <th className="border px-4 py-2">Tipo CFDI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="border px-4 py-2">{selectedRFC}</td>
                    <td className="border px-4 py-2">{selectedYear}</td>
                    <td className="border px-4 py-2">{selectedMonth}</td>
                    <td className="border px-4 py-2">{selectedCharacter}</td>
                    <td className="border px-4 py-2">{selectedType}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-[#143559] p-4 w-full max-w-6xl h-80 shadow-md" />
          )}
          <div className="flex justify-between gap-10 mt-6 max-w-6xl">
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
