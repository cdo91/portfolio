import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <div>
      <section id='services'>
        <h5 className='h5'>Jag erbjuder dessa</h5>
        <h2>Tjänster</h2>

        <div className="container services__container">
          <article className='service'>
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX*/}
          <article className='service'>
            <div className="service__head">
              <h3>Web-Utveckling</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </article>
          {/* END of WEB DEV */}
        </div>
      </section>
    </div>
  )
}

export default Services
