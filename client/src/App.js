import React from "react";
import {Routes, Route  } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import StocksAndCompaniesContainer from "./containers/StocksContainer";
import CompaniessContainer from "./containers/CompaniesContainer";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/stocks" element={<StocksAndCompaniesContainer/>} />
          <Route path="/companies" element={<CompaniessContainer/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
