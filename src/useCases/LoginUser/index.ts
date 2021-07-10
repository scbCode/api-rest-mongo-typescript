import { DbUserRepository } from "../../repository/implementation/DbUserRepository";
import { LoginUserCaseUsers } from "./LoginUserCaseUser";
import { LoginUserController } from "./LoginUserController";

const DbUsersRepository = new DbUserRepository()

const LoginUserUseCase = new LoginUserCaseUsers(
    DbUsersRepository
)

const loginUserController = new LoginUserController(
  LoginUserUseCase
)

export { LoginUserUseCase, loginUserController }