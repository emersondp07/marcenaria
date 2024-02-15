import { eq } from "drizzle-orm";
import {
  CreateUserDto,
  ResponseUserDto,
  UpdateUserDto,
} from "../../http/controllers/users/dtos/create-user.dto";
import { drizz } from "../../lib/db/connection";
import { users } from "../../lib/db/schema";
import { UserRepository } from "../user-repository";

export class DrizzleUserRepository implements UserRepository {
  async create(data: CreateUserDto): Promise<ResponseUserDto | any> {
    const user = await drizz.insert(users).values(data);

    return user;
  }

  async findById(id: number): Promise<ResponseUserDto | null> {
    const user = await drizz.select().from(users).where(eq(users.id, id));

    return user[0];
  }

  async update(
    id: number,
    data: UpdateUserDto
  ): Promise<ResponseUserDto | any> {
    const user = await drizz.update(users).set(data).where(eq(users.id, id));

    return user;
  }
}
