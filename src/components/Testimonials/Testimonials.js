import React from 'react'
import user1 from '../../assets/img/user1.png'
import user2 from '../../assets/img/user2.png'
import Testimonial from './Testimonial'

function Testimonials() {
  return (
    <div className="section" id="Testimonials">
                    <h1 className="main-title">
                        Testimonials
                    </h1>
                    <div className="Testimonials">
                    <Testimonial name={"Mona Al-obisat"} photo={user2} comment={"Naser, the most dedicated and motivated person I know, I wish you all the best.🌸🌸☺️"} possition={'Technical Coach'}/>
                    <Testimonial name={"Mohammed Nedal"} photo={user1} comment={"Proud to be part of the amazing Scentify team! Thanks, Nasser, for the shoutout—excited for what’s next! "} possition={'colleague'}/>
                    </div>
                </div>
  )
}

export default Testimonials