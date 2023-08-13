import { Router } from "express";
import login from "../../controllers/login.controller.js";

const loginAccount = Router()

loginAccount.post( "/login", login )

export default loginAccount