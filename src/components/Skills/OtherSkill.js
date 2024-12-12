import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OtherSkill({name, icon}) {
  return (
    <div className='other_skill'>
        <div><FontAwesomeIcon icon={icon} /></div>
        <p>{name}</p>
    </div>
  )
}

export default OtherSkill