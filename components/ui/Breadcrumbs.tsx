'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { getNavigationForPath, getCourseForPath } from '@/lib/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage or course landing pages
  if (pathname === '/' || pathname === '/r4a11') return null;

  const currentNav = getNavigationForPath(pathname);
  const currentCourse = getCourseForPath(pathname);
  const isR4A11 = pathname.startsWith('/r4a11');

  const pathSegments = pathname.split('/').filter(Boolean);

  // Build breadcrumb trail
  const breadcrumbs = [
    { label: 'Accueil', href: '/' }
  ];

  // Add course breadcrumb for R4A11
  if (isR4A11) {
    breadcrumbs.push({
      label: 'R4A11',
      href: '/r4a11'
    });
  }

  // Find the current session and section in the correct navigation
  const sessionSegment = isR4A11 ? pathSegments[1] : pathSegments[0];
  const sectionSegment = isR4A11 ? pathSegments[2] : pathSegments[1];

  for (const session of currentNav) {
    const sessionIdSuffix = session.href.split('/').pop();
    if (sessionSegment === sessionIdSuffix) {
      breadcrumbs.push({
        label: session.title,
        href: session.href
      });

      // If we have a section, find it
      if (sectionSegment && session.sections) {
        const section = session.sections.find(s => s.href === pathname);
        if (section) {
          breadcrumbs.push({
            label: section.title,
            href: section.href
          });
        }
      }
      break;
    }
  }

  // If we couldn't find the page in navigation, fall back to path-based breadcrumbs
  if (breadcrumbs.length <= (isR4A11 ? 2 : 1)) {
    const startIndex = isR4A11 ? 1 : 0;
    pathSegments.slice(startIndex).forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, startIndex + index + 1).join('/');
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ label, href });
    });
  }

  const linkColorClass = isR4A11
    ? 'text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300'
    : 'text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300';

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center justify-center sm:justify-start gap-2 text-sm flex-wrap">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && (
                <FiChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 flex-shrink-0" />
              )}

              {index === 0 && (
                <FiHome className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              )}

              {isLast ? (
                <span className="text-gray-900 dark:text-gray-100 font-medium inline-flex items-center">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={`${linkColorClass} transition-colors no-prose-styles inline-flex items-center`}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
