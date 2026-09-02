import { Outlet, useLocation } from "react-router";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Navbar } from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb, WhatsappButton } from "../ui";

function Layout() {
  const location = useLocation();
  useScrollToTop();
  return (
    <>
      <Navbar promotion={true} />
      {location.pathname === "/" && <Header />}
      <main className="relative">
        <Breadcrumb />
        <Outlet />
        <WhatsappButton />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
