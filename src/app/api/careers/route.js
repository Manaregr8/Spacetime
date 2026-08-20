const CAREERS_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyPCALTt4s2oF6HgW8UPDPAvYsbiUHT4uws-GBdX03w1K5WjFVu4__8X2fvrshUzHnMng/exec";

export async function POST(request) {
  try {
    const body = await request.json();
    const payload = JSON.stringify(body);
    const headers = { "Content-Type": "application/json" };

    // Step 1: POST to AppScript — it will 302 redirect
    const first = await fetch(CAREERS_SHEET_URL, {
      method: "POST",
      headers,
      body: payload,
      redirect: "manual", // Don't auto-follow; Node.js would downgrade to GET
    });

    // Step 2: Follow the redirect manually, keeping POST + body
    if (first.status === 301 || first.status === 302 || first.status === 307 || first.status === 308) {
      const redirectUrl = first.headers.get("location");
      if (redirectUrl) {
        await fetch(redirectUrl, {
          method: "POST",
          headers,
          body: payload,
        });
      }
    }

    return Response.json({ result: "success" }, { status: 200 });
  } catch (err) {
    console.error("[careers API]", err);
    return Response.json({ result: "error", message: err.message }, { status: 500 });
  }
}
