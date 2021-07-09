import { DbUserRepository } from "../../repository/implementation/DbUserRepository";
import { FindUserCaseUsers } from "./findUserCaseUser";
import { FindUserController } from "./findUserController";

const DbUsersRepository = new DbUserRepository()

const findUserUseCase = new FindUserCaseUsers(
    DbUsersRepository
)

const findUserController = new FindUserController(
  findUserUseCase
)

export { findUserUseCase, findUserController }