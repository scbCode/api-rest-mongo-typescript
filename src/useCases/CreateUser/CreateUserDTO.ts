import mongoose from 'mongoose';

export interface ICreateUserDTO extends mongoose.Document {
    email: string;
    nome: string;
    senha: string;
}