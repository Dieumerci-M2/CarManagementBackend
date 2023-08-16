import document from "../models/documentModel.js";
import { Op } from "sequelize";

const findAllDocuments = async ( req, res ) => {
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

    document.findAll({order: ['plaque']})
        .then(alldocuments =>{
            const message = `La liste de tous les documents a bien était récupérer`
            res.status(200).json({message, data: alldocuments})
        })
        .catch(_ =>{
            res.status(500).json({err: `Le server ne repond pas veillez ressayez après quelques instants`})
        })  
    
}
export default findAllDocuments