"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, ViewTransition } from "react";
import { submitLead } from "@/app/actions/lead";

export function LeadForm() {
  const [state, action, pending] = useActionState(submitLead, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/avaliacao/confirmada", { transitionTypes: ["nav-forward"] });
    }
  }, [router, state?.success]);

  return (
    <ViewTransition name="lead-card" share="lead-morph" default="none">
      <div className="lead-card">
        <div>
          <h2>Agende sua avaliação gratuita</h2>
          <p>Nossa equipe confirma o melhor horário e tira suas dúvidas. Resposta em até 10 minutos no horário comercial.</p>
        </div>
        <form className="lead-form" action={action}>
          <div className="field">
            <label htmlFor="nome">Nome completo</label>
            <input id="nome" name="nome" placeholder="Ex.: Ana Silva Souza" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="whatsapp">WhatsApp com DDD</label>
            <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" placeholder="(11) 98765-4321" autoComplete="tel" required />
          </div>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Não preencha</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <button className="button" type="submit" disabled={pending}>
            {pending ? "Enviando…" : "Quero agendar"} {!pending && <ArrowRight weight="bold" />}
          </button>
          <label className="consent">
            <input type="checkbox" name="consentimento" required />
            <span>Concordo em receber contato para agendamento conforme a <Link href="/privacidade" transitionTypes={["nav-forward"]}>Política de Privacidade</Link>.</span>
          </label>
          {state?.error && <p className="form-error" role="alert">{state.error}</p>}
        </form>
      </div>
    </ViewTransition>
  );
}
