'use client';

import { useState } from 'react';
import { FiCheck, FiX, FiHelpCircle } from 'react-icons/fi';

interface QuickCheckProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export default function QuickCheck({ question, options, correctAnswer, explanation }: QuickCheckProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
      {/* Question */}
      <div className="flex items-start gap-3 mb-4">
        <FiHelpCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {question}
        </h4>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-4">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === correctAnswer;

          let buttonStyle = 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500';

          if (showResult && isSelected) {
            buttonStyle = isCorrect
              ? 'bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-500'
              : 'bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-500';
          } else if (showResult && isCorrectOption) {
            buttonStyle = 'bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-500';
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && handleSelect(index)}
              disabled={showResult}
              className={`w-full flex items-center gap-3 p-4 border-2 rounded-lg text-left transition-all ${buttonStyle} ${
                !showResult ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                showResult && isSelected && isCorrect
                  ? 'border-green-500 bg-green-500'
                  : showResult && isSelected && !isCorrect
                  ? 'border-red-500 bg-red-500'
                  : showResult && isCorrectOption
                  ? 'border-green-500 bg-green-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}>
                {showResult && ((isSelected && isCorrect) || isCorrectOption) && (
                  <FiCheck className="w-4 h-4 text-white" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <FiX className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="flex-1 text-gray-900 dark:text-gray-100">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Result */}
      {showResult && (
        <div className={`p-4 rounded-lg ${
          isCorrect
            ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
            : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-green-800 dark:text-green-300">Correct !</span>
              </>
            ) : (
              <>
                <FiX className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="font-semibold text-red-800 dark:text-red-300">Incorrect</span>
              </>
            )}
          </div>
          {explanation && (
            <p className="text-sm text-gray-700 dark:text-gray-300">{explanation}</p>
          )}
        </div>
      )}

      {/* Reset button */}
      {showResult && (
        <button
          onClick={() => {
            setSelectedAnswer(null);
            setShowResult(false);
          }}
          className="mt-4 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          Réessayer
        </button>
      )}
    </div>
  );
}
