import superUserModel from "../models/superUser.js";

export const singUp = async (req, res, next) => {
    try {
        const superuser = await superUserModel.create( req.body )
        
        const message = `Super user created`
        res.status( 200 ).json( {message, data : superuser})
    } catch (error) {
        next(error)
   }
}