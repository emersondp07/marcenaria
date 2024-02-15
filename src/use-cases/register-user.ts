import {
  CreateUserDto,
  ResponseUserDto,
} from "../http/controllers/users/dtos/create-user.dto";
import { UserRepository } from "../repositories/user-repository";

export class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    name,
    lastename,
    email,
    password,
  }: CreateUserDto): Promise<ResponseUserDto> {
    const user = this.userRepository.create({
      name,
      lastename,
      email,
      password,
    });

    return user;
  }
}
