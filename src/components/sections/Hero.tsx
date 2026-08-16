import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/siteConfig";
import { whatsappLink, MESSAGES } from "@/lib/whatsapp";

export default function Hero() {
  const yearsActive = new Date().getFullYear() - siteConfig.foundedYear;

  return (
    <section className="relative overflow-hidden border-b border-iron-700">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[6.5rem] leading-none text-iron-800 md:-top-10 md:text-[11rem]"
      >
        空手道
      </span>

      <Container className="relative py-16 md:py-28">
        <div className="max-w-xl">
          <p className="animate-fade-up font-display text-xs uppercase tracking-[0.18em] text-iron-red">
            {yearsActive} anos · Shotokan tradicional
          </p>

          <h1 className="animate-fade-up mt-4 font-display text-4xl leading-[1.03] text-iron-50 [animation-delay:80ms] sm:text-5xl md:text-6xl">
            FORJE O SEU CORPO
            <br />E O SEU <span className="text-iron-red">ESPÍRITO</span>
          </h1>

          <p className="animate-fade-up mt-5 max-w-md leading-relaxed [animation-delay:160ms]">
            Karate-Dô para quem quer disciplina, competição, defesa pessoal ou
            simplesmente sair do sedentarismo. A primeira aula é por nossa
            conta.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <Button href={whatsappLink(MESSAGES.trialClass)} external>
              <WhatsAppIcon size={18} />
              Agendar aula experimental
            </Button>

            <Button href="#dojo" variant="secondary">
              Conhecer o dojô
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
