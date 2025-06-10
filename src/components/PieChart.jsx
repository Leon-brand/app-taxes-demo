import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

Chart.register(ArcElement, Tooltip)

const PieChart = () => {
  const navigate = useNavigate()
  const chartRef = useRef()

  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const dataValues = [12, 19, 3, 5, 2, 3, 9]
  const backgroundColors = [
    '#00c4cc',
    '#62d9b7',
    '#ffd47e',
    '#ff8e72',
    '#ef476f',
    '#ffa69e',
    '#a4c8e0',
  ]

  const [selectedIndex, setSelectedIndex] = useState(null)
  const total = dataValues.reduce((sum, value) => sum + value, 0)

  const data = {
    labels,
    datasets: [
      {
        label: 'IVA',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        cutout: '40%',
        hoverOffset: 20,
      },
    ],
  }

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const value = context.raw
            const percentage = ((value / total) * 100).toFixed(2)
            return `${context.label}: ${value} (${percentage}%)`
          },
        },
      },
    },
  }
  /**
 * Handles the mouse move event over the chart.
 * Determines the nearest chart element to the mouse pointer and updates the selected index.
 * If no elements are found, resets the selected index to null.*/
  const handleMouseMove = (event) => {
    const chart = chartRef.current
    if (!chart) return

    const elements = chart.getElementsAtEventForMode(
      event.nativeEvent,
      'nearest',
      { intersect: true },
      false
    )

    if (elements.length > 0) {
      const index = elements[0].index
      setSelectedIndex(index)
    } else {
      setSelectedIndex(null)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center mr-4">
      <div className="relative w-64 h-64">
        <div onMouseMove={handleMouseMove}>
          <Doughnut data={data} options={options} ref={chartRef} />
        </div>
        {/* Texto centrado sobre la dona */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {selectedIndex !== null && (
            <span
              className="text-3xl font-bold"
              style={{ color: backgroundColors[selectedIndex] }}
            >
              {Math.round((dataValues[selectedIndex] / total) * 100)}%
            </span>
          )}
        </div>
      </div>
      {/* Caja lateral  con letras*/}
      <div
        className="relative flex min-h-24 w-40 border rounded-xl p-0 shadow-md transition-all"
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
          onClick={() => navigate('/grafica-detalles')}
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

export default PieChart
