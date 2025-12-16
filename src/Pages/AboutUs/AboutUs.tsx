import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import About from "../Homepage/About";
import OurStory from "./OurStory";
import WhyChoose from "../Homepage/WhyChoose";

export default function AboutUs() {

  return (
    <>
      <Navbar />
        <About />
        <WhyChoose />
        <OurStory />
      <Footer />
    </>
  );
}
