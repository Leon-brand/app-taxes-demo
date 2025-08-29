import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import ModalSuccessProcess from '@/components/ModalSuccessProcess'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { Eye, Compass,  TriangleAlert } from 'lucide-react'

const ReporteHallazgos = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)

   // Datos de ejemplo para cada tabla
  const dataTab1 = [
    { registros: '10,000,000', alerta: 'CFDI no cuenta con información global', solucion: 'Identificar si es una sustitución (04)' },
    { registros: '8,500,000', alerta: 'CFDI global ampara ingresos futuros', solucion: 'Validar información global en el CFDI' },
    { registros: '7,200,000', alerta: 'Existen conceptos con clave genérica', solucion: 'Identificar uso de clave 01010101' },
    { registros: '10,000,000', alerta: 'CFDI no cuenta con información global', solucion: 'Identificar si es una sustitución (04)' },
    { registros: '8,500,000', alerta: 'CFDI global ampara ingresos futuros', solucion: 'Validar información global en el CFDI' },
    { registros: '7,200,000', alerta: 'Existen conceptos con clave genérica', solucion: 'Identificar uso de clave 01010101' },
    { registros: '10,000,000', alerta: 'CFDI no cuenta con información global', solucion: 'Identificar si es una sustitución (04)' },
    { registros: '8,500,000', alerta: 'CFDI global ampara ingresos futuros', solucion: 'Validar información global en el CFDI' },
    { registros: '7,200,000', alerta: 'Existen conceptos con clave genérica', solucion: 'Identificar uso de clave 01010101' },
    { registros: '10,000,000', alerta: 'CFDI no cuenta con información global', solucion: 'Identificar si es una sustitución (04)' },
    { registros: '8,500,000', alerta: 'CFDI global ampara ingresos futuros', solucion: 'Validar información global en el CFDI' },
    { registros: '7,200,000', alerta: 'Existen conceptos con clave genérica', solucion: 'Identificar uso de clave 01010101' },
    { registros: '10,000,000', alerta: 'CFDI no cuenta con información global', solucion: 'Identificar si es una sustitución (04)' },
    { registros: '8,500,000', alerta: 'CFDI global ampara ingresos futuros', solucion: 'Validar información global en el CFDI' },
    { registros: '7,200,000', alerta: 'Existen conceptos con clave genérica', solucion: 'Identificar uso de clave 01010101' },
    { registros: '10,000,000', alerta: 'CFDI no cuenta con información global', solucion: 'Identificar si es una sustitución (04)' },
    { registros: '8,500,000', alerta: 'CFDI global ampara ingresos futuros', solucion: 'Validar información global en el CFDI' },
    { registros: '7,200,000', alerta: 'Existen conceptos con clave genérica', solucion: 'Identificar uso de clave 01010101' },
  ]

  const dataTab2 = [
    { registros: '5,000,000', alerta: 'El CFDI fue emitido extemporáneamente', solucion: 'Revisar si cumple con 5 días hábiles' },
    { registros: '3,400,000', alerta: 'REP no corresponde al CFDI', solucion: 'Verificar asociación con CFDI origen' },
    { registros: '2,100,000', alerta: 'Egreso no deducible / IVA no acreditable', solucion: 'Identificar uso de CFDI S01' },
    { registros: '5,000,000', alerta: 'El CFDI fue emitido extemporáneamente', solucion: 'Revisar si cumple con 5 días hábiles' },
    { registros: '3,400,000', alerta: 'REP no corresponde al CFDI', solucion: 'Verificar asociación con CFDI origen' },
    { registros: '2,100,000', alerta: 'Egreso no deducible / IVA no acreditable', solucion: 'Identificar uso de CFDI S01' },
    { registros: '5,000,000', alerta: 'El CFDI fue emitido extemporáneamente', solucion: 'Revisar si cumple con 5 días hábiles' },
    { registros: '3,400,000', alerta: 'REP no corresponde al CFDI', solucion: 'Verificar asociación con CFDI origen' },
    { registros: '2,100,000', alerta: 'Egreso no deducible / IVA no acreditable', solucion: 'Identificar uso de CFDI S01' },
    { registros: '5,000,000', alerta: 'El CFDI fue emitido extemporáneamente', solucion: 'Revisar si cumple con 5 días hábiles' },
    { registros: '3,400,000', alerta: 'REP no corresponde al CFDI', solucion: 'Verificar asociación con CFDI origen' },
    { registros: '2,100,000', alerta: 'Egreso no deducible / IVA no acreditable', solucion: 'Identificar uso de CFDI S01' },
    { registros: '5,000,000', alerta: 'El CFDI fue emitido extemporáneamente', solucion: 'Revisar si cumple con 5 días hábiles' },
    { registros: '3,400,000', alerta: 'REP no corresponde al CFDI', solucion: 'Verificar asociación con CFDI origen' },
    { registros: '2,100,000', alerta: 'Egreso no deducible / IVA no acreditable', solucion: 'Identificar uso de CFDI S01' },
    { registros: '5,000,000', alerta: 'El CFDI fue emitido extemporáneamente', solucion: 'Revisar si cumple con 5 días hábiles' },
  ]

  const dataTab3 = [
    { registros: '1,000,000', alerta: 'Registro asignado en universo no considerado', solucion: 'Validar forma de pago usada' },
    { registros: '850,000', alerta: 'REP ampara pago futuro', solucion: 'Verificar fecha de pago contra CFDI' },
    { registros: '500,000', alerta: 'Error de asociación REP', solucion: 'Revisar CFDI relacionado o cancelado' },
    { registros: '1,000,000', alerta: 'Registro asignado en universo no considerado', solucion: 'Validar forma de pago usada' },
    { registros: '850,000', alerta: 'REP ampara pago futuro', solucion: 'Verificar fecha de pago contra CFDI' },
  ]

  const tabs = [
    { label: 'Hallazgos Tipo 1', data: dataTab1, icon:  <Eye/> },
    { label: 'Hallazgos Tipo 2', data: dataTab2, icon: <Compass/> },
    { label: 'Errores', data: dataTab3, icon:  <TriangleAlert/> },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [ showModalSuccessProcess, setShowModalSuccessProcess] = useState(false)

  const now = new Date()
  const formattedDate = format(now, 'MMMM yyyy', { locale: es })
  const date= formattedDate[0].toUpperCase() + formattedDate.slice(1)
  const month = params.get('mes')
  const year = params.get('anio')

  return (
    <div className="p-4 mt-16 md:p-10 bg-gray-[#F2F5F6] min-h-full">
      <div className="flex justify-between items-start mb-3">
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
          Periodo: <span className="text-gray-500"> {(month !== '' && year !== '') ?  <>{month} {year} </> : <>{date}</>}</span>
        </p>
      </div>
      <div className="px-1 py-3">
        {/* Encabezado con botones */}
        <div
          className="flex justify-between bg-[#337AB7] items-center gap-2 mb-0 py-3 px-12
          rounded-t-lg">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 flex rounded-lg font-bold transition hover:bg-gray-300 hover:text-[#337AB7]
                ${activeTab === index ? 'bg-white text-[#337AB7]' : 'bg-[#337AB7] text-white'}`}
            >
              {tab.label}
              <span className='ml-2'>{tab.icon}</span>
            </button>
          ))}
        </div>
        {/* Tabla */}
        <div className="border border-[#143559] rounded-b-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#143559] text-white sticky top-0">
              <tr>
                <th className="px-4 py-2 text-left">Registros</th>
                <th className="px-4 py-2 text-left">Alerta</th>
                <th className="px-4 py-2 text-left">Solución</th>
              </tr>
            </thead>
          </table>
          <div className="max-h-[45vh] overflow-y-auto">
            <table className="w-full">
              <tbody className="text-sm">
                {tabs[activeTab].data.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#CFE5FF]' : 'bg-white'}>
                    <td className="px-4 py-1">{row.registros}</td>
                    <td className="px-4 py-1">{row.alerta}</td>
                    <td className="px-4 py-1">{row.solucion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <span className="flex justify-end items-center mt-1">
        <button
          onClick={() => setShowModalSuccessProcess(true)}
          className="flex items-center gap-0 px-2 py-1 rounded-md border-2 shadow-[0_4px_12px_rgba(20,53,89,0.3)]
                  text-sm transition-all duration-300 border-[#143559]
                  w-32 justify-center hover:bg-[#143559] hover:text-white">
          <FileDownloadOutlinedIcon fontSize="large"/>
            Descargar Reporte
        </button>
      </span>
      <ModalSuccessProcess
        isOpen={showModalSuccessProcess}
        onClose={() => setShowModalSuccessProcess(false)}
        processTitle="Realizando"
        successTitle="Reporte Descargado"
        successMessage="La descarga del reporte se ha realizado exitosamente."
      />
    </div>
  )
}

export default ReporteHallazgos
