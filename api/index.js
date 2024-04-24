import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
