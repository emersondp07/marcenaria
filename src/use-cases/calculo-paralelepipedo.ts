export function calculoParalelepipedo(
  largura: string,
  altura: string,
  comprimento: string
): number {
  const larguraNumber = Number(largura.match(/\d+(\.\d+)?/)?.[0]);
  const alturaNumber = Number(altura.match(/\d+(\.\d+)?/)?.[0]);
  const comprimentoNumber = Number(comprimento.match(/\d+(\.\d+)?/)?.[0]);
  let areaTotal =
    2 *
    (larguraNumber * alturaNumber +
      larguraNumber * comprimentoNumber +
      alturaNumber * comprimentoNumber);
  return areaTotal;
}
