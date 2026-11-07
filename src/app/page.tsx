import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situation from "@/components/Situation";
import Engine from "@/components/Engine";
import Compliant from "@/components/Compliant";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Fit from "@/components/Fit";
import About from "@/components/About";
import LatestEssay from "@/components/LatestEssay";
import Contact from "@/components/Contact";
import StickyCta from "@/components/StickyCta";
import SectionViews from "@/components/SectionViews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Situation />
        <Engine />
        <Compliant />
        <Packages />
        <Testimonials />
        <Fit />
        <About />
        <LatestEssay />
        <Contact />
      </main>
      <StickyCta />
      <SectionViews ids={["situation", "engine", "compliant", "packages", "fit", "start"]} />
      <Footer />
    </>
  );
}
