import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5 className='h5'>Mina tidigare projekt</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>Portfolio Titel</h3>
            <div className="portfolio__item-cta">
              <a className='btn' href="https://github.com" target='_blank'>Github</a>
              <a className='btn btn-primary' href="https://dribbble.com/Alien_pixels" target='_blank'>Visa Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3>Portfolio Titel</h3>
            <div className="portfolio__item-cta">
              <a className='btn' href="https://github.com" target='_blank'>Github</a>
              <a className='btn btn-primary' href="https://dribbble.com/Alien_pixels" target='_blank'>Visa Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>Portfolio Titel</h3>
            <div className="portfolio__item-cta">
              <a className='btn' href="https://github.com" target='_blank'>Github</a>
              <a className='btn btn-primary' href="https://dribbble.com/Alien_pixels" target='_blank'>Visa Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>Portfolio Titel</h3>
            <div className="portfolio__item-cta">
              <a className='btn' href="https://github.com" target='_blank'>Github</a>
              <a className='btn btn-primary' href="https://dribbble.com/Alien_pixels" target='_blank'>Visa Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>
            <h3>Portfolio Titel</h3>
            <div className="portfolio__item-cta">
              <a className='btn' href="https://github.com" target='_blank'>Github</a>
              <a className='btn btn-primary' href="https://dribbble.com/Alien_pixels" target='_blank'>Visa Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>
            <h3>Portfolio Titel</h3>
            <div className="portfolio__item-cta">
              <a className='btn' href="https://github.com" target='_blank'>Github</a>
              <a className='btn btn-primary' href="https://dribbble.com/Alien_pixels" target='_blank'>Visa Demo</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
