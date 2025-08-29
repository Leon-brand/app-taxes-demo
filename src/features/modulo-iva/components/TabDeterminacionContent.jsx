import PropTypes from 'prop-types'
import PieChart from './PieChart'

const TabDeterminacionContent = ({ ivaTrasladadoData, ivaAcreditableData }) => {

  // Calcular totales
  const totalValorTrasladado = ivaTrasladadoData.reduce((sum, row) => sum + row.valor, 0)
  const totalIvaTrasladado = ivaTrasladadoData.reduce((sum, row) => sum + row.iva, 0)
  const totalValorAcreditable = ivaAcreditableData.reduce((sum, row) => sum + row.valor, 0)
  const totalIvaAcreditable = ivaAcreditableData.reduce((sum, row) => sum + row.iva, 0)

  const formatCurrency = (num) =>// Funcion para formatear moneda
    num.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

  return (
    <div className="flex w-full gap-2">
      {/*Columna Izquierda*/}
      <div className="w-1/3 flex flex-col gap-2 border-r-2 border-gray-300 mt-2">
        <h2 className="font-bold text-2xl leading-7 text-left">Distribución</h2>
        <PieChart size={100} className='p-2'/>
        <h2 className="font-bold text-2xl leading-7 text-left p-2">Movimientos considerados</h2>
        <PieChart size={100} className='p-2'/>
      </div>
      {/* Columna Central */}
      <div className="w-5/12 flex flex-col gap-2 border-r-2 border-gray-300 px-2 py-0">
        {/* Card IVA Trasladado */}
        <div className="bg-white rounded-lg shadow border border-gray-200">
          <div className="bg-[#15385B] text-white px-4 py-0 rounded-t-lg font-bold">
            IVA Trasladado
          </div>
          <div className="p-0">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold">Tasa</th>
                  <th className="px-3 py-2 text-left font-bold">Valor de Actos</th>
                  <th className="px-3 py-2 text-left font-bold">IVA</th>
                </tr>
              </thead>
              <tbody>
                {ivaTrasladadoData.map((row, index) => (
                  <tr key={index} className='border-b'>
                    <td className="px-3 py-0">{row.tasa}</td>
                    <td className="px-3 py-0">{formatCurrency(row.valor)}</td>
                    <td className="px-3 py-0">{formatCurrency(row.iva)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td className="px-3 py-1">Total:</td>
                  <td className="px-3 py-1">{formatCurrency(totalValorTrasladado)}</td>
                  <td className="px-3 py-1">{formatCurrency(totalIvaTrasladado)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* Card IVA Acreditable */}
        <div className="bg-white rounded-lg shadow border border-gray-200">
          <div className="bg-[#15385B] text-white px-4 py-0 rounded-t-lg font-bold">
            IVA Acreditable
          </div>
          <div className="p-0">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold">Tasa</th>
                  <th className="px-3 py-2 text-left font-bold">Valor de Actos</th>
                  <th className="px-3 py-2 text-left font-bold">IVA</th>
                </tr>
              </thead>
              <tbody>
                {ivaAcreditableData.map((row, index) => (
                  <tr key={index} className='border-b'>
                    <td className="px-3 py-0">{row.tasa}</td>
                    <td className="px-3 py-0">{formatCurrency(row.valor)}</td>
                    <td className="px-3 py-0">{formatCurrency(row.iva)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td className="px-3 py-1">Total:</td>
                  <td className="px-3 py-1">{formatCurrency(totalValorAcreditable)}</td>
                  <td className="px-3 py-1">{formatCurrency(totalIvaAcreditable)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="w-1/3 flex flex-col gap-2">
        {/* Card Retenciones */}
        <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center justify-center p-0">
          <div className="bg-[#15385B] text-white w-full px-4 py-2 rounded-t-lg font-bold text-center">
            Retenciones
          </div>
          <div className="flex flex-col items-center justify-center mt-8 mb-7">
            <span className="text-gray-500 text-lg">A Enterar</span>
            <span className="text-2xl font-bold text-gray-800">
                $30,109,280.57
            </span>
          </div>
        </div>

        {/* Card Impuesto */}
        <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col items-center justify-center p-0">
          <div className="bg-[#143559] text-white w-full px-4 py-2 rounded-t-lg font-bold text-center">
            Impuesto
          </div>
          <div className="flex flex-col items-center justify-center mt-8 mb-7">
            <span className="text-[#00B69B] font-semibold text-lg">
                A Favor
            </span>
            <span className="text-2xl font-bold text-[#00B69B]">
                $979,459.90
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabDeterminacionContent

TabDeterminacionContent.propTypes = {
  ivaTrasladadoData: PropTypes.array.isRequired,
  ivaAcreditableData: PropTypes.array.isRequired,
}
