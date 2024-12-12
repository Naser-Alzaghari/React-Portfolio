import React from 'react'
import MyPhoto from '../assets/img/AB1A6257.JPG'

export const Hero = () => {
  return (
    <div className="section">
                <div>
                    <div className="flex-container-hero">
                        <div className="hero-intro">
                            <p>Hello, my name is</p>
                            <h1>Naser Al-zaghari</h1>
                            <p className="second-title">I am a Web Developer.</p>
                            <div className="margin-top hero-buttons">
                                <a className="btn" href="mailto:naseralzaghari88@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i><span> Contact me</span></a>
                                <a className="btn" href="NASER ALZAGHARI.pdf" target="_blank"><i className="fa-solid fa-file"></i> <span>Resume</span></a>
                            </div>
                        </div>
                        <div>
                            <img src={MyPhoto} className="picture" alt="pic"/>
                        </div>
                    </div>
                </div>
            </div>
  )
}
