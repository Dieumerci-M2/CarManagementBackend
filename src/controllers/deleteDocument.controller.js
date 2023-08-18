import document from "../models/documentModel.js";
import { ValidationError, UniqueConstraintError } from "sequelize";

export const deleteDoc = ( req, res ) => {
    document.findByPk( req.params.id )
        
        .then( docDel => {
            if ( docDel === null ) {
            res.status( 404 ).json( {
                message : `There is not document with this id. Try to enter a valid Id`
                } )
            }
            const deletedDoc = docDel
            return document.destroy( {
                where : {id : docDel.id}
            } ) 
            .then( () => {
                res.status( 200 ).json( {
                    message: `Document has deleted successfuly`,
                    data : deletedDoc
              })
                } )
                .cath( err => {
                    res.status( 501 ).json( {
                    err : `Faild to delete document. Please try again`
                })
            })
        } )
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