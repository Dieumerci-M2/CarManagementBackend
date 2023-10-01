import { Router } from "express";
import { authorization } from "../../middleware/authjwt.js";
import { deleteDoc } from "../../controllers/deleteDocument.controller.js";
// Define a Document router and asign it to the express Router
const deleteDocRouter = Router()
/**
 * Use DELETE Express's method to Delete elements on documents table
 * This Method is simular to the SQL commande : DELETE TABLE or DROP TABLE 'table's name'
 * As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
deleteDocRouter.delete( "/delete/:id", authorization, deleteDoc )

export default deleteDocRouter