import { Router } from 'express'
import docsRouter from './createDoc.routes.js'; 

const docsRoute = Router()

docsRoute.use( "/create", docsRouter )

export default docsRoute

