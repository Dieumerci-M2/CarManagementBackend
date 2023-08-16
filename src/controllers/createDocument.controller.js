import document from "../models/documentModel.js";

export const docs = async ( req, res, next ) => {
    try {
        const doc = await document.create( req.body )
        res.status( 200 ).json( {
            message: `Document ${req.body.nomProp} created successfuly`,
            data : doc
        })
    } catch (error) {
        next(error)
    }
}
