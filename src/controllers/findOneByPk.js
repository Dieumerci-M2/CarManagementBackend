import document from "../models/documentModel.js";

const findOneByPk = async ( req, res, next ) => {
    const id = req.params.id
    const limit = parseInt( req.query.limit ) || 8

    return document.findByPk( id )
        .then( ( rep ) => {
            const message = `found`
            res.json( { message, rep } )
        } )
        .catch( error => {
            res.status( 404 ).json( {
                message: `error accured`,
                data: error
            } )
    
        } )
    
}

export default findOneByPk