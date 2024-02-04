import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const orcamento = pgTable("orcamento", {
  id: integer("id").primaryKey(),
  mobile: text("mobile").notNull(),
  material: text("material").notNull(),
  totalPrice: text("total_price").notNull(),
  details: text("mobile_details"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
