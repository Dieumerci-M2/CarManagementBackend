// Call document Model
import document from "../models/documentModel.js";
// Call Sequilize's Validator and Contraint
import {ValidationError, UniqueConstraintError} from "sequelize" 
// Define and export Document Controller
export const docs = async ( req, res ) => {
    try {
        /**
         * Use create() sequilize's method to create a document 
         * This method take the all the body of the request as a parameter
         * And send it to the server
         *  */ 
        const doc = await document.create( req.body )
        /**
         * If all goes well then return a status 200 and a Json file
         * That means Everythings is getting on allright (Success)
         * The Json file contain a message to explain the action and data to show
         *  all the Entry data to the client
         */
        res.status( 200 ).json( {
            message: `Document ${req.body.nomProp} created successfuly`,
            data : doc
        } )
        /**
         * If something going wrong,
         * So we test whether the error comes from the validator or from
         *  the constraint given by Sequilize.
         *  If the error comes from one of the two Sequilize testers,
         *  then we send a status 400 which means that the user is not
         *  allowed to access the resources.
         * If the error does not come from these two testers then we
         *  can consider that the error comes from the server and we
         *  send a status 500
         */
    } catch (err) {
        if(err instanceof ValidationError){
                res.status(400).json({message: err.message, data: err})
                }
            if(err instanceof UniqueConstraintError){
                res.status(400).json({message: err.message, data: err})
                }
            const message = `Le server ne repond pas veillez ressayez après quelques instants`     
            res.status(500).json({message})
    }
}
