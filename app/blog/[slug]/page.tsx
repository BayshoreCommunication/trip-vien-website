import Breadcrumb from "@/components/share/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        title="Legal Insights Grounded in Strategy and Experience"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
      />
    </div>
  );
};

export default page;
