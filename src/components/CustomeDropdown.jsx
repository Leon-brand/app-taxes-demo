import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const CustomeDropDown = ({ value, onChange, data=[], placeholder = 'Seleccione una opción', className = '', disabled=false }) => {

  const selectedOption = data.find((opt) => opt.value === value) || null

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
    <div
      ref={dropdownRef}
      className={`relative text-sm font-normal ${className}`}
    >
      <div
        onClick={() => !disabled && setOpen(!open)}
        className={`flex items-center rounded overflow-hidden ${disabled ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'cursor-pointer bg-white'} shadow-sm h-full`}
        title={selectedOption?.label ?? placeholder}
      >
        <div
          className={`flex-grow px-2 border border-r-0 ${disabled ? 'border-gray-300' : 'border-[#CFE5FF]'} flex items-center justify-center h-full`}
          style={{ color: selectedOption ? '#143559' : '#666666' }}
        >
          {selectedOption?.label ?? placeholder}
        </div>
        <div className={`${disabled ? 'bg-gray-300 text-gray-500' : 'bg-[#CFE5FF] text-[#337AB7]'} rounded-r-md flex items-center justify-center border h-full px-1`}>
          {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
        </div>
      </div>
      {!disabled && open && (
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

CustomeDropDown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default CustomeDropDown
