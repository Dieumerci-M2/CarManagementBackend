// Call document Model
import document from "../models/documentModel.js";
// Call Operator on sequilize
import { Op } from "sequelize";
// Define findAllDocument's Controller as an asynchrone function
const findAllDocuments = async ( req, res, next ) => {
    if ( req.query.plaque ) {
        const plaque = req.query.plaque
        // Limit Data to Height elements or Lower
        const limit = parseInt( req.query.limit ) || 8
        /**
         *  Define findAndCountAll sequelize's method to find All documents and give the  * *   number of documents founded. There are several operations that can be performed *   with the Op operator, Op.iLike tests whether the value respects a given model. If * the value is found between '%%' this value will be detected at any point in the *   *   search. 
         *  */
        return document.findAndCountAll( {
        where: {
            plaque: {
                [Op.iLike] : `%${plaque}%`
            }
        }
        } )
    /**
     * If all goes well then return response on promises.  
     * FindAndCountAll takes two parameters such as (count, rows)
     * Count : show the number of data founding
     * Rows :  show all data founding
     * */ 
            
    .then(({count,rows}) =>{
                const message = `il y'a ${count} donnée dont la recherche correspond à ${plaque}`
                res.json({message, data: rows})
            })
    }
    /**
     * Once we have the data, we now want to sort it in descending order 
     * so that when we add a new document, this document will be seen
     * first in the list of documents and by the user in the Frontend.
     */
    try {
        const documents = await document.findAll( {
        order: [
            ['plaque', 'DESC']
        ]
    } )
    
        res.status( 200 ).json( { message: 'found', data: documents } )
    /**
     * If the request broke then catch the error and send status 500 to the client
     * That means the are an error provided on server side rendering
     */
    } catch (error) {
        const err = new Error( 'internal error' )
        res.statusCode = 500;
        next(err)
    }  
    
}
export default findAllDocuments