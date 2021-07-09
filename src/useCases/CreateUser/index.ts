import { DbUserRepository } from "../../repository/implementation/DbUserRepository";
import { CreateUserCaseUsers } from "./CreateUserCaseUser";
import { CreateUserController } from "./CreateUserController";

const DbUsersRepository = new DbUserRepository()

const createUserUseCase = new CreateUserCaseUsers(
    DbUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }