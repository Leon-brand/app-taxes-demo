import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'

const RFCDropdownButton = ({ options = [], onSelect }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex flex-col items-center mt-3 px-2 py-1 w-[113px] rounded-2xl text-sm transition 
            ${open ? 'bg-[#F2F5F6] text-[#143559]' : 'bg-[#0077FF] text-white'}`}
      >
        <GroupsOutlinedIcon fontSize="medium" className="leading-none m-0 p-0" />
        <span className="text-sm leading-none m-0 p-0">RFC</span>
      </button>
      {/* Dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-52 bg-[#143559]/55 text-white
                       rounded-md shadow-lg z-50 backdrop-blur-sm">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onSelect(opt.value)
                setOpen(false)
              }}
              className='px-4 py-2 cursor-pointer transition hover:text-[#00B69B] font-semibold text-md'
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

RFCDropdownButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
}

export default RFCDropdownButton
