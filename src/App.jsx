import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import ApplyNow from "./Pages/Applynow"
import HeroSection from "./Pages/Hero";
import Learnmore from "./Pages/Learnmore";
// import Admission from "./Pages/Admission";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Applynow" element={<ApplyNow/>} />
        <Route path="/Hero" element={<HeroSection/>} />
        <Route path="/Learnmore" element={<Learnmore/>} />
        {/* <Route path="/Admission" element={<Admission/>} /> */}


      </Routes>
    </Router>
  );
}
