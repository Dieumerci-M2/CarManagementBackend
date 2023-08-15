import jwt from "jsonwebtoken"
import { secret } from "../../config/auth"

export const auth = ( req, res, next ) => {
    const authorizationHeader = req.headers.authorization 
    if ( !authorizationHeader ) {
        res.status( 401 ).json( {
            message : `you haven't get the authaurization token to the header of your request.. please add one to the header of the request`
        })
    }
    const token = authorizationHeader.split( ' ' )[ 1 ]
    const decodedToken = jwt.verify( token, secret, ( error, decoded ) => {
        if ( error ) {
            res.status( 401 ).json( {
                message: `The used is not authorise to access to this ressources`,
                data : error
            })
        }
        const userId = decodedToken.userId
        if ( req.body.userId && req.body.userId !== userId ) {
            res.status( 401 ).json( {
                message : `The user identifier is not valid`
            })
        } else {
            next()
        }
    })
}