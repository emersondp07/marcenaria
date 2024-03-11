import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { furniture } from "./furniture";

const homeEnvironments = pgEnum("home_environments", [
  "COZINHA",
  "SALA",
  "DORMITORIO_CASAL",
  "DORMITORIO_SOLTEIRO",
  "BANHEIRO",
  "LIVRE",
]);

const statusBudgets = pgEnum("status_budgets", [
  "ANALISE",
  "AGUARDANDO_APROVACAO",
  "APROVADO",
  "REPROVADO",
]);

export const budgetRequests = pgTable("budget_request", {
  id: serial("id").primaryKey().notNull().unique(),
  homeEnvironment: homeEnvironments("home_environments").default("LIVRE"),
  statusBudget: statusBudgets("status_budgets"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  createId: integer("create_id"),
  createName: text("create_name"),
  updatedAt: timestamp("updated_at").defaultNow(),
  updatedId: integer("updated_id"),
  updatedNmae: text("updated_name"),
});

export const budgetRequestRelations = relations(budgetRequests, ({ many }) => ({
  furniture: many(furniture),
}));
