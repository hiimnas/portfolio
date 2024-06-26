import React from 'react';
import './portfolio.css';
import { projects } from '../data/constants';

function Portfolio() {
  return (
    <div className='ptfl container' id='portfolio'>
        <h2 className='display-4'>Portfolio</h2>
        <p className='lead fs-5'>No need to imagine my work. See it first hand, and get an idea of my abilities for yourself.</p>
        <div className='project-container'>
          {projects.map((prj) => (
            <a className='project-card' href={prj.webapp} target='_blank'>
              <img src={prj.img} />
              <div className='card-tags'>
                {prj.tags.map((tag) => (
                  <div className='tag' key={tag}>{tag}</div>
                ))}
              </div>
              <div className='card-info'>
                <h3 className='h5'>{prj.title}</h3>
                <h4 className='h6'>{prj.date}</h4>
                <p className='fs-7'>{prj.desc}</p>
              </div>
              <div className='btn-group'>
                <a href={prj.webapp} role='button' className='btn btn-light'><i className='bi bi-globe'></i> Website</a>
                <a href={prj.github} role='button' className='btn btn-success'>Source <i className='bi bi-github'></i></a>
              </div>
              
            </a>
          ))}
        </div>
    </div>
  )
}

export default Portfolio