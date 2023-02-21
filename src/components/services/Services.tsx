import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (

    <>
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
                <BiCheck style={{width: '4.6rem'}} className='service__list-icon' />
                <p>Användbarhetsanalys och testning - Uföra analyser samt tester för att bedöma webbplatser och appar från ett användarperspektiv. Identifiera eventuella problem och förbättringsområden.</p>
              </li>
              <li>
                <BiCheck style={{width: '3.5rem'}} className='service__list-icon' />
                <p>Gränssnittsdesign - Utforma användarvänliga gränssnitt som underlättar navigering och hjälper besökaren att uppnå sina mål på ett effektivt sätt.</p>
              </li>
              <li>
                <BiCheck style={{width: '4rem'}} className='service__list-icon' />
                <p>Interaktionsdesign - Utveckla interaktiva och responsiva användargränssnitt som möjliggör naturliga samt intuitiva interaktioner mellan användare och gränssnittet.</p>
              </li>
              <li>
                <BiCheck style={{width: '4.3rem'}} className='service__list-icon' />
                <p>Visuell design - Skapa estetiskt tilltalande och enhetliga designspråk som överensstämmer med riktlinjer och framhäver en konsekvent identitet för webbplatsen eller appen.</p>
              </li>
              <li>
                <BiCheck style={{width: '4.8rem'}} className='service__list-icon' />
                <p>Användarcentrerad design - Integrera samlade principer och metoder i designprocessen för att skapa en effektiv samt användarvänlig utformning som möter besökarens behov och förväntningar.</p>
              </li>
              <li>
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
                <p>Prototyper och testning - Skapa interaktiva skisser för att testa användbarhet samt funktionalitet i tidigare skeden av designprocessen. Feedback kan sedan användas för att förbättra designen innan den tillämpas.</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className="service__head">
              <h3>Web-Utveckling</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck style={{width: '3rem'}} className='service__list-icon' />
                <p>Webbdesign - Skapa och applicera snygga samt funktionella designkoncept som passar kundens behov och varumärke.</p>
              </li>
              <li>
                <BiCheck style={{width: '2.7rem'}} className='service__list-icon' />
                <p>Anpassning av befintliga teman - Anpassa redan existerande webbteman för att bättre matcha kundens krav.</p>
              </li>
              <li>
                <BiCheck style={{width: '3.2rem'}} className='service__list-icon' />
                <p>Webbapplikationsutveckling - Bygga responsiva och användarvänliga webbplatser som laddar snabbt samt fungerar på alla enheter.</p>
              </li>
              <li>
                <BiCheck style={{width: '2.8rem'}} className='service__list-icon' />
                <p>Animering - Skapa dynamiska och engagerande webbplatser med hjälp av CSS-animationer samt JavaScript-effekter.</p>
              </li>
              <li>
                <BiCheck style={{width: '3.5rem'}} className='service__list-icon' />
                <p>Optimering av prestanda - Optimera webbplatsens laddningstid och prestanda genom att justera bilder, komprimera kod och genomföra cachning.</p>
              </li>
              <li>
                <BiCheck style={{width: '4.3rem'}} className='service__list-icon' />
              <p>Webbapplikationstestning - Genomföra omfattande testning av webbapplikationer för att hitta buggar och andra problem. Säkerställa att webbplatsen fungerar korrekt på alla enheter.</p>
              </li>
              <li>
                <BiCheck style={{width: '4.4rem'}} className='service__list-icon' />
                <p>Underhåll av befintliga webbapplikationer - Uppdatera, underhålla och förbättra befintliga webbplatser för att garantera att de möter den senaste normen och kraven för webbutveckling.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
    
  )
}

export default Services
