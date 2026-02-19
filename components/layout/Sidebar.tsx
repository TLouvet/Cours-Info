'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, r4a11Navigation, getNavigationForPath, getCourseForPath, type NavSession } from '@/lib/navigation';
import { getProgress, markSectionComplete, markSectionIncomplete } from '@/lib/progress';
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiCheck } from 'react-icons/fi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSessions, setExpandedSessions] = useState<string[]>(['seance-1']);
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const pathname = usePathname();

  // Get the correct navigation based on current path
  const currentNav = getNavigationForPath(pathname);
  const currentCourse = getCourseForPath(pathname);
  const isR4A11 = pathname.startsWith('/r4a11');
  const colorClass = isR4A11 ? 'violet' : 'cyan';

  useEffect(() => {
    const progress = getProgress();
    setCompletedSections(progress.completedSections);
  }, []);

  // Auto-expand the current session
  useEffect(() => {
    for (const session of currentNav) {
      if (session.sections?.some(s => pathname === s.href) || pathname === session.href) {
        setExpandedSessions((prev) =>
          prev.includes(session.id) ? prev : [...prev, session.id]
        );
        break;
      }
    }
  }, [pathname, currentNav]);

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

  const totalSections = currentNav.reduce((acc, session) => acc + (session.sections?.length || 0), 0);
  const completedInCourse = completedSections.filter(id =>
    currentNav.some(session =>
      session.sections?.some(section => section.id === id)
    )
  ).length;

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Course Switcher */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex gap-2">
          <Link
            href="/"
            className={`flex-1 text-center px-2 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              !isR4A11
                ? 'bg-cyan-900/30 text-cyan-400 border border-cyan-700'
                : 'text-gray-400 hover:bg-gray-800'
            }`}
            onClick={() => setIsOpen(false)}
          >
            R4A10
          </Link>
          <Link
            href="/r4a11"
            className={`flex-1 text-center px-2 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              isR4A11
                ? 'bg-violet-900/30 text-violet-400 border border-violet-700'
                : 'text-gray-400 hover:bg-gray-800'
            }`}
            onClick={() => setIsOpen(false)}
          >
            R4A11
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="p-4 border-b border-gray-700">
        <div className="text-sm text-gray-400 mb-2">
          Progression {currentCourse?.shortTitle || ''}
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${isR4A11 ? 'bg-violet-500' : 'bg-cyan-500'}`}
            style={{
              width: `${
                totalSections > 0
                  ? (completedInCourse / totalSections) * 100
                  : 0
              }%`,
            }}
          />
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {completedInCourse} / {totalSections} sections
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {currentNav.map((session) => (
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
                          ? isR4A11
                            ? 'bg-violet-900/20 text-violet-400'
                            : 'bg-cyan-900/20 text-cyan-400'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <button
                        onClick={(e) => toggleSectionComplete(section.id, e)}
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          completedSections.includes(section.id)
                            ? isR4A11
                              ? 'bg-violet-500 border-violet-500'
                              : 'bg-cyan-500 border-cyan-500'
                            : isR4A11
                              ? 'border-gray-600 hover:border-violet-500'
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
          Ressources
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed top-4 left-4 z-50 p-3 rounded-lg ${isR4A11 ? 'bg-violet-600 hover:bg-violet-700' : 'bg-cyan-600 hover:bg-cyan-700'} text-white shadow-lg transition-colors no-print`}
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
