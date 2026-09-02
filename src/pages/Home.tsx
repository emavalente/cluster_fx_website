import { useEffect, useState } from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import SectionTitle from "../components/ui/SectionTitle";
import SessionCard from "../components/sessions/SessionCard";
import { sessions } from "../data/sessions";
import { GoogleReviews } from "../components/reviews/GoogleReviews";
import { getGoogleReviews } from "../services/googlePlaces";
import type { Review } from "../types";
import logo_1 from "../assets/logo/logo_elefante_6.png";
import logo_2 from "../assets/logo/logo_elefante_5.png";
import logo_3 from "../assets/logo/logo_elefante_400x400.png";

function Home() {
  const [googleReviews, setGoogleReviews] = useState<{
    reviews: Review[];
    rating: number;
    totalReviews: number;
  }>({
    reviews: [],
    rating: 0,
    totalReviews: 0,
  });

  useEffect(() => {
    getGoogleReviews()
      .then((data) => {
        setGoogleReviews(data);
      })
      .catch((error) => {
        console.error("Error al obtener reseñas de Google:", error);
      });
  }, []);

  return (
    <>
      <section className="section">
        <SectionTitle title="Nosotros" />
        <article className="lg:max-w-[50%] mx-auto flex flex-col gap-4 text-content">
          <p>
            Somos una empresa fundada en Buenos Aires, Argentina, dedicada desde
            el año 2002 al diseño y fabricación de efectos analógicos para
            músicos. Desde nuestros comienzos nos propusimos crear mucho más que
            simples dispositivos: buscamos desarrollar herramientas útiles y
            creativas que acompañen a cada músico en la búsqueda y construcción
            de su propio sonido.
          </p>
          <p>
            Entendemos que cada efecto puede convertirse en una parte
            fundamental de la expresión musical, por eso trabajamos con la idea
            de ofrecer soluciones que inspiren, potencien y amplíen las
            posibilidades creativas de quienes hacen música.
          </p>
          <p>
            Pero nuestro trabajo no termina en la fabricación. También ofrecemos
            servicio técnico especializado y realizamos modificaciones en
            pedales de efectos de diferentes marcas, atendiendo las necesidades
            particulares de cada cliente. Ya sea para dar vida a una nueva
            herramienta sonora, reparar un equipo o realizar una modificación,
            nuestro objetivo es el mismo desde el primer día: poner nuestra
            experiencia y conocimiento al servicio de los músicos y de su
            creatividad.
          </p>
          <div className="w-full mt-10 flex justify-between items-center">
            <img
              src={logo_1}
              alt="logo_cluster"
              className="w-28 max-w-48 rounded-lg"
            />
            <img
              src={logo_2}
              alt="logo_cluster"
              className="w-28 max-w-48 rounded-lg"
            />
            <img
              src={logo_3}
              alt="logo_cluster"
              className="w-28 max-w-48 rounded-lg"
            />
          </div>
        </article>
      </section>
      <FeaturedProducts />
      <section className="section">
        <SectionTitle title="Cluster Sesiones" />
        <div className="w-full max-w-350 mx-auto flex flex-col gap-8 items-center md:flex-row md:justify-between">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </section>
      <section className="section mt-40">
        <GoogleReviews
          reviews={googleReviews.reviews}
          rating={googleReviews.rating}
          totalReviews={googleReviews.totalReviews}
        />
      </section>
    </>
  );
}

export default Home;
