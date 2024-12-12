import React from 'react'
import user1 from '../../assets/img/user1.png'
import user2 from '../../assets/img/user2.png'

function Testimonials() {
  return (
    <div className="section" id="Testimonials">
                    <h1 className="main-title">
                        Testimonials
                    </h1>
                    <div className="Testimonials">
                            <div className="container">
                                <img className='testimonials_image' src={user2} alt="Avatar"/>
                                <p><span>Michael Davis,</span> FreshTech Solutions</p>
                                <p>Quick, efficient, and highly skilled in HTML and CSS. Naser made our site look fantastic!</p>
                              </div>
                        
                        
                            <div className="container">
                                <img className='testimonials_image' src={user1} alt="Avatar"/>
                                <p><span>Sarah Johnson,</span> GreenLeaf Corp.</p>
                                <p>Naser delivered a clean, responsive website that exceeded our expectations. Great attention to detail!</p>
                              </div>
                        
                    </div>
                </div>
  )
}

export default Testimonials