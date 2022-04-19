import {ROUTES} from '../../routes';
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
            <p className="auth-page-sign" align="center">Sign in</p>
            <input className="auth-page-username" type="text" align="center" placeholder="Username" />
            <input className="auth-page-password" type="password" align="center" placeholder="Password" />
            <button className="auth-page-submit" align="center">Sign in</button>
            <p align="center"><Link to={ROUTES.FORGOT_PASSWORRD_PAGE} className="auth-page-a">Forgot Password?</Link></p>
            <p align="center"><Link to={ROUTES.REGISTER_PAGE} className="auth-page-a" style={{fontSize:'unset'}}>Sign up</Link></p>
        </>        
    )
  }
  
  export default Login;
  