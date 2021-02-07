import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [register,setRegister] = useState(false);
  const registerClass = !register?'form-switcher__option':'form-switcher__option form-switcher__option--selected';
  const loginClass = register?'form-switcher__option':'form-switcher__option form-switcher__option--selected';
  const buttonText = register ? "Register" : "Login";
  const [loginData,setLoginData] = useState({
      mobile_login:'',
      password_login:''
  })
  const [registerData,setRegisterData] = useState({
    mobile_register:'',
    password_register:'',
    confirmpassword_register:''
})
  const loginUser = ()=>{
      console.log(loginData);
  }
  const registerUser = ()=>{
      console.log(registerData);
  }
  const onChangeLogin = (e)=>{
    setLoginData({
      ...loginData,[e.target.name]:e.target.value
    })
  }
  const onRegisterLogin =(e)=>{
    setRegisterData({
      ...registerData,[e.target.name]:e.target.value
    })
  }
  return (
    <>
      <Navbar/>
      <>
            <div className="form-switcher">
                <div className={loginClass}
                onClick={e=>setRegister(false)}
                >Login</div>
                <div className={registerClass}
                onClick={e=>setRegister(true)}
                >Register</div>
            </div>
            <div className="login-form">
                <form className="login-form__group">
                    {
                      !register ?
                        <>
                          <input className="input__text" type="number" placeholder="mobile number" id="mobile_login" value={loginData.mobile_login} onChange={(e)=>onChangeLogin(e)}
                          name="mobile_login" required></input>
                          <input className="input__text" type="password" placeholder="password" minLength="8" id="password_login" value={loginData.password_login} onChange={(e)=>onChangeLogin(e)} 
                          name="password_login" required></input>
                        </>
                      :
                      <>
                          <input className="input__text" type="number" placeholder="mobile number" id="mobile_register" onChange={(e)=>onRegisterLogin(e)}
                          name="mobile_register" value={registerData.mobile_register} required></input>
                          <input className="input__text" type="password" placeholder="password" id="password_register" onChange={(e)=>onRegisterLogin(e)}
                          name="password_register"  value={registerData.password_register} required></input>
                          <input className="input__text" type="password" placeholder="confirm password" id="confirmpassword_register" onChange={(e)=>onRegisterLogin(e)}
                          name="confirmpassword_register"  value={registerData.confirmpassword_register} required></input>
                        </>
                    }
                    <button className="btn btn-primary btn_form" onClick={(e)=>!register?loginUser(e):registerUser(e)}>{buttonText}</button>
                </form>
            </div>
        </>
    </>
  );
}

export default App;
