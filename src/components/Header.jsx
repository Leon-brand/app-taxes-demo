import RFCDropdownButton from './RFCDropdownButton'
import { useState, useRef, useEffect} from 'react'

const Header = () => {
  const [rfc, setRFC] = useState('ABYZ990099')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const dropdownRef = useRef(null)

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

  /**
   * Función para cerrar sesión, remueve el indicador de autenticación en localStorage
   * y redirige a la página de login.
   */
  const handleLogout = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('hasSeenWelcomeModal')
    //sessionStorage.clear
    window.location.replace('/login')//prevenir navegación hacia atrás
  }

  return (
    <header className="bg-[#143559] text-white p-0 fixed w-full top-0 z-50 min-h-12 h-[70px] flex justify-between items-stretch">
      <img
        src="./logoTransparente.png"
        alt="Logo"
        className="ml-8 my-2 object-contain"
      />

      <div ref={dropdownRef} className="flex justify-end items-stretch mr-4 relative">
        <button
          className="bg-[#143559] hover:bg-[#1a4473] hover:underline text-white px-4 transition duration-300 h-full"
        >
          Cargar Archivos
        </button>
        <button
          className="bg-[#143559] hover:bg-[#1a4473] text-white px-4 transition duration-300 h-full"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          Mi Intelitax
        </button>
        {showUserMenu && (
          <div
            className="absolute right-0 top-full mt-2 w-56 bg-[#e6f0fa] text-[#143559] rounded-lg shadow-lg overflow-hidden z-50"
          >
            <button className="w-full text-left px-4 py-3 hover:bg-[#dbe9f5]">Mensajes</button>
            <button className="w-full text-left px-4 py-3 hover:bg-[#dbe9f5]">Mis Empresas</button>
            <button className="w-full text-left px-4 py-3 hover:bg-[#dbe9f5]">e.Firma</button>
            <button className="w-full text-left px-4 py-3 hover:bg-[#dbe9f5]">Cuentas Bancarias</button>
            <button className="w-full text-left px-4 py-3 hover:bg-[#dbe9f5]">Reglas de Clasificación</button>
            <button className="w-full text-left px-4 py-3 hover:bg-[#dbe9f5]">Ajustes</button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 font-semibold"
            >
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
    </header>

  )
}

export default Header
