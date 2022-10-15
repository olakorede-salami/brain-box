import React from 'react'
import work from '../images/work.png'
import { Route, Routes, Link } from 'react-router-dom';

function LandingIntro() {
    return (
        <div>
            <section className="intro">
                <div className="intro-text"> 
                <h1 className='intro-content'>Online Tuition Made Easy!</h1>
                <h3 className='intro-content'>Get your Child Ready to Achieve Greatness!</h3>
                <p className='intro-content'>As the new academic year begins, we need to begin preparing for exams. We are here to provide the 
                    support and guidance your child needs to ensure 
            they are ready for their exams in summer. Our expereinced tutors will be with your child all along the way!
                </p>
                <Link to="/book-a-session"><button className="start-tuition">Start Tuition</button></Link>
                </div>
                <div>
                    <img className="intro-img" src={work}></img>
                </div>
            </section>
        </div>
    )
}

export default LandingIntro;