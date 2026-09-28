"use client";

import { useEffect, useState } from "react";
import { useInViewOnce } from "./reveal";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(active: boolean, end: number, duration = 800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(end * easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return value;
}

export function Stats() {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();
  const years = useCountUp(visible, 12);
  const rating = useCountUp(visible, 4.9);
  const minA = useCountUp(visible, 40);
  const minB = useCountUp(visible, 50);
  const digital = useCountUp(visible, 100);

  return (
    <div
      ref={ref}
      className={`stats container${visible ? " is-visible" : ""}`}
      aria-label="Indicadores da clínica"
    >
      <div className="stat">
        <strong>+{Math.round(years)} anos</strong>
        <span>Transformando sorrisos</span>
      </div>
      <div className="stat">
        <strong>{rating.toFixed(1).replace(".", ",")} no Google</strong>
        <span>320 avaliações verificadas</span>
      </div>
      <div className="stat">
        <strong>Sem pressa</strong>
        <span>
          Consultas de {Math.round(minA)} a {Math.round(minB)} minutos
        </span>
      </div>
      <div className="stat">
        <strong>{Math.round(digital)}% digital</strong>
        <span>Planejamento preciso</span>
      </div>
    </div>
  );
}
