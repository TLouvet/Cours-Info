'use client';

import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

interface StickyNavigationProps {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
}

export default function StickyNavigation({
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: StickyNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 50% of page
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!prevHref && !nextHref) return null;

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2
        flex gap-2 sm:gap-4
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        z-40
        no-print
      `}
    >
      {prevHref && (
        <Link
          href={prevHref}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <FiChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">{prevLabel || 'Précédent'}</span>
        </Link>
      )}
      {nextHref && (
        <Link
          href={nextHref}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg shadow-lg transition-colors"
        >
          <span className="hidden sm:inline">{nextLabel || 'Suivant'}</span>
          <FiChevronRight className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}
