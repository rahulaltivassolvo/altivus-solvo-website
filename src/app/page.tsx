import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FullStackSection from "@/components/FullStackSection";
import AIDevopsSection from "@/components/AIDevopsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FullStackSection />
      <AIDevopsSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}