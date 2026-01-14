'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';
import { getProgress, markSectionComplete, markSectionIncomplete } from '@/lib/progress';
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiCheck } from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSessions, setExpandedSessions] = useState<string[]>(['seance-1']);
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const progress = getProgress();
    setCompletedSections(progress.completedSections);
  }, []);

  const toggleSession = (sessionId: string) => {
    setExpandedSessions((prev) =>
      prev.includes(sessionId)
        ? prev.filter((id) => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const toggleSectionComplete = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (completedSections.includes(sectionId)) {
      markSectionIncomplete(sectionId);
      setCompletedSections((prev) => prev.filter((id) => id !== sectionId));
    } else {
      markSectionComplete(sectionId);
      setCompletedSections((prev) => [...prev, sectionId]);
    }
  };

  const isActive = (href: string) => pathname === href;

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Progress Bar */}
      <div className="p-4 border-b border-gray-700">
        <div className="text-sm text-gray-400 mb-2">
          Progression globale
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                navigation.reduce((acc, session) => acc + (session.sections?.length || 0), 0) > 0
                  ? (completedSections.length /
                      navigation.reduce((acc, session) => acc + (session.sections?.length || 0), 0)) *
                    100
                  : 0
              }%`,
            }}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {completedSections.length} /{' '}
          {navigation.reduce((acc, session) => acc + (session.sections?.length || 0), 0)} sections
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navigation.map((session) => (
            <div key={session.id}>
              <button
                onClick={() => toggleSession(session.id)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {expandedSessions.includes(session.id) ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                  <span className="text-gray-900 dark:text-gray-100">{session.title}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {session.description}
                </span>
              </button>

              {expandedSessions.includes(session.id) && session.sections && (
                <div className="ml-6 mt-1 space-y-1">
                  {session.sections.map((section) => (
                    <Link
                      key={section.id}
                      href={section.href}
                      className={`group flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive(section.href)
                          ? 'bg-cyan-900/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <button
                        onClick={(e) => toggleSectionComplete(section.id, e)}
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          completedSections.includes(section.id)
                            ? 'bg-cyan-500 border-cyan-500'
                            : 'border-gray-600 hover:border-cyan-500'
                        }`}
                      >
                        {completedSections.includes(section.id) && (
                          <FiCheck className="w-3 h-3 text-white" />
                        )}
                      </button>
                      <span className="flex-1">{section.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Resources Link */}
      <div className="p-4 border-t border-gray-700">
        <Link
          href="/resources"
          className="block px-3 py-2 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          📚 Ressources
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg transition-colors no-print"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40
          w-80 h-screen
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-700
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
