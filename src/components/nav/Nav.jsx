import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlineFolderOpen } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (

    <nav>
      <a 
        href="#" 
        onClick={() => setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''}
        >
        <AiOutlineHome style={{height: 20, width: 20}} />
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
        >
        <AiOutlineUser style={{height: 20, width: 20}} />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}
        >
        <BiBook style={{height: 20, width: 20}} />
      </a>
      <a 
        href="#services" 
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#services' ? 'active' : ''}
        >
        <RiServiceLine style={{height: 20, width: 20}} />
      </a>
      <a 
        href="#portfolio" 
        onClick={() => setActiveNav('#portfolio')} 
        className={activeNav === '#portfolio' ? 'active' : ''}
        >
        <AiOutlineFolderOpen style={{height: 20, width: 20}} />
      </a>
      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
        >
        <AiOutlineMessage style={{height: 20, width: 20}} />
      </a>
    </nav>
    
  )
}

export default Nav
