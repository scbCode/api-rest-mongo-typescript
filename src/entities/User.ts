// import * as mongoose from 'mongoose';
import { ICreateUserDTO } from '../useCases/CreateUser/CreateUserDTO';
import { Document, Schema, model} from "mongoose";

export interface UserModelInterface extends ICreateUserDTO, Document {
}

export var UserSchema: Schema = new Schema({
  nome: String,
  email: { type: String, unique: true, required: true },
  senha: String,
  token: String
});
// UserSchema.pre("save", function(next) {
//   next();
// });

export default model<ICreateUserDTO>("User", UserSchema);
