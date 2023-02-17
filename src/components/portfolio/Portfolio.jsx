import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio 1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/4810945-Pictures-portfolio-app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio 2',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20538867-AIGen-AI-Generated-Pict-Landing-Page'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio 3',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/7076472-Photographers-app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio 4',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18565056-Tommy-Hans-Personal-Portfolio-Landing-Page-Website'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio 5',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20596812-Website-design-concept-for-photographer-exhibition'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio 6',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19841339-Photographer-Portfolio-Website'
  },
]

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5 className='h5'>Mina tidigare projekt</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <Swiper
            style={{padding: '3rem'}}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            >
            {
            data.map(({id, image, title, github, demo}) => {
              return (
                <SwiperSlide key={id} style={{background: 'var(--color-bg)', padding: '2rem', borderRadius: '0.5em', marginTop: 50}}>
                  <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>{title}</h3>
                <div style={{display: 'grid', justifyContent: 'center'}} className="portfolio__item-cta">
                  <a style={{width: 120, textAlign: 'center'}} className='btn' href={github} target='_blank'>Github</a>
                  <a className='btn btn-primary' href={demo} target='_blank'>Visa Demo</a>
                </div>
                </SwiperSlide>
              )
            })
            }
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
