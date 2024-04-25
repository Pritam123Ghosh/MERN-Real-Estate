import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRouter from './routes/user.route.js'


dotenv.config();
(async() =>{
    try {
        await mongoose.connect(`${process.env.MONGO}`)
        console.log("Database connected")
    } catch (error) {
        console.error("ERR: ", error);
        throw err
    }
})()
const app = express();


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

app.use("/api/user", userRouter)