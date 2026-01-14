import { navigation, type NavSection } from './navigation';

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
 * Get all pages in order (flattened navigation)
 */
function getAllPages(): PageInfo[] {
  const pages: PageInfo[] = [];

  navigation.forEach((session) => {
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
 * Get previous and next pages for a given href
 */
export function getPageNavigation(currentHref: string): PageNavigation {
  const allPages = getAllPages();
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
