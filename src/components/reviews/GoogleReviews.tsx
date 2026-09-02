import { FaStar } from "react-icons/fa";
import type { Review } from "../../types";

type GoogleReviewsProps = {
  reviews: Review[];
  rating: number;
  totalReviews: number;
};

export function GoogleReviews({
  reviews,
  rating,
  totalReviews,
}: GoogleReviewsProps) {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            Opiniones de nuestros clientes
          </p>

          <h2 className="mb-4 text-3xl font-bold">Lo que dicen de Cluster</h2>

          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-bold">{rating.toFixed(1)}</span>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-500" />
              ))}
            </div>

            <span className="text-sm text-gray-500">
              ({totalReviews} reseñas)
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              {/* Author */}
              <div className="mb-4 flex items-center gap-3">
                {review.authorPhoto ? (
                  <img
                    src={review.authorPhoto}
                    alt={review.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600">
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="font-semibold">{review.author}</h3>

                  {review.date && (
                    <p className="text-xs text-gray-500">{review.date}</p>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-500" />
                ))}
                {review.rating}
              </div>

              {/* Text */}
              <p className="flex-1 text-sm leading-relaxed text-gray-600">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        {/* Google link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Efectos+Cluster+-+Servicio+T%C3%A9cnico+y+Pedales+de+Efectos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
