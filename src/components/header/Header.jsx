import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/profilepic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  
  return (
    <header>
      <div className="container header__container">
        <h5>Mitt namn är</h5>
        <h1>Christian Olofsson</h1>
        <h5 className="text-light">Front-End Utvecklare</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
