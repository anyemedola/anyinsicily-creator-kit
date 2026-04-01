export interface Segment {
  type: 'text' | 'strong' | 'placeholder';
  content: string;
}

export interface Email {
  tag: string;
  subject: string;
  segments: Segment[];
}

export const emails: Email[] = [
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
      { type: 'text', content: '\n1. "The apps that actually make expat life easier in Italy" — product in authentic list\n2. "Sending money from Italy: what I wish I knew before" — problem/solution format\n3. "Cost of living in Sicily: the real numbers" — data-backed content with brand integration\n\nHappy to share my rate card and discuss. Would love to explore this together!\n\nBest,\nAny\n📍 @anyinsicily | beacons.ai/anyinsicily' },
    ],
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
      { type: 'text', content: ' as the tool I use\n2. "Planning a road trip through southern Italy" — POV format with booking moments shown naturally\n3. "Best-kept secret towns in Sicily" — aspirational travel content with CTA\n\nMy content performs best when it\'s honest and a little chaotic — which is exactly what travel audiences trust. I produce and deliver raw + edited video files you can use across your channels.\n\nWould you be open to a quick call or want me to send my rate card?\n\nAny\n@anyinsicily | 📍 Sicily, Italy' },
    ],
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
      { type: 'placeholder', content: '[product]' },
      { type: 'text', content: ' for the first time" — proven high engagement format\n→ A recipe or meal moment featuring your product, filmed in Sicily\n→ "This is what [product] means to Italians" — cultural storytelling\n\nAll content in English, shot on location in Sicily. Usage rights included. Open to gifted collabs for a first video.\n\nWarmly,\nAny — @anyinsicily' },
    ],
  },
];
