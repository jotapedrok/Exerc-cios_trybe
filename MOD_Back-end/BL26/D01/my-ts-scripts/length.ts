const units: string[] = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function makeError(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

export const convert = (value: number, baseUnit: string, conversionUnit: string): number => {
  if (!units.includes(baseUnit))
    makeError(baseUnit);
  if (!units.includes(conversionUnit))
    makeError(conversionUnit);
  
    const forIndex = units.indexOf(conversionUnit);
    const toIndex = units.indexOf(baseUnit);
    const exponent = (toIndex - forIndex);

    return value * Math.pow(10, exponent);
};
