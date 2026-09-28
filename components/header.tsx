"use client";

import { Phone } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useState, ViewTransition } from "react";
import { Logo } from "./logo";

const links = [
  ["Tratamentos", "/#tratamentos"],
  ["Diferenciais", "/#diferenciais"],
  ["Depoimentos", "/#depoimentos"],
  ["Dúvidas", "/#duvidas"],
];

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const open = menu.open && menu.path === pathname;
  const toggle = () => startTransition(() => setMenu({ open: !open, path: pathname }));

  return (
    <header className="site-header" style={{ viewTransitionName: "site-header" }}>
      <div className="progress" aria-hidden="true" />
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Principal">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:1140002026"><Phone weight="light" /> (11) 4000-2026</a>
          <Link className="button button-small" href="/#agendamento">Agendar avaliação</Link>
          <button className={`menu-button${open ? " is-open" : ""}`} onClick={toggle} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
      {open && (
        <ViewTransition enter="menu-in" exit="menu-out" default="none">
          <nav className="mobile-menu" aria-label="Menu móvel">
            {links.map(([label, href], index) => (
              <Link key={href} href={href} onClick={toggle} style={{ transitionDelay: `${index * 45}ms` }}>{label}</Link>
            ))}
            <a href="tel:1140002026"><Phone /> (11) 4000-2026</a>
          </nav>
        </ViewTransition>
      )}
    </header>
  );
}
