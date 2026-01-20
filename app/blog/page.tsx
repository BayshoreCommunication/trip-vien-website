import BlogsSection from "@/components/blogs/BlogsSection";
import Breadcrumb from "@/components/share/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        title="Legal Insights Grounded in Strategy and Experience"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <BlogsSection />
    </div>
  );
};

export default page;
