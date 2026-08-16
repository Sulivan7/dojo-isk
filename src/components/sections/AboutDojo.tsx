import Image from "next/image";
import { ImageIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/about";

export default function AboutDojo() {
  return (
    <Section id="dojo">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <Reveal>
            <SectionLabel>O dojô</SectionLabel>

            <h2 className="mt-3 font-display text-2xl leading-tight text-iron-50 md:text-3xl">
              {about.title}
            </h2>

            <div className="mt-4 flex flex-col gap-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {about.photo ? (
              <Image
                src={about.photo}
                alt={about.photoAlt ?? ""}
                width={800}
                height={600}
                className="aspect-4/3 w-full rounded-xl border border-iron-700 object-cover"
              />
            ) : (
              <div className="flex aspect-4/3 w-full items-center justify-center rounded-xl border border-iron-700 bg-iron-800">
                <ImageIcon
                  size={28}
                  className="text-iron-600"
                  aria-hidden="true"
                />
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
