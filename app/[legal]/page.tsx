import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

const pages = {
  privacidade: {
    title: "Política de Privacidade",
    intro: "A Lumina trata seus dados com transparência e apenas para oferecer atendimento odontológico e responder ao seu contato.",
    sections: [
      ["Dados que coletamos", "Nome, telefone, informações enviadas voluntariamente e dados técnicos mínimos necessários ao funcionamento do site."],
      ["Como usamos", "Usamos os dados para confirmar avaliações, responder dúvidas e cumprir obrigações legais. Não comercializamos informações pessoais."],
      ["Seus direitos", "Você pode solicitar acesso, correção ou exclusão dos dados pelo e-mail contato@luminaodontologia.com.br."],
    ],
  },
  termos: {
    title: "Termos de Uso",
    intro: "Ao usar este site, você concorda com os termos abaixo. O conteúdo tem caráter informativo e não substitui avaliação clínica.",
    sections: [
      ["Informações do site", "Buscamos manter informações atualizadas, mas procedimentos, disponibilidade e condições são confirmados diretamente pela equipe."],
      ["Agendamento", "O envio do formulário representa uma solicitação. O horário só fica reservado depois da confirmação da clínica."],
      ["Uso responsável", "Não é permitido tentar comprometer o funcionamento, a segurança ou a integridade deste site."],
    ],
  },
  responsabilidade: {
    title: "Responsabilidade Técnica",
    intro: "Informações institucionais e profissionais responsáveis pelos serviços apresentados neste site.",
    sections: [
      ["Clínica", "Lumina Odontologia Especializada Ltda. — CRO-SP Clínico nº 12.345."],
      ["Responsável técnica", "Dra. Camila Torres — Cirurgiã-dentista — CRO-SP 98.765."],
      ["Endereço profissional", "Av. Paulista, 1842 — Bela Vista, São Paulo — SP."],
    ],
  },
  "aviso-legal": {
    title: "Aviso Legal",
    intro: "Cada pessoa responde de forma individual aos tratamentos. Nenhuma informação deste site constitui promessa de resultado.",
    sections: [
      ["Avaliação individual", "Diagnóstico, indicação, prazo e resultado dependem da avaliação clínica e das condições de saúde de cada paciente."],
      ["Imagens", "As imagens de pacientes, ambientes e procedimentos são ilustrativas e foram selecionadas para comunicar a experiência da clínica."],
      ["Urgências", "Este canal não atende emergências. Em caso de urgência médica, procure imediatamente o serviço de saúde mais próximo."],
    ],
  },
} as const;

type LegalKey = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((legal) => ({ legal }));
}

export async function generateMetadata({ params }: { params: Promise<{ legal: string }> }): Promise<Metadata> {
  const { legal } = await params;
  const page = pages[legal as LegalKey];
  return { title: page?.title ?? "Página não encontrada" };
}

export default async function LegalPage({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const page = pages[legal as LegalKey];
  if (!page) notFound();

  return (
    <ViewTransition
      enter={{ "nav-forward": "slide-from-right", default: "none" }}
      exit={{ "nav-back": "slide-to-right", default: "none" }}
      default="none"
    >
      <article className="legal-page">
        <div className="container legal-wrap">
          <Link className="legal-back" href="/" transitionTypes={["nav-back"]}>← Voltar para o início</Link>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          {page.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
          <p><small>Última atualização: 24 de setembro de 2026.</small></p>
        </div>
      </article>
    </ViewTransition>
  );
}
