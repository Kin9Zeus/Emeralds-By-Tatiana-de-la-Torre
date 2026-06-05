import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import Commitment from "@/components/sections/Commitment";
import QualitySlider from "@/components/sections/QualitySlider";
import EnhancementGrades from "@/components/sections/EnhancementGrades";
import EmeraldColors from "@/components/sections/EmeraldColors";
import OilTreatment from "@/components/sections/OilTreatment";
import Origin from "@/components/sections/Origin";
import Trust from "@/components/sections/Trust";
import Promise from "@/components/sections/Promise";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Commitment />
        <QualitySlider />
        <EnhancementGrades />
        <EmeraldColors />
        <OilTreatment />
        <Origin />
        <Trust />
        <Promise />
      </main>
      <Footer />
    </>
  );
}
