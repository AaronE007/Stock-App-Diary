import React from "react";
import {Routes, Route  } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MyCompaniesContainer from "./containers/StocksAndCompanyContainer";


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/companies" element={<MyCompaniesContainer/>} />

        </Routes>
      
    </div>
  );
}

export default App;
