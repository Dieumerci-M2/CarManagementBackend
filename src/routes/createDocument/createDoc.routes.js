import { Router } from "express";
import { authorization } from "../../middleware/authjwt.js";
import { docs } from "../../controllers/createDocument.controller.js";
// Define a Document router and asign it to the express Router
const docsRouter = Router()
/**
 * Use POST Express's method to Insert elements on documents table
 * This Method is simular to the SQL commande : INSERT INTO 'table's name'...
 *  As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
docsRouter.post( "/new",authorization, docs )

export default docsRouter