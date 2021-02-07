import React from 'react'

function Login() {
    return (
        <>
            <input className="input__text" type="mobile" placeholder="mobile number"
            name="email" required></input>
            <input className="input__text" type="password" placeholder="password" minLength="8" 
            name="password" required></input>
            <input className="input__text" type="password" placeholder="confirm password" minLength="8" 
            name="password" required></input>
        </>
    )
}

export default Login
