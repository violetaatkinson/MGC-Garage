import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ScreenContainer from "./components/ScreenContainer"
import ContactContainer from "./components/ContactContainer";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ScreenContainer />} />
          {/* ↑ La home: 5 cards de imgs / Cuando el usuario está acá ve las puertas a las otras páginas */}

        <Route path="/contact" element={<ContactContainer />} />
          {/*  ↑ si la URL es /contact  ↑ mostrá este componente */}
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App

