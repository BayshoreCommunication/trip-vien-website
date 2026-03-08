import Image from "next/image";
import { getAllPostData } from "lib/GetPostData";
import Button from "components/shared/Button";
import Sidebar from "components/blogs/Sidebar";

// HTML formatting CSS (only for this page)
const css = `
article h1, article h2, article h3, article h4 {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

article h1 { font-size: 40px; }
article h2 { font-size: 25px; }

article p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

article ul {
  list-style-type: disc;
  margin-left: 30px;
}

article ol {
  list-style-type: decimal;
  margin-left: 30px;
}

article li {
  margin-bottom: 6px;
}

article img {
  max-width: 100%;
  height: auto;
  margin: 15px 0;
  border-radius: 10px;
}

article table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

article table th,
article table td {
  border: 1px solid #e5e7eb;
  padding: 10px;
}

article blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 16px;
  margin: 16px 0;
  font-style: italic;
}
`;

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getAllPostData();
  const post = blogPost.data.find((p: any) => p.slug === params.slug);

  if (!post) return null;

  const blogs = blogPost.data.map((p: any) => ({
    title: p.title,
    slug: p.slug,
  }));

  return (
    <>
      <style>{css}</style>

      <section className="px-4 py-8 md:py-16">
        <div className="max-w-[1640px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
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

            {post.excerpt && (
              <p className="text-lg text-gray-600 mb-8">{post.excerpt}</p>
            )}

            <div dangerouslySetInnerHTML={{ __html: post.body }} />

            <div className="mt-10">
              <Button title="Get A Free Consultation" href="/contact" />
            </div>
          </article>

          <Sidebar currentSlug={params.slug} blogs={blogs} />
        </div>
      </section>
    </>
  );
}
