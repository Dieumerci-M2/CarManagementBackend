import { Router } from "express";
import updateDoc from "../../controllers/update.document.controller.js";
import { authorization } from "../../middleware/authjwt.js";
// Define a Document router and asign it to the express Router
const updateRouter = Router()
/**
 * Use UPDATE Express's method to Update elements on documents table
 * This Method is simular to the SQL commande : UPDATE table_name. 
 * SET column1 = value1, column2 = value2, ...
 * As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
updateRouter.put( "/update/:id", authorization, updateDoc )

export default updateRouter