import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Project({name, icon, github_link}) {
  return (
    <div>
        <div className="logo">
            <FontAwesomeIcon icon={icon}/>
        </div>
        <div className="center-text">{name}</div>
        <div><a className="btn" href={github_link} target="_blank">click here</a></div>
    </div>
  )
}

export default Project