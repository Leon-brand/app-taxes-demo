import SidebarBoveda from '../components/SidebarBoveda'
import ModalConfiguracionColumnas from '../components/ModalConfiguracionColumnas'
import CustomeDropDown from '@/components/CustomeDropDown'
import { useState } from 'react'

import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined'
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined'
import { SlidersVertical } from 'lucide-react'

const CFDIsPage = () => {
  const [selectedRFC, setSelectedRFC] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [ selectedMonth, setSelectedMonth] = useState('')
  const [ selectedCharacter, setSelectedCharacter] = useState('')
  const [ selectedType, setSelectedType] = useState('')
  const [ showModalConfigColumnas , setShowModalConfigColumnas] = useState(false)
  const [ showTable, setShowTable] = useState(false)

  const columnasDisponibles = [
    'UUID/Clave',
    'Mes de Emisión',
    'RFC Emisor',
    'RFC Receptor',
    'Razón social del Emisor',
    'Razón social del Receptor',
    'Tipo de Comprobante',
    'Fecha de Cancelación',
    'Método de pago',
    'Retenciones',
    'Régimen Fiscal',
    'Categoría de Producto o Servicio',
  ]

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

  const selectedColumns = ((data) => {
    console.log('data: ', data)
    setShowTable(true)
  })

  return (
    <div className="flex w-full">
      <SidebarBoveda />
      <div className="w-full min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">
        <div className="flex justify-between w-full mb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">Bóveda Fiscal - CFDIs</h1>
          </div>
          <div>
            <RequestPageOutlinedIcon
              style={{ fontSize: 52 }}
              alt="CFDIs"
              titleAccess="CFDIs"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className={`flex gap-3 mt-4 ${showTable ? 'mb-6' : 'mb-12'}`}>
            <div className="relative inline-block">
              {!selectedRFC && (
                <span className="absolute -top-3 -right-0 z-10">
                  <span className="relative inline-flex h-4 w-4 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
                </span>
              )}
              <CustomeDropDown
                className="w-[160px] h-[28px] text-center justify-center"
                placeholder="RFC"
                title="Selecciona un RFC para habilitar los demás filtros"
                data={optionsRFC}
                value={selectedRFC}
                onChange={setSelectedRFC}
              />
            </div>
            <CustomeDropDown
              className="w-[160px] h-[28px] text-center justify-center"
              placeholder="Año"
              data={optionsYear}
              value={selectedYear}
              onChange={setSelectedYear}
              disabled={!selectedRFC}
            />
            <CustomeDropDown
              className="w-[160px] h-[28px] text-center justify-center"
              placeholder="Mes"
              data={optionsMonth}
              value={selectedMonth}
              onChange={setSelectedMonth}
              disabled={!selectedYear}
            />
            <CustomeDropDown
              className="w-[160px] h-[28px] text-center justify-center"
              placeholder="Cáracter"
              data={optionsCharacter}
              value={selectedCharacter}
              onChange={setSelectedCharacter}
              disabled={!selectedMonth}
            />
            <CustomeDropDown
              className="w-[160px] h-[28px] text-center justify-center"
              placeholder="Tipo de CFDI"
              data={optionsType}
              value={selectedType}
              onChange={setSelectedType}
              disabled={!selectedCharacter}
            />
            <div className="relative inline-block">
              {selectedType && !showTable && (
                <span className="absolute -top-3 -right-0 z-10">
                  <span className="relative inline-flex h-4 w-4 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
                </span>
              )}
              <button
                disabled={!selectedType}
                className={`flex items-center ml-4 px-2 py-1 rounded-md text-sm transition-all duration-300 
                w-[180px] h-[32px] justify-center
                ${
    selectedType === ''
      ? 'cursor-not-allowed bg-gray-200 text-gray-400'
      : 'cursor-pointer bg-[#F2F5F6] text-[#143559] shadow-[0_4px_12px_rgba(20,53,89,0.3)] hover:bg-[#143559] hover:text-white'
    }`}
                onClick={() => setShowModalConfigColumnas(true)}
                title="Configura las columnas que deseas mostrar en la tabla"
                aria-label="Abrir configuración de columnas"
              >
                <SlidersVertical size={20} className="mr-2" />
                Configurar Tabla
              </button>
            </div>
          </div>
          {showTable ? (
            <>
              <div className="flex items-center justify-between w-[332px] mb-2">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full px-4 py-2  rounded-md bg-white shadow-md text-sm
                  focus:outline-none focus:ring-2 focus:ring-[#143559] focus:shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  transition-all duration-200"
                />
              </div>
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
            </>
          ) : (
            <div className="bg-white rounded-lg border border-[#143559] p-4 w-full max-w-6xl h-80 shadow-md" />
          )}
          <div className="flex justify-between gap-10 mt-4 max-w-6xl">
            <button
              className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm text-[#337AB7] transition-all duration-300 border-[#337AB7]
                  w-[140px] justify-center hover:bg-[#337AB7] hover:text-white"
            >
              <PlagiarismOutlinedIcon fontSize="large" />
              Historial de Descargas
            </button>
            <button
              type="button"
              disabled={!showTable}
              aria-disabled={!showTable}
              aria-label="Descargar archivo CSV con los resultados de la tabla"
              title={showTable ? 'Descargar CSV' : 'Aplica filtros para habilitar descarga'}
              className={`flex items-center px-2 py-1 rounded-md transition-all duration-300 w-[220px] justify-center
                ${showTable
      ? 'cursor-pointer bg-white border-2 border-[#143559] text-[#143559] font-bold hover:bg-[#143559] shadow-[0_4px_12px_rgba(20,53,89,0.3)] hover:text-white'
      : 'cursor-not-allowed text-gray-500 bg-gray-200 hover:bg-gray-300'
    }`}
            >
              Descarga CSV
              <SystemUpdateAltOutlinedIcon fontSize="large" className="ml-4" />
            </button>
          </div>
        </div>
      </div>
      <ModalConfiguracionColumnas
        isOpen={showModalConfigColumnas}
        onClose={() => setShowModalConfigColumnas(false)}
        columnasDisponibles={columnasDisponibles}
        selectedColumns={selectedColumns}
      />
    </div>
  )
}

export default CFDIsPage
