import React from 'react';
import Styles from './HomeContent.module.css';

const HomeContent = () => {
  return (
    <div className={`${Styles.content}`}>
        <h1>Explore Your Dream Destinations here!</h1>
        <p>
            Discover your next adventure with us! TravelBloom believes travel is more than exploration; it's about cultural immersion, nature's beauty, and cherished memories. They inspire unique journeys, whether seeking relaxation, adventure, or historical intrigue. With exceptional service, they are your partner in discovering endless wonders and making each trip extraordinary.
        </p>
        <div className={`btn-outline`}>
            <button className={`${Styles.book_button} btn-outline-content `}type="submit" href="#">Book Now</button>
        </div>
        {/* results */}
        <div id="results-container">
            <div id="results"></div>
        </div>
    </div>
  )
}

export default HomeContent
