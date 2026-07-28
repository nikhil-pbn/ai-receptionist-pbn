import { FAQSection, HeroSection } from "@/components/faq";
import dynamic from "next/dynamic";

// Below-the-fold form (client) — code-split its bundle, keep SSR for SEO.
const BookDemoForm = dynamic(() =>
  import("@/components/faq/BookDemoForm").then((m) => m.BookDemoForm)
);


export default function FAQPage() {
  return (
    <main className="flex pt-10 flex-col w-full items-center justify-between bg-background">
      <HeroSection />
      <FAQSection />
      <BookDemoForm />
    </main>
  );
}
