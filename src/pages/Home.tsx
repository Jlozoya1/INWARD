import Header from "../components/header";
import HeroSection from "../components/home/heroSection";
import AboutSection from "../components/home/aboutUsSection";
import ServicesSection from "../components/home/servicesSection";
import ContactInfo from "../components/home/contactoInfo";
import Footer from "../components/footer";
import WhyInwardSection from "../components/home/whyInwardSection";
export default function Home() {
  return (
    <>
      <div className="bg-[#161617] min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyInwardSection />
        <ContactInfo />
        <Footer />
      </div>
    </>
  );
}
