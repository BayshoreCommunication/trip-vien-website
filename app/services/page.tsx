import PracticeAreasSection from "components/home/PracticeAreasSection";
import RequestConsultation from "components/home/RequestConsultation";
import Breadcrumb from "components/share/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        src=""
        title="Our Practice Areas  "
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <PracticeAreasSection />
      <RequestConsultation />
    </div>
  );
};

export default page;
