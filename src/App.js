import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import LostAndFoundPage from "./components/LostAndFoundPage";
import NavyBluePage from "./components/NavyBluePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/lost-and-found" element={<LostAndFoundPage />} />
        <Route path="/navy-blue" element={<NavyBluePage />} />
      </Routes>
    </Router>
  );
}

export default App;
