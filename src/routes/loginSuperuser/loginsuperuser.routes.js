import { Router } from "express";
import superLogin from "../../controllers/superLogin.controller.js";

const superAccount = Router()

superAccount.post( "/login", superLogin )

export default superAccount