import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { useState } from 'react'
import './style/App.scss'

function App() {
  return (
    <div style={{ overflowX: 'hidden' }} className="App">
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
