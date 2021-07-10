import User from "../../entities/User";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { ILoginUserDTO } from "./LoginUserDTO";

export  class LoginUserCaseUsers {

    constructor(
       private usersRepositoty : IUsersRepository
    ){}

    async execute(email: string, senha:string){

       const userExist = await this.usersRepositoty
        .login(email,senha)
        return userExist
            
    }
}