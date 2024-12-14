import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './schema/userSchema.js';



const server= express();
server.use(express.json())
server.use(cors())


const MONGOURL="mongodb://localhost:27017/airbnbclone";

const connectDB=async()=>{
    try{
        await mongoose.connect(MONGOURL);
        console.log("Connect to db");
    }catch(err){
        console.log("Error: ",err.message)
    }
}

connectDB()


server.get('/', async(req, res)=>{
    res.status(200).json({
        "message":"user added successfully!"
    })

})
server.post( '/signUp',async(req,res)=>{
    const data=req.body;
    console.log("Data",data);

    const addNewUser=new User(data);
    await addNewUser.save();
    console.log("Added",addNewUser);
    res.status(201).json({
        "message":"User added sussessfully"
    })
    
})

server.listen(8080,()=>{
    console.log("Running on server pot 8080 ");
})
    
