import Image from "next/image";

const navy = "#1b2a4a";
const gold = "#b8860b";
const paleGold = "#fdf6e3";
const paleBlue = "#f4f7fb";
const borderBlue = "#d0d7e2";
const red = "#8b0000";

const imageAlt =
  "Immigration attorney consulting a client about T Visa eligibility with a U.S. passport, Form I-914 application, and immigration legal documents.";
const imageTitle = "What Is a T Visa and Who Qualifies for It?";
const imageDescription =
  "Professional immigration law graphic illustrating the T Visa application process and eligibility requirements for victims of human trafficking. The image features an immigration attorney consultation, a U.S. passport, Form I-914 Application for T Nonimmigrant Status, and legal documents, highlighting how experienced immigration lawyers help eligible individuals obtain protection and lawful status in the United States.";
const imageCaption =
  "Learn what a T Visa is, who qualifies for it, and how an experienced immigration attorney can guide eligible trafficking victims through the T Visa application process and legal requirements.";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 font-['Arial'] text-[8px] font-bold uppercase tracking-wide text-[#b8860b]">
      {children}
    </p>
  );
}

function ArticleHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-5 pb-2 font-['Arial'] text-[18px] font-bold leading-tight text-[#1b2a4a]">
      {children}
    </h2>
  );
}

function Paragraph({
  children,
  align = "justify",
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "justify" | "right";
}) {
  const alignClass =
    align === "justify"
      ? "text-justify"
      : align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <p
      className={`pb-2 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555] ${alignClass}`}
    >
      {children}
    </p>
  );
}

function DocLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className="font-['Georgia'] text-[#1155cc] underline"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function BulletList({
  items,
}: {
  items: { strong: string; text: React.ReactNode }[];
}) {
  return (
    <ul className="my-2 ml-8 list-disc space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555] text-justify">
      {items.map((item) => (
        <li key={item.strong}>
          <strong className="text-[#1b2a4a]">{item.strong}</strong>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function AlertBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 border-l-[10px] border-[#b8860b] bg-[#fdf6e3] px-5 py-4 text-left">
      <p className="font-['Arial'] text-[13px] font-bold text-[#1b2a4a]">
        {title}
      </p>
      <div className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">
        {children}
      </div>
    </div>
  );
}

function QuoteBox({
  label,
  accent = navy,
  quote,
  author,
}: {
  label: string;
  accent?: string;
  quote: string;
  author: string;
}) {
  return (
    <>
      <SectionLabel>{label}</SectionLabel>
      <div className="my-3 grid grid-cols-[10px_1fr] text-left">
        <div style={{ backgroundColor: accent }} />
        <div className="bg-[#fdf6e3] px-5 py-4">
          <p className="font-['Georgia'] text-[15px] italic leading-[1.45] text-[#1b2a4a] text-justify">
            &quot;{quote}&quot;
          </p>
          <p className="mt-2 font-['Arial'] text-[12px] font-bold text-[#555555]">
            - {author}
          </p>
        </div>
      </div>
    </>
  );
}

function Divider({ goldLine = false }: { goldLine?: boolean }) {
  return (
    <div
      className="my-6 h-px w-full"
      style={{ backgroundColor: goldLine ? gold : borderBlue }}
    />
  );
}

function MetricCard({
  value,
  label,
  dark = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className="border-b border-[#d0d7e2] px-3 py-4 text-center md:border-b-0 md:border-r last:md:border-r-0"
      style={{ backgroundColor: dark ? navy : paleBlue }}
    >
      <p
        className="font-['Arial'] text-[24px] font-bold"
        style={{ color: dark ? gold : navy }}
      >
        {value}
      </p>
      <p
        className="mt-1 font-['Arial'] text-[11px]"
        style={{ color: dark ? "#b0c4de" : "#555555" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function WhatIsATVisaAndWhoQualifiesForItBlog() {
  const keyPoints = [
    {
      strong: "Open to both sex trafficking and labor trafficking survivors, ",
      text: "including U.S. citizens' family members",
    },
    {
      strong: "Caps out at 5,000 principal visas per year, ",
      text: "a limit that has never actually been hit",
    },
    {
      strong: "Cooperation with police is usually required, ",
      text: "but minors and trauma survivors are exempt",
    },
    {
      strong: "Interim work permits now arrive faster ",
      text: "through the 2024 bona fide determination process",
    },
    {
      strong: "Leads to permanent residency ",
      text: "after three years in T status, sometimes sooner",
    },
  ];

  const benefitsRows = [
    [
      "Status duration",
      "Up to 4 years, extendable in qualifying circumstances",
    ],
    [
      "Work authorization",
      "EAD issued automatically to approved T-1 principals",
    ],
    [
      "Family protection",
      "Derivative status for spouse, children, and select relatives",
    ],
    ["Federal benefits", "Access to certain public benefits same as refugees"],
    ["Path to green card", "Eligible after 3 years of continuous T status"],
  ];

  const mythsRows = [
    [
      "You must report to police before applying.",
      "Cooperation helps, but minors and trauma survivors are exempt by law.",
    ],
    [
      "Only foreign nationals smuggled into the U.S. qualify.",
      "U.S. citizens can be trafficking victims too, just not T visa applicants themselves.",
    ],
    [
      "A criminal record automatically disqualifies you.",
      "Waivers exist, and new relief now addresses trafficking-related records.",
    ],
    [
      "T visas are nearly impossible to win.",
      "Approval rates run between 55 and 65 percent with solid documentation.",
    ],
  ];

  const faqs = [
    [
      "Will my trafficker find out that I applied for a T visa?",
      "Absolute Confidentiality. Under federal law (specifically 8 U.S.C. Section 1367), USCIS is strictly prohibited from telling anyone that you have applied for humanitarian relief.",
    ],
    [
      "What exactly counts as \"extreme hardship\" to qualify?",
      "USCIS looks for a total lack of medical or mental health care in your home country to treat the trauma of trafficking. They also look at a realistic threat of retaliation from the traffickers back home, or having no family or support system left to return to.",
    ],
    [
      "Can I travel outside the US if my T visa is approved?",
      "You can. However, you must be incredibly careful. To leave the country and return safely, you have to apply for and receive “Advance Parole” (travel permission) before you step foot on a plane.",
    ],
    [
      "Can people with T visas apply for federal financial aid (FAFSA) for higher education?",
      "They can, indeed. Because federal law provides T visa holders with access to the same public benefits as refugees, you are an \"eligible noncitizen.”",
    ],
    [
      "If someone broke immigration laws before, are they still eligible?",
      "Often yes. T visas come with broad waiver options for inadmissibility that other visa categories don't offer.",
    ],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Is a T Visa and Who Qualifies for It?",
    description:
      "T Visa eligibility completely bypasses law enforcement for minors and trauma survivors, unlocking 4 years of legal status. See the 5 rules to qualify.",
    image:
      "https://www.tripvienlaw.com/images/static-blogs/t-visa-eligibility-and-qualification-guide.webp",
    url: "https://www.tripvienlaw.com/blog/what-is-a-t-visa-and-who-qualifies-for-it",
    publisher: {
      "@type": "Organization",
      name: "TripVien Law",
      url: "https://www.tripvienlaw.com",
    },
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <article className="text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[760px]">
        <figure className="mb-10">
          <div className="w-full overflow-hidden">
            <Image
              src="/images/static-blogs/t-visa-eligibility-and-qualification-guide.webp"
              alt={imageAlt}
              title={imageTitle}
              aria-describedby="t-visa-image-description"
              width={750}
              height={383}
              priority
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 760px"
            />
          </div>
          <figcaption className="mt-2 font-['Arial'] text-[10px] italic leading-[1.4] text-[#777777]">
            {imageCaption}
          </figcaption>
          <p id="t-visa-image-description" className="sr-only">
            {imageDescription}
          </p>
        </figure>

        <section
          className="px-5 py-8 text-center sm:px-8"
          style={{ backgroundColor: navy }}
        >
          <p className="mb-2 font-['Arial'] text-[12px] font-bold uppercase tracking-wide text-[#b8860b]">
            TripVien Law | Immigration
          </p>
          <h1 className="mx-auto max-w-[640px] font-['Arial'] text-[26px] font-bold leading-tight text-white md:text-[28px]">
            What Is a T Visa and Who Qualifies for It?
          </h1>
          <p className="mt-3 font-['Georgia'] text-[15px] italic text-[#b0c4de]">
            TripVien Law, P.A. | Published: July 21, 2026 | Updated:
            July 21, 2026
          </p>
        </section>

        <section
          className="mt-6 border px-4 py-3"
          style={{ borderColor: navy, backgroundColor: paleBlue }}
        >
          <h2 className="mb-2 font-['Arial'] text-[12px] font-bold text-[#1b2a4a]">
            Quick Answer
          </h2>
          <Paragraph align="justify">
            A T visa is a federal immigration status for victims of trafficking
            who have been brought to the United States by the trafficking. It
            provides as much as four years of legal status, work authorization
            and a path to a green card. Often without requiring a referral from
            an attorney or law enforcement.
          </Paragraph>
        </section>

        <section className="mt-5">
          <h2 className="font-['Arial'] text-[12px] font-bold text-[#1b2a4a]">
            Key Points
          </h2>
          <BulletList items={keyPoints} />
        </section>

        <Divider />

        <ArticleHeading>
          1. Federal Law Draws a Hard Line on What Counts as Trafficking
        </ArticleHeading>
        <Paragraph align="justify">
          Look, human trafficking isn't some vague, blurry concept. The federal
          government splits it right down the middle into two distinct
          categories: sex trafficking and labor trafficking. Sex trafficking
          means a person was brought in, hidden away, or moved around for
          commercial acts using force, fraud, or outright coercion. And if
          someone is under 18, consent doesn't even enter the equation. It's
          trafficking plain and simple. Labor trafficking is about forcing
          people to work through threats, trickery and debt or physical walls.
        </Paragraph>
        <Paragraph align="justify">
          Down here in the Sunshine State, we look at it the exact same way.{" "}
          <DocLink href="https://www.flsenate.gov/Laws/Statutes/2023/787.06">
            Florida Statute 787.06
          </DocLink>{" "}
          treats trafficking for labor or sex as a massive first degree felony.
          Now, state prosecutors and federal immigration folks might not always
          be sitting at the same table on every single case, but the facts of
          what happened? They overlap. And that overlap is exactly what{" "}
          <DocLink href="/practice-areas/immigration/t-visa">
            a good T visa attorney
          </DocLink>{" "}
          looks for to build a rock solid federal application.
        </Paragraph>

        <AlertBox title="Please, Don't Wait for a Police Report to Start Your Journey">
          Talk to someone who knows the law before you decide if calling the
          police is the right step for your life.
        </AlertBox>

        <Paragraph align="justify">
          For a moment, let's shed some light on debt bondage, as many people
          are unaware that they are experiencing it. A bad actor steps up and
          pays for your travel, your room or your food and then they keep adding
          numbers to the ledger so the debt never goes away. That’s labor
          trafficking under federal law, full stop. No one ever has to raise a
          hand or throw a punch for it to be a crime.
        </Paragraph>

        <ArticleHeading>2. Who Actually Qualifies for a T Visa?</ArticleHeading>
        <Paragraph align="justify">
          USCIS applies five requirements, and an applicant has to clear every
          one of them. Skip a single element and the petition gets denied, which
          is exactly why self-filing a T visa case is a bad idea.
        </Paragraph>

        <div className="my-5 bg-[#f4f7fb] border border-[#d0d7e2] px-5 py-4">
          <p className="mb-2 font-['Arial'] text-[13px] font-bold text-[#1b2a4a]">
            T VISA ELIGIBILITY CHECKLIST
          </p>
          <ul className="list-disc ml-5 space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555] text-justify">
            <li>
              You survived sex trafficking or labor trafficking as defined under
              federal law
            </li>
            <li>
              You are physically present in the U.S. because of that trafficking
            </li>
            <li>
              You cooperated with reasonable law enforcement requests, or qualify
              for an exception
            </li>
            <li>
              Removal from the U.S. would cause you extreme and unusual hardship
            </li>
            <li>
              You are admissible to the U.S., or eligible for a waiver of
              inadmissibility
            </li>
          </ul>
        </div>

        <Paragraph align="justify">
          Family members count too. A T-1 principal applicant can bring a
          spouse, unmarried children under 21, and in some cases parents and
          siblings along as derivatives. None of those family slots count
          against the federal cap, which is one reason the T visa program has
          never actually run out of room.
        </Paragraph>

        <ArticleHeading>
          3. Florida Sees More of This Struggle Than Just About Anywhere Else
        </ArticleHeading>
        <Paragraph align="justify">
          It breaks your heart to say it, but Florida ranks third in the entire
          nation for calls made to the{" "}
          <DocLink href="https://humantraffickinghotline.org/en/statistics/florida">
            National Human Trafficking Hotline
          </DocLink>
          , sitting right behind California and Texas. Think about it, our
          beautiful tourist spots, thousands of miles of coastline and the
          regular arrival of seasonal workers for our fields and hotels create
          the exact kind of shadows that traffickers love to operate in.{" "}
          <DocLink href="https://legalclarity.org/florida-human-trafficking-statistics-by-county/">
            Florida's own data on county-level reporting
          </DocLink>{" "}
          shows the highest concentrations in South Florida and the I-4
          corridor, the same stretch where our Lakeland office sits.
        </Paragraph>

        <SectionLabel>By The Numbers</SectionLabel>
        <section className="mt-3 grid grid-cols-1 border border-[#d0d7e2] md:grid-cols-3">
          <MetricCard
            value="3rd"
            label="Florida's national rank for trafficking hotline calls"
          />
          <MetricCard
            value="74%"
            label="of certified T-1 cases involve labor trafficking"
            dark
          />
          <MetricCard
            value="5,000"
            label="T visa cap per year, never once reached"
          />
        </section>

        <Paragraph align="justify">
          Labor trafficking gets overlooked in the public conversation, but it
          dominates the certified case data. USCIS reports labor trafficking as
          the identified form in 74 percent of T-1 cases that included a law
          law enforcement declaration. It’s something we see every year in the
          citrus groves, hotel lobbies, busy construction sites and behind the
          locked doors of domestic work.
        </Paragraph>

        <ArticleHeading>
          4. How Long Can the T Visa Process Take in 2026?
        </ArticleHeading>
        <Paragraph align="justify">
          Let’s share some genuinely good news. Filing Form I-914 doesn't mean
          your whole life has to sit on a shelf for years anymore. As we stand
          here in May 2026, it takes{" "}
          <DocLink href="https://manifestlaw.com/blog/t-visa-processing-time/">
            USCIS about 29.5 months
          </DocLink>{" "}
          to hand down what they call a &quot;bona fide determination.&quot;
          That’s the golden milestone that grants you deferred action and a
          real work permit while they finish looking at your full case. That’s
          all thanks to a big federal rule change back in 2024 and it’s easily
          the finest upgrade this program has seen in a long, long time.
        </Paragraph>
        <Paragraph align="justify">
          Full adjudication of the underlying I-914 still runs another two to
          three years on top of that. There is no premium processing option for
          T visas, so paying extra will not speed anything up. What actually
          moves the needle is filing a complete package the first time, since a
          Request for Evidence resets the clock and adds months nobody has to
          spare.
        </Paragraph>

        <QuoteBox
          label="Survivor Insight"
          quote="Survivors come to us assuming they already missed their window because they never called police. In most of these cases, that assumption is wrong, and it costs people months they did not need to lose."
          author="Viengphone Vongsyprasom, Tripathi Vongsyprasom Law, P.A."
        />

        <section
          className="my-6 px-5 py-6 text-center sm:px-8"
          style={{ backgroundColor: navy }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Trafficking Cases Are Time-Sensitive and Evidence-Heavy
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-['Georgia'] text-[14px] leading-[1.45] text-[#b0c4de]">
            Our immigration team builds T visa petitions designed to clear USCIS
            the first time.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Schedule a Free Consultation &gt;&gt;
          </a>
        </section>

        <ArticleHeading>
          5. The Benefits Go Well Beyond a Work Permit
        </ArticleHeading>
        <Paragraph align="justify">
          A T visa is not just paperwork that keeps someone from being removed.
          It rebuilds an entire legal life from a position that was deliberately
          stripped of options.
        </Paragraph>

        <section className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-['Arial'] text-[12px]">
            <thead>
              <tr className="text-white" style={{ backgroundColor: navy }}>
                <th className="px-2 py-2 text-left">Benefit</th>
                <th className="px-2 py-2 text-left">What It Means</th>
              </tr>
            </thead>
            <tbody>
              {benefitsRows.map(([benefit, meaning], index) => (
                <tr
                  key={benefit}
                  style={{
                    backgroundColor: index % 2 === 0 ? paleBlue : "#ffffff",
                  }}
                >
                  <td className="border border-white px-2 py-3 font-bold text-[#1b2a4a]">
                    {benefit}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555] text-justify">
                    {meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <Paragraph align="justify">
          There is also relief that survivors rarely know to ask about. The
          federal{" "}
          <DocLink href="https://www.asistahelp.org/resource-library/t-visas">
            Trafficking Survivors' Relief Act of 2026
          </DocLink>{" "}
          now lets survivors clear federal criminal records that came directly
          from their exploitation, records that traffickers often force victims
          to accumulate. There’s no reason that someone should be stuck in the
          system because of a criminal history related to trafficking.
        </Paragraph>

        <ArticleHeading>
          6. What If You Can't Cooperate With the Police?
        </ArticleHeading>
        <Paragraph align="justify">
          This stops more survivors from applying than anything else. Plenty of
          people assume no police report means no case. That is false, and the
          exceptions exist for good reason.
        </Paragraph>

        <section className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-['Arial'] text-[12px]">
            <thead>
              <tr className="text-white" style={{ backgroundColor: navy }}>
                <th className="px-2 py-2 text-left">MYTH</th>
                <th className="px-2 py-2 text-left">FACT</th>
              </tr>
            </thead>
            <tbody>
              {mythsRows.map(([myth, fact], index) => (
                <tr
                  key={myth}
                  style={{
                    backgroundColor: index % 2 === 0 ? paleBlue : "#ffffff",
                  }}
                >
                  <td className="border border-white px-2 py-3 font-bold text-[#1b2a4a]">
                    {myth}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555] text-justify">
                    {fact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section
          className="my-6 px-5 py-6 text-center sm:px-8"
          style={{ backgroundColor: red }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            You Don't Have to Untangle This Alone
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
            Tripathi Vongsyprasom Law, P.A. represents trafficking survivors
            across Florida with confidentiality and direct, federal-level
            experience.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Get Your Free Case Review &gt;&gt;
          </a>
        </section>

        <Divider />

        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <h2 className="pb-2 font-['Arial'] text-[18px] font-bold text-[#1b2a4a]">
          FAQs About T Visa Eligibility and Qualification
        </h2>
        <section className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <div key={index} className="bg-[#f4f7fb] px-4 py-3">
              <h3 className="font-['Arial'] text-[13px] font-bold text-[#1b2a4a] text-justify">
                Q: {question}
              </h3>
              <div className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555] text-justify">
                {typeof answer === "string" ? (
                  `A: ${answer}`
                ) : (
                  <>A: {answer}</>
                )}
              </div>
            </div>
          ))}
        </section>

        <Divider />

        <p className="mt-5 font-['Arial'] text-[10px] italic leading-[1.4] text-[#999999]">
          Disclaimer: This blog post is for informational purposes only and does
          not constitute legal advice. For specific guidance on your case,
          please consult with a licensed attorney.
        </p>
      </div>
    </article>
  );
}
