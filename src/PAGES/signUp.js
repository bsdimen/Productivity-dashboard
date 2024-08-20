import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// =======================ICONS======================
import info_icon from "../ASSETS/info-icon.svg";
// =======================SERVICE======================
import {handleSignUp} from "../SERVICES/signUpServ";

// =======================Regex======================
const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&!]).{8,28}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

const SignUp = () => {

    const userRef  = useRef();
    const pwdRef   = useRef();
    const emailRef = useRef();

    const [user, setUser]             = useState("");
    const [pwd, setPwd]               = useState("");
    const [matchPwd, setMatchPwd]     = useState("");
    const [email, setEmail]           = useState("");

    const [userVaild, setVaildUser]         = useState(false);
    const [pwdVaild, setVaildPwd]           = useState(false);
    const [matchPwdVaild, setVaildMatchPwd] = useState(false);
    const [emailVaild, setVaildEmail]       = useState(false);

    
    const [userFocus, setFocusUser]         = useState(false);
    const [pwdFocus, setFocusPwd]           = useState(false);
    const [matchPwdFocus, setFocusmatchPwd] = useState(false);
    const [emailFocus, setFocusEmail]       = useState(false);

    const [errMsg,setErrMsg] = useState("");
    const [sucess,setSucess] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(()=>{
            userRef.current.focus();
    },[])

    useEffect(()=>{
        const result = userRegex.test(user);
        setVaildUser(result);
        console.log(result);
    },[user])

    useEffect(()=>{
        const result = emailRegex.test(email);
        setVaildEmail(result);
    },[email])

    useEffect(()=>{
        const result = pwdRegex.test(pwd);
        console.log(result);
        setVaildPwd(result);
        const match = pwd === matchPwd;
        setVaildMatchPwd(match);
    },[pwd,matchPwd])

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!userRegex.test(user) || !emailRegex.test(email) || !pwdRegex.test(pwd)) {
            return;
        }
        const response = await handleSignUp({fullname: user, email: email, password: pwd});
        

    }

    return (
        <div className="register-container">
            <div className='register-heading'>
                <h1>Unlock Your Full Potential</h1>
                <h2>Streamline your tasks, stay focused, and achieve more with our productivity app.</h2>
            </div>
            <div className='register'>
                <h1>Create new account</h1>
                <p>Join us for an enhanced productivity experience.</p>
                <div className='register-inputs'>
                    <input 
                        value={user} 
                        ref={userRef}
                        onChange={e => setUser(e.target.value)} 
                        onFocus={()=>{setFocusUser(true)}}
                        onBlur={()=> {setFocusUser(false)}}
                        required
                        aria-invalid={userVaild ? "false" : "true"}
                        aria-describedby='userNote'
                        className='input-field' 
                        type='text' 
                        placeholder='Enter your name'
                        // ||
                    />
                    <p id='userNote' className={ userFocus && user && !userVaild ? "instructions" :"offscreen"  }>
                        <img className="info_icon" src={info_icon} />
                        4-24 characters, must start with a letter. Allowed: letters, numbers, underscores, hyphens.
                    </p>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        onFocus={()=>{setFocusEmail(true)}}
                        onBlur={()=> {setFocusEmail(false)}}
                        required
                        aria-invalid={emailVaild ? "false" : "true"}
                        aria-describedby='emailNote'
                        className='input-field' 
                        type='email' 
                        placeholder='Enter your email'
                    />
                     <p id='emilNote' className={ emailFocus && email && !emailVaild ? "instructions" :"offscreen"  }>
                        <img className="info_icon" src={info_icon} />
                        This is not a valid email
                    </p>
                    <input 
                        value={pwd} 
                        ref={pwdRef}
                        onChange={e => setPwd(e.target.value)} 
                        onFocus={()=>{setFocusPwd(true)}}
                        onBlur={()=> {setFocusPwd(false)}}
                        required
                        aria-invalid={pwdVaild ? "false" : "true"}
                        aria-describedby='pwdNote'
                        className='input-field' 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder='Enter your password'
                    />

                    <div className='show-password-block'>
                        <input type="checkbox" className="show-password" checked={showPassword} onChange={togglePasswordVisibility}/>
                        <span className="showPasswordLabel">Show Password</span>
                    </div>

                    <p id='pwdNote' className={ pwdFocus && pwd && !pwdVaild ? "instructions" :"offscreen"  }>
                        <img className="info_icon" src={info_icon} />
                        Password must be 8-28 characters, with at least one lowercase, one uppercase, one digit, and one special character.
                    </p>
                    <input 
                        value={matchPwd} 
                        onChange={e => setMatchPwd(e.target.value)} 
                        onFocus={()=>{setFocusmatchPwd(true)}}
                        onBlur={()=> {setFocusmatchPwd(false)}}
                        required
                        aria-invalid={matchPwdVaild ? "false" : "true"}
                        aria-describedby='matchPwdNote'
                        className='input-field' 
                        type='password' 
                        placeholder='Confirm your password'
                    />
                    <p id='matchPwdNote' className={ matchPwdFocus && matchPwd && !matchPwdVaild ? "instructions" :"offscreen"  }>
                        <img className="info_icon" src={info_icon} />
                        The password does not match
                    </p>
                    <button onClick={handleSubmit} disabled={!userVaild || !emailVaild || !pwdVaild || !matchPwdVaild ? true : false} className='register-btn'>Create an account</button>
                </div>
                <Link to={""} className='login-link'>Already have an Account</Link>
            </div>
        </div>
    );
}

export default SignUp;
