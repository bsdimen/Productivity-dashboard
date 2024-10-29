import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// =======================ICONS======================
import { InfoIcon, LockIcon, LockSlashIcon } from "./icons";

// =======================SERVICE======================
import useSignUp from "../../HOOKS/AUTH/useSignUp";

// =======================Regex======================
const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&!]).{8,28}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

const SignUp = () => {

    const userRef = useRef<HTMLInputElement | null>(null);
    const pwdRef = useRef<HTMLInputElement | null>(null);


    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [matchPwd, setMatchPwd] = useState("");
    const [email, setEmail] = useState("");

    const [userVaild, setVaildUser] = useState(false);
    const [pwdVaild, setVaildPwd] = useState(false);
    const [matchPwdVaild, setVaildMatchPwd] = useState(false);
    const [emailVaild, setVaildEmail] = useState(false);


    const [userFocus, setFocusUser] = useState(false);
    const [pwdFocus, setFocusPwd] = useState(false);
    const [matchPwdFocus, setFocusmatchPwd] = useState(false);
    const [emailFocus, setFocusEmail] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [sucess, setSucess] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const validationMessageVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            display: "none"
        },
        visible: {
            opacity: 1,
            y: 0,
            display: "block"
        },
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        const result = userRegex.test(user);
        setVaildUser(result);
    }, [user])

    useEffect(() => {
        const result = emailRegex.test(email);
        setVaildEmail(result);
    }, [email])

    useEffect(() => {
        const result = pwdRegex.test(pwd);
        setVaildPwd(result);
        const match = pwd === matchPwd;
        setVaildMatchPwd(match);
    }, [pwd, matchPwd])

    const mutation = useSignUp({ email: email, name: user, password: pwd })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate();

        if (!userRegex.test(user) || !emailRegex.test(email) || !pwdRegex.test(pwd)) {
        }



    }
    return (
        <div className='register'>
            <h1>Create new account</h1>
            <p>Join us for an enhanced productivity experience.</p>
            <div className='register-inputs'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='input-block'>
                        <input
                            value={user}
                            ref={userRef}
                            onChange={e => setUser(e.target.value)}
                            onFocus={() => { setFocusUser(true) }}
                            onBlur={() => { setFocusUser(false) }}
                            required
                            aria-invalid={userVaild ? "false" : "true"}
                            aria-describedby='userNote'
                            className='input-field'
                            type='text'
                            placeholder='Enter your name'
                        />
                        <p id='userNote' className={userFocus && user && !userVaild ? "instructions" : "offscreen"}>
                            <InfoIcon />
                            4-24 characters, must start with a letter. Allowed: letters, numbers, underscores, hyphens.
                        </p>
                    </div>

                    <div className='input-block'>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => { setFocusEmail(true) }}
                            onBlur={() => { setFocusEmail(false) }}
                            required
                            aria-invalid={emailVaild ? "false" : "true"}
                            aria-describedby='emailNote'
                            className='input-field'
                            type='email'
                            placeholder='Enter your email'
                        />
                        <p id='emilNote' className={emailFocus && email && !emailVaild ? "instructions" : "offscreen"}>
                            <InfoIcon />
                            This is not a valid email
                        </p>
                    </div>
                    <div className='input-block'>
                        <div className='input-password'>
                            <input
                                value={pwd}
                                ref={pwdRef}
                                onChange={e => setPwd(e.target.value)}
                                onFocus={() => { setFocusPwd(true) }}
                                onBlur={() => { setFocusPwd(false) }}
                                required
                                aria-invalid={pwdVaild ? "false" : "true"}
                                aria-describedby='pwdNote'
                                className='input-field'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                            />

                            <div className='show-password-icon' onClick={togglePasswordVisibility}>
                                {showPassword && <LockSlashIcon />}
                                {!showPassword && <LockIcon />}

                            </div>
                        </div>
                        <motion.p
                            id='pwdNote'
                            className={pwdFocus && pwd && !pwdVaild ? "instructions" : "offscreen"}
                            initial="hidden"
                            animate={pwdFocus && pwd && !pwdVaild ? "visible" : "hidden"}
                            variants={validationMessageVariants}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <InfoIcon />
                            Password must be 8-28 characters, with at least one lowercase, one uppercase, one digit, and one special character.
                        </motion.p>
                    </div>
                    <div className='input-block'>
                        <input
                            value={matchPwd}
                            onChange={e => setMatchPwd(e.target.value)}
                            onFocus={() => { setFocusmatchPwd(true) }}
                            onBlur={() => { setFocusmatchPwd(false) }}
                            required
                            aria-invalid={matchPwdVaild ? "false" : "true"}
                            aria-describedby='matchPwdNote'
                            className='input-field'
                            type='password'
                            placeholder='Confirm your password'
                        />
                        <p id='matchPwdNote' className={matchPwdFocus && matchPwd && !matchPwdVaild ? "instructions" : "offscreen"}>
                            <InfoIcon />
                            The password does not match
                        </p>
                    </div>
                    <button type='submit' className='register-btn'>Create an account</button>
                </form>
            </div>
            <Link to="../" className='login-link'>Already have an Account</Link>
        </div>
    );
}

export default SignUp;
