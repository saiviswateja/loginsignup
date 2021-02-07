import React from 'react'

function Register() {
    return (
        <>
            <input className="input__text" type="mobile" placeholder="mobile number"
            name="email" required></input>
            <input className="input__text" type="password" placeholder="password" minLength="8" 
            name="password" required></input>
        </>
    )
}

export default Register
