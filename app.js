import dotenv from "dotenv";
dotenv.config(); 
import express from "express";
const app= express();
import mongoose from "mongoose";
import ("./db/connection.js")
import Products from "./models/productsSchema.js";
import DefaultData from "./defaultdata.js";
import cors from "cors";
import router from "./routes/router.js";
import cookieParser from "cookie-parser";

app.use(cookieParser(""));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3001", 
    credentials: true,
}));
app.use(router);


const port =8005;

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});

DefaultData();