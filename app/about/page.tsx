import AboutSection from "components/about/AboutSection";
import Breadcrumb from "components/share/Breadcrumb";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TripVien Law",
  description: "Learn more about TripVien Law, our mission, values, and experienced legal team dedicated to fighting for you.",
  alternates: {
    canonical: "https://www.tripvienlaw.com/about",
  },
};

const page = () => {
  return (
    <div>
      <Breadcrumb
        // src=" "
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutSection />
    </div>
  );
};

export default page;
