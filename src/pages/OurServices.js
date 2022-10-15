import React from 'react';
import Header from '../components/Header';
import services from '../images/services 2.png'
import teacher from '../images/teacher.png'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import Footer from '../components/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import TestNav from '../components/TestNav';

function OurServices() {
    return(
        <div>
            <Header />
            <section className='our-services-main'>
                <div className='our-services-body'>
                <h1 className='intro-content'>What We Offer</h1>
                <h3 className='intro-content'>Maths tutors are a click away</h3>
                <p className='para-one intro-content'>Our services are provided all online as we believe in adapting with the times
                Tehcnology has allows us to match our export tutors with your child to provide the best tuition services in the market!</p>
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
                        <p className='how-to-find-p'>Complete the form to book either an independent or group session depending on the specific requirements your child</p>
                        </div>
                        <div className='how-to-find-2'>
                        <img src={two} className="how-to-find-img"/>
                        <p className='how-to-find-p'>Our dedicated team will match your student with one of our high quality expert Maths tutors. 
                        Our export tutors will reach out to you to introduce themselves and work with you to onboard you and your child 
                        onto the sessions we currently have</p>
                        </div>
                        <div className='how-to-find-3'>
                        <img src={three} className="how-to-find-img"/>
                        <p className='how-to-find-p'>Online sessiosn will begin and we will be focused on your childs success in Maths going forward!</p>
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