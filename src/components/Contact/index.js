import React, { useState } from "react";
import {validateEmail} from '../../utils/helpers';
import './style.css';

function Contact() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
       <div className="contact-container">
            <div className="contact-intro">
                <h2>You had me at 'Hello'</h2>
                <h3>Contact</h3>
            </div>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className="form-object-container">
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="form-object-container">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="form-object-container">
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                <button type='submit'>Submit</button>
            </form>
       </div> 
    );   
};

export default Contact;