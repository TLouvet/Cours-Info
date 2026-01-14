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
      { id: 'javascript', title: 'JavaScript Moderne', href: '/seance-1/javascript' },
      { id: 'variables', title: 'Variables & Types', href: '/seance-1/variables' },
      { id: 'strings', title: 'Strings & Templates', href: '/seance-1/strings' },
      { id: 'functions', title: 'Fonctions', href: '/seance-1/functions' },
      { id: 'arrays', title: 'Tableaux', href: '/seance-1/arrays' },
      { id: 'objects', title: 'Objets', href: '/seance-1/objects' },
      { id: 'destructuring', title: 'Destructuration', href: '/seance-1/destructuring' },
      { id: 'spread', title: 'Spread Operator', href: '/seance-1/spread' },
      { id: 'modules', title: 'Modules ES6', href: '/seance-1/modules' },
      { id: 'async', title: 'Asynchrone', href: '/seance-1/async' },
      { id: 'ai-collaboration', title: 'Collaborer avec l\'IA', href: '/seance-1/ai-collaboration' },
      { id: 'conclusion', title: 'Conclusion', href: '/seance-1/conclusion' },
      { id: 'exercises', title: 'Exercices', href: '/seance-1/exercises' },
      { id: 'quiz', title: 'Quiz de validation', href: '/seance-1/quiz' },
    ],
  },
  {
    id: 'seance-2',
    title: 'Séance 2',
    description: 'Introduction à React',
    href: '/seance-2',
    sections: [],
  },
  {
    id: 'seance-3',
    title: 'Séance 3',
    description: 'useState',
    href: '/seance-3',
    sections: [],
  },
  {
    id: 'seance-4',
    title: 'Séance 4',
    description: 'useEffect',
    href: '/seance-4',
    sections: [],
  },
  {
    id: 'seance-5',
    title: 'Séance 5',
    description: 'Architecture',
    href: '/seance-5',
    sections: [],
  },
  {
    id: 'annexes',
    title: 'Annexes',
    description: 'Compléments non obligatoires',
    href: '/annexes',
    sections: [
      { id: 'css-selectors', title: 'CSS - Sélecteurs & Propriétés', href: '/annexes/css-selectors' },
    ],
  },
];
