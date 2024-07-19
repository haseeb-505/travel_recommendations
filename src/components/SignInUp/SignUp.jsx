import React from 'react';
import SignIn from './SignIn';
import Navigation2 from '../Navigation/Navigation2';
import Styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div>
        <Navigation2/>
      <div className={`${Styles.auth_form}`} id="signup-form">
            <h2 class="text-center">Sign Up</h2>
            <form id="sign-up-form">
                <div class="form-group">
                    <label for="signup-username">Username</label>
                    <input type="text" class="form-control" id="signup-username" placeholder="Enter username" required/>
                </div>
                <div class="form-group">
                    <label for="signup-email">Email</label>
                    <input type="email" class="form-control" id="signup-email" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                    <label for="signup-password">Password</label>
                    <input type="password" class="form-control" id="signup-password" placeholder="Enter password" required/>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
            </form>
            <div class="auth-toggle">
                <p>Already have an account? <a href="/signIn" id="show-signin">Sign In</a></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp
