import React from 'react'
import Project from './Project'

import {  faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase , faImage , faSprayCanSparkles , faFilm , faPuzzlePiece , faPlane} from '@fortawesome/free-solid-svg-icons';


function Projects() {
  return (
    <div className="section" id="projects">
                    <h1 className="main-title">Projects</h1>
                    <div className="cards-contaner">
                        <Project name={"Scentify"} icon={faSprayCanSparkles} github_link={"https://github.com/Naser-Alzaghari/scentify.git"}/>
                        <Project name={"FillFun"} icon={faPuzzlePiece} github_link={"https://github.com/Naser-Alzaghari/FillFun.git"}/>
                        <Project name={"MovieMaze"} icon={faFilm} github_link={"https://github.com/Naser-Alzaghari/movieMaze.git"}/>
                        <Project name={"Booking website mockup"} icon={faPlane} github_link={"https://naser-alzaghari.github.io/Solve_HTML_CSS_Task/Booking_mockup/Booking.html"}/>
                        <Project name={"Youtube website mockup"} icon={faYoutube} github_link={"https://naser-alzaghari.github.io/Solve_HTML_CSS_Task/Booking_mockup/Booking.html"}/>
                        <div className="coming_soon">
                            <p>COMING SOON</p>
                            <p>Stay tuned !</p>
                        </div>
                    </div>
                </div>
  )
}

export default Projects