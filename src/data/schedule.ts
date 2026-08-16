export type ClassGroup = {
  name: string;
  days: string;
  time: string;
  note?: string;
};

export const schedule: ClassGroup[] = [
  {
    name: "Infantil",
    days: "Seg · Qua · Sex",
    time: "18h00",
    note: "A partir de 6 anos",
  },
  {
    name: "Iniciante",
    days: "Seg · Qua · Sex",
    time: "19h00",
  },
  {
    name: "Turma geral",
    days: "Seg · Qua · Sex",
    time: "20h00",
    note: "Todas as idades e modalidades",
  },
];
