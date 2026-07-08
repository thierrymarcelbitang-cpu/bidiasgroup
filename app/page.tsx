import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import FleetSection from "@/components/FleetSection";
import WhyDriveSection from "@/components/WhyDriveSection";
import QuoteAndApplySection from "@/components/QuoteAndApplySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesStrip />
        <FleetSection />
        <WhyDriveSection />
        <QuoteAndApplySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
