import RFCDropdownButton from './RFCDropdownButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const optionsRFC = [
    { value: 'ABYZ990099', label: 'RFC: ABYZ990099' },
    { value: 'XYZ112233', label: 'RFC: XYZ112233' },
    { value: 'MNO556677', label: 'RFC: MNO556677' },
    { value: 'PQR778899', label: 'RFC: PQR778899' },
    { value: 'PQR778899', label: 'RFC: PQR778899' },
    { value: 'PQR778899', label: 'RFC: PQR778899' },
  ]

  const [rfc, setRFC] = useState('ABYZ990099')

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('auth')
    navigate('/login')
  }

  return (
    <header className="bg-[#143559] text-white p-0 fixed w-full top-0 z-50 min-h-12
                h-[70px] flex justify-between items-stretch">
      <img
        src="./logoTransparente.png"
        alt="Logo"
        className="ml-8 my-2 object-contain"
      />
      <div className="flex justify-end items-stretch mr-4">
        <button
          className="bg-[#143559] hover:bg-[#1a4473] hover:underline text-white px-4 transition duration-300 h-full"
        >
            Cargar Archivos
        </button>
        <button
          className="bg-[#143559] hover:bg-[#1a4473] text-white px-4  transition duration-300 h-full"
        >
            Mi intelitax
        </button>
        <button
          className="bg-[#143559] hover:bg-[#1a4473] text-white px-4  transition duration-300 h-full"
          onClick={handleLogout}
        >
            Cerrar Sesión
        </button>
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
