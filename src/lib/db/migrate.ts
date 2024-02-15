import chalk from "chalk";
import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import { env } from "@/env";

const connection = postgres(env.DATABASE_URL, { max: 1 });
const db = drizzle(connection);

migrate(db, { migrationsFolder: "drizzle" });

console.log(chalk.greenBright("Migrations applied successfully!"));

connection.end();

process.exit();