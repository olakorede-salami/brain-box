import React from "react";
import { Route, Routes, Link } from 'react-router-dom';

function ServicePlan() {
    return(
        <div>
            <section className="our-services">
                <div>
                    <h1 className="services-header">Service Plan</h1>
                </div>
            <div className="services-group">
                <div className="services">
                <h2>Group Sessions</h2>
                <ul className="services-list">
                    <li className="services-list-items">GCSE Mathematics Lessons</li>
                    <li className="services-list-items">1 Hour Sessions</li>
                    <li className="services-list-items">Class size of 10 - 15 students</li>
                    <li className="services-list-items">Fixed time/sessions </li>
                    <li className="services-list-items">Interactive Virtual Classroom</li>
                </ul>
                <div className="price-div">
                    <p className="currency">£</p>
                    <p className="price">10</p>
                    <p className="session">Per Session</p>
                    <Link to="/book-a-session"><button className="services-button">Book a Session</button></Link>
                    <a className="services-link" href="#">Learn more about Group Sessions</a>
                    </div>
                </div>
                <div className="services">
                <h2>Independent Sessions</h2>
                <ul className="services-list">
                    <li className="services-list-items">GCSE Mathematics Lessons</li>
                    <li className="services-list-items">Direct 121 sessions with a tutor</li>
                    <li className="services-list-items">Time of session flexible</li>
                    <li className="services-list-items">Homework set</li>
                    <li className="services-list-items">Interactive Virtual Classroom</li>
                </ul>
                <div className="price-div">
                    <p className="currency">£</p>
                    <p className="price">35</p>
                    <p className="session">Per Session</p>
                    <Link to="/book-a-session"><button className="services-button">Book a Session</button></Link>
                    <a className="services-link" href="#">Learn more about Independent Sessions</a>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default ServicePlan;