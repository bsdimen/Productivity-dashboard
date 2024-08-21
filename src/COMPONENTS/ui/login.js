import React, { useEffect, useRef, useState } from 'react';

import info_icon from "../../ASSETS/info-icon.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { handleLogin } from '../../SERVICES/loginServ';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;


const Login = () => {

    const emailRef = useRef();

    const navigate = useNavigate();


    const [email,setEmail] = useState();
    const [pwd,setPwd] = useState();

    const [emailFocus,setEmailFocus] = useState(false);
    const [pwdFocus,setPwdFocus] = useState(false);

    const [emailValid,setEmailVaild]= useState(false);
    const [errorMsg, setErrorMsg]= useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await handleLogin(email,pwd);
        if(response) {
            navigate("/dashboard")
        }
    }

    useEffect (()=>{
        emailRef.current.focus();
    })


    return (
        <section  className='login-container'>
            <h1>Log to your account</h1>
            <p>Join us for an enhanced productivity experience.</p>
            <div className='register-inputs'>
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
                    <input type="checkbox" className="show-password" checked={showPassword} onChange={togglePasswordVisibility}/>
                    <span className="showPasswordLabel">Show Password</span>
                </div>
                <button onClick={handleSubmit}  className='login-btn'>login</button>
            </div>
            <p  className={ errorMsg ? "instructions" :"offscreen"  }>
                    <img className="info_icon" src={info_icon} />
                    This is not a valid email
                </p>
            <NavLink to={""} className='login-link'>You don't have an Account</NavLink>
        </section>
)}


export default Login;
