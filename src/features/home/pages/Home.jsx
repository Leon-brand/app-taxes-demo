import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#F2F5F6] px-4">
      <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido a Intelitax!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <button
          onClick={() => navigate('/iva-home')}
          className="bg-[#143559] text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Módulo IVA
        </button>

        <button
          onClick={() => navigate('/isr-home')}
          className="bg-[#143559] text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Módulo ISR
        </button>

        <button
          onClick={() => navigate('/boveda-home')}
          className="bg-[#143559] text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Módulo Bóveda
        </button>
      </div>
    </div>
  )
}

export default Home
