import { Router } from "express";
import updateDoc from "../../controllers/update.document.controller.js";
import { authorization } from "../../middleware/authjwt.js";

const updateRouter = Router()

updateRouter.put( "/update/:id", authorization, updateDoc )

export default updateRouter