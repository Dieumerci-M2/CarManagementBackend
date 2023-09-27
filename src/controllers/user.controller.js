import userModel from "../models/userModel.js";

export const signUp = async ( req, res, next ) => {
    const {userName, password} = req.body
    try {
        const user = await userModel.create( {
            userName,
            password,id:undefined
        } );

        res.status( 200 ).json( {
            message: "User Created",
            data: user
        })
    } catch ( error ) {
        next(error)
    }
} 