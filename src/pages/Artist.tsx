import ArtistCard from "../components/artists/ArtistCard";
import { artists } from "../data/artists";
import logo from "../assets/logo/sticker_elefante_400x400.png";

function Artist() {
  return (
    <>
      <section className="section mb-12.5 flex flex-col ">
        <div className="gallery">
          <p className="subtitle">
            Conocé algunos de los artistas que utilizan nuestra marca.
            <img
              src={logo}
              alt="logo_cluster"
              className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]"
            />
          </p>
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Artist;
