import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar bg-dark sticky-top navbar-expand-lg' data-bs-theme='dark'>
        <div className='container-fluid'>
            <a className='navbar-brand' href='./'><img className='nav-logo' src='./logo.png' alt='nav logo' /></a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'><i className='bi bi-list'></i></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarText'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <a className='nav-link' href='#home'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#skills'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#background'>Background</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#portfolio'>Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#contact'>Contact</a>
                    </li>
                </ul>
                
                <ul className='social'>
                    <li><a href='#contact'><i className='bi bi-line'></i></a></li>
                    <li><a href='https://www.instagram.com/hiimnas_tea/' target='_blank'><i className='bi bi-instagram'></i></a></li>
                    <li><a href='https://github.com/hiimnas' target='_blank'><i className='bi bi-github'></i></a></li>
                    <li><a href='https://www.fiverr.com/hiiimnas' target='_blank'><i className='bi bi-shop'></i></a></li>
                    <li><a href='https://www.youtube.com/channel/UCXeYoMBug5Suflf2BtCjuhQ' target='_blank'><i className='bi bi-youtube'></i></a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar