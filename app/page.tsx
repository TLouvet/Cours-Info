import Link from 'next/link';
import { FiBook, FiCode, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 mb-6">
          <FiCode className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          R4A10 - Compléments Web
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Développement Frontend avec React
        </p>
        <Link
          href="/seance-1"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
        >
          Commencer la Séance 1
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Course Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-4">
            <FiBook className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            5 Séances
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Du JavaScript moderne aux concepts avancés de React avec des exercices pratiques
          </p>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
            <FiCheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Suivi de progression
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Marquez vos chapitres comme complétés et suivez votre avancement
          </p>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <FiCode className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Interactif
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Exemples de code interactifs et exercices avec solutions
          </p>
        </div>
      </section>

      {/* Sessions List */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Programme du cours
        </h2>
        <div className="space-y-4">
          <Link
            href="/seance-1"
            className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">
                    Séance 1
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Bases JavaScript
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rappels HTML/CSS, JavaScript moderne ES6+, arrow functions, destructuration, spread operator, modules
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <div className="block p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl opacity-60">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    Séance 2
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">• Bientôt disponible</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Introduction à React
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  JSX, Composants, Props, Structure de projet
                </p>
              </div>
            </div>
          </div>

          <div className="block p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl opacity-60">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    Séance 3
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">• Bientôt disponible</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  useState
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gestion d'état, Événements, Rendu conditionnel
                </p>
              </div>
            </div>
          </div>

          <div className="block p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl opacity-60">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    Séance 4
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">• Bientôt disponible</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  useEffect
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cycle de vie, async/await, Appels API
                </p>
              </div>
            </div>
          </div>

          <div className="block p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl opacity-60">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    Séance 5
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">• Bientôt disponible</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Architecture & Bonnes Pratiques
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Structure de projet, Bonnes pratiques, Révisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 px-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Prêt à commencer ?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Commencez par la Séance 1 pour apprendre les fondamentaux de JavaScript moderne
        </p>
        <Link
          href="/seance-1"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
        >
          Commencer maintenant
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
