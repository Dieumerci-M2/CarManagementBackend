import document from "../models/documentModel";
import { ValidationError, UniqueConstraintError } from "sequelize";

const deleteDoc = ( req, res ) => {
    document.findByPk( req.params.id )

        .then( docDel => {
            if ( delDoc == null ) {
            res.status( 404 ).json( {
                message : `There is not document with this id. Try to enter a valid Id`
                } )
            }
            const deletedDoc = delDoc
            return delDoc.distroy( {
                where : {id : delDoc.id}
            } )
            .then( () => {
                res.status( 200 ).json( {
                  message : `Document ${deletedDoc.nomProp} has deleted successfuly`
              })  
            } )
                .cath( err => {
                    res.status( 501 ).json( {
                    err : `Faild to delete document. Please try again`
                })
            })
        } )
        .catch( err => {
            res.status( 500 ).json( {
                err : `server has not respond`
            })
        })
    

}