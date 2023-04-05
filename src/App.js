// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./Pages/Music";
import Face from "./Pages/Face";
import Results from "./Pages/Results";
import Landing from "./Pages/Landing";
import Lost from "./Pages/404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/music" element={<Music />}></Route>
          <Route path="/face" element={<Face />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="*" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
