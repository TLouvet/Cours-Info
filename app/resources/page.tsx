import { Metadata } from 'next';
import Link from 'next/link';
import { FiBook, FiVideo, FiCode, FiExternalLink, FiFileText } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Ressources | R4A10',
  description: 'Ressources utiles pour le développement web moderne',
};

interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'documentation' | 'video' | 'tool' | 'article';
  category: string;
}

const resources: Resource[] = [
  // JavaScript
  {
    title: 'MDN JavaScript Guide',
    description: 'La référence complète sur JavaScript par Mozilla',
    url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide',
    type: 'documentation',
    category: 'JavaScript',
  },
  {
    title: 'JavaScript.info',
    description: 'Tutoriel moderne et complet sur JavaScript',
    url: 'https://javascript.info',
    type: 'documentation',
    category: 'JavaScript',
  },
  {
    title: 'Eloquent JavaScript',
    description: 'Livre gratuit en ligne pour apprendre JavaScript',
    url: 'https://eloquentjavascript.net',
    type: 'documentation',
    category: 'JavaScript',
  },

  // React
  {
    title: 'React Documentation',
    description: 'Documentation officielle de React',
    url: 'https://react.dev',
    type: 'documentation',
    category: 'React',
  },
  {
    title: 'React Beta Docs',
    description: 'Nouvelle documentation React avec hooks',
    url: 'https://react.dev/learn',
    type: 'documentation',
    category: 'React',
  },

  // TypeScript
  {
    title: 'TypeScript Handbook',
    description: 'Guide officiel TypeScript',
    url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    type: 'documentation',
    category: 'TypeScript',
  },

  // Git
  {
    title: 'Pro Git Book',
    description: 'Livre complet sur Git (gratuit, en français)',
    url: 'https://git-scm.com/book/fr/v2',
    type: 'documentation',
    category: 'Git',
  },
  {
    title: 'GitHub Guides',
    description: 'Guides officiels pour débuter avec GitHub',
    url: 'https://guides.github.com',
    type: 'documentation',
    category: 'Git',
  },
  {
    title: 'Learn Git Branching',
    description: 'Tutoriel interactif pour apprendre Git',
    url: 'https://learngitbranching.js.org/?locale=fr_FR',
    type: 'tool',
    category: 'Git',
  },

  // CSS
  {
    title: 'CSS-Tricks',
    description: 'Astuces et guides CSS',
    url: 'https://css-tricks.com',
    type: 'article',
    category: 'CSS',
  },
  {
    title: 'Flexbox Froggy',
    description: 'Jeu pour apprendre Flexbox',
    url: 'https://flexboxfroggy.com/#fr',
    type: 'tool',
    category: 'CSS',
  },
  {
    title: 'Grid Garden',
    description: 'Jeu pour apprendre CSS Grid',
    url: 'https://cssgridgarden.com/#fr',
    type: 'tool',
    category: 'CSS',
  },

  // Outils
  {
    title: 'Can I Use',
    description: 'Compatibilité des fonctionnalités web',
    url: 'https://caniuse.com',
    type: 'tool',
    category: 'Outils',
  },
  {
    title: 'CodeSandbox',
    description: 'Éditeur en ligne pour React',
    url: 'https://codesandbox.io',
    type: 'tool',
    category: 'Outils',
  },
  {
    title: 'StackBlitz',
    description: 'IDE en ligne pour le développement web',
    url: 'https://stackblitz.com',
    type: 'tool',
    category: 'Outils',
  },

  // YouTube / Vidéos
  {
    title: 'Grafikart - JavaScript',
    description: 'Tutoriels vidéo en français',
    url: 'https://grafikart.fr/formations/javascript',
    type: 'video',
    category: 'Vidéos',
  },
  {
    title: 'Web Dev Simplified',
    description: 'Tutoriels React et JavaScript (anglais)',
    url: 'https://www.youtube.com/@WebDevSimplified',
    type: 'video',
    category: 'Vidéos',
  },
];

const categories = Array.from(new Set(resources.map(r => r.category)));

const getIcon = (type: Resource['type']) => {
  switch (type) {
    case 'documentation':
      return FiBook;
    case 'video':
      return FiVideo;
    case 'tool':
      return FiCode;
    case 'article':
      return FiFileText;
  }
};

const getTypeLabel = (type: Resource['type']) => {
  switch (type) {
    case 'documentation':
      return 'Documentation';
    case 'video':
      return 'Vidéo';
    case 'tool':
      return 'Outil';
    case 'article':
      return 'Article';
  }
};

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          Ressources
        </h1>
        <p className="text-lg text-gray-400">
          Une sélection de ressources utiles pour votre apprentissage du développement web moderne.
        </p>
      </div>

      {/* Quick Links to Course Pages */}
      <div className="mb-12 p-6 bg-cyan-900/20 border border-cyan-800 rounded-lg">
        <h2 className="text-xl font-semibold text-cyan-100 mb-4">
          📚 Contenu du cours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/seance-1"
            className="block px-4 py-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-cyan-600"
          >
            <div className="font-medium text-gray-100">Séance 1</div>
            <div className="text-sm text-gray-400">Bases JavaScript</div>
          </Link>
          <Link
            href="/seance-1/exercises"
            className="block px-4 py-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-cyan-600"
          >
            <div className="font-medium text-gray-100">Exercices</div>
            <div className="text-sm text-gray-400">Pratique JavaScript</div>
          </Link>
          <Link
            href="/seance-1/quiz"
            className="block px-4 py-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-cyan-600"
          >
            <div className="font-medium text-gray-100">Quiz</div>
            <div className="text-sm text-gray-400">Validation des acquis</div>
          </Link>
          <Link
            href="/annexes/git-basics"
            className="block px-4 py-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-cyan-600"
          >
            <div className="font-medium text-gray-100">Git</div>
            <div className="text-sm text-gray-400">Bases & Commandes</div>
          </Link>
        </div>
      </div>

      {/* External Resources by Category */}
      {categories.map((category) => {
        const categoryResources = resources.filter(r => r.category === category);

        return (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryResources.map((resource, index) => {
                const Icon = getIcon(resource.type);

                return (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-cyan-600 rounded-lg transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                            {resource.title}
                          </h3>
                          <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                          {resource.description}
                        </p>
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                            {getTypeLabel(resource.type)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Tips */}
      <div className="mt-12 p-6 bg-blue-900/20 border border-blue-800 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-100 mb-3">
          💡 Conseils d'utilisation
        </h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>✅ <strong>MDN</strong> est votre référence pour JavaScript vanilla</li>
          <li>✅ <strong>React.dev</strong> pour tout ce qui concerne React</li>
          <li>✅ Pratiquez avec les <strong>outils interactifs</strong> (Flexbox Froggy, Grid Garden)</li>
          <li>✅ Utilisez <strong>Can I Use</strong> pour vérifier la compatibilité navigateur</li>
          <li>✅ Testez vos idées rapidement sur <strong>CodeSandbox</strong> ou <strong>StackBlitz</strong></li>
        </ul>
      </div>

      {/* Moodle Link */}
      <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg text-center">
        <p className="text-gray-300 mb-4">
          Pour les TP, devoirs et annonces du cours
        </p>
        <a
          href="https://moodle.iut.univ-paris8.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
        >
          Accéder à Moodle
          <FiExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
