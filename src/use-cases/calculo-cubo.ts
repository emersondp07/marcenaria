export function calculoCubo(comprimento: string): number {
  const comprimentoNumber = Number(comprimento.match(/\d+(\.\d+)?/)?.[0]);
  let areaTotal = 6 * Math.pow(comprimentoNumber, 2);
  return areaTotal;
}
