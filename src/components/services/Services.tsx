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
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
                <p>Användbarhetsanalys och testning - Uföra användbarhetsanalyser samt tester för att bedöma webbplatser och appar från användarperspektiv och identifiera eventuella användarproblem och förbättringsområden.</p>
              </li>
              <li>
                <BiCheck style={{width: '4.5rem'}} className='service__list-icon' />
                <p>Gränssnittsdesign - Utforma användarvänliga gränssnitt som underlättar navigering och hjälper användare att uppnå sina mål på ett effektivt sätt, med ett fokus på användarupplevelsen.</p>
              </li>
              <li>
                <BiCheck style={{width: '4rem'}} className='service__list-icon' />
                <p>Interaktionsdesign - Utveckla interaktiva och responsiva användargränssnitt som möjliggör naturliga samt intuitiva interaktioner mellan användare och gränssnittet.</p>
              </li>
              <li>
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
                <p>Visuell design - Skapa estetiskt tilltalande och enhetliga designspråk som överensstämmer med varumärkesriktlinjer och kommunicerar en enhetlig känsla och identitet för webbplatsen eller appen.</p>
              </li>
              <li>
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
                <p>Användarcentrerad design - Integrera användarcentrerade principer och metoder i hela designprocessen för att skapa en effektiv samt användarvänlig design som möter användarnas behov och förväntningar.</p>
              </li>
              <li>
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
                <p>Prototyper och testning - Skapa prototyper och interaktiva mockups för att testa användbarhet samt funktionalitet i tidiga skeden av designprocessen, sedan använda feedbacken för att förbättra designen innan den implementeras.</p>
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
                <p>Webbdesign - Skapa och implementera snygga samt funktionella designkoncept som passar kundens behov och varumärke.</p>
              </li>
              <li>
                <BiCheck style={{width: '2.5rem'}} className='service__list-icon' />
                <p>Anpassning av befintliga teman - Anpassa befintliga webbteman för att bättre matcha kundens krav och behov.</p>
              </li>
              <li>
                <BiCheck style={{width: '3rem'}} className='service__list-icon' />
                <p>Webbplatsutveckling - Bygga responsiva och användarvänliga webbplatser som laddar snabbt samt fungerar på alla enheter.</p>
              </li>
              <li>
                <BiCheck style={{width: '3rem'}} className='service__list-icon' />
                <p>Animering - Skapa dynamiska och engagerande webbsidor med hjälp av CSS-animationer samt JavaScript-effekter.</p>
              </li>
              <li>
                <BiCheck style={{width: '4rem'}} className='service__list-icon' />
                <p>Optimering för SEO - Optimera webbsidor för sökmotoroptimering (SEO) och därigenom hjälpa kunder att nå högre placeringar på sökmotorresultatsidor (SERP).</p>
              </li>
              <li>
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
              <p>Webbsidetestning och buggfixning - Genomföra omfattande testning av webbsidor för att hitta buggar och andra problem, sedan lösa dessa problem för att säkerställa att webbsidan fungerar korrekt på alla enheter.</p>
              </li>
              <li>
                <BiCheck style={{width: '5rem'}} className='service__list-icon' />
                <p>Underhåll av befintliga webbplatser - Uppdatera, underhålla och förbättra befintliga webbplatser för att säkerställa att de fungerar korrekt samt att de möter de senaste standarderna och kraven för webbutveckling.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
    
  )
}

export default Services
