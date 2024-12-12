import React from 'react'
import { faPhp , faJs , faHtml5 , faCss3Alt , faMicrosoft , faBootstrap , faJava , faFlutter , faGithub , faPython , faLaravel , faReact} from '@fortawesome/free-brands-svg-icons';
import { faDatabase , faImage } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill'
import OtherSkill from './OtherSkill';

function Skills() {
  return (
    <div className="section" id="skills">
                    <h1 className="main-title">
                        Skills and Qualifications
                    </h1>
                    <div className="second-title">Skills</div>
                    <div className="margin-bottom skills">
                    <Skill name={"Laravel"} icon={faLaravel}/>
                    <Skill name={"React"} icon={faReact}/>
                    <Skill name={"php"} icon={faPhp}/>
                    <Skill name={"MySQL"} icon={faDatabase}/>
                    <Skill name={"JavaScript"} icon={faJs}/>
                    <Skill name={"HTML5"} icon={faHtml5}/>
                    <Skill name={"CSS"} icon={faCss3Alt}/>
                    <Skill name={"bootstrap"} icon={faBootstrap}/>
                    <Skill name={"Microsoft office"} icon={faMicrosoft}/>
                    <Skill name={"Photoshop"} icon={faImage}/>
                    
                </div>
                    <div>
                        <div className="second-title">Familiar with:</div>
                        <div id="Familiar_with">
                            <OtherSkill name={"github"} icon={faGithub} />
                            <OtherSkill name={"Java"} icon={faJava} />
                            <OtherSkill name={"python"} icon={faPython} />
                            <OtherSkill name={"Flutter"} icon={faFlutter} />
                            
                        </div>
                    </div>
                    
                     
                </div>
  )
}

export default Skills