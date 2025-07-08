import RFCDropdownButton from './RFCDropdownButton'
import ModalCloseSession from './ModalCloseSession'
import ModalSaveChangesPrompt from './ModalSaveChangesPrompt'

import { useState, useRef, useEffect} from 'react'
//import { useNavigate } from 'react-router-dom'

import { Mail, Building, Signature, IdCard, SlidersVertical, Settings, DoorOpen, Save } from 'lucide-react'


const Header = () => {
  const [showModalSaveChangesPrompt, setShowModalSaveChangesPrompt] = useState(false)
  const [ showModalCloseSession, setShowModalCloseSession ] = useState(false)
  const [rfc, setRFC] = useState('ABYZ990099')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const dropdownRef = useRef(null)

  //const navigate = useNavigate()

  const optionsRFC = [
    { value: 'ABYZ99009', label: 'RFC: ABYZ99009' },
    { value: 'XYZ112233', label: 'RFC: XYZ112233' },
    { value: 'MNO556677', label: 'RFC: MNO556677' },
    { value: 'PQR778899', label: 'RFC: PQR778899' },
    { value: 'YHNK88990', label: 'RFC: YHNK88990' },
    { value: 'OKMJK7777', label: 'RFC: OKMJK7777' },
    { value: 'RTUHH9999', label: 'RFC: RTUHH9999' },
  ]
  useEffect(() => {
  /**
   * Event handler to detect and close the user menu if a click is detected outside the dropdown.
   */
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowUserMenu(false) // Cierra el menú si el clic es fuera
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-[#143559] text-white p-0 fixed w-full top-0 z-50 min-h-12 h-[70px] flex justify-between items-stretch">
      <button
        onClick={() => setShowModalSaveChangesPrompt(true)}
        className="ml-8 mb-8 h-full flex items-center hover:bg-[#1a4473] transition duration-300"
        aria-label="Ir a la página de inicio"
      >
        <img
          src="./logoTransparente.png"
          alt="Logo de Intelitax"
          className="h-14 w-auto object-contain"
        />
      </button>
      <div
        ref={dropdownRef}
        className="flex justify-end items-stretch mr-4 relative"
      >
        <button className="bg-[#143559] hover:bg-[#1a4473] hover:underline text-white px-4 transition duration-300 h-full">
          Cargar Archivos
        </button>
        <button
          className="bg-[#143559] hover:bg-[#1a4473] text-white px-4 transition duration-300 h-full"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          Mi Intelitax
        </button>
        {showUserMenu && (
          <div className="absolute right-4 top-full mt-0 w-56 bg-[#e6f0fa] text-[black] text-sm rounded-lg shadow-lg overflow-hidden z-50">
            <button className="flex w-full text-left px-2 py-3 hover:font-bold hover:underline transition-all duration-700">
              <Mail size={20} className='mr-2'/>
              Mensajes
            </button>
            <button className="flex w-full text-left px-2 py-3 hover:font-bold hover:underline transition-all duration-500">
              <Building size={20} className='mr-2'/>
              Mis Empresas
            </button>
            <button className="flex w-full text-left px-2 py-3 hover:font-bold hover:underline transition-all duration-500">
              <Signature size={20} className='mr-2'/>
              e.Firma
            </button>
            <button className="flex w-full text-left px-2 py-3 hover:font-bold hover:underline transition-all duration-500">
              <IdCard size={20} className='mr-2'/>
              Cuentas Bancarias
            </button>
            <button className="flex w-full text-left px-2 py-3 hover:font-bold hover:underline transition-all duration-500">
              <SlidersVertical size={20} className='mr-2'/>
              Reglas de Clasificación
            </button>
            <button className="flex w-full text-left px-2 py-4 border-0 hover:font-bold hover:underline transition-all duration-500 "
              style={{ borderBottom: '1px solid rgba(20, 53, 89, 0.2)', borderTop: '0.5px solid rgba(20, 53, 89, 0.2)' }}
            >
              <Settings size={20} className='mr-2'/>
              Ajustes
            </button>
            <button
              onClick={() => setShowModalCloseSession(true)}
              className="flex w-full text-left px-2 py-5 text-red-600 hover:font-bold hover:underline transition-all duration-500"
            >
              <DoorOpen size={20} className='mr-2'/>
              Cerrar Sesión
            </button>
          </div>
        )}

        <RFCDropdownButton
          options={optionsRFC}
          selectedRFC={rfc}
          onSelect={(newRFC) => {
            setRFC(newRFC)
          }}
        />
      </div>
      <ModalSaveChangesPrompt isOpen={showModalSaveChangesPrompt} onClose={() => setShowModalSaveChangesPrompt(false)} />
      <ModalCloseSession isOpen={showModalCloseSession} onClose={() => setShowModalCloseSession(false)} />
    </header>
  )
}

export default Header
