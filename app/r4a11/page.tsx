import Link from 'next/link';
import { FiBook, FiCode, FiCheckCircle, FiArrowRight, FiSmartphone } from 'react-icons/fi';

export default function R4A11Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 mb-6">
          <FiSmartphone className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          R4A11 - Développement Mobile
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Développement pour applications mobiles avec React Native
        </p>
        <Link
          href="/r4a11/seance-1"
          className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 !text-white font-medium rounded-lg transition-colors"
        >
          Commencer la Seance 1
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Course Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
            <FiBook className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            4 Seances
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Des fondamentaux React Native au deploiement d'applications mobiles
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
            Marquez vos chapitres comme completes et suivez votre avancement
          </p>
        </div>

        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <FiCode className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Projet fil rouge
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Construisez une application mobile complete au fil des seances
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl border border-violet-200 dark:border-violet-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Objectifs du cours
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Comprendre le paysage du developpement mobile et les differentes approches</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Maitriser les fondamentaux de React Native (composants, navigation, styles)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Gerer l'etat, les formulaires et le stockage local sur mobile</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Utiliser les API natives (camera, geolocalisation, permissions)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Deployer et optimiser une application mobile</span>
          </li>
        </ul>
      </section>

      {/* Sessions List */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Programme du cours
        </h2>
        <div className="space-y-4">
          <Link
            href="/r4a11/seance-1"
            className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-violet-500 dark:hover:border-violet-500 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full">
                    Seance 1
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Fondamentaux React Native
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Paysage mobile, React Native, composants primitifs, StyleSheet, navigation multi-ecrans
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-2"
            className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-violet-500 dark:hover:border-violet-500 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                    Seance 2
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Etat & Donnees
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gestion d'etat mobile, TextInput, formulaires, cycle de vie, AsyncStorage, mode offline
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-3"
            className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-violet-500 dark:hover:border-violet-500 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">
                    Seance 3
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  API Natives & Reseau
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Permissions, camera, geolocalisation, API REST, FlatList, combinaison des fonctionnalites
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>

          <Link
            href="/r4a11/seance-4"
            className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-violet-500 dark:hover:border-violet-500 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                    Seance 4
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">3h30</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Deploiement & Projet Final
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Build, deploiement, performance, eco-conception, bonnes pratiques, projet final
                </p>
              </div>
              <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 px-6 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 rounded-xl border border-violet-200 dark:border-violet-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Pret a developper pour le mobile ?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          4 seances completes pour maitriser React Native, des fondamentaux au deploiement
        </p>
        <Link
          href="/r4a11/seance-1"
          className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 !text-white font-medium rounded-lg transition-colors"
        >
          Commencer la Seance 1
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
