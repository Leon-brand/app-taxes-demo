import {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import ModalDeterminar from '@/components/ModalDeterminar'
import { MessageSquareReply, Search, Target, ListTodo, Handshake, Database } from 'lucide-react'

const Home = () => {
  const [showModalDeterminar, setShowModalDeterminar] = useState(false)
  const [ razonSocial, setRazonSocial ] = useState('')
  const [ rfc, setRFC ] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('rfc')
    if (data) {
      const [razon, rfcCompleto] = data.split(' / ')
      setRazonSocial(razon)
      setRFC(rfcCompleto)
    }
  }, [ razonSocial, rfc ])

  const navigate = useNavigate()

  const now = new Date()
  const formattedDate = format(now, "dd 'de' MMMM yyyy - h:mm a", { locale: es })

  return (
    <>
      <div className="min-h-screen bg-[#F2F5F6] flex flex-col items-center px-8 py-10 mt-12">
        <div className="flex justify-between items-start w-full mb-2">
          <div>
            <h1 className="text-4xl font-bold">Bienvenido</h1>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-500 text-2xl">{razonSocial}</p>
            <p className="text-gray-500 text-md">{rfc}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl px-6 py-3 w-full max-w-[680px] shadow-sm">
          <h2 className="text-xl font-bold text-[#143559] mb-2">Selecciona tu operación</h2>
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center px-4 py-4
                      border-2 border-[#848484] rounded-lg text-gray-500 bg-gray-100 hover:bg-gray-200
                      transition-all max-h-[100px] cursor-not-allowed" disabled title='Previos'>
              <MessageSquareReply size={70} />
              <span className="font-medium">Previos</span>
            </button>
            <button
              onClick={() => setShowModalDeterminar(true)}
              className="flex flex-col items-center justify-center px-4 py-4 rounded-lg text-white text-sm bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[100px]"
            >
              <Target size={50} />
              <span className="font-medium">Determinar</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-4 border-2 border-[#848484] rounded-lg
                      text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[100px] cursor-not-allowed" disabled title='Auditar'>
              <Search size={50} />
              <span className="font-medium">Auditar</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-1 border-2 border-[#848484] rounded-lg
                      text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all max-h-[100px] cursor-not-allowed" disabled title='Control de Obligaciones'>
              <ListTodo size={48} />
              <span className="font-medium text-center leading-[1.1rem] mt-0">Control de<br />Obligaciones</span>
            </button>
            <button
              onClick={() => navigate('/boveda-home')}
              className="flex flex-col items-center justify-center px-2 py-3 rounded-lg text-white bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[100px]">
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
            <button className="flex flex-col items-center justify-center px-4 py-3 border-2 border-[#848484] rounded-lg
                      text-gray-500  text-sm bg-gray-100 hover:bg-gray-200 transition-all max-h-[100px] cursor-not-allowed" disabled title="Conciliaciones">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="M16 9a7 7 0 1 0-7 7" />
                  <path d="M16 9h-1c-2.828 0-4.243 0-5.121.879C9 10.757 9 12.172 9 15v1c0 2.828 0 4.243.879 5.121C10.757 22 12.172 22 15 22h1c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9" />
                </g>
              </svg>
              <span className="font-medium">Conciliaciones</span>
            </button>
            <button className="flex flex-col items-center justify-center px-4 py-4 rounded-lg text-white text-sm bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[100px]"  title='Contrapartes'>
              <Handshake size={50} />
              <span className="font-medium">Contrapartes</span>
            </button>
            <button
              className="flex flex-col items-center justify-center px-4 py-3 rounded-lg text-white text-sm bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[100px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5.5 17q-.625 0-1.062-.437T4 15.5t.438-1.062T5.5 14h13q.625 0 1.063.438T20 15.5t-.437 1.063T18.5 17zm0-7q-.625 0-1.062-.437T4 8.5t.438-1.062T5.5 7h13q.625 0 1.063.438T20 8.5t-.437 1.063T18.5 10z" />
              </svg>
              <span className="font-medium">Congruencia</span>
            </button>
            <button
              className="flex flex-col items-center justify-center px-4 py-4 rounded-lg text-white text-sm bg-[#143559]
                shadow-[3px_6px_8px_-1px_rgba(20,53,89,0.5)] hover:bg-[#0077FF] transition-all max-h-[100px]"
            >
              <Database size={50} />
              <span className="font-medium">Datos</span>
            </button>
          </div>
        </div>
        <div className='bg-[#143559] border-2 border-[#337AB7] rounded-xl mt-3 px-3 py-1 w-full max-w-[680px] shadow-sm'>
          <div className='flex flex-col items-center sm:flex-row sm:justify-between sm:items-center'>
            <p className="text-lg text-white font-semibold">Última actualización de CFDIs</p>
            <p className="text-green-400 font-semibold">Tus E.firmas se encuentran vigentes</p>
          </div>
          <div className='flex flex-col items-center sm:flex-row sm:justify-between sm:items-center'>
            <p className="text-sm text-gray-300">{formattedDate}</p>
            <p className="text-white">
              Conexión al SAT: <span className="text-green-400 font-bold">Activada.</span>
            </p>
          </div>
        </div>
        <ModalDeterminar isOpen={showModalDeterminar} onClose={() => setShowModalDeterminar(false)} />
      </div>
    </>
  )
}

export default Home
