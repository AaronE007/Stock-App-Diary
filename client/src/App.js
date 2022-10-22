import React from "react";
import {Routes, Route  } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/LoginForm" element={<SignUpForm />} />
        </Routes>
      
    </div>
  );
}

export default App;
