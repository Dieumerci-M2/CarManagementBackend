// Call document Model
import document from "../models/documentModel.js";
// Call Sequilize's Validator and Contraint
import {ValidationError, UniqueConstraintError} from "sequelize" 
// Define Update Document Controller
const updateDoc = ( req, res ) => {
     /**
     * Define an id privided by the parameter of the request object
     */
    const id = req.params.id
    /**
     * Use Update sequelize's method to update a document selected by his Id
     * In this method, we set a pass Id detection condition as a parameter,
     *  as it is difficult to update all documents at the same time. 
     */
    document.update( req.body, {
        where : {id : id}
    } )
        /**
         * After selecting Id we use findByPk sequelize's method 
         * to search correspoding update's document on promises.
         * If there is no document to find, then return status 404
         * that means the document doesn't exist on DB.
         * If we found document then send status 200 that means 
         * the operation has just been successfully completed
         */
        .then( () => {
            return document.findByPk( id )
                .then( doc => {
                    if ( doc === null ) {
                res.status( 404 ).json( {
                message : `document doesn't exist. try to enter a new id`
                })
                }
                res.status( 200 ).json( {
                message: `document has modified successfuly`,
                data : doc
                })
            })
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
        .catch( err => {
            if(err instanceof ValidationError){
                res.status(400).json({message: err.message, data: err})
                }
            if(err instanceof UniqueConstraintError){
                res.status(400).json({message: err.message, data: err})
                }
            const message = `Le server ne repond pas veillez ressayez après quelques instants`     
            res.status(500).json({message})
        })
}

export default updateDoc