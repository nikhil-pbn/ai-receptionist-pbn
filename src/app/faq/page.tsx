import { BookDemoForm, FAQSection, HeroSection } from "@/components/faqPage";


export default function FAQPage() {
  return (
    <main className="flex pt-10 flex-col w-full items-center justify-between bg-background">
      <HeroSection />
      <FAQSection />
      <BookDemoForm />
    </main>
  );
}
