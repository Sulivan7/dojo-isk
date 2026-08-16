export type About = {
  title: string;
  paragraphs: string[];
  photo?: string;
  photoAlt?: string;
};

export const about: About = {
  title: "Um tatame, nenhum atalho",
  paragraphs: [
    "O Iron Shotokan nasceu da ideia de que karatê não é só técnica de luta — é um método de construir gente. Aqui não existe treino fácil nem aluno invisível: cada faixa é acompanhada de perto, do primeiro kihon ao primeiro campeonato.",
    "Somos um dojô pequeno de propósito. Turma cheia é turma sem correção, e sem correção não existe evolução.",
  ],
  // photo: "/dojo/tatame.jpg",
  // photoAlt: "Alunos em posição de kihon durante o treino no dojô",
};
