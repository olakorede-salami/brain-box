import React from 'react'
import work from '../images/work3.webp'
import { Route, Routes, Link } from 'react-router-dom';

function LandingIntro() {
    return (
        <div>
            <section className="intro">
                <div className="intro-text"> 
                <h1 className='intro-content'>Online Tuition Made Easy!</h1>
                <h3 className='intro-content'>Get your Child Ready to Excel in Maths</h3>
                <p className='intro-content'>Give your child a math advantage with our premier online tutoring service! We specialize in providing exceptional math tuition for GCSE students, ensuring their success. Our expert tutors deliver top-quality education, empowering your child to excel in math. Invest in their future with our targeted and results-driven approach. Unlock their full potential and watch them thrive!</p>
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