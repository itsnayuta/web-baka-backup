import { Hero } from "@/components/home/Hero";
import { Header } from "@/components/layout/Header";
import { BrandStrip } from "@/components/home/BrandStrip";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ProductCards } from "@/components/home/ProductCards";
import { PerformanceSection } from "@/components/home/PerformanceSection";
import { IngredientsSection } from "@/components/home/IngredientsSection";
import { FormulaSection } from "@/components/home/FormulaSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { KnowledgeSection } from "@/components/home/KnowledgeSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimator } from "@/components/motion/ScrollAnimator";

export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollAnimator />
      <main>
        <Hero />
        <BrandStrip />
        <BenefitsSection />
        <ProductShowcase />
        <ProductCards />
        <PerformanceSection />
        <IngredientsSection />
        <FormulaSection />
        <PackagesSection />
        <TestimonialsSection />
        <KnowledgeSection />
      </main>
      <Footer />
    </>
  );
}
