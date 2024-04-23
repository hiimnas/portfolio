import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='d-flex justify-content-between align-items-center pb-3 pt-2 border-top container'>
        <a href='#' className='foot-logo'>
            <img src='./icon.png' />
            <h2>Hi, I'm nas.</h2>
        </a>
        <p className='lead'>© 2024 nas, original design coded with ReactJS, HTML, CSS and more!</p>
    </footer>
  )
}

export default Footer