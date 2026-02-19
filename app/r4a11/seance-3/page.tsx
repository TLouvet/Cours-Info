import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function R4A11Seance3Page() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full">
          Seance 3
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          API Natives & Reseau
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Permissions, camera, geolocalisation, API REST et listes performantes
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
            <span>Systeme de permissions sur mobile (Android/iOS)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Acces a la camera et a la galerie photo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Geolocalisation et cartes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Communication avec des API REST</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>FlatList et listes performantes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-600 dark:text-violet-400">&#8226;</span>
            <span>Combiner les fonctionnalites natives et reseau</span>
          </li>
        </ul>
      </div>

      {/* Sections */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Parcours de la seance
        </h2>
        <div className="space-y-3">
          {[
            { href: '/r4a11/seance-3/introduction', title: 'Introduction', desc: 'Presentation et objectifs de la seance' },
            { href: '/r4a11/seance-3/permissions', title: 'Permissions', desc: 'Systeme de permissions Android et iOS' },
            { href: '/r4a11/seance-3/camera', title: 'Camera', desc: 'Acces a la camera et galerie photo' },
            { href: '/r4a11/seance-3/geolocation', title: 'Geolocalisation', desc: 'Position GPS et cartes interactives' },
            { href: '/r4a11/seance-3/api-rest', title: 'API REST', desc: 'Fetch, axios et communication reseau' },
            { href: '/r4a11/seance-3/flatlist', title: 'FlatList', desc: 'Listes performantes et pagination' },
            { href: '/r4a11/seance-3/combining', title: 'Combinaison', desc: 'Assembler les fonctionnalites dans une app complete' },
            { href: '/r4a11/seance-3/conclusion', title: 'Conclusion', desc: 'Resume et preparation pour la suite' },
            { href: '/r4a11/seance-3/exercises', title: 'Exercices', desc: 'Mettez en pratique ce que vous avez appris' },
            { href: '/r4a11/seance-3/project', title: 'Projet Fil Rouge', desc: 'Avancez sur votre projet mobile' },
            { href: '/r4a11/seance-3/quiz', title: 'Quiz de validation', desc: 'Testez vos connaissances' },
          ].map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {section.desc}
                  </p>
                </div>
                <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link
          href="/r4a11/seance-3/introduction"
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
