import type { Artist } from "../../types";

type ArtistCardProps = {
  artist: Artist;
};
export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <article className="w-full pb-8 flex flex-col items-center overflow-hidden bg-gray-100 rounded-lg shadow-lg">
      <img src={artist.image} alt="foto de carca" className="w-full" />
      <div className="w-[90%] mx-auto">
        <h2 className="pt-10 text-xl font-encode font-black uppercase">
          {artist.name}
        </h2>
        <p className="mt-2 text-lg text-gray-400">{artist.description}</p>
      </div>
    </article>
  );
}
