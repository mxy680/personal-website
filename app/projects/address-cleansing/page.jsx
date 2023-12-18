import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Project.css'

export default function AddressCleansing() {
  return (
    <div className='project-container'>
        <div className='project-content'>
            <h1>Address Cleansing for EPIC Brokers</h1>
            <div className='project-overview'>
                <p>
                The Bourntec Solutions Address Validation program was developed as part of an internship project to offer a powerful solution for validating and analyzing address data. By leveraging the Google Address Validation API, the tool provides users with accurate and insightful results, empowering them to make informed decisions. Address data can be conveniently imported in Excel format, ensuring seamless integration with existing datasets. After the validation process, a detailed report is generated, presenting users with valuable insights about their address data. This report is further supplemented with a visual representation, enhancing the data's interpretability. Furthermore, the program's functionality and logical structure are elucidated through a flowchart representation, providing users with a clear overview of its sequential steps and decision-making processes.
                </p>
            </div>
            <div className='project-features'>
                <h4>Features:</h4>
                <ul>
                    <li>Address Data Import: Enables users to import address data seamlessly in Excel format, supporting a wide range of address-related fields.</li>
                    <li>Google Address Validation API Integration: Ensures accurate and reliable address validation using the industry-leading API.</li>
                    <li>Detailed Report Generation: Provides a comprehensive report containing the original data with additional insightful columns, allowing for deep analysis.</li>
                    <li>Flowchart Representation: Offers a clear visual representation of the program's control flow, helping users understand its logical structure.</li>
                    <li>Results Visualization: Enhances interpretability with a visual representation of the results retrieved from the Google API.</li>
                </ul>
            </div>
            <div className='project-technologies'>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>Google Address Validation API: For authentic address validation.</li>
                    <li>Excel: Supported format for address data import.</li>
                    <li>CSV: Used for the detailed report generation.</li>
                    <li>Flowchart (as represented in 'flowchart.jpg'): Visual representation of the program's logic.</li>
                    <li>Visualization (as represented in 'report.png'): Graphical representation of the validation results.</li>
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
                <p>The Bourntec Solutions Address Validation program, while highly efficient and sophisticated, is developed with a focus on user confidentiality and data security. It's essential to note that this tool is not publicly available and has been exclusively deployed for internal use within Bourntec Solutions. This deployment strategy ensures a controlled environment, reducing potential risks associated with external threats.  Furthermore, in all demonstrations and promotional materials related to this tool, only synthetic address data is used. This is a precautionary measure to uphold the privacy standards and to ensure that no real address data is inadvertently exposed or shared. The synthetic data mimics real-world scenarios, ensuring that the demonstrations are as realistic as possible without compromising any private or sensitive information.</p>
                <div className='github-link'>
                    <a href='https://github.com/mxy680/Address-Cleansing' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={24} /> Link to Github
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
