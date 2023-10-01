import { Router } from "express";
import findOneByPk from "../../controllers/findOneByPk.js";
// Define router and asign it to the express Router
const findByPk = Router()
/**
 * Use GET Express's method to Show element on documents table
 * This Method is simular to the SQL commande : SELECT FROM 'table's name' WHERE 'table's Id' = 'User's Id'
 *  As you can see we use Authorisation Middleware to check if the user has
 * ability to make this action
 *  */ 
findByPk.get( '/findByPk/:id', findOneByPk )

export default findByPk