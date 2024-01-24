export function calculoEsfera(raio_base: string): number {
  const raioBaseNumber = Number(raio_base.match(/\d+(\.\d+)?/)?.[0]);
  let areaTotal = 4 * Math.PI * Math.pow(raioBaseNumber, 2);
  return areaTotal;
}
