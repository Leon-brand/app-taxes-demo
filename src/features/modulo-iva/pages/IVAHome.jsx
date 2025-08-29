import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
//import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
//import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined'
import { Landmark, Calculator,CirclePlus, Info  } from 'lucide-react'

import PieChart from '@/features/modulo-iva/components/PieChart'
import SidebarIVA from '../components/SidebarIVA'
import ProgressBar from '@/components/ProgressBar'
import TabsComponent from '@/features/modulo-iva/components/TabsComponent'
import IvaTable from '@/features/modulo-iva/components/IvaTable'
import RecuadroUniversosHallazgos from '@/features/modulo-iva/components/RecuadroUniversosHallazgos'
import CustomDropDown from '@/components/CustomeDropDown'
import VersionesCalculoTable from '@/features/modulo-iva/components/VersionesCalculoTable'
import HistoricalTable from '@/features/modulo-iva/components/HistoricalTable'
import ModalInfo from '@/features/modulo-iva/components/ModalInfo'
import ModalUniversos from '@/features/modulo-iva/components/ModalUniversos'
import TabRetenidoContent from '../components/TabRetenidoContent'
import TabDeterminacionContent from '../components/TabDeterminacionContent'

import '@/index.css'
const IVAHome = () => {
  const navigate = useNavigate()
  const [ tabIndex, setTabIndex ] = useState(0)
  const [ titulo, setTitulo ] = useState('Trasladado')
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ modalInfoOpen, setModalInfoOpen ] = useState(false)
  const [ modalUniversosOpen, setModalUniversosOpen ] = useState(false)
  const [selectedMonth, setSelectedMonth ] = useState('')
  const [selectedYear, setSelectedYear ] = useState('')
  const [ razonSocial, setRazonSocial ] = useState('')
  const [ rfc, setRFC ] = useState('')
  const [ universos, setUniversos ] = useState(false)

  const tabLabels = ['Trasladado', 'Acreditable', 'Retenido', 'Determinacion']

  const misDatosMockVersionCalculo = [
    { tipo: 'IVA-Trasladado', version: '5', momento: '04/02/25-17:45' },
    { tipo: 'IVA-Acreditable', version: '9', momento: '05/01/25-12:55' },
    { tipo: 'IVA-Retenido', version: '1', momento: '12/01/25-15:45' },
    { tipo: 'IVA-Determinado', version: '6', momento: '04/02/25-17:45' },
  ]

  const months = [
    { value: '00', label: 'Todos' },
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' },
  ]

  const years = [
    { value: '0000', label: 'Todos' },
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
  ]

  const retenidoContentData = [
    {
      regimen: '601 General de Ley Personas Morales',
      operaciones: '1350',
      tasa: '$16',
      monto: '$22,605,829.10'
    },
    {
      regimen: '605 Sueldos y Salarios e ingresos Asimilados a Salarios',
      operaciones:'29',
      tasa: '11',
      monto: '220.68'
    },
    {
      regimen: '601 General de Ley Personas Morales',
      operaciones: '1350',
      tasa: '$16',
      monto: '$22,605,829.10'
    },
    {
      regimen: '612 Sueldos y Salarios e ingresos Asimilados a Salarios',
      operaciones:'29',
      tasa: '11',
      monto: '220.68'
    },
    {
      regimen: '621 General de Ley Personas Morales',
      operaciones: '1350',
      tasa: '$16',
      monto: '$22,605,829.10'
    },
    {
      regimen: '626 Sueldos y Salarios e ingresos Asimilados a Salarios',
      operaciones:'29',
      tasa: '11',
      monto: '220.68'
    },

  ]

  const ivaTrasladadoData = [
    { tasa: '16%', valor: 13744481.63, iva: 2199117.06 },
    { tasa: '8%', valor: 0, iva: 0 },
    { tasa: '0%', valor: 0, iva: 0 },
    { tasa: 'Exento', valor: 0, iva: 0 },
  ]

  const ivaAcreditableData = [
    { tasa: '16%', valor: 1037825.96, iva: 166052.16 },
    { tasa: '8%', valor: 0, iva: 0 },
    { tasa: '0%', valor: 91000, iva: 0 },
    { tasa: 'Exento', valor: 2436000, iva: 0 },
  ]

  const totalOperaciones = 9428
  const totalIVARetenido = 30109280.57

  const Icon = titulo === 'Determinacion' ? SaveOutlinedIcon : FileDownloadOutlinedIcon

  useEffect(() => {
    const info = localStorage.getItem('Universos')
    if (info) {
      setUniversos(info.trim().toLowerCase() === 'true')
    }
  }, [])

  useEffect(() => {//Obtener datos del localstorage
    const data = localStorage.getItem('rfc')
    if (data) {
      const [razon, rfcCompleto] = data.split(' / ')
      setRazonSocial(razon)
      setRFC(rfcCompleto)
    }

  }, [ razonSocial, rfc ])

  const downloadReport = () => {
    setTimeout(() => {
      alert('Reporte descargado!')
    }, 3000)
  }

  const saveVersion = () => {
    setTimeout(() => {
      alert('Version guardada!')
    }, 3000)
  }

  return (
    <div className="flex mt-16 w-full">
      <SidebarIVA
        activeTab={tabIndex}
        onSelectTab={(index) => {
          setTabIndex(index)
          setTitulo(tabLabels[index])
        }}
      />
      <main className="flex-1 p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">IVA {titulo}</h1>
          <div className="text-right">
            <h2 className="font-bold text-gray-500 text-2xl">{razonSocial}</h2>
            <h2 className="text-gray-500 text-md">{rfc}</h2>
          </div>
        </div>
        <div className="flex gap-8 mb-4">
          <CustomDropDown
            data={years}
            value={selectedYear}
            onChange={setSelectedYear}
            placeholder='Año'
            className="h-[24px] w-[140px] text-center justify-center"
          />
          <CustomDropDown
            data={months}
            value={selectedMonth}
            onChange={setSelectedMonth}
            placeholder="Mes"
            className="h-[24px] w-[140px] text-center justify-center"
          />

        </div>
        <TabsComponent
          activeTab={tabIndex}
          onTabChange={(index) => {
            setTabIndex(index)
            setTitulo(tabLabels[index])
          }}
        />
        <section className="w-full max-w-7xl mx-auto flex bg-white rounded-b-xl shadow-lg py-2  px-4 gap-4">
          { (titulo === 'Trasladado' || titulo === 'Acreditable') &&
          <>
            {/* Columna Izquierda*/}
            <div className="w-full lg:w-3/5 flex flex-col gap-2 border-r-2 border-gray-300 pr-4">
              <div className="flex flex-row w-full gap-4 mb-2">
                {/* Columna izquierda: Movimientos considerados */}
                <div className="w-1/3 flex flex-col gap-2 border-r-2">
                  <h2 className="font-bold text-2xl leading-7 text-left">Movimientos Considerados</h2>

                  {universos ?
                    <div className="flex flex-col w-full gap-2  mt-2 py-2 pr-3">
                      <ProgressBar porcentaje={70} color={'#4EEFD7'}/>
                      <ProgressBar porcentaje={66} color={'#11D0B4'}/>
                      <ProgressBar porcentaje={90} color={'#00B69B'}/>
                      <ProgressBar porcentaje={5} color={'#FFC5A6'}/>
                      <ProgressBar porcentaje={12} color={'#FFAE83'}/>
                      <ProgressBar porcentaje={17} color={'#FF9F9F'}/>
                      <ProgressBar porcentaje={44} color={'#FF8383'}/>
                    </div>
                    :
                    <div className="flex flex-col w-full gap-2  mt-2 py-2 pr-3">
                      <PieChart size={160}/>
                    </div>
                  }

                </div>
                {/* Columna derecha: Hallazgos */}
                <div className="w-2/3 flex flex-col">
                  <h2 className="font-bold text-2xl mb-4 text-left">Hallazgos</h2>
                  <div className="flex justify-center mt-3">
                    {universos ?
                      <RecuadroUniversosHallazgos selectedTab={titulo}/> :
                      <div className="flex flex-col gap-0 w-full max-w-xs mx-auto">
                        <button
                          onClick={() =>
                            navigate(`/revision-operaciones?tab=${titulo}&tipo=precarga-sat`)
                          }
                          className="min-h-20 w-full rounded-t-xl shadow-sm bg-[#F2F5F6]
                              border-t-2 border-l-2 border-r-2 border-[#F2F5F6]
                              border-b-2 border-b-[#0077FF]
                              hover:shadow-md hover:border-[#0077FF]
                              transition-all flex flex-col items-center justify-center p-1"
                        >
                          <span className="text-[#143559] font-bold text-2xl">Precarga SAT</span>
                          <span className="text-[#0077FF] font-extrabold text-md">56,896 Registros</span>
                          <span className="text-gray-500 text-sm">CFDIs que cumplen con la precarga SAT.</span>
                        </button>

                        <button
                          onClick={() =>
                            navigate(`/revision-operaciones?tab=${titulo}&tipo=no-considerados`)
                          }
                          className="min-h-20 w-full rounded-b-xl shadow-sm bg-[#F2F5F6] border-2 border-[#F2F5F6]
                                    hover:shadow-md hover:border-2 hover:border-[#0077FF]
                                    transition-all flex flex-col items-center justify-center p-1"
                        >
                          <span className="text-[#143559] font-bold text-2xl">No Considerados</span>
                          <span className="text-[#00B69B] font-extrabold text-md">3,982 Registros</span>
                          <span className="text-gray-500 text-sm">CFDIs no considerados en la precarga SAT.</span>
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>
              {/* Parte inferior: fuentes */}
              <div className="bg-[#CFE5FF] rounded-md py-2 px-4 shadow-lg">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-2xl text-[#143559]">Fuentes</p>
                    <button
                      onClick={() => setModalInfoOpen(true)}
                      className="flex items-center px-1 py-1 rounded-md bg-white text-[#143559]
                              border-[#143559] border-2 w-8 h-8 justify-center ml-2
                              hover:bg-[#143559] hover:text-white transition-all duration-300">
                      <Info size={20} />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-[#00B69B]">
                    <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                    text-xs font-bold bg-white transition-all duration-300 border-[#00B69B] w-[65px] h-[52px]
                    justify-center hover:bg-[#00B69B] hover:text-white cursor-none">
                      <RequestPageOutlinedIcon fontSize="medium" />
                      CFDIs
                    </button>
                    <button className="flex flex-col items-center px-1 py-0 rounded-md border-2
                    text-xs font-bold bg-white transition-all duration-300 border-[#00B69B] w-[65px] h-[52px]
                    justify-center hover:bg-[#00B69B] hover:text-white cursor-none">
                      <Calculator size={22} />
                      <label className="text-[9px]">Contabilidad</label>
                    </button>
                    <button className="flex flex-col items-center px-2 py-1 rounded-md border-2
                    text-xs font-bold bg-white transition-all duration-300 border-[#00B69B] w-[65px] h-[52px]
                    justify-center hover:bg-[#00B69B] hover:text-white cursor-none">
                      <Landmark size={22}/>
                      Bancos
                    </button>
                    { universos &&
                    <button
                      onClick={() => setModalUniversosOpen(true)}
                      className="flex flex-col items-center px-2 py-1 rounded-md border-2
                              text-xs font-bold bg-white transition-all duration-300 border-[#00B69B]
                              w-[65px] h-[52px] justify-center hover:bg-[#00B69B] hover:text-white">
                      <CirclePlus size={22}/>
                      Universos
                    </button>
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* Columna Derecha */}
            <div className="w-full lg:w-2/5 flex flex-col gap-0">
              <h2 className="font-bold text-2xl">Precálculo</h2>
              {/* Tabla */}
              <IvaTable />
              {/* Recuadro Total */}
              <div className="bg-[#CFE5FF] h-[68px] flex justify-between rounded-lg p-4 shadow-lg text-xl
                              font-bold text-[#143559]">
                <h2 className="font-bold text-md mt-2">Total</h2>
                <h2 className="font-bold text-md mt-2">$13344.288</h2>
                <h2 className="font-bold text-md mt-2">$9999.99</h2>
              </div>
            </div>
          </>
          }
          {titulo === 'Retenido' &&
            <>
              <TabRetenidoContent
                retenidoContentData={retenidoContentData}
                totalOperaciones={totalOperaciones}
                totalIVARetenido={totalIVARetenido}/>
            </>
          }
          {titulo === 'Determinacion' &&
            <>
              <TabDeterminacionContent ivaTrasladadoData={ivaTrasladadoData} ivaAcreditableData={ivaAcreditableData}/>
            </>
          }
        </section>
        <div className="flex justify-between items-center w-full mt-4 mb-10 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(`/reporte-hallazgos?mes=${selectedMonth}&anio=${selectedYear}`)}
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-36 hover:bg-[#143559] hover:text-white">
            <ReportProblemIcon fontSize="large"/>
            Reporte de Hallazgos
          </button>
          <div className='flex gap-6 sm:gap-2 md:gap-24 lg:gap-40 xl:gap-8'>
            <button
              onClick={() => titulo === 'Determinacion' && universos ? saveVersion() : downloadReport()}
              className="flex items-center gap-3 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                    text-sm transition-all duration-200 border-[#143559]
                    w-32 justify-center hover:bg-[#143559] hover:text-white
                    active:scale-95 active:shadow-inner">
              <Icon fontSize="large" />
              {titulo ===  'Determinacion' && universos ? <span>Guardar Version</span> : <span>Descargar Reporte</span>}
            </button>
          </div>
        </div>
        <hr className="border-t-2  border-gray-300 mb-8" />
        {/*Recuadro azul Con LInk*/}
        {(titulo === 'Trasladado' || titulo === 'Acreditable') && (
          <div className="flex flex-col bg-[#CFE5FF] rounded-md py-3 px-4 mb-8">
            {universos ?
              <>
                <p className="font-bold text-[20px] text-center">
                  <span className="font-semibold text-[#00B69B]">200 CFDIs </span>
                  <span className="font-semibold text-gray-400">
                    agregados recientemente desde la ultima actualización:
                    <span className="text-thin underline"> 29 de mayo 2025</span>
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/revision-operaciones?tab='+ titulo)}
                  className="w-fit mx-auto text-[#0077FF] text-[20px] underline hover:font-bold transition-all duration-300"
                >
                  Da Click para consultar los universos de información y actualizar el cálculo.
                </button>
              </>
              :
              <>
                <p className="font-bold text-[20px] text-center">
                  <span className="font-semibold text-[#00B69B]">200 CFDIs </span>
                  <span className="font-semibold text-gray-400">
                    agregados desde el último inicio de sesión.
                  </span>
                </p>
                <p className="w-fit mx-auto text-[#0077FF] text-[20px] text-center">
                  Revisar los grupos
                  <span
                    onClick={() =>
                      navigate(`/revision-operaciones?tab=${titulo}&tipo=precarga-sat`)
                    }
                    className="underline font-bold mx-2 cursor-pointer hover:font-extrabold transition-all duration-300"
                  >
                    Precarga SAT
                  </span>
                  y
                  <span
                    onClick={() =>
                      navigate(`/revision-operaciones?tab=${titulo}&tipo=no-considerados`)
                    }
                    className="underline font-bold mx-2 cursor-pointer hover:font-extrabold transition-all duration-300"
                  >
                    No Considerados
                  </span>
                  para actualizar el cálculo.
                </p>
              </>
            }
          </div>
        )}
        {universos &&
          <> {/*Tabla de versiones de cálculo*/}
            <section className="mt-14">
              <VersionesCalculoTable data={misDatosMockVersionCalculo}/>
            </section>
            <span className="flex justify-end items-center mt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-3 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                        text-sm transition-all duration-300 border-[#143559]
                        w-32 justify-center hover:bg-[#143559] hover:text-white">
                <WatchLaterOutlinedIcon fontSize="large"/>
                  Histórico
              </button>
            </span>
          </>
        }
        <ModalInfo
          isOpen={modalInfoOpen}
          onClose={() => setModalInfoOpen(false)}
          movimientos={82642}
          cfdi={{
            Pago : 82642,
            Ingresos : 754156,
            Egresos : 36699
          }}
          bancos={{
            CTA_1 : 82642,
            CTA_2 : 754156,
            CTA_3 : 36699,
          }}
        />
      </main>
      <ModalUniversos isOpen={modalUniversosOpen} onClose={() => setModalUniversosOpen(false)} />
      <HistoricalTable isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default IVAHome
