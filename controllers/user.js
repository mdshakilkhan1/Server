import User from "../model/user.model.js";
import {body, validationResult} from "express-validator";
import bcrypt from "bcrypt"
import { JWT_SECRET, SALT_HASH } from "../conf/config.js";
import jwt from 'jsonwebtoken'

export const createUser = async(req, res)=>{

    const { fullName, email, password} = req.body;
try {

    const {errors} = validationResult(req);

    console.log(errors)
    if(errors.length> 0){
        return res.status(400).json({
            status: 400,
            message:"Validation Error",
            errors: errors
        })
    }

    // * hash the password::
    const hashedPassword = await bcrypt.hash(password, SALT_HASH )
    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        bio: "",
        profile_picture: ""
    });

    res.status(201).json({
        status: true,
        message: "User Create Successfully !",
        data:user
    })

} catch (error) {
    res.json({
        status: false,
        message: " Error Creating User !",
        error: error.message
    })
}
}

export const login = async (req, res)=>{

    const { email, password} = req.body;
    console.log(email, password)

    try {


             // todo cheak if user exist ::
         const user = await User.findOne({email: email});
             // if no user exist send this message ....
         if (!user && !user?._id){
             return res.status(401).json({
             status: false,
             message: "Not user exist , please sign up."
          })
    }
            //  todo check if the password is correct ::
            const isValidPassword = await bcrypt.compare(password, user.password);
            if(!isValidPassword) throw new Error("Unauthorized!!!..")

            // console.log("isValidPassword", isValidPassword)
             // todo generate a token::
             const token = await jwt.sign({ _id: user?._id, fullName: user?.fullName, email: user?.email}, JWT_SECRET, );
             console.log(token)


             // todo send the token back to the client ::



        res.status(200).json({
            status: true,
            message: "logged in Successfully !",
            data:{ _id: user?._id, fullName: user?.fullName, email: user?.email},
            token
        })
    } catch (error) {
        res.json({
            status: false,
            message: " Unauthorized !",

        })
    }
}

export const deleteUser = async (req, res)=>{
    // console.log(req.headers.authorization)
    const token = req.headers.authorization.replace("Bearer","")
    console.log(token)
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded)

        res.status(200).json({
            status: true,
            message: "User deleted Successfully !",

        })
    } catch (error) {
        res.json({
            status: false,
            message: " Error deleting User !",
            error: error.message
        })
    }
}