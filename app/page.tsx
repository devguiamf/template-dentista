import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import {
  ArrowRight, CheckCircle, Heart, Scan, ShieldCheck,
  Sparkle, Tooth,
} from "@phosphor-icons/react/dist/ssr";
import { Faq } from "@/components/faq";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Stats } from "@/components/stats";
import type { CSSProperties } from "react";

const services = [
  { icon: Tooth, title: "Implantes Dentários", text: "Recuperação segura da mastigação com tecnologia 3D guiada, precisão e conforto." },
  { icon: Sparkle, title: "Clareamento Dental", text: "Protocolos supervisionados para clarear com segurança, preservando o esmalte." },
  { icon: Scan, title: "Ortodontia Invisível", text: "Alinhadores transparentes sob medida, discretos e removíveis para o dia a dia." },
  { icon: Heart, title: "Estética do Sorriso", text: "Facetas e resinas com planejamento digital que preserva a estrutura natural." },
];

const features = [
  { icon: ShieldCheck, title: "Sem surpresas no plano", text: "Etapas e custos apresentados antes de iniciar. Você mantém o controle das decisões." },
  { icon: Heart, title: "Conforto em primeiro lugar", text: "Anestesia computadorizada e um ambiente acolhedor para quem sente receio de dentista." },
  { icon: Scan, title: "Tecnologia que simplifica", text: "Escaneamento digital sem massinhas, com diagnóstico preciso e previsibilidade visual." },
];

const testimonials = [
  ["MS", "Mariana S.", "Tratamento de Implante", "Tinha trauma de infância e adiei por anos. A Dra. Camila explicou tudo calmamente e não senti absolutamente nada no procedimento."],
  ["RM", "Rafael M.", "Ortodontia Invisível", "O escaneamento foi rápido e pude ver a prévia dos alinhadores. A equipe é pontual e transparente com valores."],
  ["CA", "Camila A.", "Clareamento Dental", "Fiz o clareamento antes do meu casamento e o resultado ficou natural, sem aquela sensibilidade chata."],
];

