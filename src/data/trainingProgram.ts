export type ProgramIcon =
  | "discipline"
  | "competition"
  | "family"
  | "conditioning";

export type ProgramItem = {
  icon: ProgramIcon;
  title: string;
  description: string;
};

export const trainingProgram: ProgramItem[] = [
  {
    icon: "discipline",
    title: "Para quem busca disciplina",
    description:
      "Filosofia, postura e equilíbrio mental. O dojô é seu espaço de silêncio.",
  },
  {
    icon: "competition",
    title: "Para quem quer competir",
    description:
      "Treino técnico voltado a Kata e Kumitê para campeonatos estaduais e nacionais.",
  },
  {
    icon: "family",
    title: "Para crianças e famílias",
    description:
      "Aulas seguras que formam caráter, foco e respeito desde os primeiros anos.",
  },
  {
    icon: "conditioning",
    title: "Para o seu condicionamento",
    description:
      "Força, mobilidade e resistência cardiovascular em cada sessão de treino.",
  },
];

export const programClosingText =
  "Você não precisa ser atleta para entrar. Você não precisa ter feito esporte na vida. Não importa sua idade, seu peso, sua experiência. O que importa é o primeiro passo no tatami — o resto é só repetição e respeito ao processo.";
