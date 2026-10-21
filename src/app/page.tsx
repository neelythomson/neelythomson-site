import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situation from "@/components/Situation";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import Engine from "@/components/Engine";
import Packages from "@/components/Packages";
import Phases from "@/components/Phases";
import Keeps from "@/components/Keeps";
import Regulated from "@/components/Regulated";
import Fit from "@/components/Fit";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Regulated />
        <Situation />
        <WhoIWorkWith />
        <Engine />
        <Packages />
        <Phases />
        <Keeps />
        <Fit />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
