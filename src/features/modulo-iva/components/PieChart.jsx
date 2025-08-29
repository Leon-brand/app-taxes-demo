import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { useState, useRef } from 'react'

Chart.register(ArcElement, Tooltip)

const PieChart = ({ size }) => {
  const chartRef = useRef()

  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const dataValues = [12, 19, 3, 5, 2, 3, 9]
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
      <div className="relative" style={{ width: size, height: size }}>
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
    </div>
  )
}

export default PieChart

PieChart.propTypes = {
  size: PropTypes.number,
}
