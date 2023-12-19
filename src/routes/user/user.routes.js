import { Router } from 'express'
import { signUp } from '../../controllers/user.controller.js'
// Define router and asign it to the express Router
const routerAccount = Router();
/**
 * Use POST Express's method to Insert elements on documents table
 * This Method is simular to the SQL commande : INSERT INTO 'table's name'...
 *  As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
routerAccount.post( '/new', signUp );

export default routerAccount;