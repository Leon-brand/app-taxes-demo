import PropTypes from 'prop-types'
import { useState, useEffect, useMemo } from 'react'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import ModalCheckTable from './ModalCheckTable'
const CheckTable = ({ data = [] }) => {

  const [rows, setRows] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [clickedRowData, setClickedRowData] = useState(null)

  const columnKeys = useMemo(() => {
    if (!data.length) return []
    return Object.keys(data[0]).filter(key => key !== 'checked')
  }, [data])

  const formatColumnName = (key) => {
    const exceptions = ['IVA', 'RFC']
    if (exceptions.includes(key.toUpperCase())) {
      return key.toUpperCase()
    }
    const formatted = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    return formatted
  }

  const openModalWithRow = (rowData) => {
    setClickedRowData(rowData) // Guarda los datos de la fila clickeada
    setModalOpen(true)
  }

  useEffect(() => {
    // Cuando llega `data`, lo inicializamos con `checked: false`
    const initialized = data.map(item => ({ ...item, checked: false }))
    setRows(initialized)
  }, [data])
  // Cuando se hace clic en "Seleccionar todo"
  const handleSelectAll = () => {
    const newValue = !selectAll // Cambiamos su valor actual
    // Marcamos o desmarcamos todos los elementos según el nuevo valor
    setRows(prev => prev.map(row => ({ ...row, checked: newValue })))
    setSelectAll(newValue)
  }
  // Cuando se hace clic en un checkbox individual
  const handleCheck = (index) => {
    const updated = [...rows] // Clonamos el estado actual
    updated[index].checked = !updated[index].checked // Invertimos el valor de ese checkbox
    setRows(updated)
    // Si todos están marcados tras este cambio, actualizamos `selectAll` a true
    const allChecked = updated.every(row => row.checked)
    setSelectAll(allChecked)
  }

  return (
    <section className="mt-2">
      <table className="min-w-full text-sm text-center text-[#143559]">
        <thead className="bg-white">
          <tr>
            <th className="px-4 py-4 flex items-center justify-center gap-2">
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              <span className='text-xs'>Seleccionar Todo</span>
            </th>
            {
              columnKeys.map((key, i) => (
                <th key={i} className="px-4 py-3">{formatColumnName(key)} <FilterListOutlinedIcon /></th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {rows.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#E6F0FA]' : 'bg-white'}>
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(i)} // Detectamos el cambio individual
                />
              </td>
              {
                columnKeys.map((key, j) => (
                  <td key={j} className="px-4 py-2">
                    <button onClick={() => openModalWithRow([item])}>
                      {item[key]}
                    </button>
                  </td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
      <ModalCheckTable
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        data={clickedRowData || []}
      />
    </section>
  )
}

CheckTable.propTypes = {
  data: PropTypes.array
}

export default CheckTable
