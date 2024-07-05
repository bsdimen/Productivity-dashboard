import React from 'react';
import "../CSS/main.css";

export default function Login ()   {

        return (
            <div className='login center-box'>
                <form className='login-form' >
                    <input className='login-input' type='email'/>
                    <input className='login-input' type='password'/>
                    <button>Log in</button>
                </form>
            </div>
        );
}


