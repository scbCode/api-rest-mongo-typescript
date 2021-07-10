import mongoose from 'mongoose';

export interface ILoginUserDTO extends mongoose.Document {
    email: string;
    senha: string;
}