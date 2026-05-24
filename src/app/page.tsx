import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Doctors from "@/components/sections/Doctors";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import Appointment from "@/components/sections/Appointment";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main className="flex-1">
        <Hero />
        <Trust />
        <About />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <BeforeAfter />
        <Testimonials />
        <Appointment />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
