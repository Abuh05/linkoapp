import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt="" />
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About