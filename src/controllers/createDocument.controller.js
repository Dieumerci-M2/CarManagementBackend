import document from "../models/documentModel.js";
import {ValidationError, UniqueConstraintError} from "sequelize" 

export const docs = async ( req, res ) => {
    try {
        const doc = await document.create( req.body )
        res.status( 200 ).json( {
            message: `Document ${req.body.nomProp} created successfuly`,
            data : doc
        })
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
