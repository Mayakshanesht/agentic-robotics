const BUSINESS_EMAIL = "mayur.waghchoure@cloudbeerobotics.de";
const MAX_BODY_BYTES = 16_384;

export const notificationResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

// The secret is configured only in Supabase Edge secrets and database webhook
// headers. It must never be a VITE variable or a browser request header.
export async function readNotification(req: Request): Promise<{ payload?: unknown; error?: Response }> {
  if (req.method !== "POST") {
    return { error: notificationResponse({ error: "Method not allowed" }, 405) };
  }
  const secret = Deno.env.get("FORM_NOTIFICATION_SECRET");
  if (!secret || secret.length < 32) {
    return { error: notificationResponse({ error: "Notifications are not configured" }, 503) };
  }
  if (req.headers.get("x-form-notification-secret") !== secret) {
    return { error: notificationResponse({ error: "Unauthorized" }, 401) };
  }
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return { error: notificationResponse({ error: "JSON required" }, 415) };
  }
  if (Number(req.headers.get("content-length")) > MAX_BODY_BYTES) {
    return { error: notificationResponse({ error: "Request too large" }, 413) };
  }
  const body = await req.text();
  if (new TextEncoder().encode(body).length > MAX_BODY_BYTES) {
    return { error: notificationResponse({ error: "Request too large" }, 413) };
  }
  try {
    return { payload: JSON.parse(body) };
  } catch {
    return { error: notificationResponse({ error: "Invalid JSON" }, 400) };
  }
}

// Notifications go to a fixed business mailbox. Visitor input cannot choose a
// destination or cause branded confirmations to be sent to arbitrary people.
export async function sendInternalNotification(subject: string, text: string, replyTo: string): Promise<Response> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return notificationResponse({ error: "Notifications are not configured" }, 503);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "CloudBee Robotics <noreply@cloudbeerobotics.de>",
      to: [BUSINESS_EMAIL],
      reply_to: replyTo,
      subject: subject.replace(/[\r\n]+/g, " "),
      text,
    }),
  });
  if (!response.ok) return notificationResponse({ error: "Notification delivery failed" }, 502);
  return notificationResponse({ ok: true });
}
