import userModel from "../models/userModel.js"
import bcryp from "bcrypt"



const login = ( req, res ) => {
    try {
        userModel.findOne( { where: { userName: req.body.userName } } )
            .then( used => {
                bcryp.compare( req.body.password, used.password )
                    .then( ispasswordValid => {
                        if ( ispasswordValid ) {
                            res.status( 200 ).json( {
                                message: `User Connected`,
                                data: used
                            } )
                        }
                    } )
            } )
 
    } catch {
        res.status( 404 ).json( {
            message: `This user is not registered`,
            data : null
        })
    }
}

export default login