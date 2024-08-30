import express from "express"
import connectDB from "./database/databaseConfig.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

// dotenv config
dotenv.config();

// database onfig
connectDB();

// import routes
import userRoute from "./routes/userRoute.js"

app.get("/",(req,res)=>{
    res.send("hello nakul")
});

app.use(express.json());
app.use(cookieParser());
app.use("/user",userRoute);

const port = 3000;

app.listen(port,()=>{
    console.log('app is running');
})