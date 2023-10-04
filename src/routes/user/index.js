import { Router } from "express";
import routerAccount from "./user.routes.js";

const routerUser = Router();
/**
 * Add to the main route a secondary route specific to the
 * account Sing up of a user or a super user such as middleware
 */
routerUser.use( "/account", routerAccount );

export default routerUser;