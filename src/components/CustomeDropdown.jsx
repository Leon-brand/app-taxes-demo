import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const CustomDropDown = ({ value, onChange, data=[], placeholder = 'Seleccione una opción', className = '' }) => {

  const selectedOption = data.find((opt) => opt.value === value)

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    /*     <div ref={dropdownRef} className={`relative text-sm font-small ${className}`}>
      <div
        onClick={() => setOpen(!open)}
        className="flex rounded overflow-hidden cursor-pointer bg-white shadow-sm"
        style={{ height: 'inherit' }}
      >
        <div className="flex-grow p-2 border border-r-0 border-[#CFE5FF]">{selectedOption?.label || placeholder}</div>
        <div className="bg-[#CFE5FF] text-[#337AB7] rounded-r-md flex items-center justify-center border">
          {open ? <KeyboardArrowUpIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}
        </div>
      </div>
      {open && (
        <ul className="absolute z-10 left-0 w-full bg-white border rounded shadow">
          {data.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className="px-2 text-[#143559] hover:bg-[#143559] hover:text-white cursor-pointer transition"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div> */
    <div
      ref={dropdownRef}
      className={`relative text-sm font-small ${className}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center rounded overflow-hidden cursor-pointer bg-white shadow-sm h-full"
        // ⬆️ Agregado: `items-center` para centrar verticalmente y `h-full` para heredar la altura externa
      >
        <div className="flex-grow px-2 border border-r-0 border-[#CFE5FF] flex items-center justify-center h-full">
          {selectedOption?.label || placeholder}
        </div>
        <div className="bg-[#CFE5FF] text-[#337AB7] rounded-r-md flex items-center justify-center border h-full px-1">
          {open ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )}
        </div>
      </div>
      {open && (
        <ul className="absolute z-10 left-0 w-full bg-white border rounded shadow">
          {data.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className="px-2 text-[#143559] hover:bg-[#143559] hover:text-white cursor-pointer transition"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

CustomDropDown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default CustomDropDown
