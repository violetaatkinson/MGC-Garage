import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ScreenContainer from "./pages/home/ScreenContainer"
import ContactContainer from "./pages/contact/ContactContainer"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> {/* contenedor que agrupa todas las rutas de la aplicación */}
        <Route path="/" element={<ScreenContainer />} />
          {/* ↑ La home: 5 cards de imgs / Cuando el usuario está acá ve las puertas a las otras páginas */}

        <Route path="/contact" element={<ContactContainer />} />
          {/* Define una ruta individual / si la URL es /contact / mostrá este componente  a renderizar */}
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App

