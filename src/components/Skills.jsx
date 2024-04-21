import React from 'react';
import './skills.css';
import { skills } from '../data/constants';

function Skills() {
  return (
    <div className='skills container' id='skills'>
      <div className='skills-heading'>
        <h2 className='display-4'>Skills</h2>
        <p className='lead fs-5'>Drawing from a diverse background of education, work experience, and personal interests, I bring a comprehensive skill set to every project, equipping me with technical proficiency, creative flair, and communication to use in projects.</p>
      </div>
      <div className='skills-wrapper'>
        {skills.map((cat) => (
          <div className='skill' key={cat.title}>
            <h3 className='h4'>{cat.title}</h3>
            <div className='skill-list'>
              {cat.skills.map((skill) => (
                <div className='skill-info' key={skill.name}>
                  <div key={skill.name} className='label'>
                    <img className='icon' src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                  <div className='progress' role='progressbar' aria-label='Skill Level' aria-valuenow={skill.progress} aria-valuemin='0' aria-valuemax='100'>
                    <div className={`progress-bar ${skill.progress >= 80 ? 'bg-success' : skill.progress <= 50 ? 'bg-danger' : ''}`} style={{ width: `${skill.progress}%` }}>{skill.progress}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
