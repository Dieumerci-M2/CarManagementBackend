// Call super user Model
import superUserModel from "../models/superUser.js";
/**
 * Define controler function's name and give it parameters 
 */
export const singUp = async (req, res, next) => {
    try {
        /**
         * Use create() sequilize's method to create a document 
         * This method take the all the body of the request as a parameter
         * And send it to the server
         *  */ 
        const superuser = await superUserModel.create( req.body )
        /**
         * If all goes well then return a status 200 and a Json file
         * That means Everythings is getting on allright (Success)
         * The Json file contain a message to explain the action and data to show
         *  all the Entry data to the client
         */
        const message = `Super user created`
        res.status( 200 ).json( {message, data : superuser})
    }
    /**
     * If the request does not go through, we include the error in the next parameter
     */
    catch ( error ) {
        next(error)
   }
}