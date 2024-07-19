import React from 'react';
import Styles from './Welcome.module.css';
import Navigation2 from '../Navigation/Navigation2';
import Social_links from '../social_links/Social_links';
import Time from '../live_time/Time';

const Welcome = () => {
  return (
    <>
      <Navigation2/>
      <Time/>
      <Social_links/>

      <div className={`${Styles.content}`}>
            <h1>Welcome to TravelBloom</h1>
            <p>Discover Your World With Us!</p>
        </div>
        <div className={` btn-outline`}>
            <button className={`${Styles.book_button} btn-outline-content `}type="submit" href="#">Book Now</button>
        </div>
        {/* results */}
        <div id="results-container">
            <div id="results"></div>
        </div>
    </>
  )
}

export default Welcome
