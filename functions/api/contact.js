export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = await request.json();

  const html = `
    <h2 style="margin-bottom:4px">New Contact Form Submission</h2>
    <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
    <p><strong>Name:</strong> ${body.name || "—"}</p>
    <p><strong>Email:</strong> ${body.email || "—"}</p>
    <p><strong>Project Type:</strong> ${body.projectType || "—"}</p>
    <p><strong>Budget:</strong> ${body.currency || "USD"} ${body.budget || "—"}</p>
    <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
    <p><strong>Message:</strong></p>
    <p>${body.message || "—"}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Altivus Solvo <onboarding@resend.dev>",
      to: ["rahul.altivassolvo@gmail.com"],
      subject: `New inquiry from ${body.name || body.email || "someone"}`,
      html,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return new Response(JSON.stringify({ error: data }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
