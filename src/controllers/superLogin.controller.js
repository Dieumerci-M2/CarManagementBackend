// Call Super User Model 
import superUserModel from "../models/superUser.js";
// Call bcrypt 
import bcrypt from "bcrypt"
// Call Json web token 
import jwt from "jsonwebtoken"
// Call the secret key
import { secret } from "../../config/auth.js"
/**
 * Define controler function's name and give it parameters 
 */
const superLogin = ( req, res ) => {
         /**
         * Use findOne sequelize's model to find just one document passed in parameter
         * Give the SQL condition to compare the user name on the DB's table to the
         * user name tape on request's Body  
         */
    superUserModel.findOne( { where: { userName: req.body.userName } } )
            /**
             * Return the response on promese
             */
        .then( user => {
                 /**
                 * Before we check if we found something on the server
                 * If we found any thing then we send status 404 to the server 
                 * and a json file which contain the document not found's message
                 */ 
                if ( !user ) {
                    res.status( 404 ).json( {
                        message : `Super user not found`
                    })
                }
                /**
             * If we found a document firstly we compare the body password to the user password
             * which is on DB by Bycript's method called 'compare()'
             * This method takes two parameter; the body password and user password
             * which is on DB 
             */
            bcrypt.compare( req.body.password, user.password )
            /**
             * If all goes well then we wait the response on promise
             * But Before having response we check if the password is valid 
             * after comparing both passwords.
             * If the user password is not valid then we send status 401 
             * That means the user is unauthorize to access resources  
             */
                .then( isValidPassword => {
                    if ( !isValidPassword ) {
                        res.status( 401 ).json( {
                            message : `user name or password incorrect`
                        })
                    }
                /**
                 * If password is valid then Give a token to the client
                 * The sign's JWT method is used to create a JSON Web Token
                 *  for user and return the token in the form of a JSON string.
                 * That method takes things in general; an Objet to take user's Id
                 * an secret key of user and a expire's date of getting user's session
                 */
                    const token = jwt.sign(
                        { userId: user.id },
                        secret,
                        {expiresIn : '24h'}
                    )
                    /**
                     * After generating token we send status 200
                     * And a Json file that contain a message for success, data and a token  
                     */
                    res.status( 200 ).json( {
                        message: `Super user Connected`,
                        data: user,
                        token
                    })
                })
        } )
        /**
        * If some thing goes wrong then catch the error and send status 401 to the client
        * That means The user hasn't the authorisation to access ressources
        */
            .catch( error => {
                res.status( 401 ).json( {
                    message : `Failed to connect super user`
                })
            }) 
    } 
    

export default superLogin