import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import WelcomeModal from '@/components/WelcomeModal'
import ModalDeterminar from '@/components/ModalDeterminar'

import { MessageSquareReply } from 'lucide-react'
import { Search } from 'lucide-react'
import { Target } from 'lucide-react'
import { ListTodo } from 'lucide-react'
import { Vault } from 'lucide-react'
import { Handshake } from 'lucide-react'
import { Link } from 'lucide-react'

const Home = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [showModalDeterminar, setShowModalDeterminar] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeModal(true)
    }, 1000)
  }, [])

  return (
    <>
      <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
      <div className="min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">        
        <div className="flex justify-between items-start w-full mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#143559]">Bienvenido</h1>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-700">Empresa AAA S.A. de C.V.</p>
            <p className="text-sm text-gray-500">RFC: ABYZ990099</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-sm">
          <h2 className="text-xl font-bold text-[#143559] mb-6">Selecciona tu operación</h2>
          <div className="grid grid-cols-3 gap-6">
            <button className="flex flex-col items-center justify-center px-4 py-6
                      border rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200
                      transition-all max-h-[120px]">
              <MessageSquareReply size={70} />
              <span className="font-medium">Previos</span>
            </button>
            <button
              onClick={() => setShowModalDeterminar(true)}
              className="flex flex-col items-center justify-center px-4 py-6 rounded-lg
                      text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]"
            >
              <Target size={50} />
              <span className="font-medium">Determinar</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-6 border rounded-lg
                      text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px]">
              <Search size={50} />
              <span className="font-medium">Auditar</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-2 border rounded-lg
                      text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px]">
              <ListTodo size={48} />
              <span className="font-medium text-center">Control de<br />Obligaciones</span>
            </button>
            <button
              onClick={() => navigate('/boveda-home')}
              className="flex flex-col items-center justify-center px-4 py-6 rounded-lg 
                      text-white bg-[#143559] shadow hover:bg-[#0077FF] transition-all max-h-[120px]">
              <Vault size={50} />
              <span className="font-medium text-center">Bóveda Fiscal</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-6 border rounded-lg
                      text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px]">
              <Handshake size={50} />
              <span className="font-medium">Contrapartes</span>
            </button>
            <div className="col-span-3 flex justify-center">
              <button className="flex flex-col items-center justify-center px-4 py-6 border rounded-lg
                        text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] w-1/3">
                <Link size={50} />
                <span className="font-medium">Conciliaciones</span>
              </button>
            </div>
          </div>
        </div>
        <ModalDeterminar isOpen={showModalDeterminar} onClose={() => setShowModalDeterminar(false)} />
      </div>
    </>
  )
}

export default Home
