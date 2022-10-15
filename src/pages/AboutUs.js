import React from 'react';
import Header from '../components/Header';
import Team from '../images/team.png'
import Footer from '../components/Footer';
import Project from '../images/project3.png'

function AboutUs() {
    return(
        <div>
             <Header />
             <section className='about-us-header'>
                <div className='about-us-body'>
                <h1 className='intro-content'>Who we are</h1>
                <p className='para-one intro-content'>We are a dedicated Online Tuition company who aims to provide the best quality service
                yo you and your child, our aim is to ensure that not only achioeve their target grades but exceed expectations 
                and excel because we beleive all kids have the potential for greatness, they just need to right attention 
                and that is what we are here for!</p>
                <button className="about-us-button">Find a Tutor</button>
                </div>
                <div className='tester'>
                    <img src={Team} className="team-img"/>
                </div>
            </section>
            <section className='about-us-header-2'>
                <div className='about-us-body'>
                <h1 className='intro-content'>What we provide</h1>
                <p className='para-one intro-content'>All our tutors have years of tutoring experience and are all working in 
                "Use a word to explain people working In good industries and roles, maybe include all university graduates?". 
                During the introduction with the tutors, this is your chance to get to know our tutors before committing to ensure 
                they are right for your child!</p>
                <button className="about-us-button">Find a Tutor</button>
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