import { Router } from "express";
import loginAccount from "./loginuser.routes.js";

const userLogin = Router()
/**
 * Add to the main route a secondary route specific to the
 * account login of a user or a super user such as middleware
 */
userLogin.use( "/account", loginAccount )

export default userLogin