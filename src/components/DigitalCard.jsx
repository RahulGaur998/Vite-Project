import React from 'react'
import './DigitalCard.css'
import InfoSection from './InfoSection'
import AboutSection from './AboutSection'
import InterestsSection from './InterestsSection'
import FooterSection from './FooterSection'

const DigitalCard = () => {
  return (
    <div className='Digital-Card'>
        <InfoSection />
        <AboutSection />
        <InterestsSection />
        <FooterSection />
    </div>
  )
}
export default DigitalCard