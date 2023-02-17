import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin style={{height: 50, width: 30}} /></a>
        <a href="https://github.com" target="_blank"><BsGithub style={{height: 60, width: 40}} /></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook style={{height: 50, width: 30}} /></a>
    </div>
  )
}

export default HeaderSocials
