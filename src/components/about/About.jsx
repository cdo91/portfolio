import React from 'react'
import './about.css'
import ME from '../../assets/aboutpic.png'
import {FaAward} from 'react-icons/fa'
import { AiFillFolderOpen } from 'react-icons/ai'
import { MdSchool } from 'react-icons/md'

const About = () => {
  return (

    <>
      <section id='about'>
        <h5 className='h5'>Lite kort om</h5>
        <h2>Mig själv</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article onClick={() => window.location.href='#experience__div'} className='about__card'>
                <FaAward className='about__icon' />
                <h5>Erfarenhet</h5>
                <small>Studerar front-end utveckling</small>
              </article>
              <article onClick={() => window.location.href='#experience__div'} className='about__card'>
                <MdSchool className='about__icon' />
                <h5>Kurser</h5>
                <small>4 avslutade kurser</small>
              </article>
              <article onClick={() => window.location.href='#portfolio__div'} className='about__card'>
                <AiFillFolderOpen className='about__icon' />
                <h5>Projekt</h5>
                <small>10 avslutade skol-projekt</small>
              </article>
            </div>
            <p>
              Mitt stora intresse för webbutveckling och att skapa estetiskt tilltalande samt användarvänliga 
              webbapplikationer har drivit mig att bli en ambitiös front-end utvecklingsstudent. Genom att 
              förena funktionalitet med estetisk design, strävar jag efter att skapa digitala verktyg som ger 
              en positiv användarupplevelse.
            </p>
            <p>
              Jag är målmedveten och tålmodig i mitt arbete och har en förmåga att samarbeta effektivt i team 
              via tydlig kommunikation av mina idéer och lösningar. Med min glöd för webbutveckling, ser jag 
              fram emot att ta mig an nya utmaningar och skapa fantastiska webbplatser som underlättar för 
              användarna att navigera och förbättra deras upplevelse på nätet.
            </p>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default About
