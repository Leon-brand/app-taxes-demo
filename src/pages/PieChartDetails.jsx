import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'

import CheckTable from '../components/CheckTable'
import ModalNotepad from '../components/ModalNotepad'

const PieChartDetails = () => {
  const [tableData, setTableData] = useState([])
  const [nota, setNota] = useState('')
  const navigate = useNavigate()
  const [myBloc, setMyBloc] = useState('')
  const [modalNotepadOpen, setModalNotepadOpen] = useState(false)

  useEffect(() => {
    const mockData = new Array(10).fill(0).map(() => ({
      checked: false,
      movimiento: 'ABDC',
      RFC: 'ABYZ990099',
      emisor: 'CDVX009966',
      subtotal: '10,000.00',
      IVA: '1,600.00'
    }))
    setTableData(mockData)

    const mockNotes =`
      - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      - sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      - sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    setMyBloc(mockNotes)
  }, [])

  return (
    <div className="p-4 md:p-8 mt-16 bg-[#F2F5F6] min-h-screen">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#143559] hover:bg-[#0077FF] text-white p-2 rounded-md shadow transition-all duration-300"
          >
            <KeyboardBackspaceOutlinedIcon />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-[#143559]">
            IVA Trasladado - Grupo B
          </h1>
        </div>
        <p className="text-sm text-gray-500 font-medium">
          Última Carga: <span>10/02/2025, 17:08</span>
        </p>
      </div>
      <p className="text-sm text-[#0077FF] font-semibold mb-4">
        No se emitió el CFDI o este se encuentra en el limbo por un error en su llenado.
      </p>
      <div className="grid md:grid-cols-[3fr_1.2fr] gap-4 my-10">
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <CheckTable data={tableData} />
        </div>

        <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
          <span className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-[#143559]">Bloc de notas</h2>
            <button
              onClick={() => setModalNotepadOpen(true)}
              className="flex items-center gap-2 px-1 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-26 h-10 justify-center hover:bg-[#143559] hover:text-white">
              <DriveFileRenameOutlineOutlinedIcon fontSize="medium"/>
                Editar
            </button>
          </span>
          <h3 className="text-sm font-medium text-[#4B5563]">Registra tu actividad para su consula posterior</h3>
          <textarea
            className="w-full h-full p-0 text-sm resize-none bg-transparent outline-none"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            readOnly
            placeholder={myBloc}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 md:gap-6 mt-6">
        <div className="flex flex-wrap gap-10">
          <button className="flex items-center gap-2 px-4 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                            text-sm transition-all duration-300 border-[#143559]
                            w-32 justify-center hover:bg-[#143559] hover:text-white">
            <FileDownloadOutlinedIcon fontSize="large"/>
            Descargar archivos
          </button>
          <button className="flex items-center gap-3 px-4 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                            text-sm transition-all duration-300 border-[#143559]
                            w-32 justify-center hover:bg-[#143559] hover:text-white">
            <FileUploadOutlinedIcon fontSize="large"/>
            Cargar archivos
          </button>
        </div>
        <div className="flex flex-wrap gap-10 mt-3 md:mt-0">
          <button className="flex items-center gap-2 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                            text-sm transition-all duration-300 border-[#143559]
                            w-32 justify-center hover:bg-[#143559] hover:text-white">
            <SaveOutlinedIcon fontSize="large"/>
            Guardar
          </button>
          <button className="flex items-center gap-2 px-1 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                            text-sm transition-all duration-300 border-[#143559]
                            w-32 justify-center hover:bg-[#143559] hover:text-white">
            <FlareOutlinedIcon fontSize="large"/>
            Actualizar
          </button>
        </div>
      </div>
      <ModalNotepad isOpen={modalNotepadOpen} onClose={setModalNotepadOpen} data={myBloc} />
    </div>
  )
}

export default PieChartDetails
