import { useState } from "react";
import { useCart, useWindowWidth } from "../../hooks";
import { Link } from "react-router";
import { Promotion } from "./Promotion";
import { NavItem } from "./NavItem";
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";
import { CartDrawer } from "../cart/CartDrawer";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/icons/logo_elefante.png";

type NavbarProps = {
  promotion: boolean;
};

export function Navbar({ promotion }: NavbarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const width = useWindowWidth();

  const { isEmpty, totalItems } = useCart();

  const isMobile = width <= 1150;

  return (
    <div className="fixed top-0 left-0 z-100 w-full">
      {promotion && width >= 720 && (
        <Promotion
          flagText="PROMOCION"
          flagColor="bg-red-600"
          text="Nuestro envío suele demorar de 2 - 3 días. Compras mayores a dos unidades tienen envío gratuito por Andreani."
        />
      )}

      <nav className="relative flex h-18 w-full items-center bg-black px-10 text-2xl text-white">
        {/* DESKTOP NAVIGATION */}

        {!isMobile && (
          <ul className="flex gap-6 text-lg">
            <NavItem to="/tienda" label="Pedales de efecto" />
            <NavItem to="/artistas" label="Artistas" />
            <NavItem to="/servicio_tecnico" label="Servicio Técnico" />
            <NavItem to="/contacto" label="Contacto" />
          </ul>
        )}

        {/* MOBILE MENU BUTTON */}

        {isMobile && (
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        )}

        {/* LOGO */}

        <Link to="/">
          <img
            src={logo}
            alt="Logo Cluster"
            className="h-14 w-14 absolute top-8 left-1/2 z-100 -translate-x-1/2 rounded-full"
            onClick={() => setIsMenuOpen(false)}
          />
        </Link>

        {/* CART */}

        <button
          type="button"
          className="relative ml-auto cursor-pointer"
          onClick={() => setIsCartOpen((prevState) => !prevState)}
          aria-label="Abrir carrito"
        >
          <IconContext.Provider
            value={{
              className: "text-4xl text-white hover:text-yellow",
            }}
          >
            <TiShoppingCart />
          </IconContext.Provider>

          {!isEmpty && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              {totalItems}
            </span>
          )}
        </button>

        {/* MOBILE NAVIGATION */}

        {isMobile && isMenuOpen && (
          <div className="w-full absolute top-full left-0 z-80 bg-black text-white shadow-xl">
            <ul className="px-8 py-8 flex flex-col gap-8 text-lg">
              <NavItem
                to="/tienda"
                label="Pedales de efecto"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                to="/artistas"
                label="Artistas"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                to="/servicio_tecnico"
                label="Servicio Técnico"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                to="/contacto"
                label="Contacto"
                onClick={() => setIsMenuOpen(false)}
              />
            </ul>
          </div>
        )}
      </nav>

      {/* CART DRAWER */}

      {isCartOpen && (
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      )}
    </div>
  );
}
