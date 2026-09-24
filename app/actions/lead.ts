"use server";

import { z } from "zod";

export type LeadState = { error?: string; success?: boolean } | null;

const leadSchema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo.").max(100),
  whatsapp: z.string().trim().refine(
    (value) => value.replace(/\D/g, "").length >= 10,
    "Informe um WhatsApp com DDD.",
  ),
  consentimento: z.literal("on", { error: "Confirme o consentimento para receber contato." }),
  website: z.string().max(0),
});

export async function submitLead(_: LeadState, formData: FormData): Promise<LeadState> {
  const parsed = leadSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Revise os dados informados." };
  }

  const lead = {
    nome: parsed.data.nome,
    whatsapp: parsed.data.whatsapp,
    consentimento: parsed.data.consentimento,
  };
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, source: "landing-lumina", createdAt: new Date().toISOString() }),
      cache: "no-store",
    });

    if (!response.ok) {
      return { error: "Não foi possível enviar agora. Fale conosco pelo WhatsApp." };
    }
  }

  return { success: true };
}
