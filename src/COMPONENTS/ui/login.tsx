import React, { useEffect, useRef, useState } from 'react';

import { InfoIcon } from "./icons";
import { NavLink, useNavigate } from 'react-router-dom';
import login from '../../AUTH/useLogin';
import useLogIn from '../../AUTH/useLogin';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;


const Login = () => {

    const emailRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const mutate = useLogIn({ email, password });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate.mutate();
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='input-field'
                    type='email'
                    placeholder='Enter your email'
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
