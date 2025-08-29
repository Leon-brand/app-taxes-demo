import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const VersionesCalculoTable = ({ data = [] }) => {
  const navigate = useNavigate()

  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold mb-2 p-2">Versiones de Cálculo</h1>
      <div className="overflow-x-auto rounded-xl border border-gray-300">
        <table className="min-w-full text-sm text-center">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Versión</th>
              <th className="px-4 py-3">Momento</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-[#E6F0FA] cursor-pointer' : 'bg-white cursor-pointer'}
                onClick={() => navigate('/versiones-calculo')}>
                <td className="px-4 py-2">{item.tipo}</td>
                <td className="px-4 py-2">{item.version}</td>
                <td className="px-4 py-2">{item.momento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

VersionesCalculoTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tipo: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      momento: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default VersionesCalculoTable
