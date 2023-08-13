import { Router } from "express";
import loginAccount from "./loginuser.routes.js";

const userLogin = Router()

userLogin.use( "/account", loginAccount )

export default userLogin