import PropTypes from 'prop-types'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
/**
 * Componente que renderiza una tabla dentro de un modal.
 * Muestra las columnas y filas que se le pasan en la propiedad `data`.
 * La propiedad `isOpen` determina si el componente se renderiza o no.
 * La propiedad `onClose` es una función que se llama al hacer clic en el botón de cierre del modal.
 */
const ModalCheckTable = ({ isOpen, onClose, data = [] }) => {

  if (!isOpen) return null

  const columnKeys = data.length ? Object.keys(data[0]).filter(key => key !== 'checked') : []

  const formatColumnName = (key) => {
    const exceptions = ['IVA', 'RFC']
    if (exceptions.includes(key.toUpperCase())) {
      return key.toUpperCase() // Mantener como está
    }
    const formatted = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    return formatted
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white w-[90vw] h-[90vh] p-4 rounded shadow-lg overflow-y-auto relative">
        <button
          className="px-2 rounded-md shadow-md bg-[#143559] transition-all duration-300
              text-white hover:bg-[#0077FF] absolute top-2 right-2"
          onClick={onClose}
        >
          <CloseOutlinedIcon className="mb-2" fontSize="medium" />
          <span className="text-2xl"></span>
        </button>

        <section className="mt-10">
          <table className="min-w-full text-sm text-center text-[#143559]">
            <thead className="bg-white">
              <tr>
                {columnKeys.map((key, i) => (
                  <th key={i} className="px-4 py-3">{formatColumnName(key)}<FilterListOutlinedIcon /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-[#E6F0FA]' : 'bg-white'}>
                  {columnKeys.map((key, j) => (
                    <td key={j} className="px-4 py-2">{data[0]?.[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

ModalCheckTable.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
}

export default ModalCheckTable
