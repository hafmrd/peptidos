export const FREE_SHIPPING_THRESHOLD = 250;
export const SHIPPING_FLAT = 15;
export const TAX_RATE = 0.08;

export function calcShipping(subtotal: number): number {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
}

export function calcTax(subtotal: number): number {
  return subtotal * TAX_RATE;
}

export function calcGrandTotal(subtotal: number): number {
  return subtotal + calcShipping(subtotal) + calcTax(subtotal);
}
