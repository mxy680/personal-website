"use client"

import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);
    const [activeSkillIndex, setActiveSkillIndex] = useState(null);
    const [endorsementNameInput, setEndorsementNameInput] = useState({});
    const [endorsementMessageInput, setEndorsementMessageInput] = useState({});

    const api = `${window.location.origin}/api/skills`

    const getDuration = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        
        const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
        
        if (months < 1) return "Less than a month";
        if (months < 12) return `${months} months`;
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        
        if (years > 1) return `${years} years`;
        if (years === 1) return '1 year';
        return `${years} years and ${remainingMonths} months`;
    }   

    const toggleEndorsementPopup = (index) => {
        setActiveSkillIndex(activeSkillIndex === index ? null : index);
    };

    const submitEndorsement = async (index, skillId) => {
        const name = endorsementNameInput[index];
        const message = endorsementMessageInput[index];
        const endorsement = { name, message};
        const path = api + `/${skillId}`;

        const res = await fetch(path, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(endorsement),
        })

        // Close the endorsement popup
        setActiveSkillIndex(null);

        // Clear the input fields
        setEndorsementNameInput({ ...endorsementNameInput, [index]: '' });
        setEndorsementMessageInput({ ...endorsementMessageInput, [index]: '' });

        // Optionally, refresh skill data to reflect the new endorsement
        getSkills();
    }

    const getSkills = async () => {
        const res = await fetch(api, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await res.json();
        setSkillsData(json.data);
    }

    useEffect(() => {
        getSkills();
    }), [];

    
    return (
        <div className='skills-container home-container'>
            <h1 className='skills-header'>Skills</h1>
            <div className="skills-items-container">
            {skillsData && skillsData.map((skill, index) => (
                <div key={index} className='skill-item'>
                    <div className='skill-content'>
                        {skill.icon && <img src={skill.icon} alt='Skill Icon' className='skill-icon' loading='lazy' />}
                        <h3>{skill.title}</h3>
                        <p>{getDuration(skill.experience)}</p>
                        <p>{skill.description}</p>
                    </div>
                    <div className="skills-footer">
                        {skill.certification ? (
                            <a href={skill.certification} target='_blank' rel='noreferrer' className="certification-link">View Certification</a>
                        ) : (
                            <span className="no-certification">No certification :(</span>
                        )}
                        <button className="endorsement-button" onClick={() => toggleEndorsementPopup(index)}>
                            {skill.endorsement_name ? `${skill.endorsement_name.length} Endorsements` : '0 Endorsements'}
                        </button>
                        {activeSkillIndex === index && (
                            <div className="endorsement-popup">
                                <div className="write-endorsement">
                                    <h3>Write an Endorsement!</h3>
                                    <div className="popup-close-button" onClick={() => toggleEndorsementPopup(index)}>X</div>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        value={endorsementNameInput[index] || ''}
                                        onChange={(e) => setEndorsementNameInput({ ...endorsementNameInput, [index]: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="message (optional)"
                                        value={endorsementMessageInput[index] || ''}
                                        onChange={(e) => setEndorsementMessageInput({ ...endorsementMessageInput, [index]: e.target.value })}
                                    />
                                    <button onClick={() => submitEndorsement(index, skill.id)}>
                                        Submit
                                    </button>
                                </div>
                                {skill.endorsement_name && (
                                    <div className="endorsements">
                                        <h3 className="endorsements-header">Endorsements</h3>
                                        {skill.endorsement_name.map((name, index) => (
                                            <div key={index} className="endorsement">
                                                <span className="endorsement-name">{name}</span>
                                                <span className="endorsement-message">{skill.endorsement_message[index]}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Skills;