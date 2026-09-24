import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ViewTransition } from "react";

export const metadata = { title: "Avaliação solicitada" };

export default function ConfirmadaPage() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "slide-from-right", default: "fade-in" }}
      exit={{ "nav-back": "slide-to-right", default: "fade-out" }}
      default="none"
    >
      <section className="confirmation">
        <div className="container">
          <ViewTransition name="lead-card" share="lead-morph" default="none">
            <div className="confirmation-card">
              <CheckCircle weight="light" />
              <h1>Recebemos seu pedido.</h1>
              <p>A equipe da Lumina vai falar com você pelo WhatsApp para confirmar o melhor horário e responder às suas dúvidas.</p>
              <Link className="button" href="/" transitionTypes={["nav-back"]}>Voltar ao início</Link>
            </div>
          </ViewTransition>
        </div>
      </section>
    </ViewTransition>
  );
}
