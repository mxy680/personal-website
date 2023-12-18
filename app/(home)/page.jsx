import React from 'react';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Skills from './Skills';
import Testimonials from './Testimonials';
import { apiPath } from '../config';

const HomePage = () => {

    return (
        <main>
            <AboutMe />
            <Experiences />
            <Skills />
            <Testimonials />
        </main>
    );
};

export default HomePage;

