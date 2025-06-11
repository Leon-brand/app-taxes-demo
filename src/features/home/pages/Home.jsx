import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido a Intelitax!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <button
          onClick={() => navigate('/iva')}
          className="bg-blue-600 text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          IVA Section
        </button>

        <button
          onClick={() => navigate('/isr')}
          className="bg-green-600 text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-green-700 transition-all duration-300"
        >
          ISR Section
        </button>

        <button
          onClick={() => navigate('/otro')}
          className="bg-yellow-500 text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-yellow-600 transition-all duration-300"
        >
          Otra sección
        </button>
      </div>
    </div>
  )
}

export default Home
