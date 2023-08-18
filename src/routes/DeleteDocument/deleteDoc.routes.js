import { Router } from "express";
import { authorization } from "../../middleware/authjwt.js";
import { deleteDoc } from "../../controllers/deleteDocument.controller.js";

const deleteDocRouter = Router()

deleteDocRouter.delete( "/delete/:id", authorization, deleteDoc )

export default deleteDocRouter