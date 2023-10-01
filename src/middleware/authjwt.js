// Call Json Web token 
import jwt from "jsonwebtoken"
// Call the secret code 
import { secret } from "../../config/auth.js"
/**
 * Define authorisation middleware function's name and export It.
 * Middleware often has three parameters, one for the request,
 *  another for the response and a third to pass on to another
 *  piece of middleware if all goes well.
 */
export const authorization = (req, res, next) =>{
    /**
     * we declare a constant that will retrieve the authorisation in
     *  the request header
     */
    const authorisationHeader  = req.headers.authorization;
    /**
     * If we find nothing in the header of the request then we send a 401
     *  status code with a message telling the user that they have not yet
     *  provided an authorisation token to access the resources.
     */
    if(!authorisationHeader){
        const message = `vous n'avez pas fournie de jeton d'authentification, veillez en ajouter dans l'entête de la requête`
        res.status(401).json({message})
    }
    /**
     * If we find something in the header, then we just get the token,
     *  because the header often starts with the keyword 'Bears' followed
     *  by the token. That's why we use a Javascript method that splits
     *  a string of characters into one or more snippets and returns an
     *  array of the strings.
     */
    const token = authorisationHeader.split( ' ' )[ 1 ]
    /**
     * jwt.verify(token, secretOrPublicKey, [options, callback])
     * (Asynchronous) If a callback is supplied, function acts asynchronously.
     *  The callback is called with the decoded payload if the signature
     *  is valid and optional expiration, audience. 
     * If not, it will be called with the error
     */
    jwt.verify(token, secret, (error, decodedToken)=>{
        if(error){ 
            const message = `L'utilisateur n'est pas authorisez à acceder à cette ressource`
            res.status(401).json({message, data: error})
        }

        const userId = decodedToken.userId
        if(req.body.userId && req.body.userId !== userId){
            const message = `L'identifiant de l'utilisateur est invalid`
            res.status(401).json({message})
        }else{
            next();
        }
    })
}