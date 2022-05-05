import {postRequest, getRequest} from "./core";
import {API_ROUTES} from "./apiRoutes"

export const register = (user) => postRequest(API_ROUTES.USER.REGISTER, user);
export const userManagement = () => getRequest(API_ROUTES.USER.USER_MANAGEMENT);