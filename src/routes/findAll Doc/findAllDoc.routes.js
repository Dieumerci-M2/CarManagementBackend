import { Router } from "express";
import { authorization } from "../../middleware/authjwt.js";
import findAllDocuments from "../../controllers/findAllDocuments.controller.js";

const router = Router()

router.get( "/findAll",authorization, findAllDocuments )

export default router