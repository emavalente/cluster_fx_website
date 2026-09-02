import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

export const WhatsappButton = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", className: "text-3xl lg:text-5xl" }}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5491176515333&text=Desde%20la%20web:%20Hola%21%20quiero%20hacerte%20una%20consulta!."
        target="_blank"
        className="fixed z-40 bottom-10 right-8 w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center bg-green-500 rounded-full shadow-md transition-transform hover:-translate-y-4 hover:shadow-xl"
      >
        <FaWhatsapp />
      </a>
    </IconContext.Provider>
  );
};
