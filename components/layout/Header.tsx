'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo/Title */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-100">
              R4A10 - Compléments Web
            </h1>
            <p className="text-xs text-gray-400">
              Développement Frontend avec React
            </p>
          </div>
        </Link>

        {/* Moodle Link */}
        <a
          href="https://moodle.iut.univ-paris8.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
        >
          <span>Moodle</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
