import { Router } from "express";
import superLogin from "../../controllers/superLogin.controller.js";
// Define router and asign it to the express Router
const superAccount = Router()
/**
 * Use POST Express's method to Insert elements on documents table
 * This Method is simular to the SQL commande : INSERT INTO 'table's name'...
 *  As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
superAccount.post( "/login", superLogin )

export default superAccount