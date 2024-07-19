import React from 'react';
import Styles from './About.module.css';
import Navigation2 from '../Navigation/Navigation2';
import Social_links from '../social_links/Social_links';
import Time from '../live_time/Time'
import AboutContent from './AboutContent/AboutContent';

const About = () => {
  return (
    <>
      <Navigation2/>
      <Time/>
      <Social_links/>
      <AboutContent/>
    </>
  )
}

export default About
