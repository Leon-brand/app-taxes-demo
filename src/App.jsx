import { Routes, Route, useLocation } from 'react-router-dom'

import IVAHome from './features/modulo-iva/pages/IVAHome'
import BovedaHome from './features/modulo-boveda/pages/BovedaHome'
import ReporteHallazgos from './features/modulo-iva/pages/ReporteHallazgos'
import PieChartDetails from './features/modulo-iva/pages/PieChartDetails'
import VersionesCalculo from './features/modulo-iva/pages/VersionesCalculo'
import Login from './features/login/pages/Login'
import Home from './features/home/pages/Home'

import ScrollToTop from './hooks/ScrollToTop'

import Header from './components/Header'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      { location.pathname !== '/login' && <Header /> }
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="iva-home" element={<IVAHome/>}/>
        <Route path="/boveda-home" element={<BovedaHome />} />
        <Route path="/reporte-hallazgos" element={<ReporteHallazgos />} />
        <Route path="/grafica-detalles" element={<PieChartDetails />} />|
        <Route path="/versiones-calculo" element={<VersionesCalculo />} />
      </Routes>
    </>
  )
}

export default App
