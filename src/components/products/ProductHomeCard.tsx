import { useLocation } from "react-router";
import type { Pedal } from "../../types";
import { useWindowWidth } from "../../hooks/useWindowsWidth";

type ProductHomeCardProps = {
  product: Pedal;
};
export function ProductHomeCard({ product }: ProductHomeCardProps) {
  const width = useWindowWidth();
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <article className="h-auto min-h-125 w-full shrink-0 lg:min-h-screen flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-center lg:gap-10">
        {/* IMAGEN */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={isHome ? product.image[0] : product.image[1]}
            alt={product.name}
            className="w-full max-w-[min(100%,28rem)] h-auto object-contain"
          />
        </div>

        {/* INFORMACIÓN */}
        <div className="w-full lg:w-1/2 flex flex-col min-w-0">
          <h3 className="text-title-black text-center lg:text-left">
            {product.name}
          </h3>

          <p className="text-content mt-4 px-4 text-center lg:text-left">
            {product.description_long}
          </p>
          {width >= 960 && (
            <div className="mt-4 relative w-full aspect-video overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={product.review}
                title={`${product.name} - reseña`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
