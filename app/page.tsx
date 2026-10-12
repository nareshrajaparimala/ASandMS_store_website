import { HeroSection }           from "@/components/home/HeroSection";
import { BrandMarquee }          from "@/components/home/BrandMarquee";
import { ServicesGrid }          from "@/components/home/ServicesGrid";
import { ServiceOptionsSection } from "@/components/home/ServiceOptionsSection";
import { WhyChooseUs }           from "@/components/home/WhyChooseUs";
import { HowItWorks }            from "@/components/home/HowItWorks";
import { PricingSection }        from "@/components/home/PricingSection";
import { ComparisonSection }     from "@/components/home/ComparisonSection";
import { Testimonials }          from "@/components/home/Testimonials";
import { FeedbackSection }       from "@/components/home/FeedbackSection";
import { ServiceAreaSection }    from "@/components/home/ServiceAreaSection";
import { FAQSection }            from "@/components/home/FAQSection";
import { ContactCTA }            from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <ServicesGrid />
      <ServiceOptionsSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <ComparisonSection />
      <Testimonials />
      <FeedbackSection />
      <ServiceAreaSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
