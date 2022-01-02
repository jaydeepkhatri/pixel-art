import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar, Feed,Aboutus} from './components';
import './styles/index.css';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
      <Route path="/" element={<Feed />} /> 
      <Route index element={<Feed />} /> 
      <Route path="/aboutus" element={<Aboutus />} /> 
      </Routes>     
    </Router>
    
    </>
  );
}

export default App;
