'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { navigation } from '@/lib/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);

  // Build breadcrumb trail
  const breadcrumbs = [
    { label: 'Accueil', href: '/' }
  ];

  // Find the current session and section
  for (const session of navigation) {
    if (pathSegments[0] === session.id) {
      breadcrumbs.push({
        label: session.title,
        href: `/${session.id}`
      });

      // If we have a section, find it
      if (pathSegments[1] && session.sections) {
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
  if (breadcrumbs.length === 1) {
    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ label, href });
    });
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && (
                <FiChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              )}

              {index === 0 && (
                <FiHome className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}

              {isLast ? (
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors no-prose-styles"
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
