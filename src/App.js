import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { useState, useRef } from 'react'
import './style/App.scss'
import { Home } from './components/Home';

function App() {

  const skillRef = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()
  const portfolioRef = useRef()

  function handleBackClick(e) {
    switch (e.target.innerText) {

      case 'Home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case 'About':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case 'Skills':
        skillRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case 'Portfolio':
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
        break

    }
  }
  return (
    <div style={{ overflowX: 'hidden' }} className="App">
      <Navbar handleBackClick={handleBackClick} />
      <div id='spacer'>

        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Portfolio portfolioRef={portfolioRef} />
        <Skills skillRef={skillRef} />
      </div>
    </div>
  );
}

export default App;
