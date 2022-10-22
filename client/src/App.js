import React from "react";
import {Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
        
          </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
