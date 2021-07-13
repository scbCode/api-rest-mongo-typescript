import { verify } from "crypto";
import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { findUserController  } from "./useCases/FindUser";
import { loginUserController } from "./useCases/LoginUser";

const router = Router()

router.post('/register',(req,res)=>{
    return createUserController.handle(req,res)
})

router.post('/login',(req,res)=>{
    console.log(req.body)
    return loginUserController.handle(req,res)
})

router.get('/user/:email',middleware.verifyJWT,(req,res)=>{
    return findUserController .handle(req,res)
})

 export {router};