export default function Home() {
  return (
    <ViewTransition
      enter={{ "nav-back": "slide-from-left", default: "none" }}
      exit={{ "nav-forward": "slide-to-left", default: "none" }}
      default="none"
    >
      <div>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow hero-intro"><i /> Odontologia humanizada em São Paulo</span>
              <h1 className="hero-intro">
                Seu sorriso merece cuidado <em>sem medo<svg className="hero-underline" viewBox="0 0 120 7" aria-hidden="true"><path d="M1 4c20-4 40 3 59 0s40-1 59 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></em>.
              </h1>
              <p className="hero-copy hero-intro">Tecnologia, escuta e um plano feito para você — da primeira conversa ao resultado. Viva um tratamento tranquilo e transparente.</p>
              <div className="hero-actions hero-intro">
                <Link className="button" href="#agendamento">Agendar avaliação <ArrowRight weight="bold" /></Link>
                <a className="button button-ghost" href="https://wa.me/551140002026">Conversar no WhatsApp</a>
              </div>
              <div className="trust-list">
                <span><CheckCircle weight="fill" /> Resposta em até 10 minutos no horário comercial</span>
                <span><ShieldCheck weight="fill" /> Ambiente planejado para o seu conforto</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-shell">
                <Image className="parallax-image" src="/clinic/atendimento.webp" alt="Dentista conversando com paciente em consultório moderno" width={512} height={382} priority />
              </div>
              <div className="image-tags"><span>Consultórios privativos</span><span>Avaliação gratuita</span></div>
            </div>
          </div>
        </section>

        <section className="lead-shell container" id="agendamento" aria-label="Agendamento">
          <LeadForm />
        </section>

        <Stats />

        <section className="section" id="tratamentos">
          <div className="container">
            <Reveal as="header" className="section-head reveal-copy">
              <span className="section-kicker">Tratamentos</span>
              <h2>Cuidado completo para cada fase do seu sorriso</h2>
              <p>Procedimentos modernos e previsíveis, executados com rigor técnico e atenção humana.</p>
            </Reveal>
            <Reveal className="services" stagger>
              {services.map(({ icon: Icon, title, text }, index) => (
                <article
                  className="service"
                  key={title}
                  style={{ "--reveal-delay": `${index === 3 ? 180 : index * 60}ms` } as CSSProperties}
                >
                  <Icon weight="light" />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section section-soft" id="diferenciais">
          <div className="container split">
            <div className="split-image">
              <Image className="parallax-image" src="/clinic/planejamento.webp" alt="Dentista explicando o planejamento à paciente" width={512} height={382} />
              <div className="quote-chip">“Você entende cada passo antes de decidir.”</div>
            </div>
            <div className="split-copy">
              <Reveal className="split-intro reveal-copy">
                <span className="section-kicker">Diálogo honesto e claro</span>
                <h2>Tecnologia que acolhe, não intimida</h2>
                <p>Mostramos cada detalhe com modelos anatômicos e escaneamento digital 3D.</p>
              </Reveal>
              <div className="feature-list">
                {features.map(({ icon: Icon, title, text }) => (
                  <Reveal className="feature" key={title}>
                    <span className="feature-icon"><Icon weight="light" /></span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </Reveal>
                ))}
              </div>
              <Link className="button" href="#agendamento">Conhecer meu plano <ArrowRight /></Link>
            </div>
          </div>
        </section>

        <section className="section" id="depoimentos">
          <div className="container">
            <header className="section-head">
              <span className="section-kicker">Histórias reais</span>
              <h2>Quem chega com receio, sai sorrindo</h2>
              <p>A tranquilidade dos nossos pacientes é o compromisso que orienta cada consulta.</p>
            </header>
            <Reveal className="testimonials" stagger>
              {testimonials.map(([initials, name, treatment, quote], index) => (
                <article
                  className="testimonial"
                  key={name}
                  style={{ "--reveal-delay": `${index === 0 ? 0 : 80}ms` } as CSSProperties}
                >
                  <div className="stars" aria-label="5 estrelas">★★★★★</div>
                  <blockquote>“{quote}”</blockquote>
                  <div className="person"><span className="avatar">{initials}</span><div><strong>{name}</strong><small>{treatment}</small></div></div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section section-soft" id="duvidas">
          <div className="container faq-layout">
            <header className="section-head">
              <span className="section-kicker">Dúvidas frequentes</span>
              <h2>Antes de marcar, você pode querer saber</h2>
              <p>Respostas claras sobre a avaliação e a experiência na Lumina.</p>
            </header>
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="closing">
              <div><h2>O primeiro passo pode ser hoje.</h2><p>Agende uma conversa sem compromisso e descubra como cuidar da saúde bucal com leveza.</p></div>
              <Link className="button" href="#agendamento">Agendar agora <ArrowRight /></Link>
            </Reveal>
            <Reveal className="contact-grid" stagger>
              <div className="contact-item" style={{ "--reveal-delay": "0ms" } as CSSProperties}><h3>Endereço</h3><p>Av. Paulista, 1842 — Bela Vista<br />São Paulo — SP</p></div>
              <div className="contact-item" style={{ "--reveal-delay": "50ms" } as CSSProperties}><h3>Horários</h3><p>Segunda a sexta: 08h às 19h<br />Sábados: 08h às 13h</p></div>
              <div className="contact-item" style={{ "--reveal-delay": "100ms" } as CSSProperties}><h3>Canais diretos</h3><a href="tel:1140002026">(11) 4000-2026</a><br /><a href="mailto:contato@luminaodontologia.com.br">contato@luminaodontologia.com.br</a></div>
            </Reveal>
          </div>
        </section>
      </div>
    </ViewTransition>
  );
}
