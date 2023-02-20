import React from 'react'
import './about.css'
import ME from '../../assets/pic3.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { AiFillMessage, AiFillFolderOpen } from 'react-icons/ai'
import { MdSchool } from 'react-icons/md'

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

            <p>Jag är en ambitiös front-end utvecklingsstudent med ett stort intresse för webbutveckling. Min entusiasm för att skapa estetiskt tilltalande samt användarvänliga webbeapplikationer är väldigt stor. Det finns väldigt mycket kvar att lära men försöker hela tiden att förbättra mina färdigheter och kunskaper.</p>
            <p>Jag skulle beskriva mig själv som både en målmedveten och tålmodig person som sätter höga krav på sig själv. Personligen anser jag mig ha en god förmåga att arbeta i team samtidigt som jag kommunicerar mina idéer och lösningar på ett tydligt och effektivt sätt. Min strävan efter en karriär inom webbutveckling gör att jag känner mig redo att ta mig an nya utmaningar och skapa fantastiska webbplatser som inte bara ser bra ut, utan också fungerar perfekt för användarna.</p>
            <a href="#contact" className='btn btn-primary'><AiFillMessage sx={{':hover': {bgcolor: 'var(--color-bg-variant)'}, color: 'var(--color-bg-variant)' }} style={{width: 100, height: 30}} /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
