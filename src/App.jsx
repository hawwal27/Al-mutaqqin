import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import ApplyNow from "./Pages/Applynow"
import HeroSection from "./Pages/Hero";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Applynow" element={<ApplyNow/>} />
        <Route path="/Hero" element={<HeroSection/>} />
      </Routes>
    </Router>
  );
}
