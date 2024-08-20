import React from 'react';

const Login = () => {
    return (
        <div className="register-container">
        <div className='register-heading'>
            <h1>Unlock Your Full Potential</h1>
            <h2>Streamline your tasks, stay focused, and achieve more with our productivity app.</h2>
        </div>
        <div className='register'>
            <h1>Log to your account</h1>
            <p>Join us for an enhanced productivity experience.</p>
            <div className='register-inputs'>
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
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
                <button onClick={handleSubmit} disabled={!userVaild || !emailVaild || !pwdVaild || !matchPwdVaild ? true : false} className='register-btn'>Create an account</button>
            </div>
            <Link to={""} className='login-link'>Already have an Account</Link>
        </div>
    </div>
)}


export default Login;
