import { Chart, ArcElement, Tooltip } from 'chart.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

Chart.register(ArcElement, Tooltip)

const RecuadroUniversosHallazgos = ({ selectedTab }) => {
  const navigate = useNavigate()

  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const backgroundColors = [
    '#4EEFD7',
    '#11D0B4',
    '#00B69B',
    '#FFC5A6',
    '#FFAE83',
    '#FF9F9F',
    '#FF8383',
  ]
  const [selectedIndex, setSelectedIndex] = useState(null)
   /**
 * Handles the mouse move event over the chart.
 * Determines the nearest chart element to the mouse pointer and updates the selected index.
 * If no elements are found, resets the selected index to null.*/

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center mr-4">
      {/* Caja lateral  con letras*/}
      <div
        className="relative flex min-h-24 w-60 border rounded-xl p-0 shadow-md transition-all"
        style={{
          background:
            selectedIndex !== null
              ? `linear-gradient(to bottom, ${backgroundColors[selectedIndex]}aa, ${backgroundColors[selectedIndex]}33)`
              : '#f3f4f6',
        }}
      >
        {selectedIndex === null && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
            <span className="text-[#143559] text-4xl font-extrabold leading-none">IVA</span>
            <span className="text-[#143559] text-xs mt-1">Trasladado</span>
          </div>
        )}

        <div className="flex flex-col justify-center z-20">
          {labels.map((label, index) => {
            const isSelected = selectedIndex === index
            const bgColor = backgroundColors[index]
            return (
              <button
                key={label}
                onClick={() => setSelectedIndex(index)}
                className={`w-6 h-6 m-0 p-0 font-semibold text-xs transition-all hover:ring-4 hover:ring-white
                  ${isSelected ? 'bg-white text-[#0077FF]' : 'text-white'}
                  ${index === 0 ? 'rounded-t-lg' : ''}
                  ${index === labels.length - 1 ? 'rounded-b-lg' : ''}
                `}
                style={!isSelected ? { backgroundColor: bgColor } : undefined}
              >
                {label}
              </button>
            )
          })}
        </div>
        {/* Botón gigante transparente */}
        <button
          onClick={() => navigate('/revision-operaciones?tab=' + selectedTab)}
          className="absolute inset-0 w-full h-full rounded-xl text-5xl font-bold flex items-center justify-center text-white transition-all z-10"
          style={{
            background: 'transparent',
            cursor: selectedIndex !== null ? 'pointer' : 'default',
          }}
          disabled={selectedIndex === null}
        >
          {selectedIndex !== null ? labels[selectedIndex] : <span className="opacity-0">A</span>}
        </button>
      </div>
    </div>
  )
}

export default RecuadroUniversosHallazgos

RecuadroUniversosHallazgos.propTypes = {
  selectedTab: PropTypes.string.isRequired,
}
