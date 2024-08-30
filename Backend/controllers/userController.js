
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
    try {
        let {name,email,password} = req.body;

        // validation
        if(!name || !email || !password){
            res.status(400).send({
                success:false,
                message: 'please provide all field'
            })
        }

        // existing user
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            res.status(500).send({
                success:false,
                message:'user already exist'
            })
        }
      
        // create new user 
        const newUser = new userModel({name,email,password});
        newUser.password = await bcrypt.hash(password,10);
        await newUser.save();

        // response send
        res.status(200).send({
            success:true,
            message: "user signup successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            success:false,
            message: "internal serval",
            error
        })
    }
}

export const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(403).send({
                success:false,
                message:'user not found'
            })
        }
        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return res.status(403).send({
                success: false,
                message:'inavalid credencial or data'
            })
        }
        const token = jwt.sign(
            {email:user.email,_id:user._id},
            process.env.SECRETE_KEY,
            {expiresIn:'24h'}
        )
        res.cookie("token",token,{  expires:new Date(Date.now() + 15*24*60*60*1000) })
        .send({
            success:true,
            message:'user login sucessfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ 
            success:false,
            message: "internal serval",
            error
        })
    }
}

export const logoutUser = async(req,res) =>{
    res.cookie("token","", {expires:new Date(Date.now())})
    .send({
        success:true,
        message:'user successfully logout'
    })
}