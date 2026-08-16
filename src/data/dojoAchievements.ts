export type DojoAchievement = {
  title: string;
  event: string;
  year: number;
};

export type MedalPosition = 1 | 2 | 3;

export type StudentMedal = {
  student: string;
  position: MedalPosition;
  discipline: string;
  division: string;
  event: string;
  year: number;
};

export const dojoAchievements: DojoAchievement[] = [
  { title: "3º lugar por equipes", event: "Copa Estadual", year: 2025 },
  { title: "Melhor dojô revelação", event: "Federação", year: 2024 },
];

// Colocar nome Primeiro nome e so inicial do sobrenome | conversar com sensei depois.
export const studentMedals: StudentMedal[] = [
  {
    student: "Nome do aluno",
    position: 1,
    discipline: "Kata individual",
    division: "Juvenil masculino",
    event: "Copa Estadual",
    year: 2026,
  },
  {
    student: "Nome da aluna",
    position: 2,
    discipline: "Kumitê",
    division: "Infantil feminino",
    event: "Open Regional",
    year: 2025,
  },
  {
    student: "Nome do aluno",
    position: 3,
    discipline: "Kata individual",
    division: "Adulto",
    event: "Campeonato Brasileiro",
    year: 2025,
  },
];
