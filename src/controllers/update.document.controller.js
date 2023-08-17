import document from "../models/documentModel.js";
import { ValidationError, UniqueConstraintError } from "sequelize";
const updateDoc = ( req, res) => {
    const id = req.params.id
    document.update( req.body, {
        where : {id : id}
    } )
        .then( () => {
            return document.findByPk( id )
                .then( doc => {
                    if ( doc === null ) {
                res.status( 404 ).json( {
                message : `document does't exist. try to enter a new id`
                })
                }
                res.status( 200 ).json( {
                message: `document has modified successfuly`,
                data : doc
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

export default updateDoc