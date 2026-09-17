# Martin Lužák — Official Portfolio & Digital Workshop

> **Human heart. Technical logic. AI assisted.**  
> Where logic meets humanity: Experiments, enterprise IT solutions, maritime networks, and interactive AI.

🌐 **Live Website**: [https://martinluzak.sk](https://martinluzak.sk)  
💼 **LinkedIn**: [Martin Lužák](https://linkedin.com/in/martinluzak)  
✉️ **Contact**: [hello@martinluzak.sk](mailto:hello@martinluzak.sk)

---

## 🚀 Major Update (v0.2.0)

### 🤖 Multi-Provider AI Ambassador ("Ask AI about Martin")
An interactive AI assistant embedded directly into the portfolio that answers questions about Martin's background, satellite communications, Starlink operations, and career milestones in any language (English, Slovak, German, etc.).
- **Multi-LLM Architecture**: Provider-agnostic engine supporting:
  - **Google Gemini** (`gemini-1.5-flash` / `gemini-2.0-flash`)
  - **Anthropic Claude** (`claude-3-5-haiku` / `sonnet`)
  - **OpenAI** (`gpt-4o-mini` / `gpt-4o`)
- **Verified Ground-Truth Context**: Built with Martin's real enterprise milestones (Marlink, DPD, RCPC, DIATYRNAVIA) and certifications.

### ✉️ Resend-Powered Contact & Bug Reporting
Direct serverless communication bridge between visitors and Martin's inbox using `hello@martinluzak.sk`:
- Dual-mode modal dialog: **Quick Message** & **Report an Issue**.
- Anti-spam honeypot protection & client-side validation.
- Direct `reply_to` routing so replies go straight from Martin's inbox to the visitor.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Glassmorphic UI Design
- **Email Service**: [Resend](https://resend.com/) API
- **AI Integrations**: Google Gemini API, Anthropic API, OpenAI API
- **Deployment & Hosting**: [Vercel](https://vercel.com/) with Edge Caching & Analytics

---

## 💻 Getting Started Locally

### 1. Prerequisites
- Node.js 18+
- pnpm (recommended): `npm install -g pnpm`

### 2. Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/drmartinluzak97/martinluzak.sk.git
cd martinluzak.sk

# Install dependencies
pnpm install
\`\`\`

### 3. Environment Configuration
Copy the example environment configuration:
\`\`\`bash
cp .env.example .env.local
\`\`\`
Fill in your API keys in `.env.local`:
\`\`\`env
# Resend Email Integration
RESEND_API_KEY=re_your_api_key
CONTACT_RECEIVER_EMAIL=drmartinluzak97@gmail.com
CONTACT_SENDER_EMAIL=Martin Lužák <hello@martinluzak.sk>

# AI Assistant Provider (at least one)
GEMINI_API_KEY=your_gemini_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
OPENAI_API_KEY=your_openai_api_key
\`\`\`

### 4. Run Development Server
\`\`\`bash
pnpm dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Verified Professional Background Highlights

- **Marlink (2025)**: Tier 2 Satellite & Enterprise Maritime Networks (Starlink & VSAT hybrid fleet support).
- **ForesServices / DPD (2024 — 2025)**: European server monitoring via Zabbix & regression API testing with Insomnia.
- **Regional Card Processing Centre (2021 — 2023)**: High-availability payment terminals, Oracle SQL, Croatia Euro currency transition.
- **DIATYRNAVIA NGO (2019 — 2026)**: M365 admin, digital literacy for seniors, **Senior Friendly 2023 Award**.

---

## 📄 License & Maintainer

Maintained with human heart and technical logic by **Martin Lužák** ([@drmartinluzak97](https://github.com/drmartinluzak97)).
