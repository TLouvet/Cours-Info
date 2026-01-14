import Link from 'next/link';
import { FiArrowRight, FiBook, FiCode } from 'react-icons/fi';

export default function Seance1Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">
          Séance 1
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Bases JavaScript
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Rappels HTML/CSS, JavaScript moderne ES6+, et fondamentaux pour React
        </p>
      </div>

      {/* Overview */}
      <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          📚 Ce que vous allez apprendre
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Rappels HTML, CSS et manipulation du DOM</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>JavaScript moderne (ES6+) : variables, fonctions, arrow functions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Méthodes de tableaux essentielles (map, filter, reduce)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Destructuration et spread operator</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Modules ES6 et programmation asynchrone</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Utiliser l'IA comme outil d'apprentissage</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Valider vos acquis avec un quiz de 15 questions</span>
          </li>
        </ul>
      </div>

      {/* Sections */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Parcours de la séance
        </h2>
        <div className="space-y-3">
          <Link
            href="/seance-1/introduction"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <FiBook className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Introduction
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Présentation du cours, règles et objectifs
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-1/html-css"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    HTML, CSS & DOM
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rappels des fondamentaux du web
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-1/javascript"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    JavaScript Moderne
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Variables, fonctions, tableaux, objets et plus
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-1/exercises"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Exercices
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mettez en pratique ce que vous avez appris
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-1/quiz"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Quiz de validation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Testez vos connaissances avec 15 questions
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link
          href="/seance-1/introduction"
          className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
        >
          Commencer
          <FiArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
