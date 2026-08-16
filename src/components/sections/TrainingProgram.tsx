import { Brain, Trophy, Users, Flame, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import {
  trainingProgram,
  programClosingText,
  type ProgramIcon,
} from "@/data/trainingProgram";

const ICONS: Record<ProgramIcon, LucideIcon> = {
  discipline: Brain,
  competition: Trophy,
  family: Users,
  conditioning: Flame,
};

export default function TrainingProgram() {
  return (
    <Section id="programa" className="border-t border-iron-700 bg-iron-850">
      <Container>
        <Reveal>
          <SectionLabel>Programa de treino</SectionLabel>

          <h2 className="mt-3 font-display text-2xl leading-tight text-iron-50 md:text-3xl">
            Um caminho para todos
          </h2>

          <p className="mt-4 max-w-lg leading-relaxed">
            No Iron Shotokan, o Karate-Dô se molda à sua jornada — não o
            contrário. Seja qual for o seu motivo para começar, há lugar para
            você no tatami.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainingProgram.map((item, index) => {
            const Icon = ICONS[item.icon];

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="h-full">
                  <Icon
                    size={20}
                    className="text-iron-red"
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 text-[0.95rem] leading-snug text-iron-50">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-iron-400">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 max-w-2xl border-l-2 border-iron-red pl-5">
            <p className="leading-relaxed text-iron-100">
              {programClosingText}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
