import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Project.css'


export default function RecordMatchingProject() {
  return (
    <div className='project-container'>
        <div className='project-content'>
            <h1>Record Matching Website for Bourntec Solutions</h1>
            <div className='project-overview'>
                <p>
                    This is a web application built with Flask and Python that allows users to perform record matching and analysis on datasets. Users can upload their datasets, and the application uses the rapidfuzz library to find the closest matches in a separate database. The application supports single-match analysis and can display the closest matches to a user-inputted record name. Admin users have additional functionalities, such as uploading and updating databases, as well as deleting databases.
                </p>
            </div>
            <div className='project-features'>
                <h4>Features:</h4>
                <ul>
                    <li>User authentication and authorization with login and sign-up functionality.</li>
                    <li>Record matching using the rapidfuzz library with customizable match threshold.</li>
                    <li>Single-match analysis to find the closest matches to a user-inputted record name.</li>
                    <li>Admin user functionality to upload, update, and delete databases.</li>
                    <li>User-friendly web interface using Bootstrap and Jinja2 templating.</li>
                </ul>
            </div>
            <div className='project-technologies'>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>Flask: Python web framework for building the web application.</li>
                    <li>SQLAlchemy: ORM library to interact with the database.</li>
                    <li>rapidfuzz: Python library for fast fuzzy string matching.</li>
                    <li>Pandas: Python data manipulation library for processing datasets.</li>
                    <li>Bootstrap: Front-end framework for responsive and attractive design.</li>
                    <li>Jinja2: Templating engine for rendering dynamic content.</li>
                </ul>
            </div>
        </div>
        <div className='project-media'>
            <div className='project-demo'>
                <div className='project-video'>
                    <video src='/videos/record-matching-video.mp4' controls />
                </div>
            </div>
            <div className='project-additional-info'>
                <h4>Additional Information</h4>
                <p>This project was developed for Bourntec Solutions, Inc. as a proof-of-concept for a record matching tool. It is currently being used by Bourntec to demonstrate the capabilities of the tool to potential clients. It will not be deployed to the web due to the sensitive nature of the data used in the project, as well as the fact that it is a proof-of-concept and not a fully-fledged application. However, the project is planned to be used as a starting point for a future record matching tool that will be deployed locally to the EPIC Brokers environment.</p>
                <div className='github-link'>
                    <a href='https://github.com/mxy680/Record-Matching-Website' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={24} /> Link to Github
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
