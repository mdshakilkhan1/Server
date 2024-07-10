import mongoose from "mongoose"
import { MONGODB_CONNECTION_URI } from "../conf/config.js"

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(MONGODB_CONNECTION_URI,{dbName:process.env.DB_NAME})

        if (connection){
            console.log(`successfully connected to DB 
                DB_HOST: ${connection.connection.host}
                DB_PORT: ${connection.connection.port}
                DB_NAME: ${connection.connection.name}      
                `)
        }
    } catch (error) {
        console.log("ERROR in connecting to the database!!! ")
    }
}

export default connectDB;