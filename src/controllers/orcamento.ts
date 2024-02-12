import { db } from "@/db/connection";
import { FastifyReply, FastifyRequest } from "fastify";
import { orcamento } from "../db/schema";

// const geo = z.array(
//   z.object({
//     estrutura: z.string().toLowerCase(),
//     geometria: z
//       .string()
//       .toLowerCase()
//       .refine(
//         (data) => removeAcentos(data) === removeAcentos(data.toLowerCase())
//       ),
//     raio_base: z.string().toLowerCase().optional(),
//     comprimento: z.string().toLowerCase().optional(),
//     largura: z.string().toLowerCase().optional(),
//     altura: z.string().toLowerCase(),
//   })
// );

// const m = z.object({
//   movel: z.string().toLowerCase(),
//   material: z.string().toLowerCase(),
//   geometrias: geo,
// });

export async function orcamentos(request: FastifyRequest, reply: FastifyReply) {
  try {
    const create = await db
      .insert(orcamento)
      .values({
        id: 3,
        material: "test",
        mobile: "test",
        totalPrice: "test",
      })
      .returning();

    return reply.status(201).send(create);

    // const { material, geometrias } = m.parse(request.body);
    // const v = valorMaterial(material);
    // const calcPecas: number[] = [];
    // geometrias.map((geometria) => {
    //   const g = removeAcentos(geometria.geometria);
    //   switch (g) {
    //     case "cilindro":
    //       if (geometria.raio_base && geometria.altura) {
    //         const calcAreaCilindro = calculoCilindro(
    //           geometria.raio_base,
    //           geometria.altura
    //         );
    //         const calcCilindro = calcAreaCilindro * v;
    //         calcPecas.push(calcCilindro);
    //       }
    //       break;
    //     case "cubo":
    //       if (geometria.comprimento) {
    //         const calcAreaCubo = calculoCubo(geometria.comprimento);
    //         const calcCubo = calcAreaCubo * v;
    //         calcPecas.push(calcCubo);
    //       }
    //       break;
    //     case "esfera":
    //       if (geometria.raio_base) {
    //         const calcAreaEsfera = calculoEsfera(geometria.raio_base);
    //         const calcEsfera = calcAreaEsfera * v;
    //         calcPecas.push(calcEsfera);
    //       }
    //       break;
    //     case "paralelepipedo":
    //       if (geometria.largura && geometria.altura && geometria.comprimento) {
    //         const calcAreaParalelepipedo = calculoParalelepipedo(
    //           geometria.largura,
    //           geometria.altura,
    //           geometria.comprimento
    //         );
    //         const calcParalelepipedo = calcAreaParalelepipedo * v;
    //         calcPecas.push(calcParalelepipedo);
    //       }
    //       break;
    //     case "piramide":
    //       if (geometria.largura && geometria.altura) {
    //         const calcAreaPiramide = calculoPiramide(
    //           geometria.largura,
    //           geometria.altura
    //         );
    //         const calcCilindro = calcAreaPiramide * v;
    //         calcPecas.push(calcCilindro);
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // });
    // const soma = calcPecas.reduce((acc, num) => acc + num, 0);
    // const result = soma.toFixed(2);
    // return reply.status(201).send(`R$${result}`);
  } catch (error: any) {
    return reply.status(400).send(error.message);
  }
}
