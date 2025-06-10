import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'

import PieChart from '../components/PieChart'
import CheckTable from '../components/CheckTable'
import DownloadTable from '../components/DownloadTable'
import ModalNotepad from '../components/ModalNotepad'

const ReporteHallazgos = () => {

  const [tableData, setTableData] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalNotepadOpen, setModalNotepadOpen] = useState(false)
  const [nota, setNota] = useState('')
  const [myBloc, setMyBloc] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const mockData = [
      {
        checked: false,
        movimiento: 'ABC123',
        RFC: 'XYZ91011234',
        emisor: 'Empresa S.A.',
        subtotal: '10,000.00',
        IVA: '1,600.00',
      },
      {
        checked: true,
        movimiento: 'DEF456',
        RFC: 'JLK0912837',
        emisor: 'Compañía XYZ',
        subtotal: '5,500.00',
        IVA: '880.00',
      },
      {
        checked: false,
        movimiento: 'GHI789',
        RFC: 'ABC12345678',
        emisor: 'Sociedad de Comercio',
        subtotal: '8,000.00',
        IVA: '1,200.00',
      },
      {
        checked: true,
        movimiento: 'JKL012',
        RFC: 'XYZ91011234',
        emisor: 'Empresa S.A.',
        subtotal: '6,000.00',
        IVA: '900.00',
      },
      {
        checked: false,
        movimiento: 'ABC123',
        RFC: 'XYZ91011234',
        emisor: 'Empresa S.A.',
        subtotal: '10,000.00',
        IVA: '1,600.00',
      },
      {
        checked: true,
        movimiento: 'DEF456',
        RFC: 'JLK0912837',
        emisor: 'Compañía XYZ',
        subtotal: '5,500.00',
        IVA: '880.00',
      },
      {
        checked: false,
        movimiento: 'GHI789',
        RFC: 'ABC12345678',
        emisor: 'Sociedad de Comercio',
        subtotal: '8,000.00',
        IVA: '1,200.00',
      },
      {
        checked: true,
        movimiento: 'JKL012',
        RFC: 'XYZ91011234',
        emisor: 'Empresa S.A.',
        subtotal: '6,000.00',
        IVA: '900.00',
      },
      {
        checked: false,
        movimiento: 'ABC123',
        RFC: 'XYZ91011234',
        emisor: 'Empresa S.A.',
        subtotal: '10,000.00',
        IVA: '1,600.00',
      },
      {
        checked: true,
        movimiento: 'DEF456',
        RFC: 'JLK0912837',
        emisor: 'Compañía XYZ',
        subtotal: '5,500.00',
        IVA: '880.00',
      },
      {
        checked: false,
        movimiento: 'GHI789',
        RFC: 'ABC12345678',
        emisor: 'Sociedad de Comercio',
        subtotal: '8,000.00',
        IVA: '1,200.00',
      },
      {
        checked: true,
        movimiento: 'JKL012',
        RFC: 'XYZ91011234',
        emisor: 'Empresa S.A.',
        subtotal: '6,000.00',
        IVA: '900.00',
      },
    ]

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
  },[])

  return (
    <div className="p-4 mt-16 md:p-10 bg-gray-[#F2F5F6] min-h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-2 rounded-md shadow-md bg-[#143559]
            text-white hover:bg-[#0077FF] transition-all duration-300"
          >
            <KeyboardBackspaceOutlinedIcon className="mb-2" fontSize="medium" />
            <span className="text-2xl"></span>
          </button>
          <h1 className="text-3xl font-bold">Reporte de Hallazgos</h1>
        </div>
        <p className="text-right font-semibold text-gray-500">
        Periodo: <span className="text-gray-500">Diciembre 2024</span>
        </p>
      </div>
      <div className="grid md:grid-cols-[1.2fr_1.2fr] gap-6 mb-6">
        <div className="bg-white shadow-md p-4 rounded-xl flex flex-col gap-2 flex-1 min-h-[260px] max-h-[340px]">
          <div className="flex justify-between items-center text-[#143559]">
            <h2 className="text-2xl font-semibold">Hallazgos</h2>
            <ReportProblemIcon fontSize="large" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <PieChart style={{ width: '85%', height: '85%' }} />
          </div>
        </div>
        {/*Bloc dfe notas */}
        <div className="bg-white shadow-md p-4 rounded-xl flex flex-col gap-2 flex-1 min-h-[260px] max-h-[340px]">
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
      <div className="bg-white shadow-md p-4 rounded-xl">
        <div className="text-center">
          <CheckTable data={tableData} />
        </div>
      </div>
      <span className="flex justify-end items-center mt-6">
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-3 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-32 justify-center hover:bg-[#143559] hover:text-white">
          <FileDownloadOutlinedIcon fontSize="large"/>
            Descargar Reporte
        </button>
      </span>
      <DownloadTable isOpen={modalOpen} onClose={setModalOpen} />
      <ModalNotepad isOpen={modalNotepadOpen} onClose={setModalNotepadOpen} data={myBloc} />
    </div>
  )
}

export default ReporteHallazgos
