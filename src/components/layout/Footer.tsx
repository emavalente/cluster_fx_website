import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer className="w-full h-80 px-4 flex flex-col justify-center items-center gap-10 bg-black">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-center text-title-white">
          Encontranos también en nuestras redes
        </p>
        <IconContext.Provider value={{ className: "text-2xl text-yellow" }}>
          <ul className="mt-8 flex gap-10">
            <li>
              <a
                href="https://www.facebook.com/cluster.efectos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/efectoscluster"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/efectoscluster/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/EfectosCluster"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h4 className="mb-4 text-xs text-white text-center font-extralight">
          © 2026 Cluster fx | Felipe Vallese 3824, Buenos Aires (Argentina).
          Todos los derechos reservados.
        </h4>
        <h5 className="text-xs text-white font-extralight">
          Diseño y desarrollo por{" "}
          <a
            href="https://www.linkedin.com/in/emanuel-valente"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Valente Emanuel
          </a>
        </h5>
      </div>
    </footer>
  );
}
