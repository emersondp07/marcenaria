import {
  CreateUserDto,
  ResponseUserDto,
  UpdateUserDto,
} from "../http/controllers/users/dtos/create-user.dto";

export interface UserRepository {
  create(data: CreateUserDto): Promise<ResponseUserDto>;
  findById(id: number): Promise<ResponseUserDto | null>;
  findByEmail(email: string): Promise<ResponseUserDto | null>;
  update(id: number, data: UpdateUserDto): Promise<UpdateUserDto | null>;
}
