
function Register() {
  return (
    <>
      <p className="auth-page-sign" align="center">Sign up</p>
      <input className="auth-page-username" type="text" align="center" placeholder="Full Name" />
      <input className="auth-page-username" type="text" align="center" placeholder="Email" />
      <input className="auth-page-password" type="password" align="center" placeholder="Password" />
      <input className="auth-page-password" type="password" align="center" placeholder="Confirm Password" />
      <button className="auth-page-submit" align="center">Sign up</button>
    </>        
)
  }
  
  export default Register;
  