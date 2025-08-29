import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import IVAHome from './features/modulo-iva/pages/IVAHome'
import ReporteHallazgos from './features/modulo-iva/pages/ReporteHallazgos'
import PieChartDetails from './features/modulo-iva/pages/PieChartDetails'
import VersionesCalculo from './features/modulo-iva/pages/VersionesCalculo'
import RevisionOperaciones from './features/modulo-iva/pages/RevisionOperaciones'
import BovedaHome from './features/modulo-boveda/pages/BovedaHome'
import CFDIsPage from './features/modulo-boveda/pages/CFDIsPage'
import ContablesPage from './features/modulo-boveda/pages/ContablesPage'
import BancosPage from './features/modulo-boveda/pages/BancosPage'
import DeclaracionesPage from './features/modulo-boveda/pages/DeclaracionesPage'
import Login from './features/login/pages/Login'
import Home from './features/home/pages/Home'

import ScrollToTop from './hooks/ScrollToTop'

import Header from './components/Header'

function App() {
  const location = useLocation()
  //Simulacion de sesion iniciada
  const isAuthenticated = localStorage.getItem('auth') === 'true'

  return (
    <>
      <ScrollToTop />
      { location.pathname !== '/login' && <Header /> }
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Protegemos Home para que redirija a login si no hay sesión */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/*Section Iva*/}
        <Route path="iva-home" element={<IVAHome/>}/>
        <Route path="/reporte-hallazgos" element={<ReporteHallazgos />} />
        <Route path="/grafica-detalles" element={<PieChartDetails />} />|
        <Route path="/versiones-calculo" element={<VersionesCalculo />} />
        <Route path="/revision-operaciones" element={<RevisionOperaciones />} />
        {/*Section Boveda*/}
        <Route path="/boveda-home" element={<BovedaHome />} />
        <Route path="/cfdis" element={<CFDIsPage />} />
        <Route path="/contables" element={<ContablesPage />} />
        <Route path="/bancos" element={<BancosPage />} />
        <Route path="/declaraciones" element={<DeclaracionesPage />} />
      </Routes>
    </>
  )
}

export default App
