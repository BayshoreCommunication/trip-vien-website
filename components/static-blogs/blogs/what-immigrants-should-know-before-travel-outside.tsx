import Image from "next/image";

const navy = "#1b2a4a";
const gold = "#b8860b";
const paleGold = "#fdf6e3";
const paleBlue = "#f4f7fb";
const borderBlue = "#d0d7e2";
const red = "#8b0000";

const imageAlt =
  "Traveler presenting a passport and advance parole document to a CBP officer at airport immigration";
const imageTitle = "Advance Parole Travel and U.S. Immigration Processing";
const imageDescription =
  "International traveler presenting a passport and advance parole document to a U.S. Customs and Border Protection officer during airport immigration screening and travel authorization verification.";
const imageCaption =
  "Traveler showing advance parole documents during U.S. airport immigration screening";

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
  return (
    <a
      href={href}
      className="font-['Georgia'] text-[#1155cc] underline"
      target="_blank"
      rel="noreferrer"
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

function NumberedList({
  items,
}: {
  items: { strong: string; text: React.ReactNode }[];
}) {
  return (
    <ol className="my-2 ml-8 list-decimal space-y-1 font-['Georgia'] text-[15px] leading-[1.45] text-[#555555]">
      {items.map((item) => (
        <li key={item.strong}>
          <strong className="text-[#1b2a4a]">{item.strong}</strong>
          {item.text}
        </li>
      ))}
    </ol>
  );
}

function SurveyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 border border-[#b8860b] bg-[#fdf6e3] px-4 py-3">
      <p className="mb-2 font-['Arial'] text-[9px] font-bold uppercase text-[#b8860b]">
        Our Survey Says
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

export default function WhatImmigrantsShouldKnowBeforeTravelOutsideBlog() {
  const keyPoints = [
    {
      strong: "Pending I-485? ",
      text: "You need travel authorization before leaving.",
    },
    {
      strong: "File Form I-131 ",
      text: "to request your travel document.",
    },
    {
      strong: "DACA recipients, TPS holders, and asylum seekers ",
      text: "all qualify.",
    },
    {
      strong: "Leaving without approval ",
      text: "can result in a permanently abandoned case.",
    },
    {
      strong: "CBP makes the final call ",
      text: "at the border. Not USCIS.",
    },
  ];

  const applicationSteps = [
    {
      strong: "Complete Form I-131, Application for Travel Document. ",
      text: "Include your pending case receipt notice.",
    },
    {
      strong: "Attach two passport-style photos. ",
      text: "Provide a statement explaining why you need to travel.",
    },
    {
      strong: "Pay the filing fee. ",
      text: "File it together with Form I-485 and you pay zero additional fees. That is a major financial win.",
    },
    {
      strong: "Wait for physical approval. ",
      text: "Do not book any flights until the I-512L document is in your hands.",
    },
  ];

  const comparisonRows = [
    [
      "Pending I-485 Status",
      "Remains active and valid",
      "Automatically abandoned",
    ],
    ["Re-entry to U.S.", "Permitted (CBP discretion)", "Denied. May face removal"],
    ["DACA/TPS Case", "Protected during travel", "Considered abandoned"],
    ["Asylum Application", "Protected with approval", "Case terminated"],
    ["Filing Cost (with I-485)", "No additional fee", "N/A. No document exists"],
  ];

  const faqs = [
    [
      "Can I apply for advance parole if my I-485 has been pending for years?",
      "Yes. As long as your I-485 is still pending and not denied, you can file Form I-131 at any time before departure.",
    ],
    [
      "Does travel document approval mean my green card is close to being approved?",
      "No. They are completely separate processes. Travel authorization approval does not predict or affect your green card timeline.",
    ],
    [
      "Can my employer require me to travel internationally while my I-485 is pending?",
      "They can request it. But travel authorization must be approved before any departure. Work with your immigration attorney first.",
    ],
    [
      "What happens to my travel authorization if USCIS denies my I-485 while I am abroad?",
      "If your I-485 is denied while you are outside the U.S., your travel document may become invalid. Contact an attorney immediately.",
    ],
    [
      "How long is the standard travel authorization valid?",
      "Typically one to two years. The exact validity period is listed on your approval notice and your I-512L document.",
    ],
    [
      "Can I renew my travel authorization before it expires?",
      "Yes. File a new Form I-131 before your current document expires. Do not wait until the last minute.",
    ],
    [
      "Is a travel authorization the same as a re-entry permit?",
      "No. A re-entry permit is for lawful permanent residents. Advance parole is for applicants with pending immigration cases.",
    ],
  ];

  return (
    <article className="text-black">
      <div className="mx-auto max-w-[760px]">
        <figure className="mb-10">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src="/images/static-blogs/advance-parole-document-us-immigration-travel.webp"
              alt={imageAlt}
              title={imageTitle}
              aria-describedby="advance-parole-image-description"
              fill
              priority
              className="object-cover object-center"
              sizes="760px"
            />
          </div>
          <figcaption className="mt-2 font-['Arial'] text-[10px] italic leading-[1.4] text-[#777777]">
            {imageCaption}
          </figcaption>
          <p id="advance-parole-image-description" className="sr-only">
            {imageDescription}
          </p>
        </figure>

        <section
          className="px-8 py-8 text-center"
          style={{ backgroundColor: navy }}
        >
          <p className="mb-2 font-['Arial'] text-[12px] font-bold uppercase tracking-wide text-[#b8860b]">
            Immigration Law | Florida 2026
          </p>
          <h1 className="mx-auto max-w-[620px] font-['Arial'] text-[26px] font-bold leading-tight text-white md:text-[28px]">
            Advance Parole Explained: What Immigrants Should Know Before Travel
            Outside the U.S.
          </h1>
          <p className="mt-3 font-['Georgia'] text-[15px] italic text-[#b0c4de]">
            TripVien Law, P.A. | Lakeland & Oldsmar, Florida
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
            Advance parole is a USCIS-issued travel document. It lets
            immigrants with pending applications leave the U.S. and re-enter
            legally. Skipping this step can abandon your green card application.
            It can even bar you from coming back permanently.
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
            value="4.6M+"
            label="Foreign-born residents in Florida"
          />
          <MetricCard
            value="40%"
            label="Were unaware they needed travel authorization"
            dark
          />
          <MetricCard
            value="100%"
            label="Abandonment risk if you leave without this document"
          />
        </section>

        <ArticleHeading>
          1. What Is Advance Parole and Why Is It Important Right Now?
        </ArticleHeading>
        <Paragraph>
          Think of it as a federal permission slip. It tells U.S. Customs and
          Border Protection you are allowed back in. The official document is
          called Form I-512L. You receive it after USCIS approves your Form
          I-131.
        </Paragraph>

        <AlertBox title="2025 New I-131 Edition Required">
          USCIS only accepts the January 20, 2025 edition of Form I-131. Earlier
          versions are rejected outright as of April 4, 2025.
        </AlertBox>

        <Paragraph>
          The I-512L can also arrive as a combo card with your Employment
          Authorization Document. That card will read &quot;serves as I-512
          Advanced Parole&quot; right on the face. If you see that, you are
          covered.
        </Paragraph>
        <Paragraph>
          In 2026, DHS tightened its review standards. Travel without this
          document is riskier than it has ever been. Florida immigrants cannot
          afford to test those boundaries.
        </Paragraph>

        <ArticleHeading>
          2. Who Actually Needs This Travel Authorization Before Leaving?
        </ArticleHeading>
        <Paragraph>
          People with a pending Form I-485 need it. Full stop. No exceptions.
          DACA recipients need it for any international travel. TPS holders
          absolutely require it before leaving the U.S. Those with pending
          asylum applications need it too.
        </Paragraph>

        <SurveyBox>
          Nearly 40% of immigrant clients in Florida had no idea they needed a
          separate travel document while their green card was pending. That
          number is alarming.
        </SurveyBox>

        <Paragraph>
          There is one narrow exception. If you hold valid H-1B or L-1 visa
          status, you may travel on that visa instead. But if you are relying on
          a pending I-485 alone, travel authorization is non-negotiable.
        </Paragraph>
        <Paragraph>
          Whether you are in South Florida, Tampa, or Orlando, do not assume a
          receipt notice is enough. It is not. The{" "}
          <DocLink href="/practice-areas/immigration">
            immigration team at TripVien Law
          </DocLink>{" "}
          helps clients across Florida confirm their eligibility fast.
        </Paragraph>

        <ArticleHeading>
          3. Traveling Without It Can End Your Green Card Case Permanently
        </ArticleHeading>
        <Paragraph>
          This is the hard truth. USCIS treats your pending application as
          abandoned the moment you leave U.S. soil without an approved document.
          No appeal. No grace period. The case is done.
        </Paragraph>
        <Paragraph>
          If you have a pending asylum case and you leave without approval,
          USCIS assumes you abandoned your protection claim. That is a
          devastating outcome for families fleeing persecution.
        </Paragraph>
        <Paragraph>
          Past immigration problems also surface on re-entry. Prior overstays,
          unauthorized work, visa violations. All of it comes up at the border.
          Leaving without legal guidance is a serious gamble.
        </Paragraph>
        <Paragraph>
          Florida immigration courts have seen a sharp rise in deportation
          defense cases tied to improper re-entries. TripVien Law handles
          exactly these cases. If you are already in proceedings, explore their{" "}
          <DocLink href="/practice-areas/immigration/deportation-defense">
            deportation defense services
          </DocLink>{" "}
          before you book any flight.
        </Paragraph>

        <SectionLabel>Before and After</SectionLabel>
        <section className="mt-3 grid grid-cols-1 border border-[#d0d7e2] md:grid-cols-2">
          <div className="border-b border-[#d0d7e2] bg-[#f4f7fb] px-4 py-4 md:border-b-0 md:border-r">
            <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#8b0000]">
              Before
            </p>
            <p className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">
              Left the U.S. with a pending I-485 and no travel document. USCIS
              closed the case permanently. Lost five years of work toward a
              green card.
            </p>
          </div>
          <div className="bg-[#fdf6e3] px-4 py-4">
            <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#b8860b]">
              After
            </p>
            <p className="mt-2 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">
              Filed Form I-131 alongside I-485 at zero extra cost. Traveled.
              Returned without issues. Green card approved 10 months later.
            </p>
          </div>
        </section>

        <section
          className="my-6 px-8 py-6 text-center"
          style={{ backgroundColor: red }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Traveling Soon? Do Not Leave Without Knowing Your Status.
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
            A free consultation with TripVien Law takes 15 minutes. The
            consequences of not having it can last a lifetime.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Schedule Your Free Consultation Now &gt;&gt;
          </a>
        </section>

        <Divider />

        <ArticleHeading>
          4. How Do You Apply for Advance Parole? A Step-by-Step Look
        </ArticleHeading>
        <Paragraph>
          The process is more straightforward than most people think. Here is
          exactly how it works.
        </Paragraph>
        <NumberedList items={applicationSteps} />
        <Paragraph>
          You can verify the current USCIS fee schedule at{" "}
          <DocLink href="https://www.uscis.gov">USCIS.gov</DocLink>. Always
          confirm before filing.
        </Paragraph>
        <Paragraph>
          Florida immigrants work with TripVien Law to prepare and submit the
          complete I-131 package. Their dedicated{" "}
          <DocLink href="/practice-areas/immigration/reentry-advance-parole">
            Re-Entry and Advance Parole practice
          </DocLink>{" "}
          is built for exactly this. Efficient and accurate.
        </Paragraph>

        <SectionLabel>Travel Authorization Comparison</SectionLabel>
        <section className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-['Arial'] text-[12px]">
            <thead>
              <tr className="text-white" style={{ backgroundColor: navy }}>
                <th className="px-2 py-2 text-left">Factor</th>
                <th className="px-2 py-2 text-left">With Advance Parole</th>
                <th className="px-2 py-2 text-left">Without Advance Parole</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([factor, withParole, withoutParole], index) => (
                <tr
                  key={factor}
                  style={{ backgroundColor: index % 2 === 0 ? paleBlue : "#ffffff" }}
                >
                  <td className="border border-white px-2 py-3 font-bold text-[#1b2a4a]">
                    {factor}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555]">
                    {withParole}
                  </td>
                  <td className="border border-white px-2 py-3 font-bold text-[#8b0000]">
                    {withoutParole}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <ArticleHeading>
          5. What Happens When You Return to the U.S. Border?
        </ArticleHeading>
        <Paragraph>
          Here is something most immigrants do not know. An approved travel
          document is not a guaranteed entry pass.
        </Paragraph>
        <Paragraph>
          CBP officers make the final call at every port of entry. If you have
          a criminal history, prior immigration violations, or any red flags in
          your record, a CBP officer can detain you and start removal
          proceedings right at the airport.
        </Paragraph>
        <Paragraph>
          That authority exists regardless of your document status. Even a valid
          I-512L cannot overrule a CBP officer on the ground.
        </Paragraph>

        <QuoteBox
          label="Expert Perspective"
          quote="Advance parole gives you the right to seek re-entry. It does not guarantee it. Border officers retain full discretion under federal law. Know your record before you ever board that plane."
          author="Senior Immigration Law Expert, Florida Bar Association"
        />

        <Paragraph>
          Always carry every supporting document when you travel. Your I-512L,
          your I-485 receipt notice, your EAD card if applicable, and your
          passport. Leave nothing at home.
        </Paragraph>
        <Paragraph>
          If something feels off at the border, ask for your attorney
          immediately. Do not answer questions beyond confirming your
          immigration status. The{" "}
          <DocLink href="https://www.cbp.gov/travel">
            U.S. Customs and Border Protection
          </DocLink>{" "}
          maintains clear guidance on what to expect. Know it before you fly.
        </Paragraph>

        <ArticleHeading>
          6. Florida Immigrants Deserve More Than Just a Travel Document
        </ArticleHeading>
        <Paragraph>
          Florida is home to over 4.6 million foreign-born residents. That is
          the second highest count in the nation. The stakes for getting
          immigration travel right are enormous here.
        </Paragraph>
        <Paragraph>
          Whether you are in Lakeland, Tampa, or Miami, one wrong step with your
          travel authorization can unravel years of immigration progress. That
          is not a risk worth taking alone.
        </Paragraph>
        <Paragraph>
          TripVien Law, based right here in Florida, handles travel
          authorization cases as part of a full immigration strategy. From{" "}
          <DocLink href="/practice-areas/immigration/green-card-through-marriage">
            green cards through marriage
          </DocLink>{" "}
          to{" "}
          <DocLink href="/practice-areas/immigration/citizenship-naturalization-services">
            citizenship and naturalization
          </DocLink>
          , our team has built a track record that Florida immigrant families
          rely on.
        </Paragraph>

        <SectionLabel>Case Risk Snapshot</SectionLabel>
        <section className="mt-3 grid grid-cols-1 border border-[#d0d7e2] md:grid-cols-3">
          <MetricCard
            value="3x"
            label="Lower case abandonment risk with Florida immigration attorneys"
          />
          <MetricCard
            value="$0"
            label="Extra cost when filing I-131 with I-485"
            dark
          />
          <MetricCard
            value="1-2 Yrs"
            label="Typical I-512L approval validity window"
          />
        </section>

        <SurveyBox>
          Clients who worked with a dedicated Florida immigration attorney were
          3 times less likely to experience case abandonment due to travel
          errors. That stat alone makes the case for professional legal
          guidance.
        </SurveyBox>

        <QuoteBox
          label="From TripVien Law"
          accent={gold}
          quote="We protect your entire immigration journey. From the first form to the final approval. That is how we serve Florida families, and that is the TripVien Law standard."
          author="Attorney Hardam Tripathi, TripVien Law, P.A., Lakeland and Oldsmar, Florida"
        />

        <Paragraph>
          The{" "}
          <DocLink href="https://cliniclegal.org">
            Catholic Legal Immigration Network
          </DocLink>{" "}
          and{" "}
          <DocLink href="https://unitedwedream.org">United We Dream</DocLink>{" "}
          both confirm that travel document rules tightened significantly in
          late 2025. Florida immigrants cannot rely on outdated advice.
        </Paragraph>

        <Divider goldLine />

        <section
          className="my-6 px-8 py-6 text-center"
          style={{ backgroundColor: red }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Ready to Travel Legally? Let TripVien Law Handle It.
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
            Florida&apos;s trusted immigration attorneys are ready to protect
            your case and your future.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Talk to a Florida Immigration Attorney &gt;&gt;
          </a>
          <p className="mt-4 font-['Arial'] text-[11px] font-bold text-[#b8860b]">
            Lakeland Office: 5304 S Florida Ave, Ste. 406-I, Lakeland, FL 33813
          </p>
          <p className="mt-2 font-['Arial'] text-[11px] text-white underline">
            info@tripvienlaw.com
          </p>
        </section>

        <Divider />

        <SectionLabel>People Also Ask</SectionLabel>
        <h2 className="pb-2 font-['Arial'] text-[18px] font-bold text-[#1b2a4a]">
          Frequently Asked Questions
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
