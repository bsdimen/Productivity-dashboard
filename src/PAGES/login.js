import React, { useState } from 'react';
import "../CSS/main.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login ()   {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const proceedLogin = (e) =>{
        e.preventDefault();
    }

    const validate =() => {
        let result = true;

        if(email === "" || email === null ){
            result = false
            toast.warning ("Please enter your email")
        }
    }

        return (
            <div className='login center-box'>
                <form className='login-form' onSubmit={proceedLogin}>
                    <input value={email} onChange={e=>setEmail(e.target.value)} className='login-input' type='email' placeholder='Email'/>
                    <input value={password} onChange={e=>setPassword(e.target.value)} className='login-input' type='password' placeholder='Password'/>
                    <Link href="#" className='shadow-btn'>Forogtten password </Link>
                    <button className='primary-btn'>Log in</button>
                </form>
            </div>
        );
}


