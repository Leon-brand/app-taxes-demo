import RFCDropdownButton from './RFCDropdownButton'
import ModalCloseSession from './ModalCloseSession'
import ModalSaveChangesPrompt from './ModalSaveChangesPrompt'
import ModalCargaArchivos from './ModalCargaArchivos'

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import { useState, useRef, useEffect } from 'react'

import { Mail, Building, Signature, IdCard, SlidersVertical, Settings, DoorOpen } from 'lucide-react'
const Header = () => {
  const [ showModalSaveChangesPrompt, setShowModalSaveChangesPrompt ] = useState(false)
  const [ showModalCloseSession, setShowModalCloseSession ] = useState(false)
  const [ showModalCargaArchivos, setShowModalCargaArchivos ] = useState(false)
  const [rfc, setRFC] = useState('ABYZ990099')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const dropdownRef = useRef(null)

  const optionsRFC = [
    { value: 'ABYZ99009', label: 'RFC: ABYZ99009', razon: 'Empresa AAA' },
    { value: 'XYZ112233', label: 'RFC: XYZ112233', razon: 'Empresa BBB' },
    { value: 'MNO556677', label: 'RFC: MNO556677', razon: 'Empresa CCC' },
    { value: 'PQR778899', label: 'RFC: PQR778899', razon: 'Empresa DDD' },
    { value: 'YHNK88990', label: 'RFC: YHNK88990', razon: 'Empresa EEE' },
    { value: 'OKMJK7777', label: 'RFC: OKMJK7777', razon: 'Empresa FFF' },
    { value: 'RTUHH9999', label: 'RFC: RTUHH9999', razon: 'Empresa GGG' },
  ]
  useEffect(() => {
  /**
   * Event handler to detect and close the user menu if a click is detected outside the dropdown.
   */
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowUserMenu(false)
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
        title='Ir a la página de inicio'
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
        <button
          onClick={() => setShowModalSaveChangesPrompt(true)}
          className="items-center  bg-[#143559] hover:bg-[#1a4473] text-white px-2 transition duration-300 h-full"
          aria-label='Ir a la página de inicio'
          title='Ir a la página de inicio'
        >
          <HomeOutlinedIcon style={{ fontSize: '26px' }} className='mr-1 mb-1'/>
          <span className="hidden md:inline">Inicio</span>
        </button>
        <button
          onClick={() => setShowModalCargaArchivos(true)}
          className="bg-[#143559] hover:bg-[#1a4473] hover:underline text-white px-2 transition duration-300 h-full"
          aria-label='Ventana de carga de archivos'
          title='Ventana de carga de archivos'
        >
          <FileUploadOutlinedIcon style={{ fontSize: '26px' }} className='mr-1 mb-1'/>
          <span className="hidden md:inline">Cargar Archivos</span>
        </button>
        <button
          className="flex items-center bg-[#143559] hover:bg-[#1a4473] text-white px-2 transition duration-300 h-full"
          aria-label='Menu de opciones'
          title='Menu de opciones'
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.54 22H10c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1v.19c-.5-.12-1-.19-1.5-.19c-.17 0-.34 0-.5.03c0-.62-.1-1.24-.3-1.83l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4h-1.5l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.11c.26.75.65 1.42 1.19 2z"/>
            <path fill="currentColor" d="M12 14c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2z"/>
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 19v-4" />
              <path d="M15 17l2-2l2 2" />
            </g>
          </svg>
          <span className="hidden md:inline">Mi Intelitax</span>
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
      <ModalCargaArchivos isOpen={showModalCargaArchivos} onClose={() => setShowModalCargaArchivos(false)} />
      <ModalSaveChangesPrompt isOpen={showModalSaveChangesPrompt} onClose={() => setShowModalSaveChangesPrompt(false)} route="/"/>
      <ModalCloseSession isOpen={showModalCloseSession} onClose={() => setShowModalCloseSession(false)} />
    </header>
  )
}

export default Header
