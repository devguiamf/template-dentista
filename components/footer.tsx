import Link from "next/link";
import { Logo } from "./logo";

const legal = [
  ["Política de Privacidade LGPD", "/privacidade"],
  ["Termos de Uso", "/termos"],
  ["Responsabilidade Técnica", "/responsabilidade"],
  ["Aviso Legal", "/aviso-legal"],
];

export function Footer() {
  return (
    <footer className="footer" style={{ viewTransitionName: "site-footer" }}>
      <div className="footer-inner">
        <div>
          <Logo />
          <p>© 2026 Lumina Odontologia Especializada Ltda. CRO-SP Clínico nº 12.345 | RT: Dra. Camila Torres CRO-SP 98.765. Av. Paulista, 1842 — Bela Vista, São Paulo — SP.</p>
          <small>Imagens de pacientes e procedimentos são ilustrativas. Resultados variam conforme a avaliação clínica individual.</small>
        </div>
        <nav aria-label="Links legais">
          {legal.map(([label, href]) => (
            <Link key={href} href={href} transitionTypes={["nav-forward"]}>{label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
