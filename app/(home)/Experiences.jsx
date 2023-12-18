import React from 'react'
import './Experiences.css'

const experiencesData = [
    {
        title: 'Artificial Intelligence Intern',
        company: 'EPIC Brokers',
        location: 'Remote',
        dates: ['Jul 2022 — Aug 2022', 'Jul 2023 — Aug 2023', 'Dec 2023 — Jan 2024'],
        description: 'Developed a web-based project that harnessed Natural Language Processing for automating record-matching processes. Also, I successfully executed two extensive projects utilizing Python, SQL, and a premium API to validate the residential addresses and email addresses of prospective clients.',
        contact: 'Vikash.kaul@epicbrokers.com',
    },
    {
        title: 'Data Science Intern',
        company: 'Cohens Fashion Optical',
        location: 'Livingston, NJ',
        date: 'May 2023 - June 2023',
        description: 'Spearheaded a transformative project that revolutionized the operations of Cohens Fashion Optical regarding document management by automating days of labor-intensive manual tasks.',
        contact: 'cfo003@cohensfashionoptical.com',
    },
    {
        title: 'Computer Science Teacher',
        company: 'Code Ninjas',
        location: 'Livingston, NJ',
        date: 'Oct 2022 - June 2023',
        description: 'Provided comprehensive support to young learners in mastering the Code Ninjas computer science curriculum, contributes to the development of essential tools and infrastructure necessary for the smooth operation of the center and ensuring utmost satisfaction among parents.',
        contact: 'Kristen Cobb - +1 201-788-0414'
    },
    {
        title: 'Data Science Bootcamp',
        company: 'National Student Leadership Conference at Georgia Tech',
        location: 'Atlanta, GA',
        date: 'July 2022',
        description: 'Attended a 9-day intensive data science bootcamp at Georgia Tech, where I learned the fundamentals of data science, including Python, SQL, and Tableau.',
        contact: 'georgiatech@nslcleaders.org'
    },
    {
        title: 'Coding Club Mentor',
        company: 'Livingston High School Coding Club',
        location: 'Livingston, NJ',
        date: 'September 2022 - June 2023',
        description: 'Mentored a group of students in the Livingston High School Coding Club, guiding them in the development of their coding skills in Java and Python.',
    },
    {
        "title": "Fencing Instructor & Team Captain",
        "company": "Lilov Fencing Academy & Livingston High School",
        "location": "Cedar Grove, NJ & Livingston, NJ",
        "date": "September 2019 - July 2023",
        "description": "As a Fencing Instructor at Lilov Fencing Academy, I guided and mentored a group of over 25 aspiring young students, providing personalized instruction to foster their growth in the sport. Additionally, as the Fencing Team Captain at Livingston High School, I led the team to a first-place victory at the 2023 Centrullo Competition. I offered mentorship to novice fencers, assisted in planning and executing training sessions, and finished with a competitive record of 59(W)-19(L).",
        "contact": "973-352-7373 & coachpuccio@livingston.org"
    }
];
    
const Experiences = () => {
    return (
        <div className='experiences-container home-container'>
            <h1 className='experiences-header'>Professional Experiences</h1>
            <ol className='experiences-list'>
                {experiencesData.map((experience, index) => (
                    <li key={index} className='experience-item'>
                        <h3>{experience.title}</h3>
                        <p>{experience.company} - {experience.location}</p>
                        <p>{experience.date != null && experience.date}</p>
                        {experience.dates != null && <ul>
                            {experience.dates.map((date, index) => (
                                <li key={index}>
                                    <p>{date}</p>
                                </li>
                            ))}
                        </ul>}
                        <p>{experience.description}</p>
                        <p>{experience.contact != null && 'Reference: ' + experience.contact}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Experiences