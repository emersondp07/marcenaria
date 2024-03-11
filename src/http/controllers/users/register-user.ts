import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists-error";
import { makeRegisterUserUseCase } from "../../../use-cases/factories/make-register-user-use-case";

export async function registerUser(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["MEMBER", "ADMIN"]).default("MEMBER"),
  });

  const { name, lastname, email, password } = registerBodySchema.parse(
    req.body
  );

  try {
    const registerUseCase = makeRegisterUserUseCase();

    await registerUseCase.execute({
      name,
      lastname,
      email,
      password,
    });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return res.status(409).send({ message: err.message });
    }

    throw err;
  }

  return res.status(201).send();
}
