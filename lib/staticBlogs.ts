export type StaticBlog = {
  title: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
  featuredImage: {
    image: {
      url: string;
      alt?: string;
      title?: string;
      description?: string;
      caption?: string;
    };
  };
};

export const staticBlogs: StaticBlog[] = [
  {
    title: "DUI Checkpoints in Florida: Are They Legal and Can You Avoid Them?",
    slug: "are-they-legal-and-can-you-avoid-them",
    createdAt: "2026-06-07T00:00:00.000Z",
    excerpt:
      "Yes, DUI checkpoints are legal in Florida, but police must follow strict rules. Learn what drivers can legally do and what checkpoint mistakes can support a DUI defense.",
    metaTitle: "DUI Checkpoints in Florida: Are They Legal?",
    metaDescription:
      "Yes, DUI checkpoints are legal in Florida, but police must follow strict rules. Learn what drivers can legally do and what checkpoint mistakes can support a DUI defense.",
    canonical:
      "https://www.tripvienlaw.com/blog/are-they-legal-and-can-you-avoid-them",
    featuredImage: {
      image: {
        url: "/images/static-blogs/florida-dui-checkpoints-legal-rights-guide.webp",
        alt: "Florida DUI checkpoint at night with police vehicles, traffic cones, and drivers approaching a sobriety checkpoint.",
        title: "DUI Checkpoints in Florida: Your Rights and Legal Options",
        description:
          "Legal information graphic explaining DUI checkpoints in Florida and the rights of motorists during sobriety stops.",
        caption:
          "Learn how DUI checkpoints operate in Florida, what rights drivers have during sobriety stops, and the legal considerations surrounding checkpoint enforcement.",
      },
    },
  },
  {
    title: "Who Is Liable in a Slip and Fall Accident in Florida?",
    slug: "slip-and-fall-accident",
    createdAt: "2026-05-10T00:00:00.000Z",
    excerpt:
      "Understand property owner responsibility under Florida premises liability law, including business invitee protections, constructive knowledge, and filing deadlines.",
    featuredImage: {
      image: {
        url: "/images/static-blogs/florida-slip-fall-property-owner-liability.webp",
        alt: "Slip and fall warning sign on a Florida property walkway",
        title: "Florida Slip and Fall Property Owner Liability",
        description:
          "Slip and fall accident scene highlighting Florida premises liability and property owner responsibility.",
        caption:
          "Florida slip and fall premises liability and property owner responsibility",
      },
    },
  },
  {
    title: "What Evidence Strengthens Your Car Accident Case the Most?",
    slug: "what-evidence-strengthens-your-car-accident-case-the-most",
    createdAt: "2026-05-22T00:00:00.000Z",
    excerpt:
      "Discover the key evidence that strengthens a car accident case, including police reports, medical records, photos, and expert insights that help prove fault and damages.",
    metaTitle: "What Evidence Strengthens Your Car Accident Case",
    metaDescription:
      "Discover the key evidence that strengthens a car accident case, including police reports, medical records, photos, and expert insights that help prove fault and damages.",
    canonical:
      "https://www.tripvienlaw.com/blog/what-evidence-strengthens-your-car-accident-case-the-most",
    featuredImage: {
      image: {
        url: "/images/static-blogs/car-accident-evidence-documentation-scene.webp",
        alt: "Documenting car accident evidence with vehicle damage, police report, and injury records at scene",
        title: "Car Accident Evidence Documentation and Injury Claim Support",
        description:
          "Detailed car accident scene showing vehicle damage, police investigation, medical records, and photo evidence used to strengthen personal injury and insurance compensation claims.",
        caption:
          "Collecting photos, police reports, and medical records to support a strong car accident injury case.",
      },
    },
  },
  {
    title: "Rear-End Collision Liability: Who Is at Fault and Why It Matters",
    slug: "rear-end-collision-liability",
    createdAt: "2026-05-22T01:00:00.000Z",
    excerpt:
      "Was the rear-end crash really your fault? Insurance adjusters often rely on bias. Examine the hidden evidence that flips liability and protects your claim.",
    metaTitle: "Who Is at Fault in Rear-End Collision",
    metaDescription:
      "Was the rear-end crash really your fault? Insurance adjusters often rely on bias. Examine the hidden evidence that flips liability and protects your claim.",
    canonical: "https://www.tripvienlaw.com/blog/rear-end-collision-liability",
    featuredImage: {
      image: {
        url: "/images/static-blogs/rear-end-collision-liability-investigation-scene.webp",
        alt: "Police officer documenting rear-end collision while injured passenger sits near damaged vehicles",
        title: "Rear-End Collision Liability and Accident Investigation Scene",
        description:
          "Rear-end car accident scene with police investigation, damaged vehicles, and injured individuals documenting evidence for insurance and personal injury liability claims.",
        caption:
          "Police documenting a rear-end collision accident while drivers and injured passengers assess the scene.",
      },
    },
  },
  {
    title: "Proving Employer Negligence in Workplace Injury Cases",
    slug: "proving-employer-negligence-in-workplace-injury-cases",
    createdAt: "2026-05-22T02:00:00.000Z",
    excerpt:
      "Review the steps to prove employer fault after an injury. Gather documents, analyze conditions, and build a strong legal case.",
    metaTitle: "How to Prove Employer Negligence in Work Injuries",
    metaDescription:
      "Review the steps to prove employer fault after an injury. Gather documents, analyze conditions, and build a strong legal case.",
    canonical:
      "https://www.tripvienlaw.com/blog/proving-employer-negligence-in-workplace-injury-cases",
    featuredImage: {
      image: {
        url: "/images/static-blogs/workplace-injury-employer-negligence-consultation.webp",
        alt: "Workplace injury victim consulting attorney about employer negligence and OSHA safety violations",
        title: "Employer Negligence Consultation for Workplace Injury Claims",
        description:
          "Workplace injury consultation showing an attorney reviewing employer negligence, OSHA violations, and injury evidence for workers' compensation and personal injury claims.",
      },
    },
  },
  {
    title: "Advance Parole Explained: What Immigrants Should Know Before Travel Outside the U.S.",
    slug: "what-immigrants-should-know-before-travel-outside",
    createdAt: "2026-05-14T00:00:00.000Z",
    excerpt:
      "Learn what advance parole is, who needs it, and how to apply before any international travel. Florida immigrants must read this.",
    featuredImage: {
      image: {
        url: "/images/static-blogs/advance-parole-document-us-immigration-travel.webp",
        alt: "Traveler presenting a passport and advance parole document to a CBP officer at airport immigration",
        title: "Advance Parole Travel and U.S. Immigration Processing",
        description:
          "International traveler presenting a passport and advance parole document to a U.S. Customs and Border Protection officer during airport immigration screening and travel authorization verification.",
        caption:
          "Traveler showing advance parole documents during U.S. airport immigration screening",
      },
    },
  },
];

export function getStaticBlogBySlug(slug: string) {
  return staticBlogs.find((blog) => blog.slug === slug);
}

export function sortBlogsByNewest<T extends { createdAt?: string }>(a: T, b: T) {
  const aTime = Date.parse(a.createdAt || "");
  const bTime = Date.parse(b.createdAt || "");

  return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
}
