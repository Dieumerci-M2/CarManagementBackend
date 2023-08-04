import user from "../models/userModel";

const registerUser = async ( req, res, next ) => {
  
   const { userName, password } = req.body;
  
  try {

    const existUser = await user.findOne({ userName });

  if (existUser) {
    res.status(400);
    throw new Error('This user are already exist');
  }
    const user = await user.create({
    userName,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.useName,
      password: user.password
    });
  } 
    
  } catch (error) {
    next(error)
  }

};

export default {registerUser}