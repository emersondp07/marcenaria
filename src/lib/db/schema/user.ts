import { pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const roles = pgEnum("roles", ["MEMBER", "ADMIN"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey().unique(),
  name: text("name").notNull(),
  lastename: text("name"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: roles("roles").default("MEMBER"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
