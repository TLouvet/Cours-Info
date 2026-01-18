import Link from 'next/link';
import { FiArrowRight, FiBook, FiCode, FiLayers, FiList, FiCheckSquare, FiGitBranch, FiPackage, FiFileText, FiGlobe } from 'react-icons/fi';

export default function Seance2Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">
          Séance 2
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          React Fundamentals
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Découvrez les fondations de React : composants, props, et composition
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
            <span>Comprendre React, le Virtual DOM et l'architecture à composants</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Installer Node.js, npm et configurer l'environnement de développement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Comprendre les SPA (Single Page Applications) et différences avec les MPA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Maîtriser la syntaxe JSX et ses différences avec HTML</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Créer des composants fonctionnels réutilisables</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Passer des données avec les props et la destructuration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Afficher des listes dynamiques avec .map() et les keys</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Implémenter le rendu conditionnel (if/else, ternaire, &&)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Découvrir TypeScript avec React (typage des props, différences avec JS)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Composer des composants pour créer des interfaces complexes</span>
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
            href="/seance-2/introduction"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <FiBook className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Introduction à React
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Qu'est-ce que React, pourquoi l'utiliser, et comment créer un projet
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/environment"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <FiPackage className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Node.js & npm
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Environnement de développement, Node.js, npm, et alternatives
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/spa-vs-mpa"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <FiGlobe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    SPA vs MPA
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Single Page Applications, Multi-Page Applications, et Next.js
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/jsx"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    JSX - JavaScript XML
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Syntaxe JSX, différences avec HTML, et règles essentielles
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/components"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <FiLayers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Composants Fonctionnels
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Créer des composants, composition, et bonnes pratiques
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/props"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                  <FiGitBranch className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Props
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Passer des données, destructuration, et validation
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/lists"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <FiList className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Listes et Keys
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Afficher des listes avec .map(), keys, et optimisation
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/conditional"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <FiCheckSquare className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Rendu Conditionnel
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    if/else, ternaire, &&, et patterns avancés
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/typescript"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <FiFileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    React avec TypeScript
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Introduction à TypeScript, typer les props, et différences avec JS
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/conclusion"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <FiCheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Conclusion
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Récapitulatif et validation des compétences acquises
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/exercises"
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
                    Mettez en pratique vos nouvelles compétences React
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-2/quiz"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <FiCheckSquare className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Quiz de validation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Testez vos connaissances sur React avec 20 questions
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
          href="/seance-2/introduction"
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
