import { compare } from "bcryptjs";
import { ResponseUserDto } from "../http/controllers/users/dtos/create-user.dto";
import { UserRepository } from "../repositories/user-repository";
import { InvalidCredencialsError } from "./errors/invalid-credentials-error";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: ResponseUserDto;
}

export class AuthenticateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredencialsError();
    }

    const doesPasswordMatches = await compare(password, user.password);

    if (!doesPasswordMatches) {
      throw new InvalidCredencialsError();
    }

    return { user };
  }
}
