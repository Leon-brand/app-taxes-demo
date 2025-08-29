import SidebarRevisionOperaciones from '../components/SidebarRevisionOperaciones'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChevronRight, Save, MessageSquareText, CornerDownLeft  } from 'lucide-react'
import RevisionOperacionesTable from '../components/RevisionOperacionesTable'
import ModalSuccessProcess from '@/components/ModalSuccessProcess'
import ModalNotepad from '@/components/ModalNotepad'
import Tooltip from '@mui/material/Tooltip'
const RevisionOperaciones = () => {//Falta detalles estetico y look & feel

  const navigate = useNavigate()
  const tabs = [
    { letter: 'A',
      label: 'Coincidente',
      color: 'text-[#4EEFD7]',
      detail: 'Operaciones contabilizadas, reflejadas en bancos y facturadas',
      border: 'border-b border-[#4EEFD7]'
    },
    { letter: 'B',
      label: 'No Facturado',
      color: 'text-[#11D0B4]',
      detail: 'Operaciones contabilizadas y reflejadas en bancos',
      border: 'border-b border-[#11D0B4]'
    },
    { letter: 'C',
      label: 'No Bancos',
      color: 'text-[#00B69B]',
      detail: 'Operaciones contabilizadas y facturadas',
      border: 'border-b border-[#00B69B]'
    },
    { letter: 'D',
      label: 'Solo Contabilizadas',
      color: 'text-[#FFC5A6]',
      detail: 'Operaciones reflejadas en bancos y facturadas',
      border: 'border-b border-[#FFC5A6]'
    },
    { letter: 'E',
      label: 'No Contabilizadas',
      color: 'text-[#FFAE83]',
      detail: 'Operaciones contabilizadas',
      border: 'border-b border-[#FFAE83]'
    },
    { letter: 'F',
      label: 'Solo Facturadas',
      color: 'text-[#FF9F9F]',
      detail: 'Operaciones facturadas',
      border: 'border-b border-[#FF9F9F]'
    },
    { letter: 'G',
      label: 'Solo Bancos',
      color: 'text-[#FF8383]',
      detail: 'Operaciones reflejadas en bancos',
      border: 'border-b border-[#FF8383]'
    },
  ]

  const mockDataTable = Array.from({ length: 20 }, (_, i) => ({
    UUID: `123456789012345678901234567890${i}`,
    'RFC Emisor': 'ABYZ990099',
    'Razón Social': 'Empresa AAA S.A. de C.V.',
    'Fecha Emisión': '15/03/2025',
    'Valor de Actos': '15,365.00',
    Tipo: 'Ingreso',
    IVA: '16%',
    Contabilidad: 'Sí',
    Bancos: 'No',
    CFDIs: '5',
    'Validación SAT': 'Válido',
    alerta: i % 3 === 0
  }))

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

  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const [ razonSocial, setRazonSocial ] = useState('')
  const [ rfc, setRFC ] = useState('')
  const [ userData, setUserData ] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [descripcionUniverso, setDescripcionUniverso] = useState({
    label: 'Todos los grupos de información',
    detail: '',
  })
  const [unlockedIndex, setUnlockedIndex] = useState(0)  // estado: hasta qué índice están desbloqueados
  const [ showModalSuccessProcess, setShowModalSuccessProcess ] = useState(false)
  const [ showModalCalculo, setShowModalCalculo ] = useState(false)
  const [ showModalNotepad, setShowModalNotepad ] = useState(false)
  const [notas, setNotas] = useState('')
  const [tipo, setTipo] = useState(() => params.get('tipo') || '')

  const handleClick = (idx) => {
    if (idx <= unlockedIndex) {
      // lógica real cuando haces click
      setSelectedIndex(idx)
      setDescripcionUniverso({
        label: tabs[idx].label + ' | ',
        detail: tabs[idx].detail,
      })

      // desbloquea el siguiente
      if (idx === unlockedIndex && unlockedIndex < tabs.length - 1) {
        setUnlockedIndex(unlockedIndex + 1)
      }
    }
  }

  const handleClickTipoButton = (nuevoTipo) => {
    if (tipo !== nuevoTipo) {
      setTipo(nuevoTipo)
      navigate(`/revision-operaciones?tab=${titulo}&tipo=${nuevoTipo}`)
    }
  }

  useEffect(() => {//Obtener datos para arranque

    const dataRFC = localStorage.getItem('rfc')
    if (dataRFC) {
      const [razon, rfcCompleto] = dataRFC.split(' / ')
      setRazonSocial(razon)
      setRFC(rfcCompleto)
    }

    setNotas(mockNotes)

    const userData = localStorage.getItem('user')
    if (userData) setUserData(userData)
  }, [mockNotes, razonSocial, rfc])

  const handleSave = () => {
    //simulando guardado
    setShowModalSuccessProcess(true)
  }

  const handleCalculo = () => {
    //simular calculo
    setShowModalCalculo(true)
  }
  const baseClasses =
      'flex-1 py-1 text-2xl transition-colors duration-300'

  const activo =
    'bg-[#143559] text-white cursor-default'
  const inactivo =
    'bg-white text-[#0077FF] hover:bg-[#0077FF] hover:text-white cursor-pointer'

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarRevisionOperaciones/>
      <div className="flex-1 flex flex-col">
        {tipo === '' ?
          <>
            {/* Tabs Universos */}
            <div className="grid w-full border-b border-gray-300 mt-16"
              style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
              {tabs.map((tab, idx) => {
                const isUnlocked = idx <= unlockedIndex
                const button = (
                  <button
                    key={tab.letter}
                    onClick={() => handleClick(idx)}
                    disabled={!isUnlocked}
                    className={`flex flex-col items-center justify-center px-6 py-1 relative                
                      ${
                  idx === selectedIndex
                    ? 'bg-blue-200 text-blue-400 border-[0.5px] border-blue-400'
                    : isUnlocked
                      ? `bg-white ${tab.color} ${tab.border} hover:text-[#0077FF] hover:bg-gray-50`
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                  >
                    {(tab.letter === 'A' && unlockedIndex === 0) && (
                      <span className="absolute top-8 -right-0 z-10">
                        <span className="inline-flex h-6 w-6 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
                      </span>
                    )}
                    <span className="text-lg font-[1000]">{tab.letter}</span>
                    <span className="text-xs font-bold leading-1">{tab.label}</span>
                    <ChevronRight
                      size={16}
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                    />
                  </button>
                )
                return isUnlocked ? (
                  button
                ) : (
                  <Tooltip
                    key={tab.letter}
                    title={
                      <span>
                        Realiza la revisión del <b>Universo {tabs[idx-1].letter}</b> para desbloquear la siguiente categoría.
                      </span>
                    }
                    placement="bottom-end"
                    slotProps={{
                      tooltip: {
                        sx: {
                          bgcolor: '#143559',
                          color: 'white',
                          fontSize: '0.875rem',
                          padding: '24px 24px',
                          borderRadius: '8px',
                          maxWidth: '380px',
                        },
                      },
                      popper:{
                        modifiers:[
                          {
                            name: 'offset',
                            options: {
                              offset: [120, -10],
                            },
                          },
                        ],
                      },
                    }}
                  >
                    <span >{button}</span>
                  </Tooltip>
                )
              })}
            </div>
          </>
          :
          <>
            {/* Botnoies de tipo en caso de que no esten todos los universos */}
            <div className="flex max-w-5xl mx-auto mt-16 pt-3 w-full">
              {/* Precarga SAT */}
              <button
                className={`${baseClasses} rounded-l-lg ${
                  tipo === 'precarga-sat' ? activo : inactivo
                }`}
                onClick={() => handleClickTipoButton('precarga-sat')}
              >
                Precarga SAT
              </button>

              {/* No Considerados */}
              <button
                className={`${baseClasses} rounded-r-lg ${
                  tipo === 'no-considerados' ? activo : inactivo
                }`}
                onClick={() => handleClickTipoButton('no-considerados')}
              >
                No Considerados
              </button>
            </div>

          </>
        }
        {/* Encabezado */}
        <section className="px-4 py-1">
          <div className="max-w-6xl mx-auto flex items-center justify-between my-3">
            {/* Izquierda */}
            <div className="text-left leading-4">
              <h1 className="text-3xl font-bold">Revisión de Operaciones</h1>
              {tipo === '' ?
                <div className="flex items-center text-left gap-2">
                  <h2 className="font-bold text-gray-500 text-[20px]">{descripcionUniverso.label}</h2>
                  <h2 className="font-semibold text-gray-500 text-[18px]">
                    {descripcionUniverso.detail}
                  </h2>
                </div>
                :
                <h2 className="font-bold text-gray-500 text-[20px]">CFDIS</h2>
              }
            </div>
            {/* Derecha */}
            <div className="text-right leading-5">
              <h2 className="font-bold text-gray-500 text-[20px]">{razonSocial}</h2>
              <h2 className="text-gray-500 text-md">{rfc}</h2>
            </div>
          </div>
        </section>
        {/* Tabla */}
        <section className="flex-1 max-w-5xl max-h-[58vh] px-2 py-0 mx-auto mb-1">
          <RevisionOperacionesTable data={mockDataTable} />
        </section>
        {/*botones inferiores*/}
        <section className="px-4 py-1 mt-1">
          <div className="max-w-6xl mx-auto flex items-center justify-between mb-2">
            {/* Izquierda */}
            <div className="flex gap-2">
              <button
                className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                   text-sm font-bold transition-all duration-300 border-[#143559]
                  w-[124px] h-[46px] justify-center hover:bg-[#143559] hover:text-white"
                onClick={handleSave}
              >
                <Save size={45} className='ml-2 mr-0' />
                <span className="leading-tight">Guardar Cambios</span>
              </button>
              <button
                onClick={() => setShowModalNotepad(true)}
                className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                   text-[14px] font-bold transition-all duration-300 border-[#143559]
                  w-[124px] h-[46px] justify-center hover:bg-[#143559] hover:text-white"
              >
                <MessageSquareText size={28} className='ml-2 mr-1' />
                <span className="leading-tight">Notas</span>
              </button>
            </div>
            {/* Derecha */}
            <div>
              {tipo === '' ? (
                // Versión universos (con tooltip)
                !(selectedIndex === tabs.length - 1 && unlockedIndex === tabs.length - 1) ? (
                  <Tooltip
                    title="Debes revisar todos los universos para poder ejecutar el cálculo."
                    placement="top"
                    slotProps={{
                      tooltip: {
                        sx: {
                          bgcolor: '#143559',
                          color: 'white',
                          fontSize: '0.875rem',
                          padding: '16px 20px',
                          borderRadius: '8px',
                          maxWidth: '300px',
                        },
                      },
                      popper: {
                        modifiers: [
                          {
                            name: 'offset',
                            options: { offset: [120, -10] },
                          },
                        ],
                      },
                    }}
                  >
                    <span>
                      <button
                        disabled
                        className="flex items-center px-2 py-1 rounded-md transition-all duration-300 justify-center w-[124px] h-[46px] relative
                          cursor-not-allowed text-gray-500 bg-gray-200 hover:bg-gray-300"
                      >
                        <CornerDownLeft size={32} className="ml-2 mr-0" />
                        <span className="leading-tight">Ejecutar Cálculo</span>
                      </button>
                    </span>
                  </Tooltip>
                ) : (
                  <button
                    onClick={handleCalculo}
                    className="flex items-center px-2 py-1 rounded-md transition-all duration-300 justify-center w-[124px] h-[46px] relative
                      cursor-pointer bg-[#143559] border-2 border-[#143559] text-white text-sm
                      hover:bg-[#1E52A2] hover:border-[#1E52A2] shadow-[0_4px_12px_rgba(20,53,89,0.3)]"
                  >
                    <CornerDownLeft size={32} className="ml-2 mr-0" />
                    {(selectedIndex === tabs.length - 1 && unlockedIndex === tabs.length - 1) && (
                      <span className="absolute -top-1 -left-1 z-10">
                        <span className="inline-flex h-6 w-6 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
                      </span>
                    )}
                    <span className="leading-tight">Ejecutar Cálculo</span>
                  </button>
                )
              ) : (
                tipo === params.get('tipo') ? (
                  <Tooltip
                    title="Debes revisar los 2 grupos de información para ejecutar el cálculo."
                    placement="top"
                    slotProps={{
                      tooltip: {
                        sx: {
                          bgcolor: '#143559',
                          color: 'white',
                          fontSize: '0.875rem',
                          padding: '16px 20px',
                          borderRadius: '8px',
                          maxWidth: '300px',
                        },
                      },
                    }}
                  >
                    <span>
                      <button
                        disabled
                        className="flex items-center px-2 py-1 rounded-md transition-all duration-300 justify-center w-[124px] h-[46px] relative
                          cursor-not-allowed text-gray-500 bg-gray-200"
                      >
                        <CornerDownLeft size={32} className="ml-2 mr-0" />
                        <span className="leading-tight">Ejecutar Cálculo</span>
                      </button>
                    </span>
                  </Tooltip>
                ) : (
                  <button
                    onClick={handleCalculo}
                    className="flex items-center px-2 py-1 rounded-md transition-all duration-300 justify-center w-[124px] h-[46px] relative
                      cursor-pointer bg-[#143559] border-2 border-[#143559] text-white text-sm
                      hover:bg-[#1E52A2] hover:border-[#1E52A2] shadow-[0_4px_12px_rgba(20,53,89,0.3)]"
                  >
                    <CornerDownLeft size={32} className="ml-2 mr-0" />
                    <span className="absolute -top-1 -left-1 z-10">
                      <span className="inline-flex h-6 w-6 animate-ping rounded-full bg-[#00B69B] opacity-75"></span>
                    </span>
                    <span className="leading-tight">Ejecutar Cálculo</span>
                  </button>
                )
              )}
            </div>

          </div>
        </section>
      </div>
      {/* Modal success */}
      <ModalSuccessProcess
        isOpen={showModalSuccessProcess}
        onClose={() => setShowModalSuccessProcess(false)}
        processTitle="Guardando Cambios"
        successTitle="Cambios Guardados"
        successMessage="Los cambios se han guardado exitosamente."
      />
      <ModalSuccessProcess
        isOpen={showModalCalculo}
        onClose={() => setShowModalCalculo(false)}
        processTitle="Ejecutando"
        successTitle="Cálculo Realizado"
        successMessage="El cálculo se ha realizado exitosamente."
      />
      <ModalNotepad
        isOpen={showModalNotepad}
        onClose={() => setShowModalNotepad(false)}
        data={notas}
        user={userData}/>
    </div>
  )
}

export default RevisionOperaciones
