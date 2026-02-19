import { navigation, r4a11Navigation, getNavigationForPath, type NavSession } from './navigation';

interface PageNavigation {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}

interface PageInfo {
  id: string;
  href: string;
  label: string;
}

/**
 * Get all pages in order (flattened navigation) for a given navigation array
 */
function getAllPagesFromNav(nav: NavSession[]): PageInfo[] {
  const pages: PageInfo[] = [];

  nav.forEach((session) => {
    if (session.sections && session.sections.length > 0) {
      session.sections.forEach((section) => {
        pages.push({
          id: `${session.id}-${section.id}`,
          href: section.href,
          label: section.title,
        });
      });
    }
  });

  return pages;
}

/**
 * Get all pages in order (flattened navigation) - R4A10 only (backward compatible)
 */
function getAllPages(): PageInfo[] {
  return getAllPagesFromNav(navigation);
}

/**
 * Get previous and next pages for a given href.
 * Automatically detects which course the page belongs to.
 */
export function getPageNavigation(currentHref: string): PageNavigation {
  const nav = getNavigationForPath(currentHref);
  const allPages = getAllPagesFromNav(nav);
  const currentIndex = allPages.findIndex((page) => page.href === currentHref);

  if (currentIndex === -1) {
    return {};
  }

  const result: PageNavigation = {};

  if (currentIndex > 0) {
    result.prev = allPages[currentIndex - 1];
  }

  if (currentIndex < allPages.length - 1) {
    result.next = allPages[currentIndex + 1];
  }

  return result;
}
