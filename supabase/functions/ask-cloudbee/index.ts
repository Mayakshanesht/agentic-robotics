import { publicAnswer } from "./public-answers.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const jsonResponse = (body: Record<string, string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Only reviewed public copy is available to this endpoint. No private knowledge
// or generative model is involved, including when a visitor submits instructions.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Use POST to ask a question." }, 405);

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) return jsonResponse({ error: "Messages array is required." }, 400);

    const question = [...messages].reverse().find(
      (message) => message?.role === "user" && typeof message.content === "string" && message.content.trim(),
    );
    if (!question) return jsonResponse({ error: "A visitor question is required." }, 400);

    return jsonResponse({ response: publicAnswer(question.content.slice(0, 2000)) });
  } catch {
    return jsonResponse({ error: "Please send a valid question." }, 400);
  }
});
