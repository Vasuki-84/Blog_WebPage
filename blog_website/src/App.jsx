import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Travel from "./Components/Travel";
import { Routes, Route  } from "react-router-dom";

function App() {
  return (
   <div>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
   </div>

  );
}

export default App;
