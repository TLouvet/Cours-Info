'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiList } from 'react-icons/fi';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract all h2 and h3 headings
    const elements = Array.from(
      document.querySelectorAll('main h2, main h3')
    );

    const usedIds = new Set<string>();

    const headingData: Heading[] = elements.map((element, index) => {
      let baseId = element.id || element.textContent?.toLowerCase().replace(/\s+/g, '-') || '';

      // Ensure unique IDs by appending index if duplicate
      let uniqueId = baseId;
      if (usedIds.has(uniqueId)) {
        uniqueId = `${baseId}-${index}`;
      }
      usedIds.add(uniqueId);

      return {
        id: uniqueId,
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1)),
      };
    });

    // Add IDs to headings that don't have them
    elements.forEach((element, index) => {
      if (!element.id) {
        element.id = headingData[index].id;
      }
    });

    setHeadings(headingData);

    // Track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed bottom-20 right-6 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg z-50 transition-colors no-print"
        aria-label="Toggle table of contents"
      >
        <FiList className="w-5 h-5" />
      </button>

      {/* Desktop TOC - Only show on XL screens to avoid overlap */}
      <aside
        className={`
          fixed top-24 right-8 w-64 max-h-[calc(100vh-12rem)] overflow-y-auto
          bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
          rounded-lg py-4 pr-4 shadow-lg
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'}
          xl:translate-x-0
          z-40
          no-print
        `}
      >
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 px-4 flex items-center gap-2">
          <FiList className="w-4 h-4" />
          Sur cette page
        </h3>
        <nav>
          <ul className="space-y-1" style={{ listStyle: 'none', paddingLeft: 0, marginLeft: 0 }}>
            {headings.map((heading) => (
              <li key={heading.id} style={{ listStyle: 'none', marginLeft: 0, paddingLeft: 0 }}>
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block text-sm py-2 pr-4
                    border-l-2 transition-all duration-200
                    ${heading.level === 3 ? 'pl-8' : 'pl-3'}
                    ${
                      activeId === heading.id
                        ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 font-semibold'
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }
                  `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
