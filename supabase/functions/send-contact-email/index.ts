import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const TO_EMAIL = 'info@cloudbeerobotics.de';
const FROM_EMAIL = 'CloudBee Website <onboarding@resend.dev>'; // swap to verified domain after DNS setup

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(150).optional().or(z.literal('')),
  email: z.string().trim().email().max(255),
  interest: z.enum(['Pilot Program', 'Partnership', 'Investment', 'Research Collaboration', 'Other']),
  message: z.string().trim().min(10).max(2000),
});

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }
    const { name, company, email, interest, message } = parsed.data;

    const apiKey = Deno.env.get('RESEND_API_KEY');
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const internalHtml = `
      <div style="font-family:Inter,system-ui,sans-serif;background:#050810;color:#fff;padding:32px;border-radius:12px;max-width:560px;margin:auto">
        <h2 style="margin:0 0 8px;color:#00AEEF">New CloudBee Website Inquiry</h2>
        <p style="color:#B0BEC5;margin:0 0 20px;font-size:14px">Interest: <strong style="color:#fff">${esc(interest)}</strong></p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#B0BEC5;width:120px">Name</td><td>${esc(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#B0BEC5">Company</td><td>${esc(company || '—')}</td></tr>
          <tr><td style="padding:8px 0;color:#B0BEC5">Email</td><td><a style="color:#00AEEF" href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #1a2238;margin:20px 0"/>
        <div style="white-space:pre-wrap;line-height:1.55;color:#fff">${esc(message)}</div>
      </div>`;

    const confirmationHtml = `
      <div style="font-family:Inter,system-ui,sans-serif;background:#fafbfc;color:#0F172A;padding:32px;border-radius:12px;max-width:560px;margin:auto;border:1px solid #e2e8f0">
        <h2 style="margin:0 0 12px;color:#0F172A;font-size:22px">Thanks for reaching out, ${esc(name)} 👋</h2>
        <p style="margin:0 0 16px;color:#475569;font-size:14px;line-height:1.55">
          We've received your message at CloudBee Robotics and someone from the team will get back to you within a few business days.
        </p>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin:18px 0">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#64748b;margin-bottom:6px">Your message · ${esc(interest)}</div>
          <div style="white-space:pre-wrap;line-height:1.55;color:#0F172A;font-size:14px">${esc(message)}</div>
        </div>
        <p style="margin:18px 0 0;color:#475569;font-size:13px;line-height:1.55">
          In the meantime, feel free to learn more about our platform at <a href="https://cloudbeerobotics.de" style="color:#00AEEF;text-decoration:none">cloudbeerobotics.de</a> or reply to this email with anything else you'd like to share.
        </p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
        <div style="font-size:12px;color:#94a3b8">
          CloudBee Robotics · Collective Incubator, Aachen, Germany<br/>
          This is an automated confirmation — replies go straight to our team.
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
        subject: `[CloudBee] ${interest} — ${name}${company ? ` · ${company}` : ''}`,
        html: internalHtml,
      }),
      send({
        from: FROM_EMAIL,
        to: [email],
        reply_to: TO_EMAIL,
        subject: `We received your message — CloudBee Robotics`,
        html: confirmationHtml,
      }),
    ]);

    if (internalRes.status === 'rejected' || (internalRes.status === 'fulfilled' && !internalRes.value.ok)) {
      const detail =
        internalRes.status === 'fulfilled' ? await internalRes.value.text() : String(internalRes.reason);
      console.error('Resend internal error:', detail);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (confirmRes.status === 'rejected' || (confirmRes.status === 'fulfilled' && !confirmRes.value.ok)) {
      const detail =
        confirmRes.status === 'fulfilled' ? await confirmRes.value.text() : String(confirmRes.reason);
      console.warn('Resend confirmation email failed (non-blocking):', detail);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('send-contact-email error', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
