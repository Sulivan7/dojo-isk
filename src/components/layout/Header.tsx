"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { whatsappLink, MESSAGES } from "@/lib/whatsapp";

const LINKS = [
  { href: "/#dojo", label: "dojô" },
  { href: "/#programa", label: "Programa" },
  { href: "/#senseis", label: "Senseis" },
  { href: "/#planos", label: "Planos" },
  { href: "/aulas", label: "Aulas" },
  { href: "/conquistas", label: "Conquistas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function whileTyping(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", whileTyping);
    return () => window.removeEventListener("keydown", whileTyping);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-iron-700 bg-iron-900/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="Iron Shotokan Karate"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full md:h-10 md:w-10"
            />
            <span className="font-display text-sm tracking-wide text-iron-50 md:text-base">
              IRON SHOTOKAN
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-iron-300 transition-colors hover:text-iron-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink(MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-iron-red px-4 py-2.5 text-sm text-white transition-colors hover:bg-iron-red-dark"
            >
              Fale conosco
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-2 text-iron-100 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir Menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>
      {open && (
        <div className="border-t border-iron-700 bg-iron-900 md:hidden">
          <Container>
            <nav className="flex flex-col py-2">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-iron-800 py-3.5 text-iron-100"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={whatsappLink(MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 mb-3 rounded-md bg-iron-red py-3.5 text-center text-white"
              >
                Fale Conosco
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
