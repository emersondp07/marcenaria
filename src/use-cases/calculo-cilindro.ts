export function calculoCilindro(raio_base: string, altura: string): number {
  const raioBaseNumber = Number(raio_base.match(/\d+(\.\d+)?/)?.[0]);
  const alturaNumber = Number(altura.match(/\d+(\.\d+)?/)?.[0]);

  let areaBase = 2 * Math.PI * Math.pow(raioBaseNumber, 2);
  let areaLateral = 2 * Math.PI * raioBaseNumber * alturaNumber;
  let areaTotal = areaBase + areaLateral;
  return areaTotal;
}
