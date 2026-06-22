import ContactSection from "components/contact/ContactSection";
import FaqSection from "components/home/FaqSection";
import Breadcrumb from "components/share/Breadcrumb";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TripVien Law",
  description: "Connect with our legal team for a consultation. We are here to support you with your legal needs.",
  alternates: {
    canonical: "https://www.tripvienlaw.com/contact",
  },
};

const page = () => {
  return (
    <div>
      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Connect With Our Legal Team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection />
      <FaqSection />
    </div>
  );
};

export default page;
