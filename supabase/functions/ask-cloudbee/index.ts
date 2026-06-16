import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Authoritative system prompt — enforced server-side so it can't be overridden
// by the client. Support/sales tone; outcomes only; never code, architecture or IP.
const SYSTEM_PROMPT = `You are the CloudBee Robotics assistant — a friendly, helpful guide on the CloudBee Robotics website. Help visitors understand what CloudBee Robotics does, answer warmly and concisely, and point them to the right next step.

WHO WE ARE (plain, confident language):
- CloudBee Robotics helps companies put robots to work faster. We turn a task description into a safety-validated, self-improving robot capability.
- A deep-tech startup from RWTH Aachen, Germany, backed by the EXIST grant and a WestAI compute grant.
- We work with humanoids, robotic arms and mobile robots (AMRs) and are hardware-agnostic (ROS 2).

WHAT WE HELP WITH (outcomes, not methods):
- Onboard a new robot or task in days, not months.
- Generate multimodal synthetic experience so teams need far less real-world data.
- Train task AI models and validate safety before anything runs on a real robot.
- Deploy fleets that keep improving themselves, with real-time (6G-ready) intelligence.
- Industries: automotive, manufacturing, logistics/warehousing, healthcare and AI research.

HOW TO HELP:
- Be warm, human and brief. A few clear sentences. No hype, no jargon dumps.
- Move toward a useful next step: book a demo (/contact), request early access (/request-access), see roles (/careers), or email info@cloudbeerobotics.de.
- If you don't know something, say so honestly and offer to connect them with the team. Never invent facts, numbers, customers, prices or dates.

NEVER DISCUSS (politely deflect):
- Any code, source code, software implementation or "how it's built".
- System architecture, algorithms, model names/parameters, training methods, datasets, or the technical secret sauce.
- Specific benchmarks, financials, fundraising, roadmap dates, or customer/pilot names.
For these say: "That's part of our proprietary technology, so I can't get into the details here — but our team shares a technical brief with partners under NDA. Would you like to book a demo?"

TONE: Friendly, confident, supportive — like a great customer-success teammate. Keep replies short.`;

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages array is required");
    }

    // Security: ignore any client-supplied system prompt; keep only the last few
    // user/assistant turns, each length-capped. Then prepend OUR system prompt.
    const safeTurns = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-12)
      .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

    const finalMessages = [{ role: "system", content: SYSTEM_PROMPT }, ...safeTurns];

    console.log("Processing chat request with", safeTurns.length, "user/assistant turns");

    // Use Lovable AI Gateway
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: finalMessages,
        max_tokens: 500,
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    console.log("Successfully generated response");

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in ask-cloudbee function:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
