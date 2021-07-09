import { Request, Response } from "express";
import { CreateUserCaseUsers } from "./CreateUserCaseUser";
import * as mongoose from 'mongoose';

export class CreateUserController {

    constructor(
        private createUserUseCase:CreateUserCaseUsers
    ){}

    async handle(request:Request, response: Response): Promise<Response>{
       
        try {

            await this.createUserUseCase.execute( request.body)
              
            return response.status(201).send({message:"User criado"});
             
        }catch (err){

            return response.status(400).json({
                message: err.message || 'Erro inesperado'
            });

        }

    };

}