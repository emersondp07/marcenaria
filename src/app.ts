import fastify from "fastify";
import { orcamentoRouter } from "./controllers";

export const app = fastify();

app.register(orcamentoRouter);
