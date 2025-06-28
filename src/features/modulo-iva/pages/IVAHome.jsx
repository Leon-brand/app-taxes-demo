import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import CalculateIcon from '@mui/icons-material/Calculate'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined'

import SidebarIVA from '../components/SidebarIVA'
import TabsComponent from '@/features/modulo-iva/components/TabsComponent'
import IvaTable from '@/features/modulo-iva/components/IvaTable'
import PieChart from '@/features/modulo-iva/components/PieChart'
import CustomDropDown from '@/components/CustomeDropDown'
import VersionesCalculoTable from '@/features/modulo-iva/components/VersionesCalculoTable'
import HistoricalTable from '@/features/modulo-iva/components/HistoricalTable'

import '@/index.css'
const IVAHome = () => {
  const navigate = useNavigate()
  const [tabIndex, setTabIndex] = useState(0)
  const [activedBtn, setActivedBtn] = useState(null)
  const [titulo, setTitulo] = useState('Trasladado')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const tabLabels = ['Trasladado', 'Acreditable', 'Retenido', 'Determinado']

  const buttons = [
    {
      id: 'cfdi',
      label: 'CFDIs',
      icon: <RequestPageOutlinedIcon fontSize="medium" />,
    },
    {
      id: 'bancos',
      label: 'Bancos',
      icon: <CreditCardOutlinedIcon fontSize="medium" />,
    },
    {
      id: 'contabilidad',
      label: 'Contabilidad',
      icon: <CalculateIcon fontSize="medium" />,
    },
  ]
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

  useEffect(() => {
    {
      // fetchData(selectedMonth, selectedYear) simulado segun la fecha elegida
    }
  }, [selectedMonth, selectedYear])

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
        <div className="flex items-center justify-between gap-2 mb-4">
          <h1 className="text-3xl font-bold mb-2 p-2">IVA {titulo}</h1>
          <div className="flex flex-1 justify-end">
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-gray-600">Café Sirena</h2>
              <label className="text-sm text-gray-600">RFC: ABYZ990099</label>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-6">
          <CustomDropDown
            data={months}
            value={selectedMonth}
            onChange={setSelectedMonth}
            placeholder="Seleccione un mes"
            className="h-[34px] w-[165px] text-center justify-center"
          />
          <CustomDropDown
            data={years}
            value={selectedYear}
            onChange={setSelectedYear}
            placeholder="Seleccione un año"
          />
        </div>
        <TabsComponent
          activeTab={tabIndex}
          onTabChange={(index) => {
            setTabIndex(index)
            setTitulo(tabLabels[index])
          }}
        />
        <section className="w-full max-w-7xl mx-auto flex bg-white rounded-xl shadow-lg p-4 gap-8">
          {/* Columna Izquierda */}
          <div className="w-full lg:w-3/5 flex flex-col gap-2">
            {/* Hallazgos con PieChart */}
            <div className="flex flex-col items-center">
              <div className="flex justify-between mb-2 text-[#143559] w-full">
                <h2 className="font-bold text-2xl">Hallazgos</h2>
                <ReportProblemIcon fontSize="large" />
              </div>
              <div className="flex items-center justify-center rounded-full my-2">
                <PieChart />
              </div>
            </div>

            {/* Recuadro Fuentes */}
            <div className="flex justify-between bg-[#CFE5FF] rounded-lg p-2 shadow h-[76px] mt-1.5">
              <h2 className="font-bold text-2xl text-[#143559] mt-3">Fuentes</h2>
              <div className="flex justify-center gap-4 flex-wrap mr-8">
                {buttons.map(({ id, label, icon }) => {
                  const isActive = activedBtn === id
                  const isInvertible = id === 'cfdi' || id === 'bancos'

                  return (
                    <button
                      key={id}
                      onClick={() => setActivedBtn(id)}
                      className={`
                          flex flex-col items-center gap-0 px-1.5 py-0.5 rounded-md border-2 
                          shadow-[0_2px_6px_rgba(20,53,89,0.2)] text-xs transition-all duration-300
                          w-[75px] h-[60px] justify-center
                          ${id === 'contabilidad' ? 'border-red-500 text-red-600 hover:bg-red-500 hover:text-white' : ''}
                          ${
                    isInvertible
                      ? isActive
                        ? 'bg-[#143559] text-white border-[#143559]'
                        : 'bg-white text-[#143559] border-[#143559] hover:bg-[#143559] hover:text-white'
                      : 'bg-white'
                    }
                        `}
                    >
                      <span className="text-md">{icon}</span>
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="w-full lg:w-2/5 flex flex-col gap-0.5">
            <div className="flex justify-between mb-2 text-[#143559] w-full">
              <h2 className="font-bold text-2xl">Precálculo</h2>
              <NotificationsNoneOutlinedIcon fontSize="large" />
            </div>
            {/* Tabla */}
            <IvaTable />
            {/* Recuadro Total */}
            <div className="bg-[#CFE5FF] flex justify-between rounded-lg p-4 shadow text-xl
                              font-bold text-[#143559] h-[76px]">
              <h2 className="font-bold text-2xl mt-2">Total</h2>
              <h2 className="font-bold text-2xl mt-2">$9999.99</h2>
            </div>
          </div>

        </section>
        <div className="flex justify-between items-center w-full mt-6 max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/reporte-hallazgos')}
            className="flex items-center px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-36 hover:bg-[#143559] hover:text-white">
            <ReportProblemIcon fontSize="large"/>
            Reporte de Hallazgos
          </button>
          <div className='flex gap-6 sm:gap-2 md:gap-24 lg:gap-40 xl:gap-8'>
            <button className="flex items-center gap-3 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                    text-sm transition-all duration-300 border-[#143559]
                    w-32 justify-center hover:bg-[#143559] hover:text-white">
              <FileDownloadOutlinedIcon fontSize="large"/>
              Descargar Reporte
            </button>
            <button className="flex items-center gap-3 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                    text-sm transition-all duration-300 border-[#143559]
                    w-32 justify-center hover:bg-[#143559] hover:text-white">
              <KeyboardReturnOutlinedIcon fontSize="large"/>
              Ejecutar Cálculo
            </button>
          </div>
        </div>
        <section className="mt-10">
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
      </main>
      <HistoricalTable isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default IVAHome
