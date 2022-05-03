import {LOCAL_STORAGE_NAMES} from "../constants/localStorageNames";
import {Navigate} from "react-router-dom";
import jwt from 'jwt-decode'
import {ROUTES} from '../routes'

function PrivateRoute({ Render, roles }) {
    const token = localStorage.getItem(LOCAL_STORAGE_NAMES.JWT_TOKEN);
    if(!token) return <Navigate to={ROUTES.LOGIN_PAGE} replace />;
    const user = jwt(token);
    if(!user?.enabled) return <Navigate to={ROUTES.LOGIN_PAGE} replace />;
    if(!roles || roles.length === 0) return Render;
    if(user.roles.some((role) => roles.includes(role))) {
      return Render;
    }
    return <Navigate to={ROUTES.LOGIN_PAGE} replace />;
  }
  
export default PrivateRoute;
  