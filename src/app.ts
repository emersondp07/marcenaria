import fastify from "fastify";
import { orcamentoRouter } from "./http/controllers";

export const app = fastify();

app.register(orcamentoRouter);
