// Call document Model
import document from "../models/documentModel.js";
// Call Sequilize's Validator and Contraint
import {ValidationError, UniqueConstraintError} from "sequelize" 
// Define and export Delete Document Controller
export const deleteDoc = ( req, res ) => {
    // Call findByPk sequilize method to find document by his primary key
    document.findByPk( req.params.id )
        // Make response on promises
        .then( docDel => {
            // If response cames with empty document then send status 404 and message for explain action
            if ( docDel === null ) {
            res.status( 404 ).json( {
                message : `There is not document with this id. Try to enter a valid Id`
                } )
            }
            // Else Delete document by calling destroy sequilize's method where id correspond to id founded
            const deletedDoc = docDel
            return document.destroy( {
                where : {id : docDel.id}
            } ) 
            // Make reponse on promise if all is going very well and send status Ok , message and datato the Client
            .then( () => {
                res.status( 200 ).json( {
                    message: `Document has deleted successfuly`,
                    data : deletedDoc
              })
            } )
            // If things don't go as planned then return a status 501 and an error message   
                .cath( err => {
                    res.status( 501 ).json( {
                    err : `Faild to delete document. Please try again`
                })
            })
        } )
        // Catch Validation and Contrain's Errors
        .catch( err => {
            if(err instanceof ValidationError){
                res.status(400).json({message: err.message, data: err})
                }
            if(err instanceof UniqueConstraintError){
                res.status(400).json({message: err.message, data: err})
            }
            // If Error doesn't come to the code above then send the status 500 to the Client that means however error cames to the server
            const message = `Le server ne repond pas veillez ressayez après quelques instants`     
            res.status(500).json({message})
        })
}