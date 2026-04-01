import { type DayCard } from '@/lib/calendarData';

export interface Segment {
  type: 'text' | 'strong' | 'placeholder';
  content: string;
}

export interface EmailTemplate {
  tag: string;
  subject: string;
  segments: Segment[];
  signature: string;
}

export interface StatItem {
  label: string;
  value: string;
  sup?: string;
  small?: boolean;
}

export const en = {
  nav: {
    portfolio: 'Portfolio',
    pitchEmails: 'Pitch Emails',
    calendar: 'Calendar',
    switchLang: 'PT',
  },
  home: {
    eyebrow: 'UGC Creator Portfolio — 2025',
    viralContent: 'Viral Content',
    contentNiches: 'Content Niches',
    availableFormats: 'Available Formats',
    hero: {
      lead: 'Brazilian frontend dev rebuilding life in southern Italy — creating authentic, English-language content for European audiences. Expat life, travel, humor, and real talk about starting over.',
      statsTitle: 'Metrics · @anyinsicily',
      stats: [
        { label: 'Total profile views', value: '3', sup: 'M+' },
        { label: 'Best reel (organic)', value: '2', sup: 'M+' },
        { label: '2nd viral reel', value: '600', sup: 'K+' },
        { label: '3rd viral reel', value: '20', sup: 'K+' },
        { label: 'Content language', value: 'English / Portuguese / Italian', small: true },
      ] as StatItem[],
    },
    audience: {
      heading: 'Who',
      headingLine2: 'watches',
      headingEm: 'Any.',
      labels: [
        'Europeans 25–40', 'Aspiring expats', 'Travel lovers', 'English-speaking',
        'Career changers', 'Italy enthusiasts', 'Brazilian diaspora EU', 'Digital nomads',
        'Female-majority', 'High travel intent', 'Values authenticity',
      ],
    },
    niches: [
      { icon: '🍋', title: 'Expat Life in Italy', desc: 'Behind the scenes of living in southern Italy — the beautiful, the bureaucratic, the unexpected.' },
      { icon: '✈️', title: 'Sicily Travel', desc: 'Insider tips, hidden gems, local culture and authentic experiences beyond the tourist trail.' },
      { icon: '💡', title: 'Starting Over', desc: 'Honest storytelling about losing a job and rebuilding. High emotional resonance — proven viral.' },
      { icon: '🌍', title: 'Cultural Humor', desc: 'Cross-cultural comedy — Brazilian in Italy. High shareability across European audiences.' },
      { icon: '💻', title: 'Digital Life & Tools', desc: 'Apps, remote work, tech for expats — as a frontend dev, I speak this language fluently.' },
      { icon: '🛒', title: 'Reviews & Lifestyle', desc: 'Authentic product reviews — Italian food, expat-essential apps, everyday life in Sicily.' },
    ],
    formats: [
      { n: '01', title: 'Talking Head Reels', desc: 'Direct-to-camera storytelling. My proven viral format. High relatability, strong hook, authentic delivery.' },
      { n: '02', title: 'POV / Day-in-the-life', desc: 'Immersive content showing real daily life in Sicily. Ideal for travel, food, lifestyle brands.' },
      { n: '03', title: 'Honest Review / "Real Take"', desc: 'Product reviews with my signature no-filter humor. High trust factor with audience.' },
      { n: '04', title: 'Cultural Comparison', desc: '"In Italy we say / In Brazil we say" — proven viral format. Perfect for cross-cultural brands.' },
      { n: '05', title: 'Photo + B-roll UGC', desc: 'High-quality lifestyle photos and location footage for brand assets and social media reuse.' },
      { n: '06', title: 'Carousel / Guide', desc: '"5 things to know before moving to Italy" — educational content with long shelf-life.' },
    ],
    viral: {
      viewsLabel: 'views',
    },
  },
  emails: {
    eyebrow: 'Ready Templates',
    header: {
      title: 'Pitch Emails',
      titleEm: 'for Brands',
      lead: 'Three ready templates for different types of brands. Customize the fields',
      highlight: 'in pink',
      leadEnd: 'before sending. Copy, paste, and adapt.',
    },
    card: {
      copy: 'Copy Email',
      copied: '✓ Copied!',
      generate: 'Generate with AI',
      generating: 'Generating...',
    },
    tips: {
      title: '✦ Sending Tips',
      items: [
        'Find the Marketing Manager or Brand Partnerships name on LinkedIn before sending — greatly increases response rate',
        'Send to direct emails (name@company.com), not the generic contact@company.com',
        'Add 2–3 metric screenshots or a link to this portfolio',
        'Follow up in 5–7 days if no reply — most conversions come on the second contact',
        'Start with small and medium brands — easier to close and builds your UGC portfolio',
        'Offer a first gifted video for smaller brands — makes it easier to start and test the partnership',
      ],
    },
    templates: [
      {
        tag: '💳 Fintech / Expat Services — Wise, Revolut, N26',
        subject: 'Subject: UGC x @anyinsicily | European Expat Audience | 3M+ Views',
        segments: [
          { type: 'text', content: 'Hi ' },
          { type: 'placeholder', content: '[Name / Marketing Team]' },
          { type: 'text', content: ',\n\nI\'m Any — a Brazilian content creator based in Sicily documenting expat life, travel, and rebuilding after a career change. My Instagram Reels have reached ' },
          { type: 'strong', content: '20M+ views organically' },
          { type: 'text', content: ', with 3M+ total profile views. My audience is primarily ' },
          { type: 'strong', content: 'English-speaking Europeans aged 25–40' },
          { type: 'text', content: ' — many of them expats, travellers, and people managing money across borders.\n\n' },
          { type: 'strong', content: 'Why ' },
          { type: 'placeholder', content: '[Brand]' },
          { type: 'strong', content: ' makes sense for my audience:' },
          { type: 'text', content: '\nYour product is exactly what I use (or would use) as a foreigner navigating daily life in Italy — sending money home, managing a European account, avoiding fees. It\'s a natural fit, not a forced ad.\n\n' },
          { type: 'strong', content: 'What I\'m offering:' },
          { type: 'text', content: '\n→ 1 x Reel (talking head + B-roll) integrated naturally into my expat content\n→ 1 x Story sequence with link\n→ Raw files included for your brand to repurpose\n\n' },
          { type: 'strong', content: '3 content ideas I have for ' },
          { type: 'placeholder', content: '[Brand]' },
          { type: 'strong', content: ':' },
          { type: 'text', content: '\n1. "The apps that actually make expat life easier in Italy" — [Product] in authentic list\n2. "Sending money from Italy: what I wish I knew before" — problem/solution format\n3. "Cost of living in Sicily: the real numbers" — data-backed content with brand integration\n\nHappy to share my rate card and discuss. Would love to explore this together!' },
        ],
        signature: 'Best,\nAny\n📍 @anyinsicily | beacons.ai/anyinsicily',
      },
      {
        tag: '✈️ Travel / Accommodation — Booking, Airbnb, Omio, Trainline',
        subject: 'Subject: UGC Creator | Sicily + South Italy Travel Content | 20M+ Reel Views',
        segments: [
          { type: 'text', content: 'Hi ' },
          { type: 'placeholder', content: '[Name]' },
          { type: 'text', content: ',\n\nMy name is Any — I\'m a Brazilian content creator living in southern Italy, creating English-language content about expat life, travel, and hidden Sicily. My recent Reels have gone viral organically, with one hitting ' },
          { type: 'strong', content: '20M+ views' },
          { type: 'text', content: ' and my profile reaching 3M+ total views. My audience actively travels — and many are planning trips to Europe and Italy specifically.\n\nI\'d love to create UGC for ' },
          { type: 'placeholder', content: '[Brand]' },
          { type: 'text', content: ' that feels genuinely useful rather than like an ad.\n\n' },
          { type: 'strong', content: 'Content I could create:' },
          { type: 'text', content: '\n1. "How to get around Sicily on a budget" — naturally integrating ' },
          { type: 'placeholder', content: '[Brand]' },
          { type: 'text', content: ' as the tool I use\n2. "Planning a road trip through southern Italy" — POV format with booking moments shown naturally\n3. "Best-kept secret towns in Sicily" — aspirational travel content with CTA\n\nMy content performs best when it\'s honest and a little chaotic — which is exactly what travel audiences trust. I produce and deliver raw + edited video files you can use across your channels.\n\nWould you be open to a quick call or want me to send my rate card?' },
        ],
        signature: 'Any\n@anyinsicily | 📍 Sicily, Italy',
      },
      {
        tag: '🫒 Italian Food & Lifestyle — azeites, massas, marcas regionais',
        subject: 'Subject: Creator Based in Sicily | Authentic Italian Lifestyle Content | UGC Collab',
        segments: [
          { type: 'text', content: 'Hi ' },
          { type: 'placeholder', content: '[Name]' },
          { type: 'text', content: ',\n\nI\'m Any — a content creator ' },
          { type: 'strong', content: 'living in Sicily' },
          { type: 'text', content: ' making English-language videos about expat life, Italian culture, and the everyday beauty (and chaos) of southern Italy. My Instagram has accumulated 3M+ profile views, with individual Reels reaching up to 20M views organically.\n\nI\'m reaching out because I think ' },
          { type: 'placeholder', content: '[Brand/Product]' },
          { type: 'text', content: ' would resonate genuinely with my audience — people who love Italy, are curious about the culture, or are already living here.\n\n' },
          { type: 'strong', content: 'What makes my content different:' },
          { type: 'text', content: '\nI\'m not a polished lifestyle influencer. I\'m a Brazilian woman rebuilding her life in Italy after a job loss, learning to cook with local ingredients, discovering producers and products the way a local would. That authenticity is why my content goes viral.\n\n' },
          { type: 'strong', content: 'What I can create:' },
          { type: 'text', content: '\n→ "Foreigners discover ' },
          { type: 'placeholder', content: '[Product]' },
          { type: 'text', content: ' for the first time" — proven high engagement format\n→ A recipe or meal moment featuring your product, filmed in Sicily\n→ "This is what [Product] means to Italians" — cultural storytelling\n\nAll content in English, shot on location in Sicily. Usage rights included. Open to gifted collabs for a first video.' },
        ],
        signature: 'Warmly,\nAny — @anyinsicily',
      },
    ] as EmailTemplate[],
  },
  calendar: {
    eyebrow: 'Content Strategy',
    header: {
      title: 'Calendar',
      titleEm: '2 Weeks',
      lead: 'Week 1 focuses on regaining momentum with proven viral formats. Week 2 activates monetization channels. 5 posts per week, 2 rest days.',
    },
    week1Label: 'Week 1 — Regaining momentum',
    week2Label: 'Week 2 — Monetization + Funnel',
    strategy: 'Strategy',
    week1: [
      { day: 'Mon', type: 'reel', title: 'Replicate viral #1', hook: '"In Sicily we say..." new version with strange Italian expression', cta: '→ Etsy' },
      { day: 'Tue', type: 'stories', title: 'Behind the scenes + Poll', hook: '"What\'s harder — the language or the bureaucracy?" + WhatsApp link' },
      { day: 'Wed', type: 'reel', title: 'Unemployment era pt. 2', hook: '"Week 3 of being unemployed in Sicily..." — sequel to the viral', cta: '→ Substack' },
      { day: 'Thu', type: 'rest', title: '', hook: '', isRest: true },
      { day: 'Fri', type: 'carousel', title: '5 apps every expat in Italy needs', hook: '"These saved my sanity in Italy" — high save rate', cta: '→ Etsy' },
      { day: 'Sat', type: 'reel', title: 'Sicily hidden spot POV', hook: '"Nobody talks about this town..." — high organic reach' },
      { day: 'Sun', type: 'rest', title: '', hook: '', isRest: true },
    ] as DayCard[],
    week2: [
      { day: 'Mon', type: 'reel', title: '"Things I stopped buying after moving to Italy"', hook: 'Cultural contrast — high shareability', cta: '→ Substack' },
      { day: 'Tue', type: 'stories', title: 'Promote Etsy guide', hook: '"I made a guide with everything I wish I knew before coming" — link sticker', cta: '→ Etsy' },
      { day: 'Wed', type: 'reel', title: 'Brazilian vs Italian food POV', hook: '"I went to the market for the first time and..." — cross-cultural humor' },
      { day: 'Thu', type: 'rest', title: '', hook: '', isRest: true },
      { day: 'Fri', type: 'ugc', title: 'Gifted collab (1st brand)', hook: 'Product naturally integrated in travel or expat life video', cta: '→ link bio' },
      { day: 'Sat', type: 'reel', title: '"1 month update — what changed"', hook: 'Restart series — emotional update = high engagement', cta: '→ Substack' },
      { day: 'Sun', type: 'rest', title: '', hook: '', isRest: true },
    ] as DayCard[],
    strategies: [
      {
        icon: '🎯',
        title: 'The Hook Rule',
        desc: 'The first 2–3 seconds decide everything. Always start with a curiosity-triggering line — "Nobody tells you this about Italy..." or "Being unemployed in Europe hits different..."',
        gradient: 'linear-gradient(145deg, #E8A0A0, #D4717B)',
        shadow: '0 6px 24px rgba(212,113,123,0.2)',
      },
      {
        icon: '🔁',
        title: 'Sequence = Series',
        desc: 'Your best virals naturally beg for a "part 2?". Plan series from the start — this builds a loyal audience, increases saves, and keeps the algorithm distributing you to new audiences.',
        gradient: 'linear-gradient(145deg, #C9A96E, #B8903E)',
        shadow: '0 6px 24px rgba(201,169,110,0.2)',
      },
      {
        icon: '💸',
        title: 'Platform Funnel',
        desc: 'Instagram → discovery. WhatsApp → warm community. Substack → monetization. Etsy → passive income. Every Reel CTA points to one of these channels.',
        gradient: 'linear-gradient(145deg, #8FAF8A, #6A8F65)',
        shadow: '0 6px 24px rgba(143,175,138,0.2)',
      },
    ],
  },
};

export type Dict = typeof en;
