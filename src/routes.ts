import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { findUserController  } from "./useCases/FindUser";

const router = Router()

router.post('/user',(req,res)=>{
    return createUserController.handle(req,res)
})

router.get('/user/:email',(req,res)=>{
    return findUserController .handle(req,res)
})

 export {router};
