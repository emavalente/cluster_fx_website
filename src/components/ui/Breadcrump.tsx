import { Link, useLocation } from "react-router";
import { useWindowWidth } from "../../hooks";

const routes = {
  "/tienda": "Pedales de efecto",
  "/artistas": "Artistas",
  "/servicio_tecnico": "Servicio técnico",
  "/contacto": "Contacto",
};

export function Breadcrumb() {
  const location = useLocation();
  const width = useWindowWidth();

  const currentPage = routes[location.pathname as keyof typeof routes];

  if (!currentPage) {
    return null;
  }

  return (
    <nav
      aria-label="Navegación de ubicación"
      className={`section ${width < 720 ? "pt-30" : "pt-40"}`}
    >
      <div className="flex items-center gap-2 text-sm">
        <Link
          to="/"
          className="text-gray-500 transition-colors hover:text-gray-600"
        >
          Home
        </Link>

        <span aria-hidden="true">&gt;</span>

        <span className="text-gray-400">{currentPage}</span>
      </div>
    </nav>
  );
}
