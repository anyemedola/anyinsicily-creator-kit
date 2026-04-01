export type ContentType = 'reel' | 'stories' | 'carousel' | 'ugc' | 'rest';

export interface DayCard {
  day: string;
  type: ContentType;
  title: string;
  hook: string;
  cta?: string;
  isRest?: boolean;
}

export const week1: DayCard[] = [
  { day: 'Segunda', type: 'reel', title: 'Replicate viral #1', hook: '"In Sicily we say..." nova versão com expressão italiana estranha', cta: '→ Etsy' },
  { day: 'Terça', type: 'stories', title: 'Bastidores + Poll', hook: '"What\'s harder — the language or the bureaucracy?" + link WhatsApp' },
  { day: 'Quarta', type: 'reel', title: 'Unemployment era pt. 2', hook: '"Week 3 of being unemployed in Sicily..." — sequel do viral', cta: '→ Substack' },
  { day: 'Quinta', type: 'rest', title: '', hook: '', isRest: true },
  { day: 'Sexta', type: 'carousel', title: '5 apps que todo expat na Itália precisa', hook: '"These saved my sanity in Italy" — alto save rate', cta: '→ Etsy' },
  { day: 'Sábado', type: 'reel', title: 'Sicily hidden spot POV', hook: '"Nobody talks about this town..." — alcance orgânico alto' },
  { day: 'Domingo', type: 'rest', title: '', hook: '', isRest: true },
];

export const week2: DayCard[] = [
  { day: 'Segunda', type: 'reel', title: '"Things I stopped buying after moving to Italy"', hook: 'Cultural contrast — alto compartilhamento', cta: '→ Substack' },
  { day: 'Terça', type: 'stories', title: 'Promote guia Etsy', hook: '"Fiz um guia com tudo que eu queria saber antes de vir" — link sticker', cta: '→ Etsy' },
  { day: 'Quarta', type: 'reel', title: 'Brazilian vs Italian food POV', hook: '"Fui ao mercado pela primeira vez e..." — cross-cultural humor' },
  { day: 'Quinta', type: 'rest', title: '', hook: '', isRest: true },
  { day: 'Sexta', type: 'ugc', title: 'Gifted collab (1ª marca)', hook: 'Produto integrado naturalmente em vídeo de viagem ou expat life', cta: '→ link bio' },
  { day: 'Sábado', type: 'reel', title: '"1 month update — what changed"', hook: 'Série de recomeço — atualização emocional = alto engajamento', cta: '→ Substack' },
  { day: 'Domingo', type: 'rest', title: '', hook: '', isRest: true },
];

export const strategies = [
  {
    icon: '🎯',
    title: 'Regra dos Ganchos',
    desc: 'Os primeiros 2–3 segundos decidem tudo. Sempre comece com uma frase que gera curiosidade — "Nobody tells you this about Italy..." ou "Being unemployed in Europe hits different..."',
    gradient: 'linear-gradient(145deg, #E8A0A0, #D4717B)',
    shadow: '0 6px 24px rgba(212,113,123,0.2)',
  },
  {
    icon: '🔁',
    title: 'Sequência = Série',
    desc: 'Seus melhores virais têm "parte 2?" naturalmente. Planeje séries desde o início — isso cria audiência fiel, aumenta saves e mantém o algoritmo te distribuindo para novos públicos.',
    gradient: 'linear-gradient(145deg, #C9A96E, #B8903E)',
    shadow: '0 6px 24px rgba(201,169,110,0.2)',
  },
  {
    icon: '💸',
    title: 'Funil por Plataforma',
    desc: 'Instagram → discovery. WhatsApp → comunidade quente. Substack → monetização. Etsy → renda passiva. Cada CTA no Reel aponta para uma dessas frentes.',
    gradient: 'linear-gradient(145deg, #8FAF8A, #6A8F65)',
    shadow: '0 6px 24px rgba(143,175,138,0.2)',
  },
];
