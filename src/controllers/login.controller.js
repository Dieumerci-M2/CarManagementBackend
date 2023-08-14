import userModel from "../models/userModel.js"
import bcryp from "bcrypt"



const login = ( req, res ) => {
    
        userModel.findOne( { where: { userName: req.body.userName } } )
            .then( used => {
                if ( !used ) {
                    res.status( 404 ).json( {
                        message : `user not found`
                    })
                }
                bcryp.compare( req.body.password, used.password )
                    .then( ispasswordValid => {
                        if ( !ispasswordValid ) {
                            res.status( 401 ).json( {
                               message : `user name or password incorrect`
                           }) 
                        }
                        res.status( 200 ).json( {
                                message: `User Connected`,
                                data: used
                            } )
                    } )
            } )
            .catch( error => {
                res.status( 401 ).json( {
                    message: `this user has not be connect. Try again`,
                    data : error
                })
            })
        } 

export default login