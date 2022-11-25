import React from 'react'
import FacebookIcon from '../assets/Facebook Icon.png'
import GitHubIcon from '../assets/GitHub Icon.png'
import InstagramIcon from '../assets/Instagram Icon.png'
import TwitterIcon from '../assets/Twitter Icon.png'
import './FooterSection.css'

const FooterSection = () => {
  return (
    <div className='Footer-Section'>
      <img src={TwitterIcon} className='Twitter-Icon' />
      <img src={FacebookIcon} className='Facebook-Icon' />
      <img src={InstagramIcon} className='Instagram-Icon' />
      <img src={GitHubIcon} className='Github-Icon' />
    </div>
  )
}

export default FooterSection
