import React from 'react'
import './ProjectPortfolio.css'
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            path: '/projects/filing-automation',
            title: 'Filing Automation',
            coverImage: '/project-cover-images/filing-automation.jpeg',
            company: 'Cohen\'s Fashion Optical',
            coverDescription: 'An automation script for Cohens-Fashion-Optical that streamlines patient document filing using OCR and web automation, reducing manual effort and increasing accuracy.'
        },
        {
            path: '/projects/record-matching',
            title: 'Record Matching',
            coverImage: '/project-cover-images/record-matching.jpeg',
            company: 'Bourntec Solutions',
            coverDescription: 'Developed using Flask and Python, this tool optimizes record matching and analysis in datasets.'
        },
        {
            path: '/projects/address-cleansing',
            title: 'Address Cleansing',
            coverImage: '/project-cover-images/address-cleansing.jpeg',
            company: 'EPIC Brokers',
            coverDescription: 'A tool that cleanses and corrects addresses, reducing manual effort and increasing accuracy.'
        }
    ];

    return (
        <>
            <div className='portfolio-container'>
                    <h1 className='portfolio-title'>Professional Software Engineering and Data Science Portfolio</h1>
                    <div className='portfolio-items'>
                        {projects.map((project, index) => (
                            <Link href={project.path} key={index} className='portfolio-item'>
                                <h2 className='portfolio-item-title'>{project.title}</h2>
                                <img src={project.coverImage} alt={project.title} className='portfolio-item-cover-img'/>
                                <p className='portfolio-item-company'>{project.company}</p>
                                <p className='portfolio-item-description'>{project.coverDescription}</p>
                            </Link>
                        ))}
                    </div>
            </div>
        </>
    )
}
