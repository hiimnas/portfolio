import React from 'react';
import './experience.css';

const education = [
    {
        name: 'The Open University',
        desc: 'BSc in Computing & IT and Design as a Second Subject',
        time: 'Apr. 2022 - (in progress)',
        img: './ou.png',
        icon: 'bi bi-dash-circle'
    },
    {
        name: 'Kansai College of Business and Languages',
        desc: 'Associates Degree in Japanese and passed the Japanese proficiency exam (JLPT N2 Level)',
        time: 'Apr. 2023 - Apr. 2025 (in progress)',
        img: './tg.jpg',
        icon: 'bi bi-dash-circle'
    },
    {
        name: 'Softuni',
        desc: 'C# Web Developer Diploma',
        time: 'Sept. 2020 - June 2023',
        img: './softuni.jpg',
        icon: 'bi bi-check-circle'
    },
    {
        name: 'HM Government | Institute for Apprenticeships and Technical Education',
        desc: 'Level 4 Business Analyst Qualification',
        time: 'Sept. 2020 - May 2022',
        img: './hmg.png',
        icon: 'bi bi-check-circle'
    },
    {
        name: 'Tianjin International Chinese College (online, now defunct)',
        desc: 'Passed the highest possible level of exam for Chinese proficiency (HSK Level 6)',
        time: 'July 2020 - Mar. 2022',
        img: './ticc.png',
        icon: 'bi bi-check-circle'
    },
    {
        name: 'Dame Alice Owen\'s School',
        desc: 'Passed 4 A-Levels in Maths, Further Maths, Physics and German',
        time: 'Sept. 2018 - July 2020',
        img: './daos.png',
        icon: 'bi bi-check-circle'
    },
    {
        name: 'Bishop\'s Stortford College',
        desc: 'Passed 10 GCSEs and contributed to school life',
        time: 'Sept. 2016 - July 2018',
        img: './bsc.png',
        icon: 'bi bi-check-circle'
    }
];

function Experience() {
    return (
        <div className='xp container' id='experience'>
            <h2 className='display-4'>Experience</h2>
            <p className='lead fs-5'>My education and work experience journey, mapped.</p>
            <ul className='xp-selector nav nav-pills'>
                <li className='nav-item'>
                    <a className='nav-link active' aria-current='page' href='#'>Education</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Work Experience</a>
                </li>
            </ul>
            <div className='education' id='edu'>
                <div className='timeline'>
                    {education.map((exp, index) => (
                        <div className='item' key={index}>
                            <div className='separator'>
                                <i className={exp.icon}></i>
                                <div className='connector' />
                            </div>
                            <div className='content'>
                                <div className='title'>
                                    <div className='img-container'>
                                        <img src={exp.img} alt={exp.name} />
                                    </div>
                                    <h3>{exp.name}</h3>
                                </div>
                                <div className='info'>
                                    
                                    <h4>{exp.desc}</h4>
                                    <p>{exp.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
