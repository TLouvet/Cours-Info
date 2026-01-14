'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronRight, FiCode } from 'react-icons/fi';

interface ExerciseProps {
  title: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  children: React.ReactNode;
  solution?: React.ReactNode;
}

const difficultyColors = {
  easy: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
  hard: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
};

const difficultyLabels = {
  easy: 'Facile',
  medium: 'Moyen',
  hard: 'Difficile',
};

export default function Exercise({ title, difficulty = 'medium', children, solution }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-2">
          <FiCode className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Exercice : {title}
          </h3>
        </div>
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${difficultyColors[difficulty]}`}>
          {difficultyLabels[difficulty]}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 bg-white dark:bg-gray-900">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          {children}
        </div>
      </div>

      {/* Solution */}
      {solution && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
              {showSolution ? <FiChevronDown className="w-4 h-4" /> : <FiChevronRight className="w-4 h-4" />}
              {showSolution ? 'Masquer' : 'Voir'} la solution
            </span>
          </button>

          {showSolution && (
            <div className="px-4 pb-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {solution}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
