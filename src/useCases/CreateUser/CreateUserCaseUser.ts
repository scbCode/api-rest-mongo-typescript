import User from "../../entities/User";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";
import crypto from 'crypto'
import config from "../../config/config";

export  class CreateUserCaseUsers {

    constructor(
       private usersRepositoty : IUsersRepository
    ){}

    async execute(data: ICreateUserDTO){

      const hash = crypto.createHmac('sha256', config.secret )
        .update(data.senha)
        .digest('hex');
        
       const userExist = await this.usersRepositoty
        .register(data.nome,data.email,hash)

    }
}