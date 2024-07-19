import React from 'react';
import Navigation2 from '../Navigation/Navigation2';
import Social_links from '../social_links/Social_links';
import Time from '../live_time/Time'
import HomeContent from './HomeContent';

const Home = () => {
  return (
    <>
      <Navigation2 />
      <Time />
      <Social_links />
      <HomeContent />
    </>
  )
}

export default Home
