import React from 'react'
import './footer.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Hem</a></li>
        <li><a href="#about">Om mig</a></li>
        <li><a href="#experience">Erfarenhet</a></li>
        <li><a href="#services">Tjänster</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.facebook.com/christian.olofsson1/" target="_blank"><BsFacebook /></a>
      <a href="https://www.instagram.com/chrisstianolofsson/" target="_blank"><RiInstagramFill /></a>
      <a href="https://twitter.com/cd0cd0" target="_blank"><BsTwitter /></a>
      <a href="https://linkedin.com/in/christian-olofsson-69863b218" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/cdo91?tab=repositories" target="_blank"><BsGithub /></a>
      <a href="https://dribbble.com/cdo91" target="_blank"><BsDribbble /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; cdo portfolio</small>
      </div>
    </footer>
  )
}

export default Footer
