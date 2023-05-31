export function formatPrice(valueInCents: number) {
  const valueFomarted = (valueInCents / 100);
  return valueFomarted.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
}