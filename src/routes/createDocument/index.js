import { Router } from 'express'
import docsRouter from './createDoc.routes.js'; 

const docsRoute = Router()
/**
 * Add to the main route a secondary route specific to the
 * creation of a document such as middleware
 */
docsRoute.use( "/create", docsRouter )

export default docsRoute

