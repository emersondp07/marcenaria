import { BudgetRequestUseCase } from "@/use-cases/budget-request";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function budgetRequest(req: FastifyRequest, res: FastifyReply) {
  const registerBudgetRequestSchema = z.object({
    homeEnvironment: z.enum([
      "COZINHA",
      "SALA",
      "DORMITORIO_CASAL",
      "DORMITORIO_SOLTEIRO",
      "BANHEIRO",
    ]),
    description: z.string(),
  });

  const { homeEnvironment, description } = registerBudgetRequestSchema.parse(
    req.body
  );

  try {
    const budgetRequestUseCase = new BudgetRequestUseCase();

    await budgetRequestUseCase.execute(homeEnvironment, description);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(409).send({ message: err.message });
    }

    throw err;
  }

  return res.status(201).send();
}
