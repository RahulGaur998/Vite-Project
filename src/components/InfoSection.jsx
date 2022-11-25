import React from 'react'
import ImageCard from '../assets/imageForDigitalCardProject.png'
import LinkedinImage from '../assets/linkedin.png'
import EmailIcon from '../assets/Mail.png'
import './InfoSection.css'

const InfoSection = () => {
  return (
    <div className='Info-Section'>
      <img src={ImageCard} className='Image-Section' />
      <h4 className='Info-Name'>Laura Smith</h4>
      <h6 className='Info-Role'>Frontend Developer</h6>
      <h7 className='Info-Email'>laurasmith.website</h7>
      <div className='Info-Buttons'>
        <button className='Info-Email-Button'>
            <div className='Email-Button-Container'>
                <img className='Email-Icon' src={EmailIcon} /> 
                <h7 className='Info-Email-Button-Text'>Email</h7>
            </div>    
        </button>
        <button className='Info-Linkedin-Button'>
            <div className='Linkedin-Button-Container'>
                <img className='Linkedin-Icon' src={LinkedinImage} />
                <h7 className='Info-Linkedin-Button-Text'>Linkedin</h7>
            </div>
        </button>
      </div>
    </div>
  )
}

export default InfoSection
