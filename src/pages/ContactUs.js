import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { HiOutlineMail } from "react-icons/hi";

function ContactUs() {
    return ( 
        <div>
            <Header />
                <section className='contact'>
                <h1 className='contact-content'>Contact Us</h1>
                    <div href="mailto:brainboxtuitions@gmail.com" className='email-contact-us'>
                        <h3 className='contact-email'>Email us</h3>
                        <HiOutlineMail className='email'/>
                        <a className='email-link' href="mailto:brainboxtuitions@gmail.com">brainboxtuitions@gmail.com</a>
                    </div>
                    <form action='https://formsubmit.co/brainboxtuitions@gmail.com' method='POST' className='contact-us-form'>
                        <h3 className='intro-content'>Fill the form below and we will be in touch</h3>
                        <input required type='text' name='name' placeholder='Name' className='contact-us-input'/>
                        <input required type='email' name='email' placeholder='Email Address' className='contact-us-input'/>
                        <textarea required name='message' placeholder='Message' className='contact-us-input'/>
                        <button type='submit' className='start-tuition'>Submit</button>
                    </form>
                </section>
            <Footer />
        </div>
     );
}

export default ContactUs;