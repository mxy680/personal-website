import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='about-me-container home-container'>
        <div className='about-me-picture'>
            <img src='/me.png' alt='about-me' />
        </div>
        <div className='about-me-text'>
            <div className='about-me-header'>
                <h1>About Me</h1>
            </div>
            <div className='about-me-body'>
                <p> 
                I'm Mark Shteyn, a data scientist based in Cleveland, USA, fueled by an unwavering passion for computer vision and deep learning. My educational journey began at Livingston High School, where I excelled academically and completed various courses in computer science and data science.
                <br />
                <br />
                In my professional journey, I've leveraged this knowledge to excel in roles such as an AI Intern at EPIC Brokers, where I automated complex tasks through AI, and as a key contributor at Cohen's Fashion Optical, where I spearheaded transformative projects in document management.
                <br />
                <br />
                Currently, I'm pursuing a Data Science major at Case Western Reserve University, where I continue to explore the boundless potential of technology. With a solid foundation in computer science and deep expertise in deep learning, I am passionately committed to pushing the boundaries of what's achievable in the realms of computer vision and data science. Join me on this exciting journey of innovation and limitless possibilities.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe