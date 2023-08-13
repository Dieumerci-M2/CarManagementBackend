import superUserModel from "../models/superUser.js";
import bcrypt from "bcrypt"

const superLogin = ( req, res ) => {
    try {
        superUserModel.findOne( { where: { userName: req.body.userName } } )
            .then( user => {
                bcrypt.compare( req.body.password, user.password )
                    .then( isValidPassword => {
                        if ( isValidPassword ) {
                            res.status( 200 ).json( {
                                message: `Super user Connected`,
                                data : user
                        })
                    }
                })
        })
    } catch (error) {
        res.status( 400 ).json( {
            message: `This super is no exist`,
            data : null
        })
    }
}

export default superLogin