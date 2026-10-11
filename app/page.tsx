import { HeroSection } from "@/components/home/HeroSection";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
