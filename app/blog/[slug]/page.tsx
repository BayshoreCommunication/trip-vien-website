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
  const post = blogPost.data.find(
    (p: any) => p.slug === params.slug
  );

  if (!post) return null;

  return (
    <section className="px-4 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

        <article>
          <div className="relative h-[420px] rounded-xl overflow-hidden mb-10">
            <Image
              src={
                post.featuredImage?.image?.url ||
                "/images/home/blog/img1.png"
              }
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 mb-4">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-serif mb-6">
            {post.title}
          </h1>

          <div className="prose max-w-none text-gray-700">
            {post.excerpt}
          </div>

          <div className="mt-10">
            <Button
              title="Get A Free Consultation"
              href="/contact"
            />
          </div>
        </article>

        <Sidebar currentSlug={params.slug} />
      </div>
    </section>
  );
}
