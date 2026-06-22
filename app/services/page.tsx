import PracticeAreasSection from "components/home/PracticeAreasSection";
import RequestConsultation from "components/home/RequestConsultation";
import Breadcrumb from "components/share/Breadcrumb";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Practice Areas | TripVien Law",
  description: "Browse our areas of practice, including Personal Injury, Immigration, and DUI Defense.",
  alternates: {
    canonical: "https://www.tripvienlaw.com/services",
  },
};

const page = () => {
  return (
    <div>
      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Our Practice Areas  "
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <PracticeAreasSection />
      <RequestConsultation />
    </div>
  );
};

export default page;
