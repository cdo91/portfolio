import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div>
      <section id='experience'>
        <h5 className='h5'>Detta Är Mina</h5>
        <h2>Erfarenheter</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <div className='frontend__div'>
              <h3>Front-End Utveckling</h3>
            </div>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Kurs Avslutad</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Kurs Avslutad</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Kurs Avslutad</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Kurs Avslutad</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Angular</h4>
                  <small className='text-light'>Kurs Avslutad</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Studerar</small>
                </div>
              </article>
            </div>
          </div>
          
          <div className="experience__backend">
            <div className='frontend__div'>
              <h3>Back-End Utveckling</h3>
            </div>
            <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Studerar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Studerar</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>FireBase</h4>
                <small className='text-light'>Studerar</small>
              </div>
            </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
