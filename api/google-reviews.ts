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

export default async function handler(_request: Request): Promise<Response> {
  const apiKey = process.env["GOOGLE_API_KEY"];
  const placeId = process.env["GOOGLE_PLACE_ID"];

  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({
        error: "Faltan las variables de entorno de Google Places",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
  console.log("Llamando a Google Places...");
  const response = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
    },
  );

  if (!response.ok) {
    const error = await response.text();

    console.error("Error de Google Places:", error);

    return new Response(
      JSON.stringify({
        error: "No se pudieron obtener las reseñas de Google",
      }),
      {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const data = (await response.json()) as GooglePlaceResponse;

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
