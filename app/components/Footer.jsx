import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-contact'>
                    <p>Email: mark@mxy680.com</p>
                    <p>Phone: +1 862-253-7800</p>
                </div>
                <div className='footer-social'>
                    <a href="https://www.linkedin.com/in/mark-shteyn-3518a1282/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/mxy680" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.coursera.org/user/3b401c52213c20ddbb8c23c1a73443cb" target="_blank" rel="noopener noreferrer">
                        <img src='/coursera.svg' alt="Coursera" width="24" height="24" />
                    </a>
                </div>
                <div className='footer-legal'>
                    <p>&copy; 2021 Mark Shteyn</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;