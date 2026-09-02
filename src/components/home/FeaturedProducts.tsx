import { products } from "../../data/products";
import { ProductHomeCard } from "../products";

export default function FeaturedProducts() {
  return (
    <section className="section">
      <div className="lg:flex lg:justify-between lg:items-start">
        {/* COLUMNA IZQUIERDA */}
        <div className="lg:w-[42%] pb-[10vw] pt-20 lg:sticky lg:top-[35vh]">
          <h2 className="title">
            NUESTROS
            <br />
            EFECTOS
          </h2>

          <p className="mt-4 subtitle">
            Revisa nuestra lista actual de efectos!
          </p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="relative w-full lg:w-[54%]">
          <div className="flex overflow-x-auto pb-8 lg:pb-0 lg:block lg:overflow-x-hidden">
            {products.map((product) => (
              <ProductHomeCard key={product.id} product={product} />
            ))}
          </div>

          {/* FADE MOBILE */}
          <div className="absolute right-0 top-0 z-10 h-full w-8 pointer-events-none bg-linear-to-l from-gray-100 via-gray-100/70 to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
