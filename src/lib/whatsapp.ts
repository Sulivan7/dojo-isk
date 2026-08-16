import { siteConfig } from "@/config/siteConfig";

export function whatsappLink(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodedText}`;
}

export const MESSAGES = {
  general:
    "Olá! Vim pelo site do Iron Shotokan e gostaria de mais informações.",

  trialClass:
    "Olá! Vi o site e quero agendar a aula experimental gratuita. Como faço?",

  plans:
    "Olá! Vim pelo site e gostaria de saber mais sobre os valores da mensalidade.",

  selfDefense:
    "Olá! Vim pelo site e tenho interesse no programa de defesa pessoal.",

  schedule: "Olá! Vim pelo site e queria confirmar os horários das turmas.",

  kidsClasses:
    "Olá! Vim pelo site e queria saber sobre as aulas para crianças.",

  lessonQuestion:
    "Olá! Estou assistindo as aulas online e fiquei com uma dúvida em um movimento.",

  location: "Olá! Vim pelo site e gostaria de conhecer o dojô.",
} as const;

export type MessageKey = keyof typeof MESSAGES;
