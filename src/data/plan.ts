import type { MessageKey } from "@/lib/whatsapp";

export type Plan = {
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  benefits: string[];
  featured: boolean;
  whatsappMessage: MessageKey;
};

export const plans: Plan[] = [
  {
    name: "Mensalidade",
    badge: "Karate-Dô",
    price: "R$ 000",
    period: "por mês",
    description: "Acesso a todas as turmas e modalidades do dojô.",
    benefits: [
      "Treino em todas as turmas",
      "Acompanhamento para graduação",
      "Preparação para campeonatos",
      "Acesso às aulas online",
    ],
    featured: true,
    whatsappMessage: "plans",
  },
  {
    name: "Defesa pessoal",
    price: "R$ 000",
    period: "por mês",
    description: "Programa focado, sem faixa e sem competição.",
    benefits: [
      "Técnicas aplicadas de defesa",
      "Condicionamento físico",
      "Sem exigência de graduação",
    ],
    featured: false,
    whatsappMessage: "selfDefense",
  },
];

export const paymentNote =
  "Pagamento via PIX ou dinheiro, combinado direto no WhatsApp. Sem taxa de matrícula e sem fidelidade.";
