import Image from "next/image";
import { getAllPostData } from "lib/GetPostData";
import Button from "components/shared/Button";
import Sidebar from "components/blogs/Sidebar";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getAllPostData();

  const post = blogPost.data.find((p: any) => p.slug === params.slug);

  if (!post) return null;

  // ✅ MAP DATA INTO SHAPE SIDEBAR EXPECTS
  const blogs = blogPost.data.map((p: any) => ({
    title: p.title,
    slug: p.slug,
  }));
  // console.log("post data:", post);

  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        {/* BLOG CONTENT */}
        <article>
          <div className="relative rounded-xl overflow-hidden mb-10">
            <Image
              src={
                post.featuredImage?.image?.url || "/images/home/blog/img1.png"
              }
              alt={post.title}
              width={1000}
              height={800}
              className="object-cover rounded-xl"
            />
          </div>

          <p className="text-sm text-gray-400 mb-4">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h1 className="text-3xl md:text-4xl xl:text-5xl max-w-5xl mb-6">
            {post.title}
          </h1>

          {/* Excerpt (optional intro) */}
          {post.excerpt && (
            <p className="text-lg text-gray-600 mb-8">{post.excerpt}</p>
          )}

          {/* Full blog body */}
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="mt-10">
            <Button title="Get A Free Consultation" href="/contact" />
          </div>
        </article>

        {/* ✅ SIDEBAR WITH REAL BLOGS */}
        <Sidebar currentSlug={params.slug} blogs={blogs} />
      </div>
    </section>
  );
}
