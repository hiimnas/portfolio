import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <div className='wrapper'>
          <Skills />
          <Experience />
        </div>
      </main>
      
    </div>
  )
}

export default App