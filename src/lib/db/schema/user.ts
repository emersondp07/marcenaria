import { pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const roles = pgEnum("roles", ["MEMBER", "ADMIN"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull().unique(),
  name: text("name").notNull(),
  lastname: text("lastname"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: roles("roles").default("MEMBER"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
