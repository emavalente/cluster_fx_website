import type { Review } from "../types";

type GoogleReview = {
  name: string;
  relativePublishTimeDescription?: string;
  rating: number;
  text?: {
    text: string;
    languageCode?: string;
  };
  authorAttribution?: {
    displayName: string;
    photoUri?: string;
  };
};

type GooglePlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
};

let reviewsPromise: Promise<{
  rating: number;
  totalReviews: number;
  reviews: Review[];
}> | null = null;

export function getGoogleReviews() {
  if (reviewsPromise) {
    return reviewsPromise;
  }

  reviewsPromise = fetch("/api/google-reviews").then(async (response) => {
    if (!response.ok) {
      const error = await response.text();

      console.error("Error al obtener reseñas:", error);

      throw new Error("No se pudieron obtener las reseñas de Google");
    }

    const data = (await response.json()) as GooglePlaceResponse;

    const reviews: Review[] =
      data.reviews?.map((review) => ({
        id: review.name,
        author: review.authorAttribution?.displayName ?? "Usuario de Google",
        rating: review.rating,
        text: review.text?.text ?? "",
        date: review.relativePublishTimeDescription,
        authorPhoto: review.authorAttribution?.photoUri,
      })) ?? [];

    return {
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
    };
  });

  return reviewsPromise;
}
