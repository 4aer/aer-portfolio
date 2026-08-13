import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechStaticGrid } from "@/components/ui/TechStaticGrid";

export const metadata = { title: "Tech Stack — Mark Nathan B. Olmedo" };

export default function TechStackPage() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12">
      <SectionHeader label="full tech stack" />
      <TechStaticGrid />
    </main>
  );
}
