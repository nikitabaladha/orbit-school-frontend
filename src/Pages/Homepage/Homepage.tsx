import Navbar from "../../components/navbar";
import Hero from "./Hero";
import About from "./About";
import Solutions from "./Solutions";
import WhyChoose from "./WhyChoose";
import Transformation from "./Transformation";
import SuccessStories from "./SuccessStories";
import FinancialImpact from "./FinancialImpact";
import CTASection from "./CTASection";
import Footer from "../../components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Transformation />
      <Solutions />
      <WhyChoose />
      <FinancialImpact />
      <SuccessStories />
      <CTASection />
      <Footer />
    </>
  );
}
