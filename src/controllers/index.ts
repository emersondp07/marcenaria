import { FastifyInstance } from "fastify";
import { orcamento } from "./orcamento";

export async function orcamentoRouter(app: FastifyInstance) {
  app.post("/orcamento", orcamento);
}
