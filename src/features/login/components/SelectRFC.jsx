import PropTypes from 'prop-types'
import { useState } from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const SelectRFC = ({ onSelect }) => {
  const [selectedRFC, setSelectedRFC] = useState('')
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const opcionesRFC = [
    'Empresa AAA / RFC ABY2990009',
    'Empresa BBB / RFC ZZY8841149',
    'Empresa CCC / RFC HHT1234567',
    'Empresa DDD / RFC QWE2223333',
    'Empresa EEE / RFC EDC4567890',
    'Empresa FFF / RFC OKL1234567',
    'Empresa GGG / RFC PQR1234567',
    'Empresa HHH / RFC ABC1234567',
    'Empresa III / RFC EFG1234567',
    'Empresa JJJ / RFC TUV1234567',
    'Empresa KKK / RFC ABC5454547',
    'Empresa LLL / RFC OKL1234567',
    'Empresa MMM / RFC PQR1234567',
    'Empresa NNN / RFC MNO1234567',
    'Empresa OOO / RFC EFG1234567',
    'Empresa PPP / RFC TUV1234567',
  ]

  // Opciones filtradas dinámicamente
  const filteredRFCs = opcionesRFC.filter((rfc) =>
    rfc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (selectedRFC) onSelect(selectedRFC)
      }}
      className="w-full max-w-[400px] min-w-[300px] bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl text-center font-bold mb-6 text-[#143559]">
        Selecciona tu RFC
      </h2>

      {/* Dropdown*/}
      <div className="relative">
        <div
          className="w-full px-3 py-2 border border-gray-300 rounded bg-[#143559]/10 text-[#143559] cursor-pointer flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <span>{selectedRFC || 'Razón Social / RFC'}</span>
          {open ? <KeyboardArrowUpIcon className="text-[#143559]" /> : <KeyboardArrowDownIcon className="text-[#143559]" />}
        </div>

        {open && (
          <ul className="absolute z-50 w-full  bg-[#143559]/55 text-white rounded-md shadow-lg backdrop-blur-sm max-h-[228px] overflow-y-auto">
            {/* Barra de búsqueda */}
            {opcionesRFC.length > 10 && (
              <li className="p-2 sticky top-0 bg-[#143559]/70 backdrop-blur-md z-10">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full px-2 py-1 rounded text-[#123458] bg-white placeholder:text-[#999] text-sm"
                />
              </li>
            )}

            {filteredRFCs.map((rfc) => (
              <li
                key={rfc}
                onClick={() => {
                  setSelectedRFC(rfc)
                  setOpen(false)
                  setSearchTerm('')
                }}
                className="py-1 pl-11 cursor-pointer transition hover:text-[#00B69B] font-semibold text-md"
              >
                {rfc}
              </li>
            ))}

            {filteredRFCs.length === 0 && (
              <li className="p-2 text-sm text-gray-300">Sin resultados</li>
            )}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-[#143559] hover:bg-[#0077FF] text-white font-bold py-2 rounded transition-all duration-300"
      >
        <CheckCircleOutlineOutlinedIcon fontSize="large" className="mr-2" />
        Aceptar
      </button>
    </form>
  )
}

export default SelectRFC

SelectRFC.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
