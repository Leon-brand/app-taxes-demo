import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import FolderIcon from '@mui/icons-material/Folder'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import Switch from '@mui/material/Switch'

const RevisionOperacionesTable = ({ data = [] }) => {
  const [rows, setRows] = useState([])

  const columnKeys = useMemo(() => {
    if (!data.length) return []
    return Object.keys(data[0]).filter(key => !['alerta'].includes(key))
  }, [data])

  useEffect(() => {
    setRows(data)
  }, [data])

  return (
    <section className="mt-0">
      {/* Header con buscador y paginación */}
      <div className="flex justify-between items-center mb-2">
        {/* Buscador */}
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full px-4 py-1 rounded-md bg-white shadow-md text-sm
              focus:outline-none focus:ring-2 focus:ring-[#143559] focus:shadow-[0_4px_12px_rgba(20,53,89,0.3)]
              transition-all duration-200"
          />
        </div>
        {/* Paginado dummy */}
        <div className="flex gap-2 items-center text-[#0077FF] font-bold">
          <button className="p-0 border rounded font-bold">&lt;</button>
          <span>1 / 2</span>
          <button className="p-0 border rounded font-bold">&gt;</button>
        </div>
      </div>

      {/* Tabla */}
      <div className="border border-[#143559] rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full text-center text-[#143559] text-[9px] border-collapse">
          <thead className="bg-[#143559] text-white sticky top-0">
            <tr>
              <th className="px-2 py-0">
                <div className="flex flex-col items-center">
                  <FolderIcon fontSize="small" />
                  <span>Ampliar</span>
                </div>
              </th>
              <th className="px-2 py-0">
                <div className="flex flex-col items-center">
                  <Switch
                    size="small"
                    className="text-white"
                    sx={{
                      '& .MuiSwitch-switchBase': {
                        color: '#bcc1c9ff',
                        '&.Mui-checked': {
                          color: '#4EEFD7',
                          '& + .MuiSwitch-track': {
                            backgroundColor: '#00B69B',
                          },
                        },
                      },
                      '& .MuiSwitch-track': {
                        backgroundColor: '#bcc1c9ff',
                      },
                    }}
                  />
                  <span>Considerar</span>
                </div>
              </th>
              <th className="px-4 py-1">
                <div className="flex flex-col items-center">
                  <WarningAmberIcon fontSize="small" />
                  <span>Alerta</span>
                </div>
              </th>
              {columnKeys.map((key, i) => (
                <th key={i} className="px-4 py-1">
                  <div className="flex items-center">
                    <span>{key}</span>
                    <FilterListOutlinedIcon fontSize="small" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div className="max-h-[45vh] overflow-y-auto">
          <table className="min-w-full text-center text-[#143559] text-[10px] border-collapse">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? 'bg-[#E6F0FA]' : 'bg-white'}`}
                >
                  {/* Columna 1 - Botón menú */}
                  <td>
                    <button>
                      <MoreVertIcon />
                    </button>
                  </td>
                  {/* Columna 2 - Slider */}
                  <td>
                    <Switch
                      size="small"
                      className="text-white"
                      sx={{
                        '& .MuiSwitch-switchBase': {
                          color: '#bcc1c9ff',
                          '&.Mui-checked': {
                            color: '#4EEFD7',
                            '& + .MuiSwitch-track': {
                              backgroundColor: '#00B69B',
                            },
                          },
                        },
                        '& .MuiSwitch-track': {
                          backgroundColor: '#262627ff',
                        },
                      }}
                    />
                  </td>
                  {/* Columna 3 - Alerta */}
                  <td>
                    {row.alerta && (
                      <WarningAmberIcon className="text-[#143559]" />
                    )}
                  </td>
                  {/* Las demás columnas */}
                  {columnKeys.map((key, j) => (
                    <td key={j}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

RevisionOperacionesTable.propTypes = {
  data: PropTypes.array
}

export default RevisionOperacionesTable
