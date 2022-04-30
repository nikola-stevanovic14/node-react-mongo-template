import React, { useState } from "react";
import {validateFullName, validateEmail, validatePassword, validateConfirmPassword} from '../../validators/inputValidators';
import {register} from "../../requests/authRequests";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes";

function Register() {
  const navigate  = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasswrod] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const handleRegister = () => {
    let valid = true;

    const nameValidation = validateFullName(name);
    valid = valid && nameValidation.valid;
    setNameError(nameValidation.message??'');

    const emailValidation = validateEmail(email);
    valid = valid && emailValidation.valid;
    setEmailError(emailValidation.message??'');

    const passwordValidation = validatePassword(password);
    valid = valid && passwordValidation.valid;
    setPasswordError(passwordValidation.message??'');

    const confirmPasswordValidation = validateConfirmPassword(password, confirmPassword);
    valid = valid && confirmPasswordValidation.valid;
    setConfirmPasswordError(confirmPasswordValidation.message??'');

    if(valid) {
      const user = {
        name: name,
        email: email,
        password: password
      }

      register(user)
      .then(() => {
        navigate(ROUTES.LOGIN_PAGE);
      })
      .catch((err) => {
        alert(err);
      })
    }
  }

  return (
    <>
      <p className="auth-page-sign" align="center">Sign up</p>
      <input
        className="auth-page-username"
        type="text"
        align="center"
        placeholder="Full Name"
        value={name}
        onChange={(e) => {setNameError(''); setName(e.target.value);}}
      />
      {nameError ? <div className="authorization-div-badinput"><label className="authorization-label-badinput">{nameError}</label></div> : ''}

      <input 
        className="auth-page-username" 
        type="text" 
        align="center" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => {setEmailError(''); setEmail(e.target.value);}}
      />
      {emailError ? <div className="authorization-div-badinput"><label className="authorization-label-badinput">{emailError}</label></div> : ''}

      <input 
        className="auth-page-password" 
        type="password" 
        align="center" 
        placeholder="Password" 
        value={password}
        onChange={(e) => { setPasswordError(''); setPasswrod(e.target.value);}}
      />
      {passwordError ? <div className="authorization-div-badinput"><label className="authorization-label-badinput">{passwordError}</label></div> : ''}

      <input 
        className="auth-page-password" 
        type="password" 
        align="center" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={(e) => { setConfirmPasswordError(''); setConfirmPassword(e.target.value);}}
      />
      {confirmPasswordError ? <div className="authorization-div-badinput"><label className="authorization-label-badinput">{confirmPasswordError}</label></div> : ''}

      <button 
        className="auth-page-submit" 
        align="center"
        onClick={handleRegister}
      >
        Sign up
      </button>
    </>
  )
}

export default Register;
