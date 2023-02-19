import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/profilepic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  
  return (
    <>
      <section>
      <header>
      <div className="container header__container">
        <h5>Mitt namn är</h5>
        <h1>Christian Olofsson</h1>
        <h5 className="text-light">Front-End Utvecklare</h5>
        <CTA />
        <HeaderSocials />
        <img className="me" src={ME} alt="" />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
      </section>
    </>
  )
}

export default Header
