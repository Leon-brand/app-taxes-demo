import PropTypes from 'prop-types'

const ProgressBar = ({ porcentaje, color }) => {

  return (
    <div className="w-full h-4 bg-[#CE0000] rounded-full relative group">
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${porcentaje}%`, backgroundColor: color ? color : '#CE0000' }}
      />
      <span className="absolute left-3/4 -translate-x-1/10 -top-2
                       text-xs text-white px-2 py-1 rounded opacity-0
                       group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ backgroundColor: color ? color : '#000000' }}
      >
        {porcentaje}%
      </span>
    </div>
  )
}

export default ProgressBar

ProgressBar.propTypes = {
  porcentaje: PropTypes.number.isRequired,
  color: PropTypes.string
}
