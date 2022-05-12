import {postRequest, getRequest, putRequest} from "./core";
import {API_ROUTES} from "./apiRoutes"

export const register = (user) => postRequest(API_ROUTES.USER.REGISTER, user);
export const userManagement = () => getRequest(API_ROUTES.USER.USER_MANAGEMENT);
export const userEnabled = (userId, enabled) => getRequest(API_ROUTES.USER.ENABLE_USER, {userId, enabled});
export const changeRoles = (userId, roles) => putRequest(API_ROUTES.USER.CHANGE_ROLES, {userId, roles});
