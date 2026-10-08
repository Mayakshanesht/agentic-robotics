import { z } from "npm:zod@3.23.8";
import { readNotification, notificationResponse, sendInternalNotification } from "../_shared/notifications.ts";

const optionalText = (maximum: number) => z.string().trim().max(maximum).nullish();
const webhookSchema = z.object({
  type: z.literal("INSERT"),
  schema: z.literal("public"),
  table: z.literal("job_applications"),
  record: z.object({
    id: z.string().uuid(),
    role: z.string().trim().min(1).max(200),
    full_name: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(255),
    location: optionalText(120),
    linkedin: optionalText(255),
    portfolio: optionalText(255),
    cover_letter: z.string().trim().min(10).max(4000),
  }),
});

Deno.serve(async (req) => {
  try {
    const { payload, error } = await readNotification(req);
    if (error) return error;
    const parsed = webhookSchema.safeParse(payload);
    if (!parsed.success) return notificationResponse({ error: "Invalid notification" }, 400);
    const record = parsed.data.record;
    return await sendInternalNotification(
      `[CloudBee Careers] ${record.role} - ${record.full_name}`,
      `New application\n\nRole: ${record.role}\nName: ${record.full_name}\nEmail: ${record.email}\nLocation: ${record.location || "-"}\nLinkedIn: ${record.linkedin || "-"}\nPortfolio: ${record.portfolio || "-"}\n\n${record.cover_letter}\n\nRecord: ${record.id}`,
      record.email,
    );
  } catch {
    return notificationResponse({ error: "Notification processing failed" }, 500);
  }
});
