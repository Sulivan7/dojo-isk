import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-iron-700 bg-iron-950">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3 md:py-16">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.jpg"
                alt="logo da Iron Shotokan karate"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <span className="font-display text-base text-iron-50">
                IRON SHOTOKAN
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-iron-400">
              Dojô de Karate-Dô Shotokan tradicional. Disciplina, técnica e
              respeito no tatami.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-iron-gold">
              Navegação
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/#dojo"
                className="text-sm text-iron-300 hover:text-iron-50"
              >
                O dojô
              </Link>
              <Link
                href="/#senseis"
                className="text-sm text-iron-300 hover:text-iron-50"
              >
                Senseis
              </Link>
              <Link
                href="/aulas"
                className="text-sm text-iron-300 hover:text-iron-50"
              >
                Aulas online
              </Link>
              <Link
                href="/conquistas"
                className="text-sm text-iron-300 hover:text-iron-50"
              >
                Conquistas
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-iron-gold">
              Onde estamos
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <p className="flex items-start gap-2.5 text-sm text-iron-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-iron-red" />
                <span>
                  Rua Exemplo, 000 — Bairro
                  <br />
                  Cidade · Estado
                </span>
              </p>
              <p className="flex items-center gap-2.5 text-sm text-iron-300">
                <Clock size={16} className="shrink-0 text-iron-red" />
                <span>Seg a sex, 17h às 21h</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-iron-800 py-6 text-xs text-iron-400 md:flex-row md:items-center md:justify-between">
          <p className="font-display tracking-wide">
            IRON SHOTOKAN KARATE · 押忍
          </p>
          <p>© {year} · Todos os direitos reservados</p>
        </div>
      </Container>
    </footer>
  );
}
