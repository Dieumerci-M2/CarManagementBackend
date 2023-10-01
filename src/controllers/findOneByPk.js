// Call document Model
import document from "../models/documentModel.js";
/**
 * Define controler function's name and give it parameters 
 */
const findOneByPk = async ( req, res ) => {
    /**
     * Define an id privided by the parameter of the request object
     */
    const id = req.params.id
    /**
     * This controller fuction will return a document founded by his primary key
     * The sequelize's method to do that is 'findByPk' method
     * This method takes an Id as his own parameter and check if the Id provide to
     * the parameter matching with one of the Ids founded on DataBase 
     */
    return document.findByPk( id )
        /**
         * If all gaes well then we wait the response on promise
         * The promise take one parameter to show the data
         */
        .then( ( rep ) => {
            const message = `found`
            res.json( { message, rep } )
        } )
        /**
        * If the Id doesn't match then catch the error and send status 404 to the client
        * That means document not found to the server
        */
        .catch( error => {
            res.status( 404 ).json( {
                message: `error accured`,
                data: error
            } )
    
        } )
    
}

export default findOneByPk