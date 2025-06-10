import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import ReporteHallazgos from './pages/ReporteHallazgos'
import PieChartDetails from './pages/PieChartDetails'
import VersionesCalculo from './pages/VersionesCalculo'
import Login from './pages/Login/Login'

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
        <Route path="/reporte-hallazgos" element={<ReporteHallazgos />} />
        <Route path="/grafica-detalles" element={<PieChartDetails />} />
        <Route path="/versiones-calculo" element={<VersionesCalculo />} />
      </Routes>
    </>
  )
}

export default App
