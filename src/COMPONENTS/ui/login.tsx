import React, { useEffect, useRef, useState } from 'react';

import { InfoIcon, LockIcon, LockSlashIcon } from "./icons";

import { NavLink, useNavigate } from 'react-router-dom';
import useLogIn from '../../AUTH/useLogin';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;


const Login = () => {

    const emailRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { mutate, isError, isSuccess } = useLogIn({ email, password });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();

        if (isError) {
            setErrorMsg(true);
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
                <div className='input-block'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='input-field'
                        type='email'
                        placeholder='Enter your email'
                    />
                </div>

                <div className='input-block'>
                    <div className='input-password'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='input-field'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter your password'
                        />

                        <div className='show-password-icon' onClick={togglePasswordVisibility}>
                            {showPassword && <LockSlashIcon />}
                            {!showPassword && <LockIcon />}

                        </div>
                        <p className={errorMsg ? "instructions" : "offscreen"}>
                            <InfoIcon />
                            the password or email is unvalid
                        </p>
                    </div>
                </div>


                <button type='submit' className='login-btn'>login</button>
            </form>
            <NavLink to={"/signup"} className='login-link'>You don't have an Account</NavLink>
        </section>
    )
}


export default Login;
