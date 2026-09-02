import SectionTitle from "../components/ui/SectionTitle";
import repairImage from "../assets/reparaciones (1).jpg";
import modificationImage from "../assets/reparaciones (1).jpg";
import { ServiceCard } from "../components/workshop/ServiceCard";

function Workshop() {
  return (
    <section className={`section mb-12.5`}>
      <SectionTitle title="Nuestros servicios" />
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
        <iframe
          className="w-full max-w-217 h-80 lg:h-120 rounded-lg"
          src="https://www.youtube.com/embed/OD7oKVzp-S4?si=LbaDtd3QZT_u3w3V&cc_load_policy=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <div className="grid gap-8 md:grid-cols-2 justify-center">
          <ServiceCard
            title="Reparaciones"
            image={repairImage}
            description="En Cluster no solo fabricamos pedales, también los reparamos y les damos nueva vida. No pierdas las esperanzas."
            features={[
              "Diagnóstico",
              "Reparación",
              "Presupuesto sin cargo",
              "Reparaciones en 1 semana",
            ]}
          />

          <ServiceCard
            title="Modificaciones"
            image={modificationImage}
            description="Consultanos por la modificación que quieras aplicar a tus pedales y llevá su sonido un paso más allá."
            features={[
              "True Bypass",
              "Modificaciones de tono",
              "Modificaciones de circuito",
              "Mods personalizadas",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Workshop;
