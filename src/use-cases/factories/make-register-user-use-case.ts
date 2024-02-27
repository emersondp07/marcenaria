import { DrizzleUserRepository } from "../../repositories/drizzle/drizzle-user-repository";
import { RegisterUserUseCase } from "../register-user";

export function makeRegisterUserUseCase() {
  const usersRepository = new DrizzleUserRepository();
  const registerUseCase = new RegisterUserUseCase(usersRepository);

  return registerUseCase;
}
