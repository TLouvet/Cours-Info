import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Seance4Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">
          Séance 4
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Effets & Navigation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          useEffect, appels API, et React Router pour créer des applications multi-pages
        </p>
      </div>

      {/* Overview */}
      <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Ce que vous allez apprendre
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Comprendre les side effects et le cycle de vie des composants</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Utiliser useEffect avec les tableaux de dépendances</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Récupérer des données depuis des APIs externes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Gérer les états de chargement et d'erreur</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Mettre en place React Router pour la navigation multi-pages</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Créer des routes dynamiques avec paramètres d'URL</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Combiner useEffect et routing pour des applications complètes</span>
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
            href="/seance-4/introduction"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Introduction aux Side Effects
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprendre le cycle de vie et les effets de bord
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/async"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Programmation Asynchrone
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Promises, async/await et gestion des appels API
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/useEffect"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Le Hook useEffect
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Dépendances, cleanup et patterns essentiels
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/data-fetching"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Récupération de Données
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fetch API, async/await et gestion d'états
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/routing-intro"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Introduction au Routing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pourquoi router ? Installation de React Router
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/routing-basics"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Bases du Routing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Routes, Link, navigation et layouts
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/dynamic-routes"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Routes Dynamiques
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Paramètres d'URL et useParams
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/combining"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Combiner useEffect & Routing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fetch de données basé sur les routes
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/conclusion"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Conclusion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Récapitulatif et prochaines étapes
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/exercises"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Exercices Pratiques
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Blog, annuaire utilisateurs, et plus
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-4/quiz"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Quiz de validation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Testez vos connaissances sur les effets et le routing
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link
          href="/seance-4/introduction"
          className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 !text-white font-medium rounded-lg transition-colors"
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
