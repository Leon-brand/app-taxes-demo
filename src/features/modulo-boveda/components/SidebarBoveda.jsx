
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import { Calculator } from 'lucide-react'
import { BanknoteArrowUp } from 'lucide-react'
import { Landmark } from 'lucide-react'

const SidebarBoveda = ({ onSelectTab, activeTab }) => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(true)
  const tabItems = [
    { label: 'CFDIs', icon: <RequestPageOutlinedIcon className='mb-1' style={{ fontSize: 40 }}/> },
    { label: 'Bancos', icon: <Landmark className='mb-1' size={36} /> },
    { label: 'Contables', icon: <Calculator className='mb-1' size={36} /> },
    { label: 'Declaraciones', icon: <BanknoteArrowUp className='mb-1' size={36} /> },
  ]

  return (
    // Esta línea reemplazada para que el ancho del sidebar dependa de `open`
    <aside className={`${open ? 'w-40' : 'w-16'} min-h-screen p-0.5 border-r bg-[#E5E9EA] flex flex-col items-center transition-all duration-300`}>
      <div className="w-full">
        <div className="relative w-full text-center mt-24">
          <button
            onClick={() => navigate(-1)}
            className="px-2 rounded-md shadow-md bg-[#143559]
            text-white hover:bg-[#0077FF] transition-all duration-300"
          >
            <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
            <span className="text-2xl"></span>
          </button>
          {open && (
            <div className="absolute z-10 mt-2 w-full text-left transition mt-20">
              {tabItems.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => onSelectTab(index)}
                  className={`flex flex-col items-center w-full text-left mb-8 px-4 py-2 font-medium rounded transition duration-200 whitespace-nowrap overflow-hidden text-ellipsis ${
                    activeTab === index
                      ? 'text-blue-500'
                      : 'hover:bg-[#143559] hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {open && tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

SidebarBoveda.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
}

export default SidebarBoveda
