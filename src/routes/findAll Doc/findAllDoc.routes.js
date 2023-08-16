import { auth } from "../middleware/authjwt.js";
import { Router } from "express";

export const findAllDocRoute = Router()

findAllDocRoute.get( "/limit", auth, findAllDocRoute )
