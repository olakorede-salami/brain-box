import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Booking from '../images/booking.png'
import {useEffect} from 'react';
import ReactGA from "react-ga4";

function BookASession() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, []);

    return (
        <div>
        <Header />
            <section>
                <div className='book-a-session-div'>
                    <h1 className='book-a-session-header'>Book A Session</h1>
                    <div className='book-a-session-div2'>
                    <img src={Booking} className="team-img3"></img>
                    <form action='https://formsubmit.co/brainboxtuitions@gmail.com' method='POST' className='book-a-session-form'>
                        <h2 className='intro-content'>Fill in the infomation below</h2>
                        <input type='text' name='student' placeholder='Name of Student' className='book-a-session-input'/>
                        <input type='text' name='guardian' placeholder='Name of Guardian' className='book-a-session-input'/>
                        <input type='email' name='email' placeholder='Email Address' className='book-a-session-input'/>
                        <input type='tel' name='tel' placeholder='Contact Number' className='book-a-session-input'/>
                        <select name='subject' className='book-a-session-input'>
                            <option value="" disabled selected>What Tier are you interested in?</option>
                            <option value="Maths">Foundation Maths</option>
                            <option value="Maths">Higher Maths</option>
                        </select>
                        <select name='session' className='book-a-session-input'>
                            <option value="" disabled selected>What Session Type are you interested in?</option>
                            <option value="Group">Group Sessions</option>
                            <option value="Independent">Independent Sessions</option>
                        </select>
                        <textarea type='text' name='message' placeholder='Message' className='book-a-session-input'/>
                        <button type='submit' className='start-tuition start-tuition-button'>Submit</button>
                    </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BookASession;