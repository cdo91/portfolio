import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfoliopic.png'
import IMG2 from '../../assets/portfoliopic2.png'
import IMG3 from '../../assets/portfoliopic3.png'
import IMG4 from '../../assets/portfoliopic4.png'
import IMG5 from '../../assets/portfoliopic5.png'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'HTML/CSS Projekt',
    github: 'https://github.com/cdo91?tab=repositories',
    demo: 'https://dribbble.com/shots/20704608-Cleaning-website?added_first_shot=true'
  },
  {
    id: 2,
    image: IMG2,
    title: 'HTML/CSS Grupp-Projekt',
    github: 'https://github.com/cdo91?tab=repositories',
    demo: 'https://dribbble.com/shots/20704807-News-website'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Angular Grupp-Projekt',
    github: 'https://github.com/cdo91?tab=repositories',
    demo: 'https://dribbble.com/shots/20705086-Cleaning-website-with-booking-page'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Angular Projekt',
    github: 'https://github.com/cdo91?tab=repositories',
    demo: 'https://dribbble.com/shots/20705431-Angular-To-Do-List'
  },
  {
    id: 5,
    image: IMG5,
    title: 'React Projekt',
    github: 'https://github.com/cdo91?tab=repositories',
    demo: 'https://dribbble.com/shots/20705650-React-Country-List'
  }
]

const Portfolio = () => {
  return (

    <>
      <section id='portfolio'>
        <h5 className='h5'>Mina tidigare projekt</h5>
        <h2>Portfolio</h2>

        <div id="portfolio__div" className="container">
          <Swiper
            className='my-swiper'
            style={{padding: '3rem'}}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1400: {
                slidesPerView: 3,
              },
              830: {
                slidesPerView: 2,
              },
            }}
            >
            {
            data.map(({id, image, title, github, demo}) => {
              return (
                <SwiperSlide 
                  key={id} 
                  style={{background: 'var(--color-bg)', padding: '2rem', borderRadius: '0.5em', marginTop: 50}}
                  >
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3 style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>{title}</h3>
                  <div 
                    style={{display: 'grid', justifyContent: 'center'}} 
                    className="portfolio__item-cta">
                    <a style={{width: 120, textAlign: 'center'}} 
                      className='btn' 
                      href={github} 
                      target='_blank'
                      >Github
                    </a>
                    <a 
                      className='btn btn-primary' 
                      href={demo} 
                      target='_blank'
                      >Visa Demo
                    </a>
                  </div>
                </SwiperSlide>
              )
              })
            }
          </Swiper>
        </div>
      </section>
    </>
    
  )
}

export default Portfolio
