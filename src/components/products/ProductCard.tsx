import { formatCurrency } from "../../helpers";
import { useCart } from "../../hooks";
import type { Pedal } from "../../types";
import { Button } from "../ui/Button";

type ProductCardProps = {
  product: Pedal;
  newFlag?: boolean;
};

export function ProductCard({ product, newFlag = false }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <article className="relative group w-full lg:max-w-110 min-h-62.5 p-4 flex gap-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {newFlag && (
        <div className="absolute -left-4.75 -top-4.75 w-16 h-16 flex items-center justify-center text-sm text-white font-bold bg-violet border-4 border-white -rotate-45 rounded-full shadow-xl">
          NUEVO
        </div>
      )}
      <div className="w-2/5 shrink-0 flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={product.image[1]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="min-w-0 flex flex-1 flex-col">
        <div className="mb-3 flex items-start gap-3">
          <h2 className="min-w-0 flex-1 font-encode text-xl font-black uppercase leading-tight">
            {product.name} -{" "}
            <span className="shrink-0 font-inter text-lg font-bold text-red-600">
              {formatCurrency(product.price)}
            </span>
          </h2>
        </div>

        <p className="text-content line-clamp-4">{product.description_short}</p>

        <Button
          onClick={() => addToCart(product)}
          className="mt-auto lg:max-w-75"
        >
          AÑADIR AL CARRITO
        </Button>
      </div>
    </article>
  );
}
