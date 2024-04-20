import React from 'react';
import './hero.css';
import { Bio } from '../data/constants';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (

    <div className='hero my-5' id='home'>
        <div className='hero-container p-5 bg'>
            <div className='hero-left'>
                <h1 className='display-3'>Hi, I'm<br /><span style={{color: 'var(--red)'}}>{Bio.name}</span></h1>
                <h2 className='h2'>And a <Typewriter options={{strings: Bio.roles, autoStart: true, loop: true}} /></h2>
                <p className='lead'>{Bio.description}</p>
                <div className='btn-group'>
                    <a role='button' className='btn btn-success' href={Bio.resume} target='_blank'>Resume</a>
                    <a role='button' className='btn btn-light' href='#portfolio'>Projects</a>
                </div>
            </div>
            <div className='hero-right'>
                <img src='./pfp.png' />
            </div>
        </div>
    </div>
  )
}

export default Hero