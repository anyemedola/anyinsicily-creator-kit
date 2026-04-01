# 🍋 Any in Sicily — Creator Kit

AI-powered UGC portfolio and brand pitch email generator built for content creators in the expat & travel niche.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![Groq](https://img.shields.io/badge/Groq-FF6B35?logo=groq&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ About

This project started as a static HTML creator kit and evolved into a full-stack web app. It helps content creators in the expat/travel niche generate personalized brand pitch emails using AI — powered by Groq's ultra-fast inference API.

Built for [@anyinsicily](https://instagram.com/anyinsicily) — a Brazilian expat in Sicily with 3M+ profile views — but designed to be reusable for any creator.

---

## 🚀 Features

- 📄 **UGC Portfolio** — showcase viral metrics, content niches, audience profile and available formats
- 🤖 **AI Email Generator** — click "Generate with AI" on any pitch email template and get personalized copy in seconds, via Groq
- 📅 **Content Calendar** — 2-week posting strategy with CTAs mapped to monetization channels
- 🌍 **EN / PT i18n** — full bilingual support (English & Portuguese), toggled in the nav and persisted to localStorage
- 🌸 **Branded UI** — custom design inspired by the creator's Instagram aesthetic (dusty pink + Mediterranean palette)
- 📱 **Fully responsive** — works on mobile, tablet and desktop

---

## 🛠️ Tech Stack

**Frontend** (`/frontend`)
- Next.js 16 (App Router)
- React 19
- MUI v7 + Emotion (CSS-in-JS)

**Backend** (`/backend`)
- Node.js + Express 5
- Axios + Groq REST API — LLaMA 3.1 8B for email generation

---

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- A [Groq API key](https://console.groq.com/)

### Installation

```bash
git clone https://github.com/yourusername/anyinsicily-creator-kit
cd anyinsicily-creator-kit
npm run install:all
```

### Environment Variables

In `backend/`, create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Optionally in `frontend/`, create a `.env.local` to point to a non-default backend URL:

```env
BACKEND_URL=http://localhost:3001
```

### Run locally

Start both frontend and backend together from the root:

```bash
npm run dev
```

Or run them separately:

```bash
npm run frontend   # Next.js on http://localhost:3000
npm run backend    # Express on http://localhost:3001
```

---

## 🤖 How the AI Email Generator Works

1. User opens the Pitch Emails page and picks a template (Fintech, Travel, or Italian Food)
2. Clicks **"Generate with AI"** / **"Gerar com IA"**
3. The frontend calls `/api/generate-email` (Next.js route handler)
4. The route handler proxies the request to the Express backend on port 3001
5. The backend calls the Groq REST API (LLaMA 3.1 8B) via Axios
6. Groq returns a personalized pitch email in ~1 second
7. The card updates in place — user can copy and send directly

---

## 📁 Project Structure

```
anyinsicily-creator-kit/           ← monorepo root
├── frontend/                      ← Next.js app
│   ├── app/
│   │   ├── page.tsx               # Portfolio page
│   │   ├── emails/page.tsx        # Pitch emails page
│   │   ├── calendar/page.tsx      # Content calendar page
│   │   └── api/generate-email/
│   │       └── route.ts           # Proxy to backend
│   ├── components/
│   │   ├── home/HomeContent.tsx
│   │   ├── emails/EmailCard/      # Card with Generate + Copy buttons
│   │   ├── calendar/CalendarContent.tsx
│   │   ├── portfolio/
│   │   └── Nav.tsx                # Language toggle lives here
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── en.ts              # English dictionary
│   │   │   ├── pt.ts              # Portuguese dictionary
│   │   │   └── LangContext.tsx    # React context + useLang() hook
│   │   ├── emailData.ts
│   │   ├── calendarData.ts
│   │   └── theme.ts
│   └── public/videos/
├── backend/                       ← Express API
│   └── src/
│       ├── server.js
│       ├── routes/email.js
│       ├── services/
│       │   ├── groqService.js     # Groq API call
│       │   └── emailGenerator.js  # Prompt builder + JSON parser
│       └── templates/systemPrompt.js
└── package.json                   ← monorepo scripts (concurrently)
```

---

## 🌍 Origin Story

This started as a static HTML file created with Claude (Anthropic) to help a Brazilian content creator monetize her viral Instagram presence in Sicily. It was later refactored into a full-stack monorepo with AI-powered email generation and full EN/PT bilingual support.

---

## 📄 License

MIT — feel free to fork and adapt for your own creator brand.

---

Made with 🍋 from Sicily
