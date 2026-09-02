import { CgPlayButtonO } from "react-icons/cg";
import { IconContext } from "react-icons";
import type { Session } from "../../types";

type SessionCardProps = {
  session: Session;
};
export default function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="relative w-full max-w-95 overflow-hidden rounded-lg shadow-lg">
      <img
        src={session.image}
        alt={session.description}
        className="block w-full"
      />

      <div className="absolute bottom-4 left-4 right-4">
        <h4 className="text-[clamp(1rem,4vw,1.2rem)] font-bold text-white">
          {session.title}
        </h4>

        <p className="text-[clamp(0.9rem,2.5vw,1rem)] font-normal text-gray-500">
          {session.description}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(34,35,36,0.8)] opacity-0 transition-opacity hover:opacity-100">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=At2L_pj8T1c"
        >
          <IconContext.Provider
            value={{
              className: "text-6xl text-yellow",
            }}
          >
            <CgPlayButtonO />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
}
