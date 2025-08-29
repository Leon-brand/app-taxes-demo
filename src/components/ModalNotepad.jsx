import PropTypes from 'prop-types'
import { useState } from 'react'
import useLockBodyScroll from '@/hooks/useLockModalScroll'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

/**
 * Componente que renderiza un modal con un textarea para editar una nota.
 */
const ModalNotepad = ({ isOpen, onClose, data = [], user }) => {

  useLockBodyScroll(isOpen)

  const [nota, setNota] = useState(data)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-[#F2F5F6] border border-[#143559] w-[75vw] h-[75vh] p-4 rounded-lg shadow-lg relative flex flex-col">
        <div className="w-full flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Usuario: {user}</h2>
          <h2 className="text-2xl font-bold">Momento: 25/03/25</h2>
        </div>
        {/* Textarea */}
        <div className="flex-1">
          <textarea
            className="w-full h-full border border-[#143559] bg-white outline-none resize-none text-sm text-gray-800 p-2 rounded-lg"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder= {data}
          />
        </div>
        <div className="w-full mt-4 flex justify-end gap-2">
          <button
            className="flex items-center gap-1 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                    text-md transition-all  duration-300 border-[#143559]
                    w-26 h-10 justify-center hover:bg-[#143559] hover:text-white"
            onClick={() => onClose()}
          >
            <SaveOutlinedIcon fontSize="medium"/>
            Guardar
          </button>
          <button
            className="flex items-center gap-1 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                    text-md transition-all duration-300 border-red-500 text-red-500
                    w-26 h-10 justify-center hover:bg-red-500 hover:text-white"
            onClick={() => onClose()}
          >
            <CancelOutlinedIcon fontSize="medium"/>
             Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

ModalNotepad.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.string
}

export default ModalNotepad
