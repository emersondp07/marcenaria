import { users } from "@/lib/db/schema";

type CreateUser = typeof users.$inferInsert;

export interface CreateUserDto extends CreateUser {}

export interface ResponseUserDto extends CreateUser {}

export interface UpdateUserDto {
  name?: string;
  last?: string;
  password?: string;
}
