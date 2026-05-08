import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Features from '@/components/Features';
import DilemmaSection from '@/components/DilemmaSection';
import ControlCenterSection from '@/components/ControlCenterSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuizSection from '@/components/QuizSection';
import ComparisonSection from '@/components/ComparisonSection';
import EducationSection from '@/components/EducationSection';
import CatalogSection from '@/components/CatalogSection';
import EliteCTASection from '@/components/EliteCTASection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    // CAMBIO CLAVE AQUÍ: Cambiamos overflow-hidden por overflow-clip
    <main className="relative min-h-screen overflow-clip selection:bg-[#c8695d] selection:text-white">
      <BackgroundBlobs />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Navbar />
          <Hero />
        </div>
        <Features />
        <DilemmaSection />
        <ControlCenterSection />
        <HowItWorksSection />
        <QuizSection />
        <ComparisonSection />
        <EducationSection />
        <CatalogSection />
        <EliteCTASection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  );
}