import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import ApplyNow from "./Pages/Applynow"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Hero" element={<Home/>} />
        <Route path="/Applynow" element={<ApplyNow/>} />
      </Routes>
    </Router>
  );
}
