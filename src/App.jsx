import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ScreenContainer from "./pages/home/ScreenContainer"
import MotosContainer from "./pages/motos/MotosContainer";
import FixerContainer from "./pages/fix/FixerContainer";
import ServiceContainer from "./pages/service/serviceContainer";
import PartContainer from "./pages/parts/PartContainer";
import ContactContainer from "./pages/contact/ContactContainer"
import MotoDetailContainer from './pages/motos/MotoDetailContainer'
import Cart from './components/Cart'
import NotFound from "./components/NotFound";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> {/* contenedor que agrupa todas las rutas de la aplicación */}
        <Route path="/" element={<ScreenContainer />} />
          {/* ↑ La home: 5 cards de imgs / Cuando el usuario está acá ve las puertas a las otras páginas */}
          
        <Route path="/motos" element={<MotosContainer />} /> 
        
        <Route path="/fixer-upper" element={<FixerContainer />} />
        <Route path="/schedule-service" element={<ServiceContainer />} />
        <Route path="/parts-request" element={<PartContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route path="/moto/:id" element={<MotoDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} />
          {/* Define una ruta individual / si la URL es /contact / mostrá este componente  a renderizar */}

        <Route path="/*" element={<NotFound />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

