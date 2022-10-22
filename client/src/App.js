import React from "react";
import {Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar/>
          <Routes>
            <Route exact path='/me' element={<Home/>} />
            <Route exact path='/signup' element={<LoginForm/>} />
            <Route exact path='/login' element={<SignUpForm/>} />
          </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
