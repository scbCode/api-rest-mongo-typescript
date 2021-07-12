import { Request, Response } from "express";
import { FindUserCaseUsers } from "./findUserCaseUser";
import * as mongoose from 'mongoose';

export class FindUserController {

    constructor(
        private findUserUseCase:FindUserCaseUsers
    ){}

    async handle(request:Request, response: Response): Promise<Response>{
       
        try {

          const user =   await this.findUserUseCase.execute( request.params.email)
          console.log("findEmail")
              
            return response.status(200).send({user});
             
        }catch (err){

            return response.status(400).json({
                message: err.message || 'Erro inesperado'
            });

        }

    };

}