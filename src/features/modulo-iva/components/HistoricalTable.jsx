import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
/**
 * Muestra una tabla con los datos de histórico, con las columnas:
 * - Tipo (IVA-Trasladado o IVA-Retenido)
 * - Momento (fecha y hora de la transacción)
 * - Usuario (quien realizó la transacción)
 */
export default function HistoricalTable({ isOpen, onClose }) {
  const misDatosMock = [
    { tipo: 'IVA-Trasladado', momento: '04/02/25-17:45', usuario: 'ABYZ0003' },
    { tipo: 'IVA-Trasladado', momento: '04/02/25-17:45', usuario: 'ABYZ0003' },
    { tipo: 'IVA-Trasladado', momento: '04/02/25-17:45', usuario: 'ABYZ0003' },
    { tipo: 'IVA-Trasladado', momento: '04/02/25-17:45', usuario: 'ABYZ0003' },
    { tipo: 'IVA-Trasladado', momento: '04/02/25-17:45', usuario: 'ABYZ0003' },
    { tipo: 'IVA-Trasladado', momento: '04/02/25-17:45', usuario: 'ABYZ0003' },
  ]

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
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-md bg-white p-0 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-gray-900"
                >
                  <section >
                    <h1 className="text-3xl font-bold my-4 p-2">Histórico</h1>
                    <div className="overflow-x-auto  border border-gray-300">
                      <table className="min-w-full text-sm text-center text-[#143559]">
                        <thead className="bg-[#F0F5FA]">
                          <tr>
                            <th className="px-4 py-3">Tipo</th>
                            <th className="px-4 py-3">Momento</th>
                            <th className="px-4 py-3">Usuario</th>
                          </tr>
                        </thead>
                        <tbody>
                          {misDatosMock.map((item, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#E6F0FA]'}>
                              <td className="px-4 py-2">{item.tipo}</td>
                              <td className="px-4 py-2">{item.momento}</td>
                              <td className="px-4 py-2">{item.usuario}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

HistoricalTable.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
