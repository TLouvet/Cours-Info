'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiClock } from 'react-icons/fi';

export default function ReadingTime() {
  const pathname = usePathname();
  const [readingTime, setReadingTime] = useState<number>(0);

  useEffect(() => {
    // Calculate reading time based on content
    const content = document.querySelector('main');
    if (!content) return;

    const text = content.textContent || '';
    const words = text.trim().split(/\s+/).length;
    const wordsPerMinute = 200; // Average reading speed
    const minutes = Math.ceil(words / wordsPerMinute);

    setReadingTime(minutes);
  }, [pathname]);

  if (readingTime === 0) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
      <FiClock className="w-4 h-4" />
      <span>~{readingTime} min de lecture</span>
    </div>
  );
}
