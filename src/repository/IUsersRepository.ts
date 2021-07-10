import  User  from "../entities/User";
import * as mongoose from 'mongoose';

export interface IUsersRepository {

 findByEmail(nome:string): Promise<mongoose.Document>;
 register(nome: string,email:string,senha:string): Promise<void>;
 login(email:string,senha:string): Promise<mongoose.Document>;

}