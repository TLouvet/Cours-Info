import Link from 'next/link';
import { FiCode, FiSmartphone, FiArrowRight, FiBook } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 mb-6">
          <FiBook className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Cours IUT Paris 8
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
          Parcours BUT Informatique - 2e annee
        </p>
        <p className="text-gray-500 dark:text-gray-500">
          Selectionnez un cours pour commencer
        </p>
      </section>

      {/* Course Cards */}
      <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* R4A10 Card */}
        <Link
          href="/seance-1"
          className="group block p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-cyan-500 dark:hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 mb-6 group-hover:scale-110 transition-transform">
              <FiCode className="w-8 h-8 text-white" />
            </div>
            <div className="px-3 py-1 mb-4 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">
              R4A10
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Complements Web
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Developpement Frontend avec React
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>5 seances</span>
              <span>&#8226;</span>
              <span>JavaScript, React, TypeScript</span>
            </div>
            <span className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium group-hover:gap-3 transition-all">
              Acceder au cours
              <FiArrowRight className="w-5 h-5" />
            </span>
          </div>
        </Link>

        {/* R4A11 Card */}
        <Link
          href="/r4a11"
          className="group block p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-violet-500 dark:hover:border-violet-500 transition-all hover:shadow-lg hover:shadow-violet-500/10"
        >
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 mb-6 group-hover:scale-110 transition-transform">
              <FiSmartphone className="w-8 h-8 text-white" />
            </div>
            <div className="px-3 py-1 mb-4 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full">
              R4A11
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Developpement Mobile
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Applications mobiles avec React Native
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>4 seances</span>
              <span>&#8226;</span>
              <span>React Native, Expo, Mobile</span>
            </div>
            <span className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-medium group-hover:gap-3 transition-all">
              Acceder au cours
              <FiArrowRight className="w-5 h-5" />
            </span>
          </div>
        </Link>
      </section>

      {/* Info Section */}
      <section className="text-center py-8 px-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Bienvenue !
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ces cours sont concus pour les etudiants en BUT Informatique 2e annee.
          Chaque cours comprend des seances structurees avec des exercices pratiques,
          des quiz de validation et un projet fil rouge.
        </p>
      </section>
    </div>
  );
}
