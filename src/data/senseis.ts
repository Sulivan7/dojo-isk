export type Sensei = {
  name: string;
  rank: string;
  specialty: string;
  bio: string;
  photo?: string;
};

export const senseis: Sensei[] = [
  {
    name: "Sensei Renan",
    rank: "4º Dan",
    specialty: "Kata e Kumitê",
    bio: "Faixa preta há 18 anos, formou a primeira equipe de competição do dojô e conduz as turmas do infantil ao adulto avançado.",
  },
  {
    name: "Sensei Allexander",
    rank: "3º Dan",
    specialty: "Defesa pessoal",
    bio: "Especialista em defesa pessoal e condicionamento. Responsável pelo programa voltado a quem busca segurança e preparo físico.",
  },
];
