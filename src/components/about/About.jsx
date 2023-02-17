import React from 'react'
import './about.css'
import ME from '../../assets/pic3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { AiFillMessage } from 'react-icons/ai'

const About = () => {
  return (
    <div>
      <section id='about'>
        <h5 className='h5'>Lite Kort Om</h5>
        <h2>Mig Själv</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Erfarenhet</h5>
                <small>Studerar Front-End Utveckling</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Klienter</h5>
                <small>200+ Klienter</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projekt</h5>
                <small>10 Avslutade</small>
              </article>
            </div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime debitis doloremque odit atque eaque tenetur maiores voluptate dolores ratione suscipit excepturi, necessitatibus laudantium perferendis reiciendis amet ipsam esse quas?</p>
            <a href="#contact" className='btn btn-primary'><AiFillMessage sx={{':hover': {bgcolor: 'var(--color-bg-variant)'}, color: 'var(--color-bg-variant)' }} style={{width: 100, height: 30}} /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
