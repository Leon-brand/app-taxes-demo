import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import WelcomeModal from '@/components/WelcomeModal'
import ModalDeterminar from '@/components/ModalDeterminar'

import { MessageSquareReply, Search, Target, ListTodo, Handshake, Link } from 'lucide-react'

const Home = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [showModalDeterminar, setShowModalDeterminar] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const alreadyShown = localStorage.getItem('hasSeenWelcomeModal')

    if (!alreadyShown) {
      setTimeout(() => {
        setShowWelcomeModal(true)
        localStorage.setItem('hasSeenWelcomeModal', 'true')
      }, 1000)
    }
  }, [])

  return (
    <>
      <WelcomeModal isOpen={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} />
      <div className="min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-14">
        <div className="flex justify-between items-start w-full mb-2">
          <div>
            <h1 className="text-3xl font-bold text-[#143559]">Bienvenido</h1>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-700">Empresa AAA S.A. de C.V.</p>
            <p className="text-sm text-gray-500">RFC: ABYZ990099</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-sm">
          <h2 className="text-xl font-bold text-[#143559] mb-4">Selecciona tu operación</h2>
          <div className="grid grid-cols-3 gap-5">
            <button className="flex flex-col items-center justify-center px-4 py-6
                      border-2 border-[#848484] rounded-lg text-gray-500 bg-gray-100 hover:bg-gray-200
                      transition-all max-h-[120px] cursor-not-allowed" disabled title='Previos'>
              <MessageSquareReply size={70} />
              <span className="font-medium">Previos</span>
            </button>
            <button
              onClick={() => setShowModalDeterminar(true)}
              className="flex flex-col items-center justify-center px-4 py-6 rounded-lg text-white bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[120px]"
            >
              <Target size={50} />
              <span className="font-medium">Determinar</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-6 border-2 border-[#848484] rounded-lg
                      text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Auditar'>
              <Search size={50} />
              <span className="font-medium">Auditar</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-2 border-2 border-[#848484] rounded-lg
                      text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Control de Obligaciones'>
              <ListTodo size={48} />
              <span className="font-medium text-center">Control de<br />Obligaciones</span>
            </button>
            <button
              onClick={() => navigate('/boveda-home')}
              className="flex flex-col items-center justify-center px-2 py-3 rounded-lg text-white bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[120px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="54" viewBox="0 0 24 24"><path
                fill="currentColor" d="M12.75 9a.75.75 0 0 0-1.5 0v.354q-.32.09-.604.252a.75.75 0 0 0-1.04
                1.04a2.7 2.7 0 0 0-.252.604H9a.75.75 0 0 0 0 1.5h.354q.09.32.252.604a.75.75 0 0 0
                1.04 1.04q.283.161.604.252V15a.75.75 0 0 0 1.5 0v-.354q.32-.09.604-.252a.75.75 0 0 0
                1.04-1.04q.161-.283.252-.604H15a.75.75 0 0 0 0-1.5h-.354a2.7 2.7 0 0 0-.252-.604a.75.75 0 0
                0-1.04-1.04a2.7 2.7 0 0 0-.604-.252zM12 13.25A1.246 1.246 0 0 1 10.75 12A1.25 1.25 0 1 1 12 13.25"/>
              <path fill="currentColor" d="M14.633 2.25H9.367c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75
                4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0
                1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403
                1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18
                1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092
                0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057M5.525
                4.104c.304-.155.688-.251 1.309-.302c.63-.051 1.434-.052 2.566-.052h5.2c1.133 0 1.937 0 2.566.052c.62.05
                1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.051.63.052 1.434.052 2.566v5.2c0
                1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052H9.4c-1.132
                0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.155-.305-.251-.69-.302-1.31c-.051-.63-.052-1.434-.052-2.566V9.4c0-1.132
                0-1.937.052-2.566c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42"/>
              <path fill="currentColor" d="M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0M12 7.75a4.25 4.25
                0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5M3 6.5A1.5 1.5 0 0 1 4.5 8v1.5a1.5 1.5 0 0 1-3 0V8A1.5 1.5 0 0 1 3 6.5m1.5
                8a1.5 1.5 0 0 0-3 0V16a1.5 1.5 0 0 0 3 0z"/>
              </svg>

              <span className="font-medium text-center">Bóveda Fiscal</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-6 border-2 border-[#848484] rounded-lg
                      text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] cursor-not-allowed" disabled title='Contrapartes'>
              <Handshake size={50} />
              <span className="font-medium">Contrapartes</span>
            </button>
            <div className="col-span-3 flex justify-center">
              <button className="flex flex-col items-center justify-center px-4 py-6 border-2 border-[#848484] rounded-lg
                        text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[120px] w-1/3 cursor-not-allowed" disabled title="Conciliaciones">
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
