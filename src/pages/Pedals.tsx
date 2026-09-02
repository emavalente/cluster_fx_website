import { ProductCard } from "../components/products";
import { products } from "../data/products";

function Pedals() {
  return (
    <>
      <section className="section flex flex-wrap justify-center gap-x-6 gap-y-20 mb-12.5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            newFlag={product.newFlag}
          />
        ))}
      </section>
      <section className="section mb-12.5">
        <p className="mx-auto max-w-250 my-10 text-content text-center">
          * La disponibilidad de stock de cada producto será informada luego de
          realizar el pedido de compra. No deberás abonar tu pedido hasta que el
          mismo sea confirmado por Cluster, caso contrario se dará por
          cancelado. El total de la compra al finalizar el pedido no incluye
          costos de envío. La garantía total de todos nuestros productos es de 5
          años a partir de la fecha de compra.
        </p>
      </section>
    </>
  );
}

export default Pedals;
