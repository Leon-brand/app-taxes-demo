
import { useLocation } from 'react-router-dom'
import ModalSaveChangesPrompt from '@/components/ModalSaveChangesPrompt'
import { useState } from 'react'

import SyncAltSharpIcon from '@mui/icons-material/SyncAltSharp'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import FrontHandOutlinedIcon from '@mui/icons-material/FrontHandOutlined'
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined'
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'

const SidebarRevisionOperaciones = () => {
  const [ showModalSaveChangesPrompt, setShowModalSaveChangesPrompt ] = useState(false)
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const tabActiva = params.get('tab')//obtengo el tab activo desde la url
  const tabItems = [
    { label: 'Trasladado', icon: <SyncAltSharpIcon fontSize="small" className="mr-2" /> },
    { label: 'Acreditable', icon: <VerifiedRoundedIcon fontSize="small" className="mr-2" /> },
    { label: 'Retenido', icon: <FrontHandOutlinedIcon fontSize="small" className="mr-2" /> },
    { label: 'Determinado', icon: <TroubleshootOutlinedIcon fontSize="small" className="mr-2" /> },
  ]

  return (
    <aside className='w-40 min-h-screen p-0.5 border-r bg-[#E5E9EA] flex flex-col items-center mt-16'>
      <div className="w-full my-6">
        <div className="relative w-full text-center">
          <button
            onClick={() => setShowModalSaveChangesPrompt(true)}
            className="px-2 pt-1.5 mb-4 rounded-md shadow-md bg-[#143559]
            text-white hover:bg-[#0077FF] transition-all duration-300"
          >
            <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
            <span className="text-2xl"></span>
          </button>
          <button
            className="flex flex-col items-center w-full py-2 text-lg font-bold rounded hover:bg-gray-100 transition cursor-not-allowed"
          >
            <BookmarkAddedOutlinedIcon fontSize="large" />
            IVA
          </button>
          <div className="mt-2 w-full text-left transition">
            {tabItems.map((tab, index) => (
              <button
                key={index}
                className={`flex w-full text-left px-4 py-2 font-medium rounded ${
                  tab.label === tabActiva
                    ? 'bg-[#143559] text-white cursor-none'
                    : 'text-gray-500 bg-gray-200 hover:bg-gray-300 transition-all duration-300 cursor-not-allowed'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          <button
            className="flex flex-col items-center w-full py-2 mt-4 text-lg rounded text-gray-500 bg-gray-200 hover:bg-gray-300 transition-all duration-300 cursor-not-allowed"
            disabled
          >
            <svg className='w-8 h-8 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M13.574 12.75h-2.033a1.342 1.342 0 0 0-.5
              2.587l2.064.826a1.342 1.342 0 0 1-.5 2.587h-2.031m1.5-6V12m0 7.5v-.75m-5.25-10.5h10.5M15.63 5.036l1.438-2.876a.75.75 0 0
              0-1.006-1.006l-1.9.948a.75.75 0 0 1-.959-.255l-.503-.763a.75.75 0 0 0-1.248 0l-.509.763a.75.75 0 0 1-.959.255l-1.897-.948A.751.751
              0 0 0 7.08 2.16l1.41 2.82"/><path d="m7.237 10.5l-2.76 3.2a5.932 5.932 0 0 0 4.7 9.549h5.79a5.932 5.932 0 0 0 4.7-9.549l-2.76-3.2"/>
            </g></svg>
            ISR
          </button>
          <button
            className="flex flex-col items-center w-full py-2 mt-4 text-lg rounded text-gray-500 bg-gray-200 hover:bg-gray-300 transition-all duration-300 cursor-not-allowed"
          >
            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M13.574 12.75h-2.033a1.342 1.342 0 0 0-.5
              2.587l2.064.826a1.342 1.342 0 0 1-.5 2.587h-2.031m1.5-6V12m0 7.5v-.75m-5.25-10.5h10.5M15.63 5.036l1.438-2.876a.75.75 0 0
              0-1.006-1.006l-1.9.948a.75.75 0 0 1-.959-.255l-.503-.763a.75.75 0 0 0-1.248 0l-.509.763a.75.75 0 0 1-.959.255l-1.897-.948A.751.751
              0 0 0 7.08 2.16l1.41 2.82"/><path d="m7.237 10.5l-2.76 3.2a5.932 5.932 0 0 0 4.7 9.549h5.79a5.932 5.932 0 0 0 4.7-9.549l-2.76-3.2"/>
            </g></svg>
            Herramientas
          </button>
        </div>
      </div>
      <ModalSaveChangesPrompt isOpen={showModalSaveChangesPrompt} onClose={() => setShowModalSaveChangesPrompt(false)} route="/iva-home" />
    </aside>
  )
}

export default SidebarRevisionOperaciones
