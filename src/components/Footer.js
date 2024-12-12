import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin  , faGithub  } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <footer className="margin-top">
                <div>Done by Naser Al-zaghari</div>
                <div className='text-center'>© All rights reserved</div>
                <div className="grid-container socials">
                    <a href="https://www.linkedin.com/in/naser-alzaghari-4549a919a/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className="fa-brands fa-github" href="https://github.com/Naser-Alzaghari" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    <a className="fa-solid fa-envelope" href="mailto:naseralzaghari88@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                    <a className="fa-solid fa-phone" href="tel:+962786907594" target="_blank"><FontAwesomeIcon icon={faPhone}/></a>
                </div>
            </footer>
  )
}

export default Footer