import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

const VersionesCalculo = () => {
  const [nota, setNota] = useState('')
  const [myBloc, setMyBloc] = useState('')
  const [editando, setEditando] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const mockNotes = `- Lorem ipsum dolor sit amet
    - consectetur adipiscing elit
    - sed do eiusmod tempor incididunt
    - ut labore et dolore magna aliqua
    - Ut enim ad minim veniam
    - quis nostrud exercitation ullamco
    - laboris nisi ut aliquip ex ea commodo consequat
    - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
    - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    - Lorem ipsum dolor sit amet
    - consectetur adipiscing elit
    - sed do eiusmod tempor incididunt
    - ut labore et dolore magna aliqua
    - Ut enim ad minim veniam
    - quis nostrud exercitation ullamco
    - laboris nisi ut aliquip ex ea commodo consequat
    - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
    - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    setMyBloc(mockNotes)
  }, [])

  return (
    <div className="p-4 mt-16 md:p-10 bg-gray-[#F2F5F6] min-h-screen">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="px-2 rounded-md shadow-md bg-[#143559] text-white hover:bg-[#0077FF] transition-all duration-300"
          >
            <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
            <span className="text-2xl"></span>
          </button>
          <h1  className="text-3xl font-bold">IVA Trasladado</h1>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-3xl font-semibold text-[#143559]">Versiones de Cálculo</span>
        <p className="text-right font-semibold text-gray-500 text-sm">
          Periodo: Febrero 2025
        </p>
      </div>
      <div className="text-[#143559] text-2xl font-medium mb-8">Momento 04/02/25 - 17:45</div>
      <div className="bg-white shadow-md p-4 mt-8 rounded-xl flex flex-col gap-2 flex-1 min-h-[340px] max-h-[500px]">
        <textarea
          className="w-full flex-1 text-sm resize-none bg-transparent outline-none  rounded p-2 min-h-[200px]"
          value={nota || myBloc}
          onChange={(e) => setNota(e.target.value)}
          readOnly={!editando}
        />
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => setEditando(true)}
          className="flex items-center gap-1 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-32 justify-center hover:bg-[#143559] hover:text-white"
        >
          <DriveFileRenameOutlineOutlinedIcon fontSize="medium"/>
          Modificar
        </button>
        <button
          onClick={() => setEditando(false)}
          className="flex items-center gap-1 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm text-[#00B69B] transition-all duration-300 border-[#00B69B]
                  w-32 justify-center hover:bg-[#00B69B] hover:text-white"
        >
          <CheckCircleOutlineOutlinedIcon fontSize="medium"/>
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default VersionesCalculo
