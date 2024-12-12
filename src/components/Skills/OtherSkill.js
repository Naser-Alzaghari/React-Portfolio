import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OtherSkill({name, icon}) {
  return (
    <div>
        <FontAwesomeIcon icon={icon} />
        <span>{name}</span>
    </div>
  )
}

export default OtherSkill