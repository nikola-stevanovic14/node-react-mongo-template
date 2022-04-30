import {postRequest} from "./core";
import {API_ROUTES} from "./apiRoutes"

export const login = (user) => postRequest(API_ROUTES.AUTH.LOGIN, user);