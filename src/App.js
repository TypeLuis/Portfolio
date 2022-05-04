import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { useState, useRef } from 'react'
import './style/App.scss'
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const NavRef = useRef()
  const skillRef = useRef()
  const homeRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()

  function handleBackClick(e) {
    console.log(e.target.innerText)
    switch (e.target.innerText) {

      case ' HOME ':
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      // case ' ABOUT ':
      //   aboutRef.current.scrollIntoView({ behavior: 'smooth' })
      //   break

      case ' SKILLS ':
        skillRef.current.scrollIntoView({ behavior: 'smooth' })
        break

      case ' PORTFOLIO ':
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
        break
        
      case ' CONTACT ':
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break

    }
  }
  return (
    <div style={{ overflowX: 'hidden' }} className="App">
      <Navbar NavRef={NavRef} handleBackClick={handleBackClick} />
      <Home homeRef={homeRef} NavRef={NavRef} portfolioRef={portfolioRef} />

      <div id='spacer'>
        <Portfolio portfolioRef={portfolioRef} />
        <Skills skillRef={skillRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
