import React from 'react'
import Styles from './AboutContent.module.css';
import profile_logo from './images/profile_logo.png'

const AboutContent = () => {
  return (
    <>
      <div className={`${Styles.content}`}>
        <h1 className={`${Styles.title}`}>About Us!</h1>
        <div className={`${Styles.about_para}`}>
          <p>
            Embark on unforgettable adventures with our premier travel agency. From exotic destinations to personalized itineraries, we curate journeys tailored to your wanderlust. Let us be your compass to discovering the world's wonders.
          </p>
        </div>
        <div className={`${Styles.our_team}`}>
          <h1 className="team">Our Team</h1>
          <div className={`${Styles.cards}`}>
            <div className={`${Styles.card}`} style={{ width: '18rem' }}>
              <a href="./images/profile_logo.png" className="profile-img circular-image"><img src={profile_logo} alt="profile-img" widht="20px" height="20px" /></a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <button className="designation">Designation</button>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
            <div className={`${Styles.card}`} style={{ width: '18rem' }}>
              <a href="./images/profile_logo.png" className="profile-img circular-image"><img src={profile_logo} alt="profile-img" widht="20px" height="20px" /></a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <button className="designation">Designation</button>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
            <div className={`${Styles.card}`} style={{ width: '18rem' }}>
              <a href="./images/profile_logo.png" className="profile-img circular-image"><img src={profile_logo} alt="profile-img" widht="20px" height="20px" /></a>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <button className="designation">Designation</button>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="mb-3 btn btn-primary" >See Profile</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={`btn-outline`}>
        <button className={`${Styles.book_button} btn-outline-content `} type="submit" href="#">Book Now</button>
      </div>

    </>
  )
}

export default AboutContent
