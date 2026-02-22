import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SectionDivider from "@/components/SectionDivider";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <WhyUs />
      <Stats />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
