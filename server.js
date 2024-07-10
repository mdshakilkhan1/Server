import express from "express";
import {PORT, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME} from "./conf/config.js";
import connectDB from "./lib/connectDB.js"
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import apiRouter from "./routes/api.js";
import { testMiddleware } from "./moddlewere/test.js";
import defaultErrorHandler from "./moddlewere/defaultErrorHandler.js";

const app = express();

// Middilewere

app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser());
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    limit: REQUEST_LIMIT_NUMBER,
})
app.use(limiter)

connectDB()

app.use(defaultErrorHandler)

// app.use(testMiddleware)

app.use("/api", apiRouter)

app.get('*', (req, res)=>{
    res.status(404).json({
        success: false,
        message:"page not gound"
    })
})

// For parsing application/json
// app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));



app.listen(PORT, ()=>{
    console.log('Example app listen on port 3000!')
})