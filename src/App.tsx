import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './components/estaticos/Navbar/navbar'
import { Footer } from './components/estaticos/Footer/Footer';
import { About } from './paginas/about/About';
import { Home } from './paginas/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
