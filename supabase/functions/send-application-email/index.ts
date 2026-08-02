import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const TO_EMAIL = 'mayurwaghchoure1995@gmail.com';
// IMPORTANT: the FROM domain (cloudbeerobotics.de) must be verified in Resend.
const FROM_EMAIL = 'CloudBee Robotics <noreply@cloudbeerobotics.de>';

const BodySchema = z.object({
  role: z.string().trim().min(1).max(200),
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  location: z.string().trim().max(120).optional().or(z.literal('')).nullable(),
  linkedin: z.string().trim().max(255).optional().or(z.literal('')).nullable(),
  portfolio: z.string().trim().max(255).optional().or(z.literal('')).nullable(),
  cover_letter: z.string().trim().min(10).max(4000),
});

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const { role, full_name, email, location, linkedin, portfolio, cover_letter } = parsed.data;

    const apiKey = Deno.env.get('RESEND_API_KEY');
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const internalHtml = `
      <div style="font-family:Inter,system-ui,sans-serif;background:#050810;color:#fff;padding:32px;border-radius:12px;max-width:600px;margin:auto">
        <h2 style="margin:0 0 8px;color:#00AEEF">New Application</h2>
        <p style="color:#B0BEC5;margin:0 0 20px;font-size:14px">Role: <strong style="color:#fff">${esc(role)}</strong></p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#B0BEC5;width:130px">Name</td><td>${esc(full_name)}</td></tr>
          <tr><td style="padding:8px 0;color:#B0BEC5">Email</td><td><a style="color:#00AEEF" href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#B0BEC5">Location</td><td>${esc(location || '-')}</td></tr>
          <tr><td style="padding:8px 0;color:#B0BEC5">LinkedIn</td><td>${esc(linkedin || '-')}</td></tr>
          <tr><td style="padding:8px 0;color:#B0BEC5">Portfolio</td><td>${esc(portfolio || '-')}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #1a2238;margin:20px 0"/>
        <div style="white-space:pre-wrap;line-height:1.55;color:#fff">${esc(cover_letter)}</div>
      </div>`;

    const confirmationHtml = `
      <div style="font-family:Inter,system-ui,sans-serif;background:#fafbfc;color:#0F172A;padding:32px;border-radius:12px;max-width:560px;margin:auto;border:1px solid #e2e8f0">
        <h2 style="margin:0 0 12px;font-size:22px">Application received, ${esc(full_name)} 👋</h2>
        <p style="margin:0 0 16px;color:#475569;font-size:14px;line-height:1.55">
          Thanks for applying to <strong>${esc(role)}</strong> at CloudBee Robotics. The founding team reviews every application personally and will get back to you within 1–2 weeks.
        </p>
        <p style="margin:0 0 16px;color:#475569;font-size:14px;line-height:1.55">
          If this is a freelance role, we'll invite you to submit a bid proposal (scope, day rate, availability) once your profile is shortlisted.
        </p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
        <div style="font-size:12px;color:#94a3b8">
          CloudBee Robotics · Collective Incubator, Aachen, Germany<br/>
          Automated confirmation — replies reach our team directly.
        </div>
      </div>`;

    const send = (payload: Record<string, unknown>) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

    const [internalRes, confirmRes] = await Promise.allSettled([
      send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[CloudBee Careers] ${role} — ${full_name}`,
        html: internalHtml,
      }),
      send({
        from: FROM_EMAIL,
        to: [email],
        reply_to: TO_EMAIL,
        subject: `We received your application — CloudBee Robotics`,
        html: confirmationHtml,
      }),
    ]);

    if (internalRes.status === 'rejected' || (internalRes.status === 'fulfilled' && !internalRes.value.ok)) {
      const detail =
        internalRes.status === 'fulfilled' ? await internalRes.value.text() : String(internalRes.reason);
      console.error('Resend internal error:', detail);
      return new Response(JSON.stringify({ error: 'Failed to send email', details: detail }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (confirmRes.status === 'rejected' || (confirmRes.status === 'fulfilled' && !confirmRes.value.ok)) {
      const detail =
        confirmRes.status === 'fulfilled' ? await confirmRes.value.text() : String(confirmRes.reason);
      console.warn('Resend confirmation failed (non-blocking):', detail);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-application-email error', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
