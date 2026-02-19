import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R4A11 - Développement Mobile | IUT Paris 8",
  description: "Cours de développement pour applications mobiles avec React Native - IUT Paris 8",
  keywords: ["React Native", "Mobile", "JavaScript", "TypeScript", "IUT Paris 8", "R4A11"],
};

export default function R4A11Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
