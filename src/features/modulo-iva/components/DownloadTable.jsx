import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react'

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

export default function DownloadTable({ isOpen, onClose }) {

  const opciones = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const [selected, setSelected] = useState(Array(7).fill(false))
  const [selectAll, setSelectAll] = useState(false)
  const toggleAll = () => {
    const newVal = !selectAll
    setSelected(Array(7).fill(newVal))
    setSelectAll(newVal)
  }
  const toggleOne = (index) => {
    const updated = [...selected]
    updated[index] = !updated[index]
    setSelected(updated)
    setSelectAll(updated.every(v => v))
  }

  const downloadReport = () => {
    // Lógica para descargar el reporte
    setTimeout(() => {
      alert('Reporte descargado!')
    }, 2000)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white p-0 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                >
                  <section >
                    <div className="overflow-x-auto  border border-gray-300">
                      <table className="min-w-full mb-4 p-2text-sm text-center text-[#143559]">
                        <thead className="bg-[#F0F5FA]">
                          <tr>
                            <th className="flex flex-col px-4 py-3">
                              <input type="checkbox" checked={selectAll} onChange={toggleAll} />
                                        Selecionar todo
                            </th>
                            <th className="px-4 py-3 w-max-[100px] text center">Selecciona qué información quieres descargar</th>
                          </tr>
                        </thead>
                        <tbody>
                          {opciones.map((label, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#E6F0FA]'}>
                              <td className="px-4 py-2">
                                <input type="checkbox" checked={selected[i]} onChange={() => toggleOne(i)} />
                              </td>
                              <td className="px-4 py-2 font-bold">{label}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <span className="flex justify-center items-center mt-2 mb-4">
                        <button
                          onClick={() => downloadReport()}
                          className="flex items-center gap-3 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                                        text-sm transition-all border-[#143559]
                                        w-48 justify-center hover:bg-[#143559] hover:text-white">
                          <FileDownloadOutlinedIcon fontSize="large"/>
                                    Descargar Reporte
                        </button>
                      </span>
                    </div>
                  </section>
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

DownloadTable.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
