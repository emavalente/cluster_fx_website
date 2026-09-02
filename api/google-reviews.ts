declare const process: {
  env: Record<string, string | undefined>;
};

export default async function handler(): Promise<Response> {
  console.log("INICIO DE LA FUNCION");

  try {
    const response = await fetch("https://places.googleapis.com");

    console.log("GOOGLE RESPONDIO:", response.status);

    return new Response(
      JSON.stringify({
        ok: true,
        status: response.status,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("ERROR:", error);

    return new Response(
      JSON.stringify({
        ok: false,
        error: String(error),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
