export type LessonCategory = "kihon" | "kata" | "kumite" | "conditioning";

export type Lesson = {
  /** Não esqueça!! ID depois de "v=" na URL */
  youtubeId: string;
  title: string;
  belt: string;
  category: LessonCategory;
  duration: string;
};

export const lessonCategories: { key: LessonCategory; label: string }[] = [
  { key: "kihon", label: "Kihon · fundamentos" },
  { key: "kata", label: "Katas · série Heian" },
  { key: "kumite", label: "Kumitê" },
  { key: "conditioning", label: "Condicionamento" },
];

export const lessons: Lesson[] = [
  {
    youtubeId: "COLOQUE_O_ID_AQUI",
    title: "Postura e deslocamento",
    belt: "Faixa branca · iniciante",
    category: "kihon",
    duration: "08:12",
  },
  {
    youtubeId: "COLOQUE_O_ID_AQUI",
    title: "Socos: oi-zuki e gyaku-zuki",
    belt: "Faixa branca · iniciante",
    category: "kihon",
    duration: "11:40",
  },
  {
    youtubeId: "COLOQUE_O_ID_AQUI",
    title: "Heian Shodan · passo a passo",
    belt: "Faixa amarela",
    category: "kata",
    duration: "14:22",
  },
];

export const onlineLessonsNotice =
  "As aulas online são um apoio ao treino. Servem para alunos do dojô revisarem o que viram no tatami e para qualquer pessoa tirar dúvidas. Elas não substituem a aula presencial: pratique sempre com um sensei por perto para corrigir a postura e evitar lesões.";
