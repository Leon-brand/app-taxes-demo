import { useEffect } from 'react'

const useLockBodyScroll = (isLocked) => {
  useEffect(() => {//Bloquea scroll del fondo
    document.body.style.overflow = isLocked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = '' // Limpieza por si el componente se desmonta
    }
  }, [isLocked])
}

export default useLockBodyScroll
