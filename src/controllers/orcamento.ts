import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { valorMaterial } from "../use-cases/valor-material";

const geo = z.array(
  z.object({
    estrutura: z.string().toLowerCase(),
    geometria: z.string().toLowerCase(),
    raio_base: z.string().toLowerCase().optional(),
    comprimento: z.string().toLowerCase().optional(),
    largura: z.string().toLowerCase().optional(),
    altura: z.string().toLowerCase(),
  })
);

const m = z.object({
  movel: z.string().toLowerCase(),
  material: z.string().toLowerCase(),
  geometrias: geo,
});

export async function orcamento(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { movel, material, geometrias } = m.parse(request.body);

    const v = valorMaterial(material);
    // const calGeral =

    return reply.status(201).send();
  } catch (error) {
    console.log(error);
  }
}
