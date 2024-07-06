import React from 'react';
import "../CSS/main.css";

export default function Login ()   {

        return (
            <div className='login center-box'>
                <form className='login-form' >
                    <input className='login-input' type='email' placeholder='Email'/>
                    <input className='login-input' type='password' placeholder='Password'/>
                    <button className='shadow-btn'>Forogtten password </button>
                    <button className='primary-btn'>Log in</button>
                </form>
            </div>
        );
}


