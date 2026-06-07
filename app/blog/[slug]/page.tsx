import Image from "next/image";
import { getAllPostData } from "lib/GetPostData";
import {
  getStaticBlogBySlug,
  sortBlogsByNewest,
  staticBlogs,
} from "lib/staticBlogs";
import Button from "components/shared/Button";
import Sidebar from "components/blogs/Sidebar";
import DuiCheckpointsInFloridaLegalRightsBlog from "components/static-blogs/blogs/are-they-legal-and-can-you-avoid-them";
import ProvingEmployerNegligenceInWorkplaceInjuryCasesBlog from "components/static-blogs/blogs/proving-employer-negligence-in-workplace-injury-cases";
import RearEndCollisionLiabilityInvestigationSceneBlog from "components/static-blogs/blogs/rear-end-collision-liability-investigation-scene";
import SlipAndFallAccidentBlog from "components/static-blogs/blogs/slip-and-fall-accident";
import WhatEvidenceStrengthensYourCarAccidentCaseTheMostBlog from "components/static-blogs/blogs/what-evidence-strengthens-your-car-accident-case-the-most";
import WhatImmigrantsShouldKnowBeforeTravelOutsideBlog from "components/static-blogs/blogs/what-immigrants-should-know-before-travel-outside";

function StaticBlogArticle({ slug }: { slug: string }) {
  if (slug === "are-they-legal-and-can-you-avoid-them") {
    return <DuiCheckpointsInFloridaLegalRightsBlog />;
  }

  if (slug === "proving-employer-negligence-in-workplace-injury-cases") {
    return <ProvingEmployerNegligenceInWorkplaceInjuryCasesBlog />;
  }

  if (slug === "rear-end-collision-liability") {
    return <RearEndCollisionLiabilityInvestigationSceneBlog />;
  }

  if (slug === "what-evidence-strengthens-your-car-accident-case-the-most") {
    return <WhatEvidenceStrengthensYourCarAccidentCaseTheMostBlog />;
  }

  if (slug === "what-immigrants-should-know-before-travel-outside") {
    return <WhatImmigrantsShouldKnowBeforeTravelOutsideBlog />;
  }

  return <SlipAndFallAccidentBlog />;
}

// ---------- SEO / OG Metadata ----------
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const staticPost = getStaticBlogBySlug(params.slug);

  if (staticPost) {
    const image = staticPost.featuredImage.image;
    const title = staticPost.metaTitle || staticPost.title;
    const description = staticPost.metaDescription || staticPost.excerpt;
    const canonical =
      staticPost.canonical ||
      `https://www.tripvienlaw.com/blog/${staticPost.slug}`;

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "TripVien Law",
        type: "article",
        images: [
          {
            url: image.url,
            width: 1200,
            height: 630,
            alt: image.alt || staticPost.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image.url],
      },
    };
  }

  const blogPost = await getAllPostData();
  const post = blogPost.data.find((p: any) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const description =
    post.excerpt || post.body.replace(/<[^>]+>/g, "").slice(0, 160);

  const image = post.featuredImage?.image?.url || "/images/home/blog/img1.png";

  return {
    title: post.title,
    description: description,

    openGraph: {
      title: post.title,
      description: description,
      url: `https://www.medicalweightlosstampa.com/blog/${post.slug}`,
      siteName: "medicalweightlosstampa.com",
      type: "article",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: [image],
    },
  };
}

// ---------- HTML Styling ----------
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

// ---------- PAGE ----------
export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const staticPost = getStaticBlogBySlug(params.slug);
  const blogPost = await getAllPostData();

  const blogs = [...staticBlogs, ...(blogPost.data || [])]
    .sort(sortBlogsByNewest)
    .map((p: any) => ({
      title: p.title,
      slug: p.slug,
    }));

  if (staticPost) {
    return (
      <section className="bg-[#eeeeee] px-4 py-8 md:py-16">
        <div className="mx-auto max-w-[1640px] bg-white px-6 py-8 shadow-sm md:px-[72px] md:py-[72px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
            <StaticBlogArticle slug={params.slug} />
            <Sidebar currentSlug={params.slug} blogs={blogs} />
          </div>
        </div>
      </section>
    );
  }

  const post = blogPost.data.find((p: any) => p.slug === params.slug);

  if (!post) return null;

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
                className="h-auto w-full object-contain rounded-xl"
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
