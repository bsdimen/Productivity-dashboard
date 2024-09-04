import React, { useEffect, useRef, useState } from 'react';

import { InfoIcon } from "./icons";
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogin } from '../../SERVICES/loginServ';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;


const Login = () => {

    const emailRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();


    const [email, setEmail] = useState<string>();
    const [pwd, setPwd] = useState<string>();

    const [emailFocus, setEmailFocus] = useState<boolean>(false);
    const [pwdFocus, setPwdFocus] = useState<boolean>(false);

    const [emailValid, setEmailVaild] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && pwd) {
            useLogin(email, pwd)
        }
    }

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    })


    return (
        <section className='login-container'>
            <h1>Log to your account</h1>
            <p>Join us for an enhanced productivity experience.</p>
            <form onSubmit={handleSubmit} className='register-inputs'>
                <input
                    value={email}
                    ref={emailRef}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className='input-field'
                    type='email'
                    placeholder='Enter your email'
                />

                <input
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                    required
                    className='input-field'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                />

                <div className='show-password-block'>
                    <input type="checkbox" className="show-password" checked={showPassword} onChange={togglePasswordVisibility} />
                    <span className="showPasswordLabel">Show Password</span>
                </div>
                <button type='submit' className='login-btn'>login</button>
            </form>
            <p className={errorMsg ? "instructions" : "offscreen"}>
                <InfoIcon />
                This is not a valid email
            </p>
            <NavLink to={"/signup"} className='login-link'>You don't have an Account</NavLink>
        </section>
    )
}


export default Login;
