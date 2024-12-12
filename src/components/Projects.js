import React from 'react'

function Projects() {
  return (
    <div className="section" id="projects">
                    <h1 className="main-title">Projects</h1>
                    <div className="cards-contaner">
                        <div>
                            <div className="logo">
                                <i className="fa-solid fa-spray-can-sparkles"></i>
                            </div>
                            <div className="center-text">Scentify</div>
                            <div><a className="btn" href="https://github.com/Naser-Alzaghari/movieMaze.git" target="_blank">click here</a></div>
                        </div>
                        <div>
                            <div className="logo">
                                <i className="fa-solid fa-film"></i>
                            </div>
                            <div className="center-text">MovieMaze</div>
                            <div><a className="btn" href="https://github.com/Naser-Alzaghari/movieMaze.git" target="_blank">click here</a></div>
                        </div>
                        <div>
                            <div className="logo">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            <div className="center-text">Youtube website mockup</div>
                            <div><a className="btn" href="https://naser-alzaghari.github.io/Solve_HTML_CSS_Task/CSS/CSS5/hw5.12/hw5.12.html" target="_blank">click here</a></div>
                        </div>
                        <div>
                            <div className="logo">
                                <i className="fa-solid fa-plane"></i>
                            </div>
                            <div className="center-text">Booking website mockup</div>
                            <div><a className="btn" href="https://naser-alzaghari.github.io/Solve_HTML_CSS_Task/Booking_mockup/Booking.html" target="_blank">click here</a></div>
                        </div>
                        
                        <div className="coming_soon">
                            <p>COMING SOON</p>
                            <p>Stay tuned !</p>
                        </div>
                    </div>
                </div>
  )
}

export default Projects