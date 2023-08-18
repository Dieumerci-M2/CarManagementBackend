import document from "../models/documentModel.js";
import { Op } from "sequelize";

const findAllDocuments = async ( req, res, next ) => {
    if ( req.query.plaque ) {
        const plaque = req.query.plaque
        const limit = parseInt( req.query.limit ) || 8

        return document.findAndCountAll( {
        where: {
            plaque: {
                [Op.like] : `%${plaque}%`
            }
        }
    } )
    .then(({count,rows}) =>{
                const message = `il y'a ${count} donnée dont la recherche correspond à ${plaque}`
                res.json({message, data: rows})
            })
    }
    
    try {
        const documents = await document.findAll( {
        order: [
            ['plaque', 'ASC']
        ]
    } )
    
    res.status(200).json({ message: 'found', data: documents})
    } catch (error) {
        const err = new Error( 'internal error' )
        res.statusCode = 500;
        next(err)
    }  
    
}
export default findAllDocuments