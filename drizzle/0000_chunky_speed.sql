CREATE TABLE IF NOT EXISTS "orcamento" (
	"id" integer PRIMARY KEY NOT NULL,
	"mobile" text NOT NULL,
	"material" text NOT NULL,
	"total_price" text NOT NULL,
	"mobile_details" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
