import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CustomeDropDown from '@/components/CustomeDropDown'

import Tooltip from '@mui/material/Tooltip'
import { FilePlus, CircleX, FileUp, File  } from 'lucide-react'

const ModalCargaArchivos = ({ isOpen, onClose }) => {
  const [ showModal, setShowModal ] = useState(false)
  const [ selectedRFC, setSelectedRFC ] = useState('')
  const [ selectedYear, setSelectedYear ] = useState('')
  const [ selectedMonth, setSelectedMonth ] = useState('')
  const [ selectedType, setSelectedType] = useState('')
  const [ documentosCargados, setDocumentosCargados ] = useState([])

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) setDocumentosCargados(prev => [...prev, ...files])
  }
  const preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const exitAndResetValues = () => {//Resyeta los valores y cierra Modal
    [setSelectedRFC, setSelectedYear, setSelectedMonth, setSelectedType].forEach(fn => fn(''))
    setDocumentosCargados([])
    onClose()
  }

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      setTimeout(() => setShowModal(false), 100) //Espera a desmontar para permitir animación
    }
  }, [isOpen])

  if (!isOpen && !showModal) return null // Espera a ocultar el DOM después de animar

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

  const ArchiveType = [
    { value: 'Bancario', label: 'Bancario' },
    { value: 'Contable', label: 'Contable' },
  ]

  const itemsCarpetas = (
    <>
      {selectedRFC && (
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 text-[#0077FF]" fill="currentColor" viewBox="0 0 24 24"> <path d="M10 4H2v16h20V6h-8l-2-2z" />
          </svg>
          {selectedRFC}
        </div>
      )}
      {selectedYear && (
        <div className="ml-2 flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 text-[#0077FF]" fill="currentColor" viewBox="0 0 24 24"
          >
            <path d="M10 4H2v16h20V6h-8l-2-2z" />
          </svg>
          {selectedYear}
        </div>
      )}
      {selectedMonth && (
        <div className="ml-3 flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 text-[#0077FF]" fill="currentColor" viewBox="0 0 24 24"
          >
            <path d="M10 4H2v16h20V6h-8l-2-2z" />
          </svg>
          {selectedMonth}
        </div>
      )}
      {selectedType && (
        <div className="ml-4 flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 text-[#0077FF]" fill="currentColor" viewBox="0 0 24 24"
          >
            <path d="M10 4H2v16h20V6h-8l-2-2z" />
          </svg>
          {selectedType}
        </div>
      )}
    </>
  )

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50
      ${
    isOpen
      ? 'animate-in fade-in-0 zoom-in-95'
      : 'animate-out fade-out-0 zoom-out-95'
    }
      duration-300`}
    >
      <div className="bg-[#F2F5F6] rounded-xl border border-[#143559] shadow-2xl py-6 px-12 w-6xl transition-all duration-500 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl font-bold">Carga de Archivos</h1>
        <div className="flex gap-4 mt-4 mb-4">
          <div className='relative'>
            {!selectedRFC && (
              <span className="absolute -top-3 -right-0 z-10">
                <span className="inline-flex h-4 w-4 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
              </span>
            )}
            <CustomeDropDown
              className="w-[160px] h-[28px] text-center justify-center"
              placeholder={optionsRFC[0].label}
              data={optionsRFC}
              value={selectedRFC}
              onChange={setSelectedRFC}
            />
          </div>
          <div className="flex gap-4">
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
              placeholder="Tipo de Archivo"
              data={ArchiveType}
              value={selectedType}
              onChange={setSelectedType}
              disabled={!selectedMonth}
            />
          </div>
        </div>
        {/* Área de carga */}
        <div className="flex w-full max-w-4xl h-80 border border-[#143559] rounded-xl overflow-hidden shadow-lg bg-white">

          {/* IZQUIERDA: Estructura de carpetas y archivos */}
          <div className="flex flex-col gap-1 p-4 w-1/2  border-r border-[#143559]
                          text-[#143559] text-sm justify-between">
            <div className='ml-2 mt-2'>
              {itemsCarpetas   /* todos los iconos de las carpetas simulando ruta*/ }
              {documentosCargados.length > 0 && (
                <div className="ml-2 mt-2  overflow-y-auto max-h-[800px]">
                  {documentosCargados.map((file, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <File size={20} className="mb-2"/>
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {(selectedRFC || selectedYear || selectedMonth || selectedType || documentosCargados.length > 0) && (
              <p className="mt-1 ml-0 text-xs text-gray-500 text-center">
                Ruta de Carga
              </p>
            )}
          </div>

          {/* DERECHA: Zona de arrastre */}
          <div
            className={`flex flex-col items-center justify-center w-1/2 p-6 transition-all duration-300 ${
              !selectedType ?
                'cursor-not-allowed bg-gray-100 text-gray-400' :
                'cursor-pointer bg-white text-[#143559]'
            }`}
            onDragEnter={preventDefaults}
            onDragOver={preventDefaults}
            onDragLeave={preventDefaults}
            onDrop={handleDrop}
          >
            <div
              className={`flex flex-col items-center relative ${
                !selectedType ? 'text-gray-400' : 'text-[#143559]'
              }`}
            >
              {selectedType && documentosCargados.length === 0 && (
                <span className="absolute -top-5 z-10">
                  <span className="relative inline-flex h-4 w-4 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
                </span>
              )}
              <FilePlus size={50} className="mb-4" />
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files)
                  if (files.length > 0) {
                    setDocumentosCargados((prev) => [...prev, ...files])
                  }
                }}
                className="hidden"
                id="fileUpload"
              />
              {!selectedRFC || !selectedYear || !selectedMonth || !selectedType ? (
                <Tooltip
                  title="Seleccione todos los campos para realizar la carga"
                  placement="bottom"
                  slotProps={{
                    tooltip: {
                      sx: {
                        bgcolor: '#143559',
                        color: 'white',
                        fontSize: '0.875rem',
                        padding: '28px 28px',
                        borderRadius: '8px',
                        maxWidth: '600px',
                      },
                    },
                  }}
                >
                  <label
                    htmlFor={( selectedType ) ? 'fileUpload' : ''}
                    className={`text-lg font-medium text-center ${selectedType ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                  >
                    Arrastra tus archivos para
                    <br />
                    realizar la carga.
                  </label>
                </Tooltip>
              ) : (
                <label
                  htmlFor={( selectedType ) ? 'fileUpload' : ''}
                  className={`text-lg font-medium text-center ${selectedType ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  Arrastra tus archivos para
                  <br />
                realizar la carga.
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap justify-center gap-52 mb-2 mt-10">
          <button
            className={`flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
            text-sm transition-all duration-300 w-[140px] h-[52px] justify-center
            ${ selectedRFC && selectedYear && selectedMonth && selectedType
      ? 'bg-[#F2F5F6] text-[#143559] border-[#143559] cursor-pointer hover:bg-[#143559] hover:text-white'
      : 'text-gray-400 bg-gray-100 border-gray-400 hover:bg-gray-200 cursor-not-allowed'
    }`}
          >
            <FileUp size={32} className="mr-2" />
            Cargar
          </button>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
          text-sm text-red-600 border-red-600 bg-white transition-all duration-300
          w-[140px] h-[52px] justify-center hover:bg-red-600 hover:text-white"
            onClick={exitAndResetValues}
          >
            <CircleX size={32} className="mr-2" />
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalCargaArchivos

ModalCargaArchivos.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
