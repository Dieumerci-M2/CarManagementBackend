import superAccount from "./loginsuperuser.routes.js";
import { Router } from "express";

const superuserLogin = Router()

superuserLogin.use( "/account", superAccount )

export default superuserLogin