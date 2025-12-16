import { Routes, Route } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import AboutUs from "../Pages/AboutUs/AboutUs"
import ComprehensiveSolutions from "../Pages/Solutions/Solutions"
import SuccessStoriesPage from "../Pages/SuccessStories/SuccessStoriesPage"
import FinancialImpactPage from "../Pages/FinancialImpact/FinancialImpactPage"
import ImplementationPage from "../Pages/Implementation/ImplementationPage"
import BusinessModels from "../Pages/BusinessModels/BusinessModelsPage"

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/solutions" element={<ComprehensiveSolutions />} />
      <Route path="/success-stories" element={<SuccessStoriesPage />} />
      <Route path="/financial-impact" element={<FinancialImpactPage />} />
      <Route path="/implementation" element={<ImplementationPage />} />
      <Route path="/business-models" element={<BusinessModels />} />
      
    </Routes>
  );
}
