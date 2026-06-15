import { Box } from "@mui/material";

import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import FeaturesSection from "../components/home/FeaturesSection";
import WealthJourneySection from "../components/home/WealthJourneySection";
import WisdomSection from "../components/home/WisdomSection";
import InvestmentSection from "../components/home/InvestmentSection";
import InspirationSection from "../components/home/InspirationSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <WealthJourneySection />
      <WisdomSection />
      <InvestmentSection />
      <InspirationSection />
      <CTASection />
      <WisdomSection />
      <Footer />
    </Box>
    
  );
}