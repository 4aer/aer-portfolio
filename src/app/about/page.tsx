import { AboutSection } from "@/components/sections/AboutSection";

export const metadata = { title: "About — Mark Nathan B. Olmedo" };

export default function AboutPage() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12">
      <AboutSection />
    </main>
  );
}
