
import PropTypes from 'prop-types'
import { useState } from 'react'
import SyncAltSharpIcon from '@mui/icons-material/SyncAltSharp'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import FrontHandOutlinedIcon from '@mui/icons-material/FrontHandOutlined'
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined'
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined'
import MenuIcon from '@mui/icons-material/Menu'

const SidebarBoveda = ({ onSelectTab, activeTab }) => {
  const [open, setOpen] = useState(true)
  const tabItems = [
    { label: 'CFDIs', icon: <SyncAltSharpIcon fontSize="large" className="mr-2" /> },
    { label: 'Bancos', icon: <VerifiedRoundedIcon fontSize="large" className="mr-2" /> },
    { label: 'Contables', icon: <FrontHandOutlinedIcon fontSize="large" className="mr-2" /> },
    { label: 'Declaraciones', icon: <TroubleshootOutlinedIcon fontSize="large" className="mr-2" /> },
  ]

  return (
    // Esta línea reemplazada para que el ancho del sidebar dependa de `open`
    <aside className={`${open ? 'w-40' : 'w-16'} min-h-screen p-0.5 border-r bg-[#E5E9EA] flex flex-col items-center transition-all duration-300`}>
      <div className="w-full">
        <div className="relative w-full text-center">
          {/* 👇 Botón hamburguesa agregado */}
{/*           <button
            onClick={() => setOpen(!open)}
            className="my-4 text-[#143559] hover:bg-gray-200 p-2 rounded-full"
          >
            <MenuIcon />
          </button> */}

          <button
            // Se actualiza clase para que los elementos internos también respondan al estado `open`
            className="flex flex-col items-center w-full py-2 text-lg font-bold rounded hover:bg-gray-100 transition"
            onClick={() => setOpen(true)}
          >
            <BookmarkAddedOutlinedIcon fontSize="large" />
            {/* El texto IVA solo se muestra si `open` es true */}
            {open && 'IVA'}
          </button>
          {/*considerar adaptarlo para que las opciones también se oculten */}
          {open && (
            <div className="absolute z-10 mt-2 w-full text-left transition">
              {tabItems.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => onSelectTab(index)}
                  className={`block w-full text-left px-4 py-2 font-medium rounded transition duration-200 whitespace-nowrap overflow-hidden text-ellipsis ${
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
