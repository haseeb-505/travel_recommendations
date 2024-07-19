import React from 'react'
import facebook_logo from './images/facebook.png';
import x_logo from './images/x.png';
import insta_logo from './images/instagram.jpeg';
import youtube_logo from './images/youtube.png';
import Styles from './Social_links.module.css';


const Social_links = () => {
  return (
    <div className={`${Styles.social_media_links}`}>
            <a href="#" className={`social-link-facebook ${Styles.circular_image}`}>
                <img src={facebook_logo} alt="Facebook" width="40px" height="40px"/>
            </a>
            <a href="#" className={`social-link-x ${Styles.circular_image}`}>
                <img src={x_logo} alt="Twitter" width="40px" height="40px"/>
            </a>
            <a href="#" className={`social-link-insta ${Styles.circular_image}`}>
                <img src={insta_logo} alt="Instagram" width="40px" height="40px"/>
            </a>
            <a href="#" className={`social-link-youtube ${Styles.circular_image}`}>
                <img src={youtube_logo} alt="YouTube" width="40px" height="40px"/>
            </a>
    </div>

  )
}

export default Social_links
