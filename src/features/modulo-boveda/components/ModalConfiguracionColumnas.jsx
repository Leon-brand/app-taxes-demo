import PropTypes from 'prop-types'
import { useState } from 'react'
import { Check, Square } from 'lucide-react'
import { CircleX, Columns3Cog } from 'lucide-react'

const ModalConfiguracionColumnas = ({ isOpen, onClose, columnasDisponibles = [], selectedColumns }) => {
  //const [seleccionadas, setSeleccionadas] = useState(initialSelected)

  const [seleccionadas, setSeleccionadas] = useState([]) // Solo para probar selección visual

  // Esta función actualiza el array de columnas seleccionadas.
  // Si la columna ya está seleccionada, la quita. Si no, la añade.
  const toggleColumna = (columna) => {
    setSeleccionadas((prev) =>
      prev.includes(columna)
        ? prev.filter((c) => c !== columna)// La quita si ya está
        : [...prev, columna]// La agrega si no está
    )
    console.log(seleccionadas)
  }

  const onSave = () => {
    selectedColumns(seleccionadas)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#F2F5F6] border-2 border-[#143559] shadow-2xl rounded-xl p-6 w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}// Previene que el click dentro del modal lo cierre
        role="dialog"
        aria-modal="true"
      >
        <h2 className="text-2xl font-bold text-[#143559] text-center mb-2">Configuración de Tabla</h2>
        <p className="text-center text-sm text-[#143559] mb-6">
          Selecciona las columnas que quieras visualizar en la tabla.
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 px-4">
          {columnasDisponibles.map((columna) => {
            const checked = seleccionadas.includes(columna)
            return (
              <label
                key={columna}
                className="flex items-center cursor-pointer text-[#143559] text-sm font-medium"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleColumna(columna)}
                  className="hidden"
                />
                <span className="mr-2">
                  {checked ? (
                    <span className="w-5 h-5 flex items-center justify-center bg-[#143559] rounded-sm">
                      <Check size={16} className="text-white" />
                    </span>
                  ) : (
                    <Square size={20} className="text-[#143559]" />
                  )}
                </span>
                {columna}
              </label>
            )
          })}
        </div>
        <div className='flex block justify-center gap-6'>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-[#143559] text-md font-bold transition-all duration-300 border-[#143559]
                  w-[160px] h-[56px] justify-center hover:bg-[#143559] hover:text-white"
            onClick={() => onSave(seleccionadas)}
          >
            <Columns3Cog size={38} className='ml-2 mr-0' />
            <span className="leading-tight">Mostrar Tabla</span>
          </button>
          <button
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-red-600 text-md font-bold transition-all duration-300 border-red-600
                  w-[160px] h-[56px] justify-center hover:bg-red-600 hover:text-white"
            onClick={ onClose }
          >
            <CircleX size={48} className='ml-2 mr-0' />
            <span className="leading-tight">Descartar Selección</span>
          </button>
        </div>
      </div>
    </div>
  )
}

ModalConfiguracionColumnas.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedColumns: PropTypes.func.isRequired,
  //onSave: PropTypes.func.isRequired,
  columnasDisponibles: PropTypes.arrayOf(PropTypes.string),
}

export default ModalConfiguracionColumnas
