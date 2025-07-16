import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CustomeDropDown from '@/components/CustomeDropDown'

import Tooltip from '@mui/material/Tooltip'
import { FilePlus, CircleX, FileUp  } from 'lucide-react'

const ModalCargaArchivos = ({ isOpen, onClose }) => {
  const [ showModal, setShowModal ] = useState(false)
  const [ selectedRFC, setSelectedRFC ] = useState('')
  const [ selectedYear, setSelectedYear ] = useState('')
  const [ selectedMonth, setSelectedMonth ] = useState('')
  const [ selectedType, setSelectedType] = useState('')
  const [ documentosCargados, setDocumentosCargados ] = useState([])
  const [dragActive, setDragActive] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      setDocumentosCargados(prev => [...prev, ...files])
      console.log('Archivos cargados:', files)
    }
  }

  const handleDrag = (e) => {
    setDragActive(true)
    e.preventDefault()
    e.stopPropagation()
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

  const exitAndResetValues = () => {//Resyeta los valores y cierra Modal
    [setSelectedRFC, setSelectedYear, setSelectedMonth, setSelectedType].forEach(fn => fn(''))
    onClose()
  }

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
          <CustomeDropDown
            className="w-[160px] h-[28px] text-center justify-center"
            placeholder="RFC"
            data={optionsRFC}
            value={selectedRFC}
            onChange={setSelectedRFC}
          />
          <Tooltip
            title="Agrega los archivos que deseas guardar"
            placement="bottom"
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: '#143559',
                  color: 'white',
                  fontSize: '0.875rem',
                  padding: '16px 24px',
                  borderRadius: '8px',
                },
              },
            }}
          >
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
          </Tooltip>
        </div>
        {/* Área de carga */}
        <div className="flex w-full max-w-4xl h-80 border border-[#143559] rounded-xl overflow-hidden shadow-lg bg-white">
          {/* IZQUIERDA: Zona de arrastre */}
          <div
            className="flex flex-col border-r border-[#143559] items-center justify-center w-1/2 p-6"
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center text-[#143559] cursor-pointer">
              <FilePlus size={50} className="mb-4" />
              <p className="text-lg font-medium text-center">
                Arrastra tus archivos para
                <br />
                realizar la carga.
              </p>
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

              <label
                htmlFor="fileUpload"
                className="mt-4 text-sm text-blue-600 underline cursor-pointer hover:text-blue-800"
              >
                Seleccionar archivos desde tu equipo
              </label>
            </div>
          </div>

          {/* DERECHA: Estructura de carpetas y archivos */}
          <div className="flex flex-col gap-2 mt-6 p-6 w-1/2 text-[#143559] text-sm">
            {selectedRFC && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0077FF]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H2v16h20V6h-8l-2-2z" />
                </svg>
                {selectedRFC}
              </div>
            )}
            {selectedYear && (
              <div className="ml-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0077FF]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H2v16h20V6h-8l-2-2z" />
                </svg>
                {selectedYear}
              </div>
            )}
            {selectedMonth && (
              <div className="ml-8 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0077FF]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H2v16h20V6h-8l-2-2z" />
                </svg>
                {selectedMonth}
              </div>
            )}
            {selectedType && (
              <div className="ml-12 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#0077FF]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H2v16h20V6h-8l-2-2z" />
                </svg>
                {selectedType}
              </div>
            )}

            {documentosCargados.length > 0 && (
              <div className="ml-16 mt-4">
                {documentosCargados.map((file, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16V4a2 2 0 012-2h8l6 6v8a2 2 0 01-2 2H6a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            )}

            {(selectedRFC || selectedYear || selectedMonth || selectedType || documentosCargados.length > 0) && (
              <p className="mt-6 ml-2 text-xs text-gray-500">
                Ruta de Carga
              </p>
            )}
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
