import React from "react";
import "./App.css";
import Header from "./components.js/Header";
import Home from "./components.js/Home";
import Detail from "./components.js/Detail";
import Login from "./components.js/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
