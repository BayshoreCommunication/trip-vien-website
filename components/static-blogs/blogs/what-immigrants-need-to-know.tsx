import Image from "next/image";

const navy = "#1b2a4a";
const gold = "#b8860b";
const paleGold = "#fdf6e3";
const paleBlue = "#f4f7fb";
const borderBlue = "#d0d7e2";
const red = "#8b0000";

const imageAlt =
  "Courtroom-themed graphic featuring a gavel, scales of justice, and injunction petition explaining injunction hearings in Tampa";
const imageTitle = "Injunction Hearings Explained by a Tampa Defense Attorney";
const imageDescription =
  "Informative legal graphic explaining injunction hearings in Tampa, featuring courtroom symbols such as a gavel, scales of justice, and legal documents. Designed to educate individuals about injunction proceedings, legal rights, court processes, and defense strategies when facing an injunction case.";
const imageCaption =
  "Understand the injunction hearing process, your legal rights, and potential defense options with guidance from an experienced Tampa attorney.";

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

export default function DeportationDefenseOptionsImmigrantsNeedToKnowBlog() {
  const keyPoints = [
    {
      strong: "Defensive asylum can shield you from removal. ",
      text: (
        <>
          If you fear persecution based on race, religion, nationality, political opinion, or membership in a social group, you may file defensively in immigration court. Learn more on the{" "}
          <DocLink href="https://www.congress.gov/crs-product/IN12638">EOIR data compiled by Congress</DocLink>.
        </>
      ),
    },
    {
      strong: "Cancellation of removal offers a path to permanent residency. ",
      text: "Qualified individuals (both LPRs and non-LPRs) who meet residency and character requirements can have their deportations canceled.",
    },
    {
      strong: "Withholding of removal has no one-year filing deadline. ",
      text: "Even if you miss the asylum window, withholding offers critical protection, though it does not lead directly to a green card.",
    },
    {
      strong: "Voluntary departure keeps your future immigration options open. ",
      text: "Leaving the U.S. voluntarily prevents a formal deportation order, which would otherwise bar you from returning for 10+ years.",
    },
    {
      strong: "A lawyer dramatically increases your chances of success. ",
      text: "Over 75% of individuals ordered removed over the past year went through proceedings completely unrepresented.",
    },
  ];

  const comparisonRows = [
    [
      "Time in the U.S.",
      "7 years of continuous residence",
      "10 years of continuous presence",
      "Clock stops upon criminal events",
    ],
    [
      "Green Card Held",
      "At least 5 years",
      "Not required",
      "LPR status needed for LPR track",
    ],
    [
      "Criminal Bar",
      "No aggravated felony",
      "No aggravated felony or certain crimes",
      "Drug convictions may disqualify",
    ],
    [
      "Hardship Standard",
      "Exceptional and extremely unusual",
      "Exceptional/extremely unusual to a qualifying family member",
      "Hardship for oneself alone is not enough",
    ],
  ];

  const faqs = [
    [
      "What is the difference between asylum and withholding of removal?",
      "An asylum grant permits a stay, and eventually, you can apply for a green card. Withholding of removal only prevents return to one specific country. Asylum has a one-year filing deadline.",
    ],
    [
      "Can I stop deportation if I already have a removal order?",
      "Yes, in some cases. You can file a motion to reopen with the immigration court or appeal to the Board of Immigration Appeals. You may also file for a stay of removal. Contact an attorney immediately.",
    ],
    [
      "Does a DUI affect my immigration status in Florida?",
      <>
        It can. A DUI conviction may qualify as a crime involving moral turpitude depending on the circumstances. That can affect visa status, green card eligibility, and deportation defense options. Read:{" "}
        <DocLink href="https://www.mcfloridalaw.com/blogs/first-arrest-for-dui-advice-from-a-first-time-dui-lawyer-in-wesley-chapel">
          First Arrest for DUI? Advice from a First-Time DUI Lawyer in Wesley Chapel
        </DocLink>{" "}
        to understand the stakes in Florida.
      </>
    ],
    [
      "What happens if I miss my immigration court hearing?",
      "An immigration judge will order you removed in absentia. You are deported by default. You can file a motion to reopen, but you must show particular circumstances.",
    ],
    [
      "Can my U.S.-citizen child prevent my deportation?",
      "Having a U.S.-citizen child is a factor in dependable relief applications, including cancellation of removal for non-LPRs. Here, you must show that removal would cause particular and exceedingly curious hardship to a relative or family member. It is a serious part of your defense.",
    ],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Deportation Defense Options: What Immigrants Need to Know",
    description: "Facing deportation? Know your legal options, such as asylum, cancellation of removal, withholding, and more. The right defense starts with the right attorney.",
    image: "https://www.tripvienlaw.com/images/static-blogs/injunction-hearings-explained-tampa-defense-attorney.webp",
    url: "https://www.tripvienlaw.com/blog/what-immigrants-need-to-know",
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
        text: typeof answer === "string" ? answer : "Contact an attorney to understand how a DUI conviction can impact your visa status and green card eligibility.",
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
              src="/images/static-blogs/deportation-defense-options-immigrants.webp"
              alt={imageAlt}
              title={imageTitle}
              aria-describedby="deportation-defense-image-description"
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
          <p id="deportation-defense-image-description" className="sr-only">
            {imageDescription}
          </p>
        </figure>

        <section
          className="px-5 py-8 text-center sm:px-8"
          style={{ backgroundColor: navy }}
        >
          <p className="mb-2 font-['Arial'] text-[12px] font-bold uppercase tracking-wide text-[#b8860b]">
            Immigration Law | Deportation Defense
          </p>
          <h1 className="mx-auto max-w-[640px] font-['Arial'] text-[26px] font-bold leading-tight text-white md:text-[28px]">
            Deportation Defense Options: What Immigrants Need to Know
          </h1>
          <p className="mt-3 font-['Georgia'] text-[15px] italic text-[#b0c4de]">
            McCulloch Law P.A. | Tampa Deportation Defense Strategy
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
            Most folks fighting to stay in the U.S. can try several paths under immigration law, including asylum, cancellation of removal, withholding, voluntary departure, adjustment of status, and prosecutorial discretion. Each option has strict eligibility criteria and deep consequences, making early guidance from a defense attorney critical.
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
            value="75%"
            label="of people ordered removed over the past 12 months had no legal representation"
          />
          <MetricCard
            value="59%"
            label="of respondents with pending deportation cases are navigating the process completely alone"
            dark
          />
          <MetricCard
            value="306,500+"
            label="removal orders issued in absentia (deported by default) in FY2025"
          />
        </section>

        <ArticleHeading>
          What Are Your Main Deportation Defense Options?
        </ArticleHeading>
        <Paragraph>
          Most folks fighting to stay in the U.S. can try several paths under immigration law. One path might be asylum. Cancellation of removal could apply when someone has lived here long enough and built strong ties. Withholding of removal offers protection if returning home is too dangerous.
        </Paragraph>

        <ArticleHeading>
          1. Asylum and Defensive Asylum Protection
        </ArticleHeading>
        <Paragraph>
          Afraid of getting hurt back home? That could make you eligible for asylum. In immigration court, people often rely on an asylum application. This is a kind of request as a shield. What matters is proving the fear feels real to you - deep down. This worry must tie directly to one of just five narrow causes. Each case turns on whether those links hold up under scrutiny.
        </Paragraph>
        <ul className="my-3 ml-8 list-disc space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555]">
          <li>Race</li>
          <li>Religion</li>
          <li>Nationality</li>
          <li>Political opinion</li>
          <li>Membership in a particular social group</li>
        </ul>
        <Paragraph>
          When you apply for asylum in court to fight a removal order, it is called defensive asylum. It is filed directly in immigration court as a shield against removal. In FY2025, immigration judges issued over 767,000 initial case decisions, and asylum remained one of the primary defenses used, per{" "}
          <DocLink href="https://www.congress.gov/crs-product/IN12638">
            EOIR data compiled by Congress
          </DocLink>
          .
        </Paragraph>

        <ArticleHeading>
          2. Cancellation of Removal
        </ArticleHeading>
        <Paragraph>
          Cancellation of removal is a powerful form of relief. It can stop a deportation order and allow you to become a lawful permanent resident. There are two versions. One for lawful permanent residents (LPRs) and one for non-LPRs. Both have different requirements:
        </Paragraph>

        <section className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-['Arial'] text-[12px]">
            <thead>
              <tr className="text-white" style={{ backgroundColor: navy }}>
                <th className="px-2 py-2 text-left">Eligibility Factor</th>
                <th className="px-2 py-2 text-left">LPR Version</th>
                <th className="px-2 py-2 text-left">Non-LPR Version</th>
                <th className="px-2 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([factor, lpr, nonLpr, notes], index) => (
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
                    {lpr}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555]">
                    {nonLpr}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555]">
                    {notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <Paragraph>
          Not everyone qualifies. But if you do, it’s one of the strongest defenses in immigration court.
        </Paragraph>

        <ArticleHeading>
          3. Withholding of Removal
        </ArticleHeading>
        <Paragraph>
          Withholding of removal is different from asylum. It does not lead to a green card. But it prevents you from returning to a country where your life or freedom would be threatened. The standard is higher than for asylum. It has no filing deadline. So you can try it even if you missed the one-year asylum window.
        </Paragraph>

        <ArticleHeading>
          4. Voluntary Departure
        </ArticleHeading>
        <Paragraph>
          Sometimes, the most strategic option is voluntary departure. This allows you to leave the U.S. on your own terms without a formal order of removal on your record. A removal order can bar you from returning to the U.S. for 10 years or more. Voluntary departure keeps more future options open. It represented about 1% of FY2024 immigration court outcomes.
        </Paragraph>

        <ArticleHeading>
          5. Adjustment of Status
        </ArticleHeading>
        <Paragraph>
          If you have an immediate relative who is a U.S. citizen or lawful permanent resident, you may be eligible to adjust status and receive a green card during removal proceedings. This option necessitates meticulous timing and is legally prudent with the guidance of{" "}
          <DocLink href="https://www.mcfloridalaw.com/about">
            an experienced attorney
          </DocLink>
          .
        </Paragraph>

        <ArticleHeading>
          6. Prosecutorial Discretion
        </ArticleHeading>
        <Paragraph>
          An option for you is for an attorney to request prosecutorial discretion. It will ask ICE to deprioritize or close the case against you in some instances. This works best with long-term residents. For people with deep family ties in the U.S. or those who do not pose a public safety danger.
        </Paragraph>

        <ArticleHeading>
          Does Having a Lawyer Actually Change the Outcome?
        </ArticleHeading>
        <Paragraph>
          Yes. Dramatically.
        </Paragraph>
        <Paragraph>
          According to{" "}
          <DocLink href="https://www.vera.org/ending-mass-incarceration/reducing-incarceration/detention-of-immigrants/advancing-universal-representation-initiative/immigration-court-legal-representation-dashboard">
            Vera Institute data based on EOIR records
          </DocLink>
          , 75% of people ordered removed over the past 12 months had no legal representation. Three out of four people deported went through the process without an attorney.
        </Paragraph>
        <Paragraph>
          Among the 3.4 million pending deportation cases currently in U.S. immigration court hearings, 59% of respondents are navigating the process completely alone. No lawyer. No advocate. Nobody is explaining their rights.
        </Paragraph>
        <Paragraph>
          Immigration relief options are complicated. The forms, deadlines, evidence requirements, and legal standards are not things most people can navigate without help. Especially in a second language under enormous pressure.
        </Paragraph>

        <QuoteBox
          label="Tampa Defense Warning"
          quote="The cases where clients come to us early are the ones where we can build a real defense. The later someone waits, the fewer options remain on the table."
          author="McCulloch Law P.A. — Tampa, FL"
        />

        <ArticleHeading>
          What Happens If You Miss a Court Date?
        </ArticleHeading>
        <Paragraph>
          This is critical. Do not miss your hearing. Ever.
        </Paragraph>
        <Paragraph>
          In FY2025, over 306,500 removal orders were issued in absentia. It means people were ordered deported simply for not appearing in court. That is more than 300,000 cases lost by default, according to{" "}
          <DocLink href="https://www.ice.gov/statistics">
            EOIR data via ICE.gov
          </DocLink>
          .
        </Paragraph>
        <Paragraph>
          Missing a hearing does not make the problem disappear. It makes everything significantly worse. You can ask the Board of Immigration Appeals to take another look at a decision. But undoing an in absentia removal order? That’s a much steeper climb. Way harder than just handling your case properly the first time around.
        </Paragraph>

        <ArticleHeading>
          Can a Criminal Charge Affect Your Immigration Case?
        </ArticleHeading>
        <Paragraph>
          Yes. Certain convictions, especially aggravated felonies and crimes involving moral turpitude. It can eliminate entire forms of immigration enforcement relief. A drug conviction, a DUI, a domestic violence charge — these do not just affect your criminal case. They can destroy your deportation defense options entirely.
        </Paragraph>
        <Paragraph>
          If you are an immigrant facing criminal charges, read:{" "}
          <DocLink href="https://www.mcfloridalaw.com/blogs/what-a-misdemeanor-defense-attorney-in-pasco-county-actually-does-for-your-case">
            What a Misdemeanor Defense Attorney in Pasco County Actually Does for Your Case
          </DocLink>
          . For drug-related charges, visit our{" "}
          <DocLink href="https://www.mcfloridalaw.com/practice/drug-crimes">
            Drug Crimes practice page
          </DocLink>{" "}
          for more on how criminal charges intersect with your immigration status.
        </Paragraph>

        <ArticleHeading>
          What Should You Do Right After Receiving a Notice to Appear?
        </ArticleHeading>
        <Paragraph>
          Time matters more than almost anything else in immigration defense. Here is what to do immediately:
        </Paragraph>
        <ol className="my-3 ml-8 list-decimal space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555]">
          <li>
            <strong>Don't ignore the NTA.</strong> Read every word and note every deadline.
          </li>
          <li>
            <strong>Don't miss your hearing date</strong> even if you are scared, even if you feel unprepared.
          </li>
          <li>
            <strong>Call an immigration attorney immediately.</strong> The sooner you have counsel, the more options remain available.
          </li>
          <li>
            <strong>Gather all documents.</strong> Tax returns, employment records, lease agreements, and birth certificates of U.S.-citizen children. All support your case.
          </li>
          <li>
            <strong>Never discuss</strong> your case with anyone except your attorney. Not friends. Not coworkers. Not on social media.
          </li>
        </ol>
        <Paragraph>
          If you have already been arrested, read{" "}
          <DocLink href="https://www.mcfloridalaw.com/blogs/steps-to-take-right-after-an-arrest-advice-from-a-criminal-mischief-attorney-in-tampa">
            Steps to Take Right After an Arrest
          </DocLink>
          . Many of those same principles apply directly to immigration situations.
        </Paragraph>

        <ArticleHeading>
          How Early Legal Help Changes Everything
        </ArticleHeading>
        <Paragraph>
          An immigration judge hearing is not something you want to walk into unprepared. An attorney hired at the beginning of a case can:
        </Paragraph>
        <ul className="my-3 ml-8 list-disc space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555]">
          <li>Challenge the grounds stated in the Notice to Appear</li>
          <li>File motions to suppress unlawfully obtained evidence</li>
          <li>Apply for every form of relief you qualify for simultaneously</li>
          <li>Negotiate with ICE prosecutors for more favorable outcomes</li>
          <li>Build a complete case file well before your first immigration court hearing</li>
        </ul>
        <Paragraph>
          An attorney hired the week before trial has a fraction of those options. As our post on{" "}
          <DocLink href="https://www.mcfloridalaw.com/blogs/why-hiring-a-local-criminal-defense-lawyer-in-hillsborough-county-early-can-change-your-case-outcome">
            Why Hiring a Local Criminal Defense Lawyer in Hillsborough County Early Can Change Your Case Outcome
          </DocLink>{" "}
          explains, early legal intervention consistently produces better results.
        </Paragraph>

        <section
          className="my-6 px-5 py-6 text-center sm:px-8"
          style={{ backgroundColor: red }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Facing Deportation? Talk to McCulloch Law P.A. Today
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
            Attorney Drew McCulloch has over 15 years of experience protecting the rights of clients across Tampa Bay. Call us 24/7 at (813) 444-2817.
          </p>
          <a
            href="https://www.mcfloridalaw.com/contact"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Schedule Your Free Consultation at mcfloridalaw.com &gt;&gt;
          </a>
        </section>

        <Divider />

        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <h2 className="pb-2 font-['Arial'] text-[18px] font-bold text-[#1b2a4a]">
          FAQs About Deportation Defense in Florida
        </h2>
        <section className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <div key={index} className="bg-[#f4f7fb] px-4 py-3">
              <p className="font-['Arial'] text-[13px] font-bold text-[#1b2a4a]">
                Q: {question}
              </p>
              <div className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">
                {typeof answer === "string" ? `A: ${answer}` : <>A: {answer}</>}
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
