import type { CartItem } from "../types";
import { formatCurrency } from "../helpers";

export function createWhatsAppMessage(cart: CartItem[]) {
  const items = cart
    .map((item) => {
      const subtotal = item.product.price * item.quantity;

      return `• ${item.product.name}
  Cantidad: ${item.quantity}
  Subtotal: ${formatCurrency(subtotal)}`;
    })
    .join("\n\n");

  const total = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return `¡Hola Cluster! Quisiera realizar el siguiente pedido desde la web:

>> PEDIDO

${items}

>> TOTAL: ${formatCurrency(total)}

Quedo atento/a para coordinar el pago y la entrega.`;
}
