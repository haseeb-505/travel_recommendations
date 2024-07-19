import React from 'react';
import Navigation2 from '../Navigation/Navigation2';
import Social_links from '../social_links/Social_links';
// import Styles from './Contact.module.css';
import ContactContent from './ContactContent';
import Time from '../live_time/Time';

const Contact = () => {
  return (
    <>
    <Navigation2/>
    <Time/>
    <Social_links/>
    <ContactContent/>
      
    </>
  )
}

export default Contact
