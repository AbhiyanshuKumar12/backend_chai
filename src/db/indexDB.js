// import dotenv from "dotenv"
// // import {DB_NAME} from "./constants"
// import mongoose from "mongoose"
// import connectDB from "../db/index.js"
// import { DB_NAME } from "../src/constants"

// const connectDB = async ()=>{
    

//     try {
//        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB+NAME}`)

//        console.log(`\n MongoDB connected !! DB HOST: 
//         ${connectionInstance}`);
       
//     } catch (error) {
//         console.log("MONGODB connection error",error);
//         process.exit(1);
        
        
//     }
    
// }
// export default connectDB


// second time

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
        
    }
}

export default connectDB