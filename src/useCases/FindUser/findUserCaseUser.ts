import User from "../../entities/User";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { IFindUserDTO } from "./findUserDTO";

export  class FindUserCaseUsers {

    constructor(
       private usersRepositoty : IUsersRepository
    ){}

    async execute(email: string){

       const userExist = await this.usersRepositoty
        .findByEmail(email)
        return userExist
            
    }
}