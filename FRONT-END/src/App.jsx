import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//style
import "./styles/style.css";

//pages
import Home from "./pages/Home";

import Stages from "./pages/Stages";

import StageReservation from "./pages/StageReservation";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHome from "./components/SectionHome";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="stages" element={<Stages />} />
                <Route path="infractions" element={<Stages />} />
                <Route path="permisapoints" element={<Stages />} />
                <Route path="permisapoints/alcoolauvolant" element={<SectionHome />} />
                <Route path="contact" element={<Stages />} />
                <Route path="stagereservation" element={<StageReservation />} />
            </Routes>
            <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
