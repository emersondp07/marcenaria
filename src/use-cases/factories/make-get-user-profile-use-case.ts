import { DrizzleUserRepository } from "../../repositories/drizzle/drizzle-user-repository";
import { GetUserProfileUseCase } from "../get-user-profile";

export function makeGetUserProfileUseCase() {
  const usersRepository = new DrizzleUserRepository();
  const useCase = new GetUserProfileUseCase(usersRepository);

  return useCase;
}
