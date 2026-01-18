import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import PracticeAreasSection from "@/components/home/PracticeAreasSection";
import PracticeBanner from "@/components/home/PracticeBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeBanner />
      <AboutSection />
      <PracticeAreasSection />
    </>
  );
}
