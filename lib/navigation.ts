export interface NavSection {
  id: string;
  title: string;
  href: string;
}

export interface NavSession {
  id: string;
  title: string;
  description: string;
  href: string;
  sections?: NavSection[];
}

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  color: 'cyan' | 'violet';
  basePath: string;
  sessions: NavSession[];
}

// R4A10 - Compléments Web (existing navigation, kept as-is for backward compatibility)
export const navigation: NavSession[] = [
  {
    id: 'seance-1',
    title: 'Séance 1',
    description: 'Bases JavaScript',
    href: '/seance-1',
    sections: [
      { id: 'intro', title: 'Introduction', href: '/seance-1/introduction' },
      { id: 'html-css', title: 'HTML & CSS', href: '/seance-1/html-css' },
      { id: 'javascript', title: 'JavaScript', href: '/seance-1/javascript' },
      { id: 'devtools', title: 'DevTools & Débogage', href: '/seance-1/devtools' },
      { id: 'variables', title: 'Variables & Types', href: '/seance-1/variables' },
      { id: 'control-structures', title: 'Structures de contrôle', href: '/seance-1/control-structures' },
      { id: 'strings', title: 'Strings & Templates', href: '/seance-1/strings' },
      { id: 'functions', title: 'Fonctions', href: '/seance-1/functions' },
      { id: 'arrays', title: 'Tableaux', href: '/seance-1/arrays' },
      { id: 'objects', title: 'Objets', href: '/seance-1/objects' },
      { id: 'destructuring', title: 'Destructuration', href: '/seance-1/destructuring' },
      { id: 'spread', title: 'Spread Operator', href: '/seance-1/spread' },
      { id: 'typescript-intro', title: 'Introduction à TypeScript', href: '/seance-1/typescript-intro' },
      { id: 'conclusion', title: 'Conclusion', href: '/seance-1/conclusion' },
      { id: 'exercises', title: 'Exercices', href: '/seance-1/exercises' },
      { id: 'quiz', title: 'Quiz de validation', href: '/seance-1/quiz' },
    ],
  },
  {
    id: 'seance-2',
    title: 'Séance 2',
    description: 'React Fundamentals',
    href: '/seance-2',
    sections: [
      { id: 's2-intro', title: 'Introduction', href: '/seance-2/introduction' },
      { id: 's2-getting-started', title: 'Débuter avec React', href: '/seance-2/getting-started' },
      { id: 's2-env', title: 'Node.js & npm', href: '/seance-2/environment' },
      { id: 's2-spa', title: 'SPA vs MPA', href: '/seance-2/spa-vs-mpa' },
      { id: 's2-jsx', title: 'JSX Syntax', href: '/seance-2/jsx' },
      { id: 's2-components', title: 'Composants', href: '/seance-2/components' },
      { id: 's2-props', title: 'Props', href: '/seance-2/props' },
      { id: 's2-lists', title: 'Listes & Keys', href: '/seance-2/lists' },
      { id: 's2-conditional', title: 'Rendu Conditionnel', href: '/seance-2/conditional' },
      { id: 's2-typescript', title: 'React avec TypeScript', href: '/seance-2/typescript' },
      { id: 's2-conclusion', title: 'Conclusion', href: '/seance-2/conclusion' },
      { id: 's2-exercises', title: 'Exercices', href: '/seance-2/exercises' },
      { id: 's2-project', title: 'Projet Fil Rouge', href: '/seance-2/project' },
      { id: 's2-quiz', title: 'Quiz de validation', href: '/seance-2/quiz' },
    ],
  },
  {
    id: 'seance-3',
    title: 'Séance 3',
    description: 'Interactivité & Forms',
    href: '/seance-3',
    sections: [
      { id: 's3-intro', title: 'Introduction', href: '/seance-3/introduction' },
      { id: 's3-events', title: 'Événements', href: '/seance-3/events' },
      { id: 's3-useState', title: 'useState', href: '/seance-3/useState' },
      { id: 's3-forms', title: 'Formulaires', href: '/seance-3/forms' },
      { id: 's3-validation', title: 'Validation', href: '/seance-3/validation' },
      { id: 's3-zod', title: 'Zod', href: '/seance-3/zod' },
      { id: 's3-lifting', title: 'Lifting State', href: '/seance-3/lifting-state' },
      { id: 's3-conclusion', title: 'Conclusion', href: '/seance-3/conclusion' },
      { id: 's3-exercises', title: 'Exercices', href: '/seance-3/exercises' },
      { id: 's3-project', title: 'Projet Fil Rouge', href: '/seance-3/project' },
      { id: 's3-quiz', title: 'Quiz de validation', href: '/seance-3/quiz' },
    ],
  },
  {
    id: 'seance-4',
    title: 'Séance 4',
    description: 'Effects & Routing',
    href: '/seance-4',
    sections: [
      { id: 's4-intro', title: 'Introduction', href: '/seance-4/introduction' },
      { id: 's4-useEffect', title: 'useEffect', href: '/seance-4/useEffect' },
      { id: 's4-async', title: 'Asynchrone (Promises & async/await)', href: '/seance-4/async' },
      { id: 's4-fetching', title: 'Data Fetching', href: '/seance-4/data-fetching' },
      { id: 's4-routing-intro', title: 'Routing Intro', href: '/seance-4/routing-intro' },
      { id: 's4-routing-basics', title: 'Routing Basics', href: '/seance-4/routing-basics' },
      { id: 's4-dynamic', title: 'Routes Dynamiques', href: '/seance-4/dynamic-routes' },
      { id: 's4-combining', title: 'Combiner Effects & Routing', href: '/seance-4/combining' },
      { id: 's4-conclusion', title: 'Conclusion', href: '/seance-4/conclusion' },
      { id: 's4-exercises', title: 'Exercices', href: '/seance-4/exercises' },
      { id: 's4-quiz', title: 'Quiz de validation', href: '/seance-4/quiz' },
    ],
  },
  {
    id: 'seance-5',
    title: 'Séance 5',
    description: 'Hooks Avancés & IA',
    href: '/seance-5',
    sections: [
      { id: 's5-intro', title: 'Introduction', href: '/seance-5/introduction' },
      { id: 's5-ai', title: 'Workflow IA', href: '/seance-5/ai-workflow' },
      { id: 's5-ai-collaboration', title: "Collaborer avec l'IA", href: '/seance-5/ai-collaboration' },
      { id: 's5-custom-hooks', title: 'Custom Hooks', href: '/seance-5/custom-hooks' },
      { id: 's5-other-hooks', title: 'Autres Hooks (useRef, useMemo…)', href: '/seance-5/other-hooks' },
      { id: 's5-debugging', title: 'Debugging', href: '/seance-5/debugging' },
      { id: 's5-deployment', title: 'Déploiement', href: '/seance-5/deployment' },
      { id: 's5-project', title: 'Projet Fil Rouge', href: '/seance-5/project' },
      { id: 's5-conclusion', title: 'Conclusion', href: '/seance-5/conclusion' },
      { id: 's5-quiz', title: 'Quiz Final', href: '/seance-5/quiz' },
    ],
  },
  {
    id: 'annexes',
    title: 'Annexes',
    description: 'Compléments',
    href: '/annexes',
    sections: [
      { id: 'git-basics', title: 'Git - Bases & Commandes', href: '/annexes/git-basics' },
      { id: 'css-selectors', title: 'CSS - Sélecteurs & Propriétés', href: '/annexes/css-selectors' },
      { id: 'dom-manipulation', title: 'DOM - Manipulation avancée', href: '/annexes/dom-manipulation' },
      { id: 'naming-conventions', title: 'Conventions de nommage', href: '/annexes/naming-conventions' },
      { id: 'gh-pages', title: 'Déployer sur GitHub Pages', href: '/annexes/gh-pages' },
    ],
  },
];

// R4A11 - Développement Mobile
export const r4a11Navigation: NavSession[] = [
  {
    id: 'r4a11-seance-1',
    title: 'Séance 1',
    description: 'Fondamentaux React Native',
    href: '/r4a11/seance-1',
    sections: [
      { id: 'r4a11-s1-intro', title: 'Introduction', href: '/r4a11/seance-1/introduction' },
      { id: 'r4a11-s1-landscape', title: 'Paysage mobile', href: '/r4a11/seance-1/mobile-landscape' },
      { id: 'r4a11-s1-rn-intro', title: 'Introduction React Native', href: '/r4a11/seance-1/react-native-intro' },
      { id: 'r4a11-s1-setup', title: 'Installation & Config', href: '/r4a11/seance-1/setup' },
      { id: 'r4a11-s1-primitives', title: 'Composants Primitifs', href: '/r4a11/seance-1/primitives' },
      { id: 'r4a11-s1-stylesheet', title: 'StyleSheet & Flexbox', href: '/r4a11/seance-1/stylesheet' },
      { id: 'r4a11-s1-navigation', title: 'Navigation', href: '/r4a11/seance-1/navigation' },
      { id: 'r4a11-s1-multi-screens', title: 'Multi-écrans', href: '/r4a11/seance-1/multi-screens' },
      { id: 'r4a11-s1-conclusion', title: 'Conclusion', href: '/r4a11/seance-1/conclusion' },
      { id: 'r4a11-s1-exercises', title: 'Exercices', href: '/r4a11/seance-1/exercises' },
      { id: 'r4a11-s1-quiz', title: 'Quiz de validation', href: '/r4a11/seance-1/quiz' },
    ],
  },
  {
    id: 'r4a11-seance-2',
    title: 'Séance 2',
    description: 'État & Données',
    href: '/r4a11/seance-2',
    sections: [
      { id: 'r4a11-s2-intro', title: 'Introduction', href: '/r4a11/seance-2/introduction' },
      { id: 'r4a11-s2-state', title: 'État sur mobile', href: '/r4a11/seance-2/state-mobile' },
      { id: 'r4a11-s2-textinput', title: 'TextInput', href: '/r4a11/seance-2/text-input' },
      { id: 'r4a11-s2-forms', title: 'Formulaires', href: '/r4a11/seance-2/forms' },
      { id: 'r4a11-s2-lifecycle', title: 'Cycle de vie', href: '/r4a11/seance-2/lifecycle' },
      { id: 'r4a11-s2-storage', title: 'AsyncStorage', href: '/r4a11/seance-2/async-storage' },
      { id: 'r4a11-s2-offline', title: 'Mode Offline', href: '/r4a11/seance-2/offline' },
      { id: 'r4a11-s2-conclusion', title: 'Conclusion', href: '/r4a11/seance-2/conclusion' },
      { id: 'r4a11-s2-exercises', title: 'Exercices', href: '/r4a11/seance-2/exercises' },
      { id: 'r4a11-s2-project', title: 'Projet Fil Rouge', href: '/r4a11/seance-2/project' },
      { id: 'r4a11-s2-quiz', title: 'Quiz de validation', href: '/r4a11/seance-2/quiz' },
    ],
  },
  {
    id: 'r4a11-seance-3',
    title: 'Séance 3',
    description: 'API Natives & Réseau',
    href: '/r4a11/seance-3',
    sections: [
      { id: 'r4a11-s3-intro', title: 'Introduction', href: '/r4a11/seance-3/introduction' },
      { id: 'r4a11-s3-permissions', title: 'Permissions', href: '/r4a11/seance-3/permissions' },
      { id: 'r4a11-s3-camera', title: 'Caméra', href: '/r4a11/seance-3/camera' },
      { id: 'r4a11-s3-geolocation', title: 'Géolocalisation', href: '/r4a11/seance-3/geolocation' },
      { id: 'r4a11-s3-api', title: 'API REST', href: '/r4a11/seance-3/api-rest' },
      { id: 'r4a11-s3-flatlist', title: 'FlatList', href: '/r4a11/seance-3/flatlist' },
      { id: 'r4a11-s3-combining', title: 'Combinaison', href: '/r4a11/seance-3/combining' },
      { id: 'r4a11-s3-conclusion', title: 'Conclusion', href: '/r4a11/seance-3/conclusion' },
      { id: 'r4a11-s3-exercises', title: 'Exercices', href: '/r4a11/seance-3/exercises' },
      { id: 'r4a11-s3-project', title: 'Projet Fil Rouge', href: '/r4a11/seance-3/project' },
      { id: 'r4a11-s3-quiz', title: 'Quiz de validation', href: '/r4a11/seance-3/quiz' },
    ],
  },
  {
    id: 'r4a11-seance-4',
    title: 'Séance 4',
    description: 'Déploiement & Projet',
    href: '/r4a11/seance-4',
    sections: [
      { id: 'r4a11-s4-intro', title: 'Introduction', href: '/r4a11/seance-4/introduction' },
      { id: 'r4a11-s4-build', title: 'Build & Déploiement', href: '/r4a11/seance-4/build-deploy' },
      { id: 'r4a11-s4-perf', title: 'Performance', href: '/r4a11/seance-4/performance' },
      { id: 'r4a11-s4-eco', title: 'Éco-conception', href: '/r4a11/seance-4/eco-design' },
      { id: 'r4a11-s4-practices', title: 'Bonnes Pratiques', href: '/r4a11/seance-4/best-practices' },
      { id: 'r4a11-s4-guide', title: 'Guide Projet', href: '/r4a11/seance-4/project-guide' },
      { id: 'r4a11-s4-conclusion', title: 'Conclusion', href: '/r4a11/seance-4/conclusion' },
      { id: 'r4a11-s4-final', title: 'Projet Final', href: '/r4a11/seance-4/final-project' },
      { id: 'r4a11-s4-quiz', title: 'Quiz Final', href: '/r4a11/seance-4/quiz' },
    ],
  },
];

// All courses
export const courses: Course[] = [
  {
    id: 'r4a10',
    title: 'R4A10 - Compléments Web',
    shortTitle: 'R4A10',
    description: 'Développement Frontend avec React',
    color: 'cyan',
    basePath: '',
    sessions: navigation,
  },
  {
    id: 'r4a11',
    title: 'R4A11 - Développement Mobile',
    shortTitle: 'R4A11',
    description: 'Développement pour applications mobiles avec React Native',
    color: 'violet',
    basePath: '/r4a11',
    sessions: r4a11Navigation,
  },
];

/**
 * Get the navigation array for a given pathname.
 * Returns r4a11Navigation for /r4a11/* paths, otherwise returns the default navigation.
 */
export function getNavigationForPath(pathname: string): NavSession[] {
  if (pathname.startsWith('/r4a11')) {
    return r4a11Navigation;
  }
  return navigation;
}

/**
 * Get the course for a given pathname.
 */
export function getCourseForPath(pathname: string): Course | undefined {
  if (pathname.startsWith('/r4a11')) {
    return courses.find(c => c.id === 'r4a11');
  }
  return courses.find(c => c.id === 'r4a10');
}
