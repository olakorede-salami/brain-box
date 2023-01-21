import React from 'react'
import Header from '../components/Header'
import LandingIntro from '../components/LandingIntro';
import ServicePlan from '../components/ServicePlan';
import Footer from '../components/Footer';
import TestNav from '../components/TestNav';
import {useEffect} from 'react';
import ReactGA from "react-ga4";

function LandingPage() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, []);

    return (
        <div>
        <Header />
        {/* <TestNav /> */}
        <body className="body">
        <LandingIntro />
        <ServicePlan />
        <Footer />
        </body>
        </div>
    )
}

export default LandingPage;