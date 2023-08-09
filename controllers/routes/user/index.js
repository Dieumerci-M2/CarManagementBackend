import { Router } from "express";
import routerAccount from "./user.routes.js";

const routerUser = Router();

routerUser.use( "/account", routerAccount );

export default routerUser;