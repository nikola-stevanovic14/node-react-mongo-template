import {ROUTES} from "../../routes";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import {validateEmail, validatePassword} from "../../validators/inputValidators";
import {login} from "../../requests/authRequests";
import {LOCAL_STORAGE_NAMES} from "../../constants/localStorageNames";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate  = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [apiError, setApiError] = useState('');

    const handleLogin = () => {
        let valid = true;

        const emailValidation = validateEmail(email);
        valid = valid && emailValidation.valid;
        setEmailError(emailValidation.message??'');

        const passwordValidation = validatePassword(password);
        valid = valid && passwordValidation.valid;
        setPasswordError(passwordValidation.message??'');

        if(valid) {
            const user = {
                email: email,
                password: password
            };
            login(user)
            .then((res) => {
                localStorage.setItem(LOCAL_STORAGE_NAMES.JWT_TOKEN, res.data);
                navigate(ROUTES.HOME_PAGE);
            })
            .catch((err) => {
                setApiError(err.response?.data);
            })
        }
    }

    return (
        <>
            <p className="auth-page-sign" align="center">Sign in</p>
            <input 
                className="auth-page-username" 
                type="text" 
                align="center" 
                placeholder="Email" 
                value = {email}
                onChange = {(e) => {
                    setEmailError('');
                    setApiError('');
                    setEmail(e.target.value);
                }}
            />
            {emailError ? <div className="authorization-div-badinput"><label className="authorization-label-badinput">{emailError}</label></div> : ''}
            <input 
                className="auth-page-password" 
                type="password" 
                align="center" 
                placeholder="Password" 
                value = {password}
                onChange = {(e) => {
                    setPasswordError('');
                    setApiError('');
                    setPassword(e.target.value);
                }}
            />
            {passwordError ? <div className="authorization-div-badinput"><label className="authorization-label-badinput">{passwordError}</label></div> : ''}
            {apiError ? 
                <div className="authorization-div-badinput" style={{marginBottom: "20px"}}>
                    <label className="authorization-label-badinput">{apiError}</label>
                </div> 
                : ''
            }
            <button className="auth-page-submit" align="center" onClick={handleLogin}>Sign in</button>
            <p align="center"><Link to={ROUTES.FORGOT_PASSWORRD_PAGE} className="auth-page-a">Forgot Password?</Link></p>
            <p align="center"><Link to={ROUTES.REGISTER_PAGE} className="auth-page-a" style={{fontSize:'unset'}}>Sign up</Link></p>
        </>        
    )
  }
  
  export default Login;
  