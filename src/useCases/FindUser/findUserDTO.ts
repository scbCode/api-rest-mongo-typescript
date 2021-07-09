import mongoose from 'mongoose';

export interface IFindUserDTO extends mongoose.Document {
    email: string;
    nome: string;
    senha: string;
}