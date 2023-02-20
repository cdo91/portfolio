import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/christian-olofsson-69863b218" target="_blank"><BsLinkedin style={{height: 50, width: 30}} /></a>
        <a href="https://github.com/cdo91?tab=repositories" target="_blank"><BsGithub style={{height: 60, width: 40}} /></a>
        <a href="https://dribbble.com/cdo91" target="_blank"><BsDribbble style={{height: 50, width: 30}} /></a>
    </div>
  )
}

export default HeaderSocials
