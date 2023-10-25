// Call super user Model
import userModel from "../models/userModel"
/**
 * Define controler function's name and give it parameters 
 */
export const signUp = async ( req, res, next ) => {
    const {userName, password} = req.body
    try {
        /**
         * Use create() sequilize's method to create a document 
         * This method take the all the body of the request as a parameter
         * And send it to the server
         *  */ 
        const user = await userModel.create( {
            userName,
            password
        } );
         /**
         * If all goes well then return a status 200 and a Json file
         * That means Everythings is getting on allright (Success)
         * The Json file contain a message to explain the action and data to show
         *  all the Entry data to the client
         */
        res.status( 200 ).json( {
            message: "User Created",
            data: user
        })
    }
    /**
     * If the request does not go through, we include the error in the next parameter
     */
    catch ( error ) {
        next(error)
    }
} 