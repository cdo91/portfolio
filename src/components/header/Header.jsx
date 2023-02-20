import React, { useEffect } from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/profilepic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  const words = ["Front-End utvecklare", "Jag studerar till"];
  let wordIndex = 0;
  let letterIndex = 0;
  let direction = 1;

  function animate() {
    const textElement = document.getElementById("text");
    const currentWord = words[wordIndex];
    const currentText = currentWord.slice(0, letterIndex);
    textElement.textContent = currentText;
    if (letterIndex === currentWord.length) {
      direction = -1;
      textElement.classList.add("erasing");
    } else if (letterIndex === 0) {
      direction = 1;
      wordIndex = (wordIndex + 1) % words.length;
      textElement.classList.remove("erasing");
    }
    letterIndex += direction;
  }

  setInterval(animate, 120);

  return (

    <>
      <section id="header">
        <header>
          <div className="container header__container">
            <h5 >Mitt namn är</h5>
            <h1>Christian Olofsson</h1>
            <h5 
              style={{height: '1rem', color: 'var(--color-primary)'}}
              >
              <span id="text"></span>
            </h5>
            <CTA />
            <HeaderSocials />
            <img className="me" src={ME} alt="" />
          </div>
        </header>
      </section>
    </>
    
  )
}

export default Header
