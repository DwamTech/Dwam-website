import styles from "./page.module.css";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/sections/SolutionsSection";
import GraphicDesignSection from "@/components/sections/GraphicDesignSection";
import MultimediaSection from "@/components/sections/MultimediaSection";
import AISection from "@/components/sections/AISection";
import ContentCreationSection from "@/components/sections/ContentCreationSection";
import CloudHostingSection from "@/components/sections/CloudHostingSection";
import DigitalMarketingSection from "@/components/sections/DigitalMarketingSection";
import EdTechSection from "@/components/sections/EdTechSection";
import DigitalTransformationSection from "@/components/sections/DigitalTransformationSection";
import TechConsultingSection from "@/components/sections/TechConsultingSection";
import TrainingCoursesSection from "@/components/sections/TrainingCoursesSection";
import DwamProductsSection from "@/components/sections/DwamProductsSection";
import DwamStoreSection from "@/components/sections/DwamStoreSection";
import DwamMagazineSection from "@/components/sections/DwamMagazineSection";
import InternationalAgentsSection from "@/components/sections/InternationalAgentsSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import CTASection from "@/components/CTASection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import SimpleFooter from "@/components/SimpleFooter";
import InquiryBanner from "@/components/InquiryBanner";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  return (
    <div className={styles.app}>
      <Hero />
      <div className={styles.snapContainer}>
        <AboutUsSection />
        <SolutionsSection />
        <InquiryBanner />
        <GraphicDesignSection />
        <InquiryBanner />
        <MultimediaSection />
        <InquiryBanner />
        <AISection />
        <InquiryBanner />
        <ContentCreationSection />
        <InquiryBanner />
        <CloudHostingSection />
        <InquiryBanner />
        <DigitalMarketingSection />
        <InquiryBanner />
        <EdTechSection />
        <InquiryBanner />
        <TechConsultingSection />
        <InquiryBanner />
        <TrainingCoursesSection />
        <InquiryBanner />
        <DwamProductsSection />
        <InquiryBanner />
        <DwamStoreSection />
        <InquiryBanner />
        <InternationalAgentsSection />
        <InquiryBanner />
        <PartnersSection />
        <InquiryBanner />
        <LocationSection />
        <ContactUsSection />
        <SocialMediaSection />
        <CTASection />
        <SimpleFooter />
      </div>
    </div>
  );
}
