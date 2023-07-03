import React from 'react';
import Header from '../components/Header';
import Team from '../images/team.png'
import Footer from '../components/Footer';
import Project from '../images/project3.png'
import { Route, Routes, Link } from 'react-router-dom';
import {useEffect} from 'react';
import ReactGA from "react-ga4";


function AboutUs() {
    
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, []);

    return(
        <div>
             <Header />
             <section className='about-us-header'>
                <div className='about-us-body'>
                <h1 className='intro-content'>Who we are</h1>
                <p className='para-one intro-content'>We are a dedicated Online Tuition company who aims to provide the best quality service
                to you and your child, our aim is to ensure that not only achieve their target grades but exceed expectations 
                and excel because we beleive all kids have the potential for greatness, they just need to right attention 
                and that is what we are here for!</p>
                <Link to="/book-a-session"><button className="about-us-button">Find a Tutor</button></Link>
                </div>
                <div className='tester'>
                    <img src={Team} className="team-img"/>
                </div>
            </section>
            <section className='about-us-header-2'>
                <div className='about-us-body'>
                <h1 className='intro-content'>What we provide</h1>
                <p className='para-one intro-content'>All our tutors have years of tutoring experience and are all working in 
                and are all university graduates currently working in industries and can share their vast knowledge. 
                During the introduction with the tutors, this is your chance to get to know them better!</p>
                <Link to="/book-a-session"><button className="about-us-button">Find a Tutor</button></Link>
                </div>
                <div className='tester'>
                    <img src={Project} className="team-img2"/>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUs;