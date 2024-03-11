import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const geometricShapes = pgEnum("geometric_shapes", [
  "ESFERA",
  "CUBO",
  "CILINDRO",
  "PARALELEPIPEDO",
  "PIRAMIDE_BASE_QUADRADA",
  "DISCO",
  "CONE",
]);

export const furniture = pgTable("furniture", {
  id: serial("id").primaryKey().notNull().unique(),
  name: text("name"),
  geometricShape: geometricShapes("geometric_shapes"),
  createdAt: timestamp("created_at").defaultNow(),
  createId: integer("create_id"),
  createName: text("create_name"),
  updatedAt: timestamp("updated_at").defaultNow(),
  updatedId: integer("updated_id"),
  updatedNmae: text("updated_name"),
});
