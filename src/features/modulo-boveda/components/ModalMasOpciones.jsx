import PropTypes from 'prop-types'
import { useState } from 'react'
import { Check, Square } from 'lucide-react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'

const ModalMasOpciones = ({
  isOpen,
  onClose,
  columnasConcepto = [],
  columnasOtrosCampos = [],
  selectedColumns,
}) => {
  const [seleccionadas, setSeleccionadas] = useState([])
  const [ selectAll, setSelectAll ] = useState(false)

  const toggleColumna = (columna) => {
    setSeleccionadas((prev) =>
      prev.includes(columna)
        ? prev.filter((c) => c !== columna)
        : [...prev, columna]
    )
  }

  // Cuando se hace clic en "Seleccionar todo"
  const handleSelectAll = () => {
    const newValue = !selectAll // Cambiamos su valor actual
    // Marcamos o desmarcamos todos los elementos según el nuevo valor
    //setRows(prev => prev.map(row => ({ ...row, checked: newValue })))
    setSelectAll(newValue)
  }

  const onSave = () => {
    selectedColumns(seleccionadas)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    /*  onClick={onClose} */
    >
      <div
        className="bg-[#F2F5F6] border-2 border-[#143559] shadow-2xl rounded-xl p-6 w-full max-w-4xl relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-2 pt-1.5 rounded-md shadow-md bg-[#143559]
            text-white hover:bg-[#0077FF] transition-all duration-300"
          >
            <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-10 px-4 mb-6">
          {/* Columna: Concepto */}
          <div>
            <h3 className="text-lg font-bold text-[#143559] mb-4 text-center">Concepto</h3>
            <div className="flex items-center gap-2 text-[#00B69B] mb-4 ml-8">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="border-2 border-[#00B69B] w-5 h-5"
              />
              <span className='text-sm font-bold'>Seleccionar Todo</span>
            </div>
            <div className="flex flex-col gap-2 ml-8">
              {columnasConcepto.map((columna) => {
                const checked = seleccionadas.includes(columna)
                return (
                  <label
                    key={`concepto-${columna}`}
                    className="flex items-center cursor-pointer text-[#143559] text-sm font-medium
                    hover:font-bold transition-all duration-500"
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
          </div>

          {/* Columna: Otros Campos */}
          <div>
            <h3 className="text-lg font-bold text-[#143559] mb-4 text-center">Otros Campos</h3>
            <div className="flex items-center gap-2 text-[#00B69B] mb-4">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="border-2 border-[#00B69B] w-5 h-5"
              />

              <span className='text-sm font-bold'>Seleccionar Todo</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-0">
              {columnasOtrosCampos.map((columna) => {
                const checked = seleccionadas.includes(columna)
                return (
                  <label
                    key={`otros-${columna}`}
                    className="flex items-center cursor-pointer text-[#143559] text-sm font-medium
                    hover:font-bold transition-all duration-500"
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
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-md border-2 text-[#143559] border-[#143559] font-bold
                hover:bg-[#143559] hover:text-white transition-all shadow-[0_4px_12px_rgba(20,53,89,0.3)]"
            onClick={onSave}
          >
            <CheckCircleOutlineIcon fontSize="medium" />
            <span className="leading-tight">Seleccionar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

ModalMasOpciones.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedColumns: PropTypes.func.isRequired,
  columnasConcepto: PropTypes.arrayOf(PropTypes.string),
  columnasOtrosCampos: PropTypes.arrayOf(PropTypes.string),
}

export default ModalMasOpciones
