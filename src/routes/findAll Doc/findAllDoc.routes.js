import { Router } from "express";
import { authorization } from "../../middleware/authjwt.js";
import findAllDocuments from "../../controllers/findAllDocuments.controller.js";
// Define router and asign it to the express Router
const router = Router()
/**
 * Use GET Express's method to Show elements on documents table
 * This Method is simular to the SQL commande : SELECT * FROM 'table's name'...
 *  As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
router.get( "/findAll",authorization, findAllDocuments )

export default router