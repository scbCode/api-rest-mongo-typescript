import { Request, Response } from "express";
import { LoginUserCaseUsers } from "./LoginUserCaseUser";
import jwt from "jsonwebtoken"
import config from "../../config/config";
import mongoose from 'mongoose';


export class LoginUserController {

    constructor(
        private LoginUserUseCase:LoginUserCaseUsers
    ){}

    async handle(request:Request, response: Response): Promise<Response>{
       
        try {

          const user = await this.LoginUserUseCase.execute( request.body.email, request.body.senha)
          var token:string;
              
          if (user) {
               token = jwt.sign({ userId: user._id }, config.secret);
               return response.status(200).send({status:true,token:token});
          } else
          return response.status(200).send({status:false});
             
        }catch (err){

            return response.status(400).json({
                message: err.message || 'Erro inesperado'
            });

        }

    };

}