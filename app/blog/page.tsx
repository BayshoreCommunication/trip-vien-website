import { getAllPostData } from "lib/GetPostData";
import BlogsSection from 'components/blogs/BlogsSection';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | TripVien Law",
  description: "Stay informed with the latest legal insights, news, and guides from TripVien Law.",
  alternates: {
    canonical: "https://www.tripvienlaw.com/blog",
  },
};

export default async function BlogPage() {
  const blogPostData = await getAllPostData();

  // console.log("BLOGS FROM API:", blogs); // ✅ check terminal

  return <BlogsSection blogPost={blogPostData} />;
}
