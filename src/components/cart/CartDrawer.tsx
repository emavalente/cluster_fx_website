import { IoClose } from "react-icons/io5";
import { useCart } from "../../hooks";
import { formatCurrency } from "../../helpers";
import { WHATSAPP_NUMBER } from "../../config/contact";
import { createWhatsAppMessage } from "../../utils/createWhatsAppMessage";
import { Button } from "../ui";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, cleanCart, totalPrice } = useCart();

  function handleCheckout() {
    const message = createWhatsAppMessage(cart);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-120 h-screen w-full max-w-md bg-white text-black shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="px-6 py-5 flex items-center justify-between border-b">
          <h2 className="font-inter text-xl font-bold">TU CARRITO</h2>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-2xl transition-colors hover:text-red-600"
            aria-label="Cerrar carrito"
          >
            <IoClose />
          </button>
        </header>

        {/* Content */}
        <div className="flex h-[calc(100vh-81px)] flex-col">
          {cart.length === 0 ? (
            <div className="px-6 flex flex-1 items-center justify-center">
              <p className="text-center text-gray-500">
                Tu carrito está vacío.
              </p>
            </div>
          ) : (
            <>
              {/* Productos */}
              <div className="p-6 flex-1 overflow-y-auto">
                {cart.map(({ product, quantity }) => (
                  <article
                    key={product.id}
                    className="py-4 flex gap-4 border-b border-gray-300"
                  >
                    <img
                      src={product.image[1]}
                      alt={product.name}
                      className="h-20 w-20 rounded-md object-contain"
                    />

                    <div className="flex flex-1 flex-col">
                      <h3 className="font-bold">{product.name}</h3>

                      <p className="text-sm text-gray-500">
                        Cantidad: {quantity}
                      </p>

                      <p className="mt-auto font-bold">
                        {formatCurrency(product.price * quantity)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Footer */}
              <footer className="border-t p-6">
                <p className="mb-2 text-gray-600 text-[10px]">
                  IMPORTANTE: Al finalizar la compra nos llegará tu pedido a
                  través de Whatsapp por donde confirmaremos stock, método de
                  pago y costos de envío.
                </p>
                <div className="mb-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <Button onClick={handleCheckout}>FINALIZAR COMPRA</Button>
                  <Button onClick={cleanCart}>BORRAR CARRITO</Button>
                </div>
              </footer>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
