import { IUsersRepository } from "../IUsersRepository";
import * as mongoose from 'mongoose';
import User from "../../entities/User";
import crypto from 'crypto'
import config from "../../config/config";

export class DbUserRepository implements IUsersRepository{

    async findByEmail(email: string): Promise<mongoose.Document> {

        const u = await User.findOne({email:email},{ _id: 0 ,__v:0,senha:0})
        console.log(u)
        if (u)
            return u
        else
        throw new Error('User nao encontrado');


    }

    async register(nome: string,email:string,senha:string): Promise<mongoose.Document> {
             
        const usuario_exist = await User.findOne({email:email}, { _id: 0 ,__v:0,senha:0})

        if (usuario_exist==null){
            const u = await User.create({nome:nome,email:email,senha:senha})
            return u;
        }else
            throw new Error('User já existe');


    }

    async login(email:string,senha:string): Promise<mongoose.Document> {
       
        const hash = crypto.createHmac('sha256', config.secret)
            .update(senha)
            .digest('hex');
            
        const usuario_exist = await User.findOne({email:email}, { _id: 0 ,__v:0,senha:0})

        if (usuario_exist){
            const usuario = await User.findOne({email:email,senha:hash}, { _id: 0 ,__v:0,senha:0})
            return usuario;
        }else
            return usuario_exist;
       
    }

}