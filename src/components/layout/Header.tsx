import { Link } from "react-router";
import hero_1 from "../../assets/cluster_hero_03.png";
import hero_2 from "../../assets/cluster_hero_02.png";
import { useWindowWidth } from "../../hooks/useWindowsWidth";

export default function Header() {
  const width = useWindowWidth();

  return (
    <header
      className="w-full h-[calc(100dvh-70px)] md:h-[calc(100dvh-100px)] mt-18 md:mt-25 mb-20 flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${width <= 960 ? hero_2 : hero_1})`,
      }}
    >
      <div className="w-full mt-[11vh] md:m-0 lg:pr-[20%] ">
        <div className="w-[90%] mx-auto max-w-250">
          <div className="md:max-w-[45%] md:mr-auto">
            <h1 className="mb-4 text-5xl font-encode font-black text-white">
              CLUSTER fx
            </h1>
            <h2 className="mb-4 font-bold text-sm text-white">
              Volvimos para quedarnos, aunque nunca nos fuimos. Los Mejores
              pedales de efecto para músicos a todo terreno!
            </h2>
            <Link
              to="/tienda"
              className={
                "block w-full md:max-w-75 h-16 px-6 text-center leading-16 text-white font-bold hover:text-black cursor-pointer bg-black hover:bg-yellow active:scale-[0.98] transition-all duration-200 rounded-md"
              }
            >
              COMPRAR AHORA!
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
