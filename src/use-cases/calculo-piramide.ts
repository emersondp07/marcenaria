export function calculoPiramide(largura: string, altura: string): number {
  const larguraNumber = Number(largura.match(/\d+(\.\d+)?/)?.[0]);
  const alturaNumber = Number(altura.match(/\d+(\.\d+)?/)?.[0]);

  const perimetroBase = larguraNumber * 4;
  const areaBase = larguraNumber * larguraNumber;

  let areaLateral =
    (perimetroBase / 2) *
    Math.sqrt(Math.pow(perimetroBase / 2, 2) + Math.pow(alturaNumber, 2));
  let areaTotal = areaLateral + areaBase;
  return areaTotal;
}
