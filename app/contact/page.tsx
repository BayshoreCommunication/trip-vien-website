import ContactSection from "components/contact/ContactSection";
import FaqSection from "components/home/FaqSection";
import Breadcrumb from "components/share/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        src=""
        title="Connect With Our Legal Team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection />
      <FaqSection />
    </div>
  );
};

export default page;
