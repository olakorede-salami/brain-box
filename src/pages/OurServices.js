import React from 'react';
import Header from '../components/Header';
import teacher from '../images/teacher.png'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import Footer from '../components/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import TestNav from '../components/TestNav';
import {useEffect} from 'react';
import ReactGA from "react-ga4";

function OurServices() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, []);
    
    return(
        <div>
            <Header />
            <section className='our-services-main'>
                <div className='our-services-body'>
                <h1 className='intro-content'>What We Offer</h1>
                <h3 className='intro-content'>Maths tutors are a click away!</h3>
                <p className='para-one intro-content'>Our services are provided all online as we believe in adapting with the times.
                Tehcnology has allows us to match your child with an expert tutor to provide the best tuition services</p>
                <Link to="/book-a-session"><button className="our-services-button">Find a Tutor</button></Link>
                </div>
                <div className='tester'>
                    <img src={teacher} className="our-services-image"/>
                </div>
            </section>
            <section className='our-services-how-to-find'>
                <h1 className='intro-content'>How it works</h1>
                <div>
                    <h3 className='intro-content'>Just three simple steps to get your child prepared for the exams ahead.</h3>
                    <div className='how-to-find'>
                        <div className='how-to-find-1'>
                        <img src={one}  className="how-to-find-img"/>
                        <p className='how-to-find-p'>Complete the form to book either an independent or group session depending on the specific requirements. This form can be found by clicked on the 'Get Started Now' button below</p>
                        </div>
                        <div className='how-to-find-2'>
                        <img src={two} className="how-to-find-img"/>
                        <p className='how-to-find-p'>Using our AI technology, will match you with one of our high quality tutors.
                        Our expert tutors will reach out to you to introduce themselves and work with you to onboard you and your child 
                        onto a session</p>
                        </div>
                        <div className='how-to-find-3'>
                        <img src={three} className="how-to-find-img"/>
                        <p className='how-to-find-p'>Online sessions will begin and we will be focused on your child's success!</p>
                        </div>
                    </div>
                    <Link to="/book-a-session"><button className='start-tuition'>Get Started Now</button></Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default OurServices;