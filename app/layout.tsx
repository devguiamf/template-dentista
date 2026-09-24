import type { Metadata, Viewport } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/plus-jakarta-sans";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminaodontologia.com.br"),
  title: { default: "Lumina Odontologia | Cuidado sem medo", template: "%s | Lumina Odontologia" },
  description: "Odontologia humanizada em São Paulo. Tecnologia, escuta e um plano transparente para cuidar do seu sorriso.",
  openGraph: {
    title: "Lumina Odontologia",
    description: "Seu sorriso merece cuidado sem medo.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
