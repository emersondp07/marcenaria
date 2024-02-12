import { FastifyInstance } from "fastify";
import { orcamentos } from "./orcamento";

export async function orcamentoRouter(app: FastifyInstance) {
  app.post("/orcamento", orcamentos);
  // app.get("/", orcamento);
}
