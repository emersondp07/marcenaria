import { hash } from "bcryptjs";
import {
  CreateUserDto,
  ResponseUserDto,
} from "../http/controllers/users/dtos/create-user.dto";
import { UserRepository } from "../repositories/user-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    name,
    lastname,
    email,
    password,
    role,
  }: CreateUserDto): Promise<ResponseUserDto> {
    password = await hash(password, 10);

    const userWithSameEmail = await this.userRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.userRepository.create({
      name,
      lastname,
      email,
      password,
      role,
    });

    return user;
  }
}
