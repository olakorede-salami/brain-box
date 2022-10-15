import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import BookASessionForm from '../components/BookASessionForm';

function BookASession() {
    return (
        <div>
        <Header />
            <section>
                <div className='book-a-session-div'>
                    <h1>Book A Session</h1>
                    <form action='https://formsubmit.co/brainboxtuitions@gmail.com' method='POST' className='book-a-session-form'>
                        <h2 className='intro-content'>Fill in the infomation below</h2>
                        <input type='text' name='student' placeholder='Name of Student' className='book-a-session-input'/>
                        <input type='text' name='guardian' placeholder='Name of Guardian' className='book-a-session-input'/>
                        <input type='email' name='email' placeholder='Email Address' className='book-a-session-input'/>
                        <input type='tel' name='tel' placeholder='Contact Number' className='book-a-session-input'/>
                        <textarea type='text' name='message' placeholder='Notes' className='book-a-session-input'/>
                        <button type='submit' className='start-tuition start-tuition-button'>Submit</button>
                    </form>
                    {/* <BookASessionForm /> */}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BookASession;