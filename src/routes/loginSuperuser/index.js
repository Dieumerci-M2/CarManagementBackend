import superAccount from "./loginsuperuser.routes.js";
import { Router } from "express";

const superuserLogin = Router()
/**
 * Add to the main route a secondary route specific to the
 * account login of a user or a super user such as middleware
 */
superuserLogin.use( "/account", superAccount )

export default superuserLogin