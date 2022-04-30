import {postRequest} from "./core";
import {API_ROUTES} from "./apiRoutes"

export const register = (user) => postRequest(API_ROUTES.USER.REGISTER, user);