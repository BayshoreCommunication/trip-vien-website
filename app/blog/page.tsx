import { getAllPostData } from "lib/GetPostData";

import BlogsSection from 'components/blogs/BlogsSection';

export default async function BlogPage() {
  const blogPostData = await getAllPostData();

  // console.log("BLOGS FROM API:", blogs); // ✅ check terminal

  return <BlogsSection blogPost={blogPostData} />;
}
