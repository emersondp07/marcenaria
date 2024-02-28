import { ResponseUserDto } from "../http/controllers/users/dtos/create-user.dto";
import { UserRepository } from "../repositories/user-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetUserProfileUseCaseRequest {
  userId: number;
}

interface GetUserProfileUseCaseResponse {
  user: ResponseUserDto;
}

export class GetUserProfileUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    userId,
  }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return { user };
  }
}
