"use client";

import { Plus } from "@phosphor-icons/react";
import { startTransition, useState, ViewTransition } from "react";

const items = [
  ["A avaliação é realmente gratuita?", "Sim. A primeira consulta inclui escuta, avaliação clínica e apresentação do plano de cuidado, sem custo e sem compromisso de iniciar o tratamento no dia."],
  ["O tratamento dói?", "Utilizamos técnicas anestésicas modernas, incluindo anestesia computadorizada de fluxo suave. O foco é reduzir tanto o desconforto físico quanto a tensão emocional."],
  ["Quais formas de pagamento vocês aceitam?", "Aceitamos cartão de crédito em até 12x, parcelamento em boleto mediante análise e condições especiais para pagamentos via PIX."],
  ["Quanto tempo dura a primeira consulta?", "Reservamos de 40 a 50 minutos para conversar sem pressa, compreender seu histórico, examinar com calma e responder cada pergunta."],
  ["Vocês atendem convênio?", "O atendimento é particular para garantir consultas longas e materiais de excelência. Fornecemos laudo e notas fiscais para solicitação de reembolso ao plano de saúde."],
];

export function Faq() {
  const [open, setOpen] = useState(0);

  function toggle(index: number) {
    startTransition(() => setOpen((current) => current === index ? -1 : index));
  }

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div className="faq-item" key={question}>
          <button className="faq-question" onClick={() => toggle(index)} aria-expanded={open === index}>
            {question}<Plus aria-hidden="true" />
          </button>
          {open === index && (
            <ViewTransition enter="fade-in" exit="fade-out" default="none">
              <div className="faq-answer">{answer}</div>
            </ViewTransition>
          )}
        </div>
      ))}
    </div>
  );
}
