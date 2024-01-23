export function valorMaterial(material: string): number {
  console.log(material);

  let v = 0;

  switch (material) {
    case "pinho":
      v = 0.1;
      break;
    case "carvalho":
      v = 0.3;
      break;
    case "ebano":
      v = 5.0;
      break;
    default:
      v = 0;
      break;
  }

  return v;
}
