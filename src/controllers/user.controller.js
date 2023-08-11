

import userModel from "../models/userModel.js";

export const signUp = async (req, res, next) => {
    try {
        const user = await userModel.create( req.body );

        res.status( 200 ).json( {
            message: "User Created",
            data: user
        })
    } catch (error) {
        next(error)
    }
} 