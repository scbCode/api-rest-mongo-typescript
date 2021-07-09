// import * as mongoose from 'mongoose';
import { ICreateUserDTO } from '../useCases/CreateUser/CreateUserDTO';
import { Document, Schema, model} from "mongoose";

export interface UserModelInterface extends ICreateUserDTO, Document {
  fullName(): string;
}

export var UserSchema: Schema = new Schema({
  nome: String,
  email: String,
  senha: String,
});
// UserSchema.pre("save", function(next) {
//   next();
// });

UserSchema.methods.fullName = function(): string {
  return this.modelName;
};
export default model<ICreateUserDTO>("User", UserSchema);
