import { FastifyInstance } from "fastify";
import { budgetRequest } from "./budget-request";

export async function requestsRoutes(app: FastifyInstance) {
  /**
   * solicitação de orcamento
   * visualizacao dos solicitacao
   * visualizacao dos orcamento
   * criar um orcamento
   */
  app.post("/budget-request", budgetRequest);
  // app.get("/get-all-request", budgetRequest);
  // app.get("/get-all-budget", budgetRequest);
  // app.post("/create-budget", budgetRequest);
}
