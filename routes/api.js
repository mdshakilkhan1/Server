import { Router  } from "express";
import { createUser, deleteUser, login } from "../controllers/user.js";
import { userValidationSchema } from "../validation/userValidationSchema.js";


const apiRouter = Router();


// path= /api/user/create
apiRouter.post('/user/create', userValidationSchema,  createUser);
// path= /api/user/login
apiRouter.post('/user/login',  login);
// path= /api/user/delete
apiRouter.delete('/user/delete',  deleteUser);




export default apiRouter