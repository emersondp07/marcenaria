import {
  CreateUserDto,
  ResponseUserDto,
  UpdateUserDto,
} from "../../http/controllers/users/dtos/create-user.dto";
import { UserRepository } from "../user-repository";

export class InMemoryUsersRepository implements UserRepository {
  public items: ResponseUserDto[] = [];

  async findById(id: number) {
    const user = this.items.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(email: string): Promise<ResponseUserDto | null> {
    const user = this.items.filter((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user[0];
  }

  async create(data: CreateUserDto): Promise<ResponseUserDto> {
    const user: CreateUserDto = {
      id: 1,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    this.items.push(user);

    return user;
  }

  async update(id: number, { name, lastname, password }: UpdateUserDto) {
    const findUser = this.items.find((item) => item.id === id);

    if (!findUser) {
      return null;
    }

    const data: UpdateUserDto = {};

    if (name) {
      data.name = name;
    }

    if (lastname) {
      data.lastname = lastname;
    }

    if (password) {
      data.password = password;
    }

    const user: UpdateUserDto = data;

    return user;
  }
}
