import { useNavigate, useLocation } from 'react-router-dom'

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined'
import { Calculator, Landmark } from 'lucide-react'

/**
 * SidebarBoveda component renders a sidebar with navigational tabs  * that allow users to switch between different sections of the application.
 *
 * Utilizes `useNavigate` and `useLocation` from `react-router-dom` for navigation
 * and to determine the active tab based on the current path.
 *
 * Each tab item consists of a label, path, and an icon, and is styled to visually
 * indicate the active tab.
 *
 * The sidebar also includes a back button which allows users to navigate back
 * to the previous page.
 */

const SidebarBoveda = () => {
  const navigate = useNavigate()
  const location = useLocation() // Saber ruta actual

  const tabItems = [
    { label: 'CFDIs', path: '/cfdis', icon: <RequestPageOutlinedIcon className='mb-1' style={{ fontSize: 40 }} /> },
    { label: 'Bancos', path: '/bancos', icon: <Landmark className='mb-1' size={36} /> },
    { label: 'Contables', path: '/contables', icon: <Calculator className='mb-1' size={36} /> },
    { label: 'Declaraciones', path: '/declaraciones', icon: <RealEstateAgentOutlinedIcon className='mb-1' style={{ fontSize: 40 }} /> },
  ]

  return (
    <aside className="w-40 min-h-screen p-0.5 border-r bg-[#E5E9EA] flex flex-col items-center transition-all duration-300">
      {/* Contenedor general de la sidebar. Ancho fijo y fondo gris claro. */}
      <div className="w-full">
        <div className="relative w-full text-center mt-24">
          {/* Botón de regreso: vuelve a la página anterior del historial */}
          <button
            onClick={() => navigate(-1)}
            className="px-2 pt-2 rounded-md shadow-md bg-[#143559]
              text-white hover:bg-[#0077FF] transition-all duration-300"
            aria-label="Regresar"
          >
            <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
          </button>

          {/* Lista de botones de sección */}
          <div className="mt-10 w-full">
            {tabItems.map((tab, index) => {
              // Verifica si el path actual incluye la ruta del tab
              const isActive = location.pathname.includes(tab.path)

              return (
                <button
                  key={index}
                  onClick={() => navigate(tab.path)}
                  className={`flex flex-col items-center w-full mb-8 px-4 py-2 font-medium rounded transition duration-200 whitespace-nowrap overflow-hidden text-ellipsis ${
                    isActive ? 'bg-[#CFE5FF] text-[#143559]' : 'hover:bg-[#143559] hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined} // Accesibilidad: marca el botón activo
                  aria-label={`Ir a ${tab.label}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SidebarBoveda
