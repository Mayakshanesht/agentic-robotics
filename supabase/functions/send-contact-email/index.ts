import { z } from "npm:zod@3.23.8";
import { readNotification, notificationResponse, sendInternalNotification } from "../_shared/notifications.ts";

const optionalText = (maximum: number) => z.string().trim().max(maximum).nullish();
const contactSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().min(1).max(100),
  company: optionalText(150),
  email: z.string().trim().email().max(255),
  interest: z.enum(["Pilot Program", "Partnership", "Investment", "Research Collaboration", "Other"]),
  message: z.string().trim().min(10).max(2000),
});
const accessSchema = z.object({
  id: z.string().uuid(),
  full_name: z.string().trim().min(2).max(100),
  company: optionalText(100),
  email: z.string().trim().email().max(255),
  role: optionalText(100),
  use_case: optionalText(1000),
});
const webhookSchema = z.discriminatedUnion("table", [
  z.object({ type: z.literal("INSERT"), schema: z.literal("public"), table: z.literal("contact_inquiries"), record: contactSchema }),
  z.object({ type: z.literal("INSERT"), schema: z.literal("public"), table: z.literal("beta_access_requests"), record: accessSchema }),
]);

Deno.serve(async (req) => {
  try {
    const { payload, error } = await readNotification(req);
    if (error) return error;
    const parsed = webhookSchema.safeParse(payload);
    if (!parsed.success) return notificationResponse({ error: "Invalid notification" }, 400);
    const event = parsed.data;
    if (event.table === "contact_inquiries") {
      const record = event.record;
      return await sendInternalNotification(
        `[CloudBee] ${record.interest} - ${record.name}`,
        `New website inquiry\n\nName: ${record.name}\nCompany: ${record.company || "-"}\nEmail: ${record.email}\nInterest: ${record.interest}\n\n${record.message}\n\nRecord: ${record.id}`,
        record.email,
      );
    }
    const record = event.record;
    return await sendInternalNotification(
      `[CloudBee] Early access - ${record.full_name}`,
      `New early access request\n\nName: ${record.full_name}\nCompany: ${record.company || "-"}\nEmail: ${record.email}\nRole: ${record.role || "-"}\n\n${record.use_case || "No use case supplied."}\n\nRecord: ${record.id}`,
      record.email,
    );
  } catch {
    return notificationResponse({ error: "Notification processing failed" }, 500);
  }
});
