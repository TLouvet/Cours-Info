'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ReadingTime from '@/components/ui/ReadingTime';
import TableOfContents from '@/components/ui/TableOfContents';
import PageNavigation from '@/components/ui/PageNavigation';
import { getPageNavigation } from '@/lib/navigationHelpers';

interface CoursePageLayoutProps {
  children: React.ReactNode;
}

export default function CoursePageLayout({ children }: CoursePageLayoutProps) {
  const pathname = usePathname();
  const { prev, next } = getPageNavigation(pathname);

  return (
    <>
      <Breadcrumbs />
      <ReadingTime />
      <TableOfContents />
      {children}
      <PageNavigation
        prevHref={prev?.href}
        prevLabel={prev?.label}
        nextHref={next?.href}
        nextLabel={next?.label}
      />
    </>
  );
}
