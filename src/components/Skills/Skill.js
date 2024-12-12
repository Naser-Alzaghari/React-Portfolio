import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skill = ({name, icon}) => {
  return (
    <div>
        <div><FontAwesomeIcon icon={icon} size='2x'/></div>
        <span>{name}</span>
    </div>
  )
}

export default Skill