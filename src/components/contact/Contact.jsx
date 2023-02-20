import React, { useRef } from 'react';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill, RiMessengerFill } from 'react-icons/ri'
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";


const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const formRef = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3t650l5', 'template_lugwmvk', formRef.current, 'uLDuCL8MxJ3aaQ79J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <section id='contact'>
        <h5>Ta kontakt</h5>
        <h2>Med Mig</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdEmail className='icon' />
              <h4>Email</h4>
              <h5>ch.olofsson@outlook.com</h5>
              <a href="mailto:ch.olofsson@outlook.com">Skicka Meddelande</a>
            </article>
            <article className="contact__option">
              <RiMessengerFill className='icon' />
              <h4>Messenger</h4>
              <h5>Christian Olofsson</h5>
              <a href="https://m.me/christian.olofsson1/" target="_blank">Skicka Meddelande</a>
            </article>
            <article className="contact__option">
              <RiWhatsappFill className='icon' />
              <h4>WhatsApp</h4>
              <h5>Christian Olofsson</h5>
              <a href="https://api.whatsapp.com/send?phone=46762220279" target="_blank">Skicka Meddelande</a>
            </article>
          </div>
          <form ref={formRef} onSubmit={handleSendEmail} >
            <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Ditt fullständiga namn' 
            required />
            <input 
            type="email" 
            name="email" 
            placeholder='Din Email' 
            required />
            <textarea name="message" cols={30} rows={7} placeholder='Ditt Meddelande' required ></textarea>
            <button 
            type='submit' 
            className='btn'>Skicka Meddelande</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
