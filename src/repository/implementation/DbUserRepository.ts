import { IUsersRepository } from "../IUsersRepository";
import * as mongoose from 'mongoose';
import User from "../../entities/User";

export class DbUserRepository {

    async findByEmail(nome: string): Promise<mongoose.Document> {
        const u = await User.findOne({nome:nome})
        console.log(u)
        return u
    }

    async  register(nome: string,email:string,senha:string): Promise<void> {
        const u = await User.create({nome:nome,email:email,senha:senha})
        console.log(u)
    }

}