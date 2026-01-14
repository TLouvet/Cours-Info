# R4A10 - Course Website

Interactive course website for **R4A10 - Compléments Web: Développement Frontend avec React**.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Content:** MDX (Markdown + React components)
- **Code Highlighting:** Shiki
- **Icons:** React Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
course-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── seance-1/          # Session 1
│   ├── seance-2/          # Session 2
│   └── ...
├── components/
│   ├── layout/            # Layout components (Sidebar, Header)
│   ├── mdx/               # MDX custom components
│   └── ui/                # Reusable UI components
├── content/
│   └── lessons/           # MDX lesson content
├── lib/                   # Utilities
└── public/                # Static assets
```

## Features

- ✅ Interactive course content with MDX
- ✅ Syntax-highlighted code blocks
- ✅ Progress tracking (localStorage)
- ✅ Responsive design (mobile-first)
- ✅ Dark/light mode
- ✅ Code sandboxes for practice
- ✅ Quick knowledge checks

## Contributing

This is a course project. Content updates are managed by the instructor.

## License

Educational use only - IUT Paris 8
