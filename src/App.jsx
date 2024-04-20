import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <div className='wrapper'>
          <Skills />
          <Education />
        </div>
      </main>
      
    </div>
  )
}

export default App