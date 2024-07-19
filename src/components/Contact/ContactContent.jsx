import React from 'react';
import Styles from './ContactContent.module.css';

const ContactContent = () => {
  return (
    <div>
        <div className={`${Styles.contact}`}>
            <h1>Contact Us!</h1>
            <p>Get in touch!</p>
        </div>
        <form action="submit" className={`${Styles.contact_form}`}>
            <div className={`${Styles.form_group}`}>
                <label htmlFor="name">Name</label><br />
                <input type="text" className={`form_control`} id="name" aria-describedby="nameHelp" placeholder="Enter Name" />
            </div>
            <div className={`${Styles.form_group}`}>
                <label htmlFor="exampleInputEmail1">Email</label><br />
                <input type="emai" className={`form_control`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" /><br />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className={`${Styles.form_group}`}>
                <label htmlFor="message">Message</label><br />
                <textarea name="user-message" id="user-message" cols="48.95" rows="5" placeholder="Type Your Message here!"></textarea>            
            </div>
            <div className={`${Styles.form_group}`}>
                <input type="checkbox" className={`${Styles.form_check_input}`}id="exampleCheck1" />
                <label className={`${Styles.form_check_label}`} htmlFor="exampleCheck1">You are a human!</label>            
            </div>
            <button type="submit" className={`btn btn-primary`}>Submit</button>
        </form>
    </div>
  )
}

export default ContactContent
