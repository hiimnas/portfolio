import React, { useState } from 'react';
import './background.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../data/constants';

function Background() {
    const [activeTab, setActiveTab] = useState('education');

    return (
        <div className='bg container' id='background'>
            <h2 className='display-4'>Background</h2>
            <p className='lead fs-5'>My education and work experience journey, taking you through my life journey of self-discovery and growth. Mapped.</p>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeTab === 'education' ? 'bg-danger text-white' : 'text-danger'}`} id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-education" aria-selected="true" onClick={() => setActiveTab('education')}>Education</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeTab === 'experience' ? 'bg-danger text-white' : 'text-danger'}`} id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false" onClick={() => setActiveTab('experience')}>Experience</button>
                </li>
            </ul>
            <div className='timeline-container'>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane fade ${activeTab === 'education' ? 'show active' : ''}`} id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                        <Timeline className='timeline'>
                            {education.map((edu, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot variant='outlined' color='primary' />
                                        {index < education.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <div className='bg-card'>
                                            <div className='card-header'>
                                                <img className='card-logo' src={edu.img} alt={edu.school} />
                                                <div className='card-info'>
                                                    <h3 className='h5'>{edu.degree}</h3>
                                                    <h4 className='h6'>{edu.school}</h4>
                                                    <h4 className='h6'>{edu.date}</h4>
                                                </div>
                                            </div>
                                            <div className='card-desc'>
                                                <p className='fs-7'>{edu.desc}</p>
                                            </div>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'experience' ? 'show active' : ''}`} id="pills-experience" role="tabpanel" aria-labelledby="pills-experience-tab">
                        <Timeline className='timeline'>
                            {experiences.map((exp, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot variant='outlined' color='secondary' />
                                        {index < experiences.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <div className='bg-card'>
                                            <div className='card-header'>
                                                <img className='card-logo' src={exp.img} alt={exp.company} />
                                                <div className='card-info'>
                                                    <h3 className='h5'>{exp.role}</h3>
                                                    <h4 className='h6'>{exp.company}</h4>
                                                    <h4 className='h6'>{exp.date}</h4>
                                                </div>
                                            </div>
                                            <div className='card-desc'>
                                                <p className='fs-7'>{exp.desc}</p>
                                                <div className='card-skills'>
                                                    <h5 className='fs-7'><b>Skills:</b></h5>
                                                    <p className='fs-7'>{exp.skills.map((skill, i) => (
                                                        <span className='skills-item' key={i}>· {skill}<br /></span>
                                                    ))}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
