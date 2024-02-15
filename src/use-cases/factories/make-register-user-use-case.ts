import { DrizzleUserRepository } from "../../repositories/drizzle/drizzle-user-repository";
import { RegisterUser } from "../register-user";

export function makeRegisterUserUseCase() {
  const usersRepository = new DrizzleUserRepository();
  const registerUseCase = new RegisterUser(usersRepository);

  return registerUseCase;
}
