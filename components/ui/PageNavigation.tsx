'use client';

import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PageNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function PageNavigation({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: PageNavigationProps) {
  if (!prevHref && !nextHref) return null;

  return (
    <nav aria-label="Page navigation" className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center gap-4">
        {/* Previous Link */}
        {prevHref ? (
          <Link
            href={prevHref}
            className="group flex items-center gap-3 px-5 py-4 flex-1 max-w-md rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all no-prose-styles bg-white dark:bg-gray-800 hover:shadow-md"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            <div className="flex flex-col items-start min-w-0">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Précédent
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate w-full">
                {prevLabel || 'Page précédente'}
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Next Link */}
        {nextHref ? (
          <Link
            href={nextHref}
            className="group flex items-center gap-3 px-5 py-4 flex-1 max-w-md rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all no-prose-styles bg-white dark:bg-gray-800 hover:shadow-md"
          >
            <div className="flex flex-col items-end min-w-0 flex-1">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Suivant
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate w-full text-right">
                {nextLabel || 'Page suivante'}
              </span>
            </div>
            <FiChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-shrink-0" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
}
