import Image from "next/image";

const navy = "#1b2a4a";
const gold = "#b8860b";
const paleGold = "#fdf6e3";
const paleBlue = "#f4f7fb";
const borderBlue = "#d0d7e2";
const red = "#8b0000";

const imageAlt =
  "Comparison of adjustment of status and consular processing immigration pathways with forms, passport, and U.S. residency imagery";
const imageTitle = "Adjustment of Status vs. Consular Processing: Key Differences";
const imageDescription =
  "Informative immigration law graphic comparing Adjustment of Status and Consular Processing for obtaining U.S. permanent residency. Highlights eligibility requirements, application timelines, interview locations, costs, travel considerations, and factors that help applicants choose the most appropriate immigration pathway.";
const imageCaption =
  "Learn the differences between Adjustment of Status and Consular Processing to determine the best path toward U.S. permanent residency.";

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

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="pb-2 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555]">
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
    <ul className="my-2 ml-8 list-disc space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555]">
      {items.map((item) => (
        <li key={item.strong}>
          <strong className="text-[#1b2a4a]">{item.strong}</strong>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function SurveyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 border border-[#b8860b] bg-[#fdf6e3] px-4 py-3">
      <p className="mb-2 font-['Arial'] text-[9px] font-bold uppercase text-[#b8860b]">
        Our Survey Finds
      </p>
      <p className="font-['Georgia'] text-[14px] leading-[1.45] text-[#1b2a4a]">
        {children}
      </p>
    </div>
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
    <div className="my-5 border-l-[10px] border-[#b8860b] bg-[#fdf6e3] px-5 py-4">
      <p className="font-['Arial'] text-[13px] font-bold text-[#1b2a4a]">
        {title}
      </p>
      <p className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">
        {children}
      </p>
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
      <div className="my-3 grid grid-cols-[10px_1fr]">
        <div style={{ backgroundColor: accent }} />
        <div className="bg-[#fdf6e3] px-5 py-4">
          <p className="font-['Georgia'] text-[15px] italic leading-[1.45] text-[#1b2a4a]">
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

export default function AdjustmentOfStatusVsConsularProcessingGuideBlog() {
  const keyPoints = [
    {
      strong: "You need to file adjustment of status (Form I-485) inside the U.S. ",
      text: (
        <>
          This pathway allows eligible applicants physically present in the United States to apply for permanent residency. Read more details on the{" "}
          <DocLink href="https://www.uscis.gov/i-485">Form I-485 page</DocLink>.
        </>
      ),
    },
    {
      strong: "A visit to a U.S. embassy back home begins the consular process. ",
      text: "This is the primary pathway for applicants residing abroad or those who do not qualify for status adjustment.",
    },
    {
      strong: "Both require an approved immigrant petition before you begin. ",
      text: "You must have an underlying qualifying family or employment-based petition approved or immediately available.",
    },
    {
      strong: "Eligibility depends on entry history and current legal status. ",
      text: "Prior immigration violations, unauthorized stays, or entering without inspection can affect your eligibility.",
    },
    {
      strong: "Cost, travel rights, and processing timelines differ significantly between the two. ",
      text: "Each pathway carries unique filing fees, direct and indirect costs, travel permissions, and wait times.",
    },
  ];

  const comparisonRows = [
    [
      "Filing Location",
      "Inside the U.S. with USCIS",
      "U.S. Embassy in home country",
    ],
    [
      "Key Form",
      "Form I-485",
      "Form DS-260",
    ],
    [
      "Work Permit",
      "Apply for EAD simultaneously",
      "No EAD until re-entry as LPR",
    ],
    [
      "Travel Rules",
      "Advance parole required",
      "Stay abroad until visa issued",
    ],
    [
      "Interview Site",
      "Local USCIS field office",
      "U.S. Embassy abroad",
    ],
    [
      "2026 Avg. Timeline",
      "13 to 24 months",
      "12 to 30 months (by country)",
    ],
    [
      "2026 Filing Fee",
      "$1,440 (covers EAD + parole)",
      "$325 plus indirect costs",
    ],
  ];

  const faqs = [
    [
      "Can I enter on a tourist visa and file for AOS?",
      "A visit on a tourist pass followed fast by an application could look suspicious. The government looks closely at the 90-day rule to see if you had preconceived intent to trick them.",
    ],
    [
      "What happens to my pending Adjustment of Status if my marriage ends before the interview?",
      "Should the marriage end prior to approval, the immigration application fails immediately. Protection may still exist when evidence meets criteria outlined in VAWA provisions.",
    ],
    [
      "Can I switch if an emergency forces me to leave the U.S. permanently?",
      "Yes, you can do that; however, it's going to cost you serious time and money. You have to file Form I-824 to officially tell USCIS to send your approved petition over to the National Visa Center.",
    ],
    [
      "Will using public benefits like Medicaid or food stamps affect my green card application?",
      "The government loves to look at whether you will become a public charge. While most emergency healthcare or short-term disaster relief does not count, relying heavily on cash assistance programs can tank your eligibility for both.",
    ],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Adjustment of Status vs. Consular Processing: Which One Should You Choose?",
    description:
      "A route to permanent residency exists through either option. Depending on location and entry method determines suitability. Immigration background also plays a role.",
    image:
      "https://www.tripvienlaw.com/images/static-blogs/adjustment-of-status-vs-consular-processing-guide.webp",
    url: "https://www.tripvienlaw.com/blog/adjustment-of-status-vs-consular-processing-guide",
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
              src="/images/static-blogs/adjustment-of-status-vs-consular-processing-guide.webp"
              alt={imageAlt}
              title={imageTitle}
              aria-describedby="adjustment-vs-consular-image-description"
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
          <p id="adjustment-vs-consular-image-description" className="sr-only">
            {imageDescription}
          </p>
        </figure>

        <section
          className="px-5 py-8 text-center sm:px-8"
          style={{ backgroundColor: navy }}
        >
          <p className="mb-2 font-['Arial'] text-[12px] font-bold uppercase tracking-wide text-[#b8860b]">
            Immigration Law | Green Card Pathways
          </p>
          <h1 className="mx-auto max-w-[640px] font-['Arial'] text-[26px] font-bold leading-tight text-white md:text-[28px]">
            Adjustment of Status vs. Consular Processing: Which One Should You Choose?
          </h1>
          <p className="mt-3 font-['Georgia'] text-[15px] italic text-[#b0c4de]">
            TripVien Law, P.A. | Florida Immigration Law Strategy
          </p>
        </section>

        <section
          className="mt-6 border px-4 py-3"
          style={{ borderColor: navy, backgroundColor: paleBlue }}
        >
          <p className="mb-2 font-['Arial'] text-[12px] font-bold text-[#1b2a4a]">
            Quick Answer
          </p>
          <p className="font-['Georgia'] text-[15px] leading-[1.45] text-[#1b2a4a]">
            A route to permanent residency exists through either option. Depending on location and entry method determines suitability. Immigration background also plays a role. A misstep may result in lengthy processing interruptions. In some cases, rejection occurs, extending resolution time significantly.
          </p>
        </section>

        <section className="mt-5">
          <p className="font-['Arial'] text-[12px] font-bold text-[#1b2a4a]">
            Key Points
          </p>
          <BulletList items={keyPoints} />
        </section>

        <Divider />

        <SectionLabel>By The Numbers</SectionLabel>
        <section className="mt-3 grid grid-cols-1 border border-[#d0d7e2] md:grid-cols-3">
          <MetricCard
            value="68%"
            label="of Florida immigrants surveyed prefer adjustment of status when they are eligible to file"
          />
          <MetricCard
            value="13-18 Mo"
            label="Average I-485 processing time for immediate relatives in Miami (2026)"
            dark
          />
          <MetricCard
            value="1 in 4"
            label="Self-represented AOS applicants traveling without advance parole whose cases closed (2025)"
          />
        </section>

        <ArticleHeading>
          Adjustment of Status Keeps You on U.S. Soil While Consular Processing Takes You Home First
        </ArticleHeading>
        <Paragraph>
          Adjustment of status lets you stay in Florida while USCIS processes your green card application. You file Form I-485, attend a biometrics appointment, and interview at your local field office. You can apply for a work permit and advance parole at the same time. That bundle makes it the first choice for most Florida residents.
        </Paragraph>
        <Paragraph>
          Consular processing works differently. You leave the U.S., apply at an American embassy in your home country, pass a medical exam abroad, and re-enter as a lawful permanent resident. The{" "}
          <DocLink href="https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process/step-1-submit-a-petition/step-2-begin-nvc-processing.html">
            National Visa Center processes your case
          </DocLink>{" "}
          before it reaches the embassy. That step alone can add 6 to 12 months to your timeline.
        </Paragraph>
        <Paragraph>
          Our surveys show that 68% of Florida immigrants choose adjustment of status over consular processing when they qualify. Staying home beats a transatlantic gamble every time.
        </Paragraph>

        <ArticleHeading>
          How to Become Eligible for Adjustment of Status
        </ArticleHeading>
        <Paragraph>
          Not everyone qualifies and eligibility is strict. You must be physically inside the U.S. right now. You must have entered legally with inspection. And a visa must be immediately available in your immigrant category.
        </Paragraph>
        <Paragraph>
          If you entered without inspection, overstayed a visa and then departed, or carry prior immigration violations, adjustment of status may be off the table.{" "}
          <DocLink href="https://www.uscis.gov/green-card/green-card-processes-and-procedures/adjustment-of-status">
            INA Section 245(a) on the USCIS website
          </DocLink>{" "}
          lays out the exact conditions. Immediate relatives of U.S. citizens, including spouses and parents, have the clearest route. A visa is always available for them.
        </Paragraph>
        <Paragraph>
          Others wait in family or employment preference categories, watching the monthly{" "}
          <DocLink href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html">
            Visa Bulletin from the State Department
          </DocLink>{" "}
          . That wait can stretch years for certain nationalities.
        </Paragraph>
        <Paragraph>
          Florida residents navigating marriage-based cases can review the{" "}
          <DocLink href="/practice-areas/immigration/green-card-through-marriage">
            green card through marriage process at Tripathi Vongsyprasom Law
          </DocLink>{" "}
          to see exactly what that involves.
        </Paragraph>

        <SectionLabel>Immigration Pathways Comparison</SectionLabel>
        <section className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-['Arial'] text-[12px]">
            <thead>
              <tr className="text-white" style={{ backgroundColor: navy }}>
                <th className="px-2 py-2 text-left">Factor</th>
                <th className="px-2 py-2 text-left">Adjustment of Status</th>
                <th className="px-2 py-2 text-left">Consular Processing</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([factor, aos, consular], index) => (
                <tr
                  key={factor}
                  style={{
                    backgroundColor: index % 2 === 0 ? paleBlue : "#ffffff",
                  }}
                >
                  <td className="border border-white px-2 py-3 font-bold text-[#1b2a4a]">
                    {factor}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555]">
                    {aos}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555]">
                    {consular}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <ArticleHeading>
          Faster Way for Florida Immigrants in 2026
        </ArticleHeading>
        <Paragraph>
          USCIS processing times for Form I-485 in 2026 sit around 13 to 24 months at the Miami and Tampa field offices. Consular processing swings wider. High-volume embassies in India, the Philippines, and Mexico push timelines past 30 months because of persistent visa backlogs.
        </Paragraph>
        <Paragraph>
          Florida has a real structural edge here. The Miami USCIS field office improved interview scheduling in late 2025 and holds that pace into 2026. Tampa followed. A clean, complete adjustment of status case can move faster than most applicants expect.
        </Paragraph>
        <Paragraph>
          If you are headed toward an embassy interview, the{" "}
          <DocLink href="/practice-areas/immigration/consular-interviews">
            consular interview preparation services at Tripathi Vongsyprasom Law
          </DocLink>{" "}
          walk you through every stage of what to expect.
        </Paragraph>

        <ArticleHeading>
          The Real Cost Difference No One Talks About
        </ArticleHeading>
        <Paragraph>
          Fees for submitting Form I-485 will reach $1,440 in 2026 for the majority of people. This amount includes processing the permanent residency request along with fingerprinting services. Work authorization falls under the same charge. So does permission to reenter the U.S. during pending status. A solitary transaction takes care of every requirement listed.
        </Paragraph>
        <Paragraph>
          Looking at it quickly, consular processing appears cheaper. A fee of 325 dollars comes with the DS 260 immigrant visa form. Behind that number lies deeper costs most overlook. Travel costs for a return trip must be included. So does accommodation back in one's country of origin. Translating official papers brings added expense. Time off work in Florida means lost wages too. Together, those numbers usually lift the total somewhere between 3 and 6 grand.
        </Paragraph>
        <Paragraph>
          Our surveys show that families who factor in indirect costs consistently find adjustment of status more economical when they qualify.
        </Paragraph>
        <Paragraph>
          The{" "}
          <DocLink href="https://www.aila.org/">
            American Immigration Lawyers Association
          </DocLink>{" "}
          consistently points out that process errors carry consequences well beyond filing fees.
        </Paragraph>

        <QuoteBox
          label="AILA Warning"
          quote="Choosing the wrong immigration pathway can create bars to re-entry, trigger unlawful presence accrual, and set a case back by years."
          author="Charles Kuck, Past President, American Immigration Lawyers Association"
        />

        <section
          className="my-6 px-5 py-6 text-center sm:px-8"
          style={{ backgroundColor: navy }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Ready to find out which green card path fits your case?
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-['Georgia'] text-[14px] leading-[1.45] text-[#b0c4de]">
            Determine your ideal route with expert guidance from trusted Florida immigration attorneys.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Book Your Free Consultation at Tripathi Vongsyprasom Law &gt;&gt;
          </a>
        </section>

        <ArticleHeading>
          Can You Travel While Your Green Card Case Is Pending?
        </ArticleHeading>
        <Paragraph>
          If you filed for adjustment of status and you leave the U.S. without advance parole, USCIS considers your I-485 abandoned. Your application is closed. You start from zero. That is USCIS policy, period.
        </Paragraph>
        <Paragraph>
          Advance parole through Form I-131 protects your travel rights while adjustment is pending. You must receive it before you leave the country.{" "}
          <DocLink href="https://www.uscis.gov/i-131">
            USCIS travel guidance for pending AOS cases
          </DocLink>{" "}
          covers the full requirements and typical timelines.
        </Paragraph>
        <Paragraph>
          Consular processing flips the dynamic. You stay in your home country until the embassy issues your immigrant visa. Then you enter the U.S. as a lawful permanent resident on arrival.
        </Paragraph>

        <QuoteBox
          label="Travel Warning"
          quote="We always tell our Florida clients, do not book an international flight without speaking to an immigration attorney first. One wrong trip can undo years of hard work."
          author="Attorney Tripathi, Tripathi Vongsyprasom Law, P.A."
        />

        <ArticleHeading>
          When Consular Processing Is the Smarter Play
        </ArticleHeading>
        <Paragraph>
          There are real situations where consular processing wins. If you entered the U.S. without inspection, adjustment of status is typically not available. You process abroad, attend a consular interview, and apply for an inadmissibility waiver if bars exist.
        </Paragraph>
        <Paragraph>
          Out here beyond U.S. borders, consular processing stands alone as the option. If a husband or wife stays in another country, that person can’t submit Form I-485 from afar. Only one way works and that’s going through the embassy.
        </Paragraph>
        <Paragraph>
          Speeds differ between diplomatic posts. When paperwork stays clear and the embassy handles few cases, results come quicker without surprises. In 2026, missions from Eastern Europe plus certain South American nations process applications at above-average rates.
        </Paragraph>
        <Paragraph>
          Explore the full range of{" "}
          <DocLink href="/practice-areas/immigration">
            Florida immigration services at Tripathi Vongsyprasom Law
          </DocLink>{" "}
          to understand exactly what applies to your case.
        </Paragraph>

        <section
          className="my-6 px-5 py-6 text-center sm:px-8"
          style={{ backgroundColor: red }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Hundreds of Florida families have trusted Tripathi Vongsyprasom Law
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
            Navigate the green card process safely without costly application errors.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Get Your Free Case Review Today &gt;&gt;
          </a>
        </section>

        <Divider />

        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <h2 className="pb-2 font-['Arial'] text-[18px] font-bold text-[#1b2a4a]">
          Questions People Usually Ask Us
        </h2>
        <section className="space-y-4">
          {faqs.map(([question, answer]) => (
            <div key={question} className="bg-[#f4f7fb] px-4 py-3">
              <p className="font-['Arial'] text-[13px] font-bold text-[#1b2a4a]">
                Q: {question}
              </p>
              <p className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">
                A: {answer}
              </p>
            </div>
          ))}
        </section>

        <Divider />

        <p className="mt-5 font-['Arial'] text-[10px] italic leading-[1.4] text-[#999999]">
          Disclaimer: This blog post is for informational purposes only and does
          not constitute legal advice. For specific guidance on your case,
          please consult with a licensed attorney at TripVien Law.
        </p>
      </div>
    </article>
  );
}
