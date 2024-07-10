import {body, validationResult} from "express-validator";

export const userValidationSchema =[[
    body('email')
        .isEmail()
        .withMessage("Email is Required! "),
    body('fullName')
         .isString()
         .isLength({min:3, max:15})
         .withMessage("fullName is Required! "),
    body('password')
        //  .isStrongPassword()
        //  .withMessage("please choose a strong password !")
         .isLength({min:6, max:15})
         .withMessage("password must be between 6 to 15 character ")
]]