import React from 'react'
import ITG from '../assets/img/ITG_logo_2x.png'

function Experiences() {
  return (
    <div className="section" id="Experiance">
                    <h1 className="main-title">
                        Services and Experiances
                    </h1>
    				<div className="flex-container">
                        <div>
                        <p>Feb/2021 – Sep/2024</p>
                        <p className="second-title">Authoring officer • Junior • integrated Technology group (ITG)</p>
                        <ul>
                            <li>A data entry of books and LMS contents (converting books from hard into a soft copy).</li>
                            <li>Teaching others how to design and format books professionally by using Photoshop, Adobe acrobat, Microsoft programs and Eduwave website.</li>
                            <li>Tracking and reporting on overall progress.</li>
                        </ul>
                    </div>
                <div className="Services-image">
                    <img
                        src={ITG}
                        className="services-picture"
                        alt="pic"
                    />
                    
                </div>
                
                </div>
                </div>
  )
}

export default Experiences