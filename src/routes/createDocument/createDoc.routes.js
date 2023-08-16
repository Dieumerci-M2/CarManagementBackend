import { Router } from "express";
import { docs } from "../../controllers/createDocument.controller.js";

const docsRouter = Router()

docsRouter.post( "/new", docs )

export default docsRouter