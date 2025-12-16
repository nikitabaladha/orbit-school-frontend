import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import Solutions from "../Homepage/Solutions";
import DetailedSolutions from "./DetailedSolutions";

export default function ComprehensiveSolutions() {
  return (
    <>
        <Navbar />
        <Solutions />
        <DetailedSolutions />
        <Footer />
    </>
  );
}
