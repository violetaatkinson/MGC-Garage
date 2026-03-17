import React from "react";
import { Routes, Route } from "react-router-dom";

import ScreenContainer from "./pages/home/ScreenContainer"
import MotosContainer from "./pages/motos/MotosContainer";
import FixerContainer from "./pages/fix/FixerContainer";
import ServiceContainer from "./pages/service/serviceContainer";
import PartContainer from "./pages/parts/PartContainer";
import ContactContainer from "./pages/contact/ContactContainer"
import MotoDetailContainer from './pages/motos/MotoDetailContainer'

import Navbar from "./components/Navbar"
import Cart from './pages/cart/Cart'
import NotFound from "./components/NotFound";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> {/* contenedor que agrupa todas las rutas de la aplicación */}
       
        <Route path="/" element={<ScreenContainer />} />
        <Route path="/motos" element={<MotosContainer />} /> 
        <Route path="/fixer-upper" element={<FixerContainer />} />
        <Route path="/schedule-service" element={<ServiceContainer />} />
        <Route path="/parts-request" element={<PartContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route path="/moto/:id" element={<MotoDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

