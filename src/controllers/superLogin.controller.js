import superUserModel from "../models/superUser.js";
import bcrypt from "bcrypt"

const superLogin = ( req, res ) => {
        superUserModel.findOne( { where: { userName: req.body.userName } } )
            .then( user => {
                if ( !user ) {
                    res.status( 404 ).json( {
                        message : `Super user not found`
                    })
                }
                bcrypt.compare( req.body.password, user.password )
                    .then( isValidPassword => {
                        if ( !isValidPassword ) {
                            res.status( 401 ).json( {
                                message : `user name or password incorrect`
                            })
                        }
                    res.status( 200 ).json( {
                                message: `Super user Connected`,
                                data : user
                        })
                })
            } )
            .catch( error => {
                res.status( 401 ).json( {
                    message : `Failed to connect super user`
                })
            }) 
    } 
    

export default superLogin