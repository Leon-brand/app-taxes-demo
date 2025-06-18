import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import WelcomeModal from '@/components/WelcomeModal'
const Home = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 1000)
  }, [])

  return (
    <>
      <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />
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
            onClick={() => navigate('/boveda-home')}
            className="bg-[#143559] text-white text-xl font-semibold py-6 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
          >
            Módulo Bóveda
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
