import express from "express";
import { loginUser, logoutUser, register } from "../controllers/userController.js";
import { isAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup",register);

router.post("/login", loginUser);

router.post("/logout",logoutUser);

router.get("/userProfile",isAuth,async(req,res)=>{
  res.send({
    success:true,
    message:'user profile'
  })
})

export default router;