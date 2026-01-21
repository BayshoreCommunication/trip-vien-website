import AboutSection from "components/about/AboutSection";
import Breadcrumb from "components/share/Breadcrumb";
import React from "react";

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
