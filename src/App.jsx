import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Background from './components/Background';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <div className='wrapper'>
          <Skills />
          <Background />
        </div>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App