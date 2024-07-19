import React from 'react';
import Styles from './SignIn.module.css';
import Navigation2 from '../Navigation/Navigation2';
// import SignUp from './SignUp';

const SignIn = () => {
  return (
    <div>
      <Navigation2/>
      <div className={`${Styles.auth_form}`} id="signin-form">
            <h2 className="text-center">Sign In</h2>
            <form className={`{sign_in_form}`} id="sign-in-form">
                <div className={`${Styles.form_group}`}>
                    <label for="signin-username" className="sign-in-label">Username</label>
                    <input type="text" className="form-control" id="signin-username" placeholder="Enter username" required/>
                </div>
                <div className={`${Styles.form_group}`}>
                    <label for="signin-password" className="sign-in-label">Password</label>
                    <input type="password" className="form-control" id="signin-password" placeholder="Enter password" required/>
                </div>
                <button type="submit" className={`btn btn-primary btn-block`}>Sign In</button>
            </form>
            <div className={`${Styles.auth_toggle}`}>
                <p>Don't have an account? <a href="/signUp" id="show-signup">Sign Up</a></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn
