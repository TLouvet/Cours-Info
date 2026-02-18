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
    description: 'Projet & IA',
    href: '/seance-5',
    sections: [
      { id: 's5-intro', title: 'Introduction', href: '/seance-5/introduction' },
      { id: 's5-ai-collaboration', title: "Collaborer avec l'IA", href: '/seance-5/ai-collaboration' },
      { id: 's5-ai', title: 'Workflow IA', href: '/seance-5/ai-workflow' },
      { id: 's5-practices', title: 'Pratiques React', href: '/seance-5/best-practices' },
      { id: 's5-structure', title: 'Structure Projet', href: '/seance-5/project-structure' },
      { id: 's5-custom-hooks', title: 'Custom Hooks', href: '/seance-5/custom-hooks' },
      { id: 's5-other-hooks', title: 'Autres Hooks', href: '/seance-5/other-hooks' },
      { id: 's5-debugging', title: 'Debugging', href: '/seance-5/debugging' },
      { id: 's5-deployment', title: 'Déploiement', href: '/seance-5/deployment' },
      { id: 's5-final', title: 'Projet Final', href: '/seance-5/final-project' },
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
