import Link from 'next/link';
import { FiArrowRight, FiBook, FiCode, FiTool, FiBox, FiActivity, FiAlertCircle, FiCloud, FiCheckCircle, FiAward } from 'react-icons/fi';

export default function Seance5Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">
          Séance 5
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Hooks Avancés, IA & Déploiement
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Finalisez votre application Kana avec des custom hooks, optimisez avec useRef et useMemo, puis déployez en production
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
            <span>Utiliser l'IA efficacement — prompts précis, validation du code généré</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Créer des custom hooks pour extraire et réutiliser la logique</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>useRef pour interagir avec le DOM, useMemo et useCallback pour optimiser</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Déboguer des erreurs React avec React DevTools</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">•</span>
            <span>Déployer votre application Kana sur Vercel</span>
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
            href="/seance-5/introduction"
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
                    Vue d'ensemble de la séance et objectifs
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/ai-workflow"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FiTool className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Workflow avec l'IA
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prompts efficaces, validation du code généré, red flags
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/ai-collaboration"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <FiCode className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Collaboration avec l'IA
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Valider et améliorer le code généré par l'IA
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/custom-hooks"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <FiBox className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Custom Hooks
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Extraire la logique stateful dans des hooks réutilisables
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/other-hooks"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <FiActivity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Autres Hooks Utiles
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    useRef, useMemo, useCallback — quand et pourquoi
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/debugging"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <FiAlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Débogage
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Erreurs courantes et stratégies de débogage
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/deployment"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                  <FiCloud className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Déploiement
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Déployer votre application Kana sur Vercel
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/project"
            className="group block p-4 bg-white dark:bg-gray-800 border border-cyan-300 dark:border-cyan-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <FiCheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Projet Fil Rouge — Séance 5
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Finalisation de l'application Kana (rendu Moodle)
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/conclusion"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                  <FiCheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Conclusion
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Récapitulatif du cours et prochaines étapes
                  </p>
                </div>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/seance-5/quiz"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <FiAward className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Quiz Final
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Testez vos connaissances sur la séance 5
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
          href="/seance-5/introduction"
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
