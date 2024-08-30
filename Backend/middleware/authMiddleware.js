import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const isAuth = async(req,res,next)=>{
    console.log(req.cookies);
  const { token } = req.cookies;
  if(!token){
    return res.send({
        success:false,
        message:'user is not authorized'
    })
  }
  const decodeToken = jwt.verify(token,process.env.SECRETE_KEY);
  req.user = await userModel.findById({_id:decodeToken._id})
  next();
}