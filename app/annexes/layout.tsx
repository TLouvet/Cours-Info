import CoursePageLayout from '@/components/layout/CoursePageLayout';

export default function AnnexesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CoursePageLayout>{children}</CoursePageLayout>;
}
