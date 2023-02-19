import React from 'react'
import { Helmet } from 'react-helmet'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import CTA from './components/header/CTA'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </div>
  )
}

export default App