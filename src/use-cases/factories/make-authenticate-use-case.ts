import { DrizzleUserRepository } from "../../repositories/drizzle/drizzle-user-repository";
import { AuthenticateUseCase } from "../authenticate";

export function makeAuthenticateUseCase() {
  const usersRepository = new DrizzleUserRepository();
  const authenticateUseCase = new AuthenticateUseCase(usersRepository);

  return authenticateUseCase;
}
