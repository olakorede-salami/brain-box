import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import {useEffect} from 'react';
import ReactGA from "react-ga4";

function Faqs() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, []);
    
    return ( 
        <div>
            <Header />
            <section className='faqs-whole'>
                    <h1 className='faq-h1'>FAQs</h1>
                <div className='faqs'>
                    <h2 className='faq-h2'>What subjects do you cover?</h2>
                    <p className='faq-p'> We currently cover GCSE Maths only however we plan to expand out into 
                        further subject area and subject levels. To keep up with our latest updates, please send us an email on brainboxtuitions@gmail.com</p>
                    <h2 className='faq-h2'>How do you find these excellent tutors?</h2>
                    <p className='faq-p'>Our main priority is to put the best tutors infant of your child and to ensure
                        this we go through testing of our tutors backgrounds and skill level to ensure they are the best of the best</p>
                    <h2 className='faq-h2'>What exam boards do you cover?</h2>
                    <p className='faq-p'>We cover all the GCSE Maths Exam Boards done for foundation and higher Maths in the UK which are Edexcel, AQA and OCR</p>
                </div>
            </section>
            <Footer />
        </div>
     );
}

export default Faqs;