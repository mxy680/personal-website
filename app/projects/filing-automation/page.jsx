import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Project.css'


export default function FilingAutomationProject() {
  return (
    <div className='project-container'>
        <div className='project-content'>
            <h1>Filing Automation for Cohen's Fashion Optical</h1>
            <div className='project-overview'>
                <p>
                    I developed this application for Cohens-Fashion-Optical, an optical retailer, to revolutionize their patient document filing process. Previously, the system was manual, tedious, and prone to human errors. With the introduction of this automated script, the employees can now input scanned batches of documents with relative ease. The script employs Optical Character Recognition (OCR) through the pytesseract library coupled with regular expressions to extract patient data accurately from the forms. It also accounts for potential OCR errors by assigning default null values. The automation extends to the retailer\'s website, navigated using Selenium, ensuring that the extracted patient information is correctly input. Despite the website not being built for automation, I incorporated various techniques to ensure smooth navigation. If a patient is not found, their details and location in the batch are recorded in a CSV file, ensuring that no information goes missing. In essence, this application not only reduces the manual input required but also enhances the accuracy and efficiency of the document filing process for Cohens-Fashion-Optical.
                </p>
            </div>
            <div className='project-features'>
                <h4>Features:</h4>
                <ul>
                    <li>Optical Character Recognition (OCR) capabilities for accurate data extraction from scanned documents.</li>
                    <li>Implementation of default null values to account for potential OCR errors.</li>
                    <li>Web automation using Selenium to input patient information on the retailer's website.</li>
                    <li>Workarounds like time delays and the ensure_click() function to tackle website navigation issues.</li>
                    <li>Dedicated CSV file logging for patients not found during automation, enabling manual input later.</li>
                    <li>User-friendly interface: specify batch number and form type, then initiate with a 'run' button.</li>
                    <li>Enhanced efficiency by minimizing human errors.</li>
                </ul>
            </div>
            <div className='project-technologies'>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>Pytesseract library (for OCR capabilities)</li>
                    <li>Regular expressions (regex)</li>
                    <li>Selenium (for web automation)</li>
                    <li>Time module (for incorporating delays)</li>
                    <li>CSV module (for logging unfound patients)</li>
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
                <p>This project was specifically developed for Cohens-Fashion-Optical and is not publicly available. To ensure the highest security standards and respect for patient privacy, the application is exclusively deployed on Cohens-Fashion-Optical\'s internal computer systems. This closed environment deployment ensures that sensitive patient data remains strictly within the confines of the company\'s infrastructure. In the demonstration video provided, any patient data displayed is entirely fictional. Cohens Fashion Optical takes patient privacy very seriously, and to eliminate any potential privacy breaches or concerns, all names, addresses, and other identifying details in the video are fabricated. This approach ensures that viewers get an understanding of the software\'s capabilities without exposing any real patient information. It\'s crucial to understand that while the software streamlines processes and showcases functionalities using this fake data, in its actual deployment, it deals with genuine patient records, ensuring utmost accuracy and confidentiality at all times.</p>
                <div className='github-link'>
                    <a href='https://github.com/mxy680/CHO-Filing-Application' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={24} /> Link to Github
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
