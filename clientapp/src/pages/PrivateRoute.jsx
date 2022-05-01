import {LOCAL_STORAGE_NAMES} from "../constants/localStorageNames";
import {Navigate} from "react-router-dom";
import jwt from 'jwt-decode'
import {ROUTES} from '../routes'

function PrivateRoute({ Render }) {
    const token = localStorage.getItem(LOCAL_STORAGE_NAMES.JWT_TOKEN);
    if(!token) return <Navigate to={ROUTES.LOGIN_PAGE} replace />;
    const user = jwt(token);
    if(user?.enabled) return Render;
    return <Navigate to={ROUTES.LOGIN_PAGE} replace />;
  }
  
export default PrivateRoute;
  