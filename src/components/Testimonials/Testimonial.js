import React from 'react'

export default function Testimonial({name,comment,photo,possition}) {
  return (
    <div className="container">
        <img className='testimonials_image' src={photo} alt="Avatar"/>
        <p><span>{name},</span>{possition}</p>
        <p>{comment}</p>
    </div>
  )
}
