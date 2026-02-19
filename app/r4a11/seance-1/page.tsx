import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function R4A11Seance1Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full">
          Seance 1
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Fondamentaux React Native
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Paysage mobile, introduction a React Native, composants de base et navigation
        </p>
      </div>

      {/* Overview */}
      <div className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl border border-violet-200 dark:border-violet-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Ce que vous allez apprendre
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Le paysage du developpement mobile (natif, hybride, cross-platform)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Introduction a React Native et Expo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Les composants primitifs (View, Text, Image, ScrollView)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Le systeme de styles avec StyleSheet</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>La navigation multi-ecrans avec React Navigation</span>
          </li>
        </ul>
      </div>

      {/* Sections */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Parcours de la seance
        </h2>
        <div className="space-y-3">
          <Link
            href="/r4a11/seance-1/introduction"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Introduction
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Presentation du cours et objectifs
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/mobile-landscape"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Le paysage mobile
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Natif, hybride, cross-platform : comprendre les approches
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/react-native-intro"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Introduction a React Native
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Architecture, principes et differences avec React web
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/setup"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Installation & Configuration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mise en place de l'environnement avec Expo
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/primitives"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Composants Primitifs
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View, Text, Image, ScrollView, TouchableOpacity
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/stylesheet"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  StyleSheet & Flexbox
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Systeme de styles React Native et mise en page
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/navigation"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Navigation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  React Navigation : Stack, Tab et Drawer
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/multi-screens"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Application Multi-ecrans
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Construire une application avec plusieurs ecrans
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/conclusion"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Conclusion
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Resume et preparation pour la seance suivante
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/exercises"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Exercices
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mettez en pratique ce que vous avez appris
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-1/quiz"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Quiz de validation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Testez vos connaissances
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link
          href="/r4a11/seance-1/introduction"
          className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 !text-white font-medium rounded-lg transition-colors"
        >
          Commencer
          <FiArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/r4a11"
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors"
        >
          Retour au cours
        </Link>
      </div>
    </div>
  );
}
