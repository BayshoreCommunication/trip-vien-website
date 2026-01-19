import AboutSection from "@/components/home/AboutSection";
import BookAppointment from "@/components/home/BookAppointment";
import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import PracticeAreasSection from "@/components/home/PracticeAreasSection";
import PracticeBanner from "@/components/home/PracticeBanner";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeBanner />
      <AboutSection />
      <PracticeAreasSection />
      <TestimonialSlider />
      <WhyChooseUs />
      <BookAppointment />
      <FaqSection />
    </>
  );
}
