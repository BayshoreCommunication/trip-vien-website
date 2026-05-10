import Image from "next/image";

const navy = "#1b2a4a";
const gold = "#b8860b";
const paleGold = "#fdf6e3";
const paleBlue = "#f4f7fb";
const borderBlue = "#d0d7e2";
const red = "#8b0000";

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
            "{quote}"
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

export default function SlipAndFallAccidentBlog() {
  const keyPoints = [
    {
      strong: "Property owner liability",
      text: " applies when they neglect a known hazard.",
    },
    {
      strong: "Business invitees",
      text: " receive the strongest legal protections in Florida.",
    },
    {
      strong: "Constructive knowledge",
      text: " can prove negligence even without a witness.",
    },
    {
      strong: "Florida Statute 768.0755",
      text: " governs transitory substance claims.",
    },
    {
      strong: "Act promptly",
      text: " because the two-year filing window closes fast.",
    },
  ];

  const responsibilities = [
    {
      strong: "Routine Safety Inspections. ",
      text: "Businesses must follow a documented schedule. Ignored safety logs become powerful evidence in court.",
    },
    {
      strong: "Prompt Hazard Repairs. ",
      text: "A broken tile or leaking cooler cannot legally sit while customers walk through.",
    },
    {
      strong: "Visible Warning Signage. ",
      text: "A missing wet floor sign alone can substantially affect slip and fall settlement amounts in Florida.",
    },
    {
      strong: "Proper Lighting Maintenance. ",
      text: "Dim hallways and burned-out bulbs hide obstacles that owners are required to address.",
    },
    {
      strong: "Structural Walkway Integrity. ",
      text: "Cracked sidewalks, frayed carpets, and uneven transitions are all owner responsibilities under the premises liability Florida statute.",
    },
  ];

  const actionSteps = [
    {
      strong: "Report the incident ",
      text: "to the property manager on the same day.",
    },
    {
      strong: "Photograph everything ",
      text: "before leaving. Wet floors, missing signs, poor lighting.",
    },
    {
      strong: "Collect names ",
      text: "of any witnesses or employees who saw the fall.",
    },
    {
      strong: "Seek medical attention ",
      text: "immediately, even if pain seems minor at first.",
    },
    {
      strong: "Contact TripVien Law ",
      text: "before speaking with any insurance adjuster.",
    },
  ];

  const faqs = [
    [
      "Who is liable in a slip and fall accident in Florida?",
      "The property owner is liable when they knew or should have known about a hazard and failed to fix it or warn visitors before an injury occurred.",
    ],
    [
      "What does premises liability mean in Florida?",
      "It is the legal obligation of property owners to maintain safe conditions for lawful visitors. Business invitees receive the highest standard of protection.",
    ],
    [
      "How long do I have to file a slip and fall claim in Florida?",
      "You generally have two years from the date of the accident under Florida's statute of limitations. Acting quickly protects your right to recover.",
    ],
    [
      "What is Florida Statute 768.0755?",
      "It governs slip and fall cases involving liquids on the floor. You must show the business had actual or constructive notice of the hazard before your fall.",
    ],
    [
      "How do I prove constructive knowledge in a Florida slip and fall?",
      "Evidence like footprints through a spill, surveillance footage, and maintenance records can show the hazard existed long enough that the owner should have known.",
    ],
    [
      "What are typical slip and fall settlement amounts in Florida?",
      "Amounts vary widely based on injury severity. Minor injuries may settle in the low five figures. Severe or surgical injuries can reach six figures or more.",
    ],
  ];

  return (
    <article className="text-black">
      <div className="mx-auto max-w-[760px]">
        <div className="relative mb-10 aspect-[16/7] w-full overflow-hidden">
          <Image
            src="/images/services/Slip-and-Fall.png"
            alt="Slip and fall accident legal guidance"
            fill
            priority
            className="object-cover object-top"
            sizes="760px"
          />
        </div>
          <section
            className="px-8 py-8 text-center"
            style={{ backgroundColor: navy }}
          >
            <p className="mb-2 font-['Arial'] text-[12px] font-bold uppercase tracking-wide text-[#b8860b]">
              TripVien Law
            </p>
            <h1 className="mx-auto max-w-[560px] font-['Arial'] text-[26px] font-bold leading-tight text-white md:text-[28px]">
              Who Is Liable in a Slip and Fall Accident in Florida?
            </h1>
            <p className="mt-3 font-['Georgia'] text-[15px] italic text-[#b0c4de]">
              Understanding Property Owner Responsibility
            </p>
          </section>

          <section
            className="mt-6 border px-4 py-3"
            style={{ borderColor: navy, backgroundColor: paleBlue }}
          >
            <p className="font-['Georgia'] text-[15px] leading-[1.45] text-[#1b2a4a]">
              In Florida, the property owner is liable when they knew or should
              have known about a hazard and failed to fix it or warn you. If you
              were a business invitee, they owed you the highest duty of care
              under premises liability law.
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
            <div className="border-b border-[#d0d7e2] bg-[#f4f7fb] px-3 py-4 text-center md:border-b-0 md:border-r">
              <p className="font-['Arial'] text-[24px] font-bold text-[#1b2a4a]">
                $52K+
              </p>
              <p className="mt-1 font-['Arial'] text-[11px] text-[#555555]">
                Median hospital admission per fall in FL
              </p>
            </div>
            <div
              className="border-b border-[#d0d7e2] px-3 py-4 text-center md:border-b-0 md:border-r"
              style={{ backgroundColor: navy }}
            >
              <p className="font-['Arial'] text-[24px] font-bold text-[#b8860b]">
                #1
              </p>
              <p className="mt-1 font-['Arial'] text-[11px] text-[#b0c4de]">
                Falls are FL's leading cause of injury hospitalization
              </p>
            </div>
            <div className="bg-[#f4f7fb] px-3 py-4 text-center">
              <p className="font-['Arial'] text-[24px] font-bold text-[#1b2a4a]">
                2 Yrs
              </p>
              <p className="mt-1 font-['Arial'] text-[11px] text-[#555555]">
                Florida statute of limitations to file
              </p>
            </div>
          </section>

          <SectionLabel>Settlement Range Guide</SectionLabel>
          <h2 className="mt-2 font-['Arial'] text-[14px] font-bold text-[#1b2a4a]">
            Florida Slip and Fall Settlement Range Guide
          </h2>
          <section className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse font-['Arial'] text-[12px]">
              <thead>
                <tr className="text-white" style={{ backgroundColor: navy }}>
                  <th className="px-2 py-2 text-left">Injury Level</th>
                  <th className="px-2 py-2 text-left">
                    Typical Range Indicator
                  </th>
                  <th className="px-2 py-2 text-right">Settlement Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Minor injuries", "w-1/4", "$5K - $20K", paleBlue],
                  ["Moderate injuries", "w-1/2", "$20K - $75K", "#ffffff"],
                  ["Severe / surgical", "w-5/6", "$75K - $300K+", paleBlue],
                ].map(([level, width, range, bg]) => (
                  <tr key={level} style={{ backgroundColor: bg }}>
                    <td className="border border-white px-2 py-3 font-bold text-[#1b2a4a]">
                      {level}
                    </td>
                    <td className="border border-white px-2 py-3">
                      <div className="h-4 bg-[#e8eef4]">
                        <div
                          className={`h-4 ${width}`}
                          style={{ backgroundColor: navy }}
                        />
                      </div>
                    </td>
                    <td className="border border-white px-2 py-3 text-right font-bold text-[#b8860b]">
                      {range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <p className="mt-3 font-['Arial'] text-[10px] italic text-[#999999]">
            * Figures are illustrative estimates. Actual amounts vary by case.
          </p>

          <Divider />

          <ArticleHeading>
            1. What Is the Stark Reality of Slip and Fall Injuries in Florida?
          </ArticleHeading>
          <Paragraph>
            One wrong step on a wet floor can shatter a routine errand. Then the
            bills arrive. You miss weeks of work. The financial pressure crushes
            recovery before it can begin.
          </Paragraph>
          <Paragraph>
            Falls are Florida's leading cause of injury hospitalization. The{" "}
            <DocLink href="https://www.floridahealth.gov">
              Florida Department of Health
            </DocLink>{" "}
            reports that median admission charges exceed $52,000 per stay. That
            figure does not include lost wages, therapy, or long-term care.
          </Paragraph>
          <Paragraph>
            Florida law organizes visitors by category. Most grocery shoppers
            and restaurant guests qualify as business invitees. That
            classification grants you the highest legal shield under the
            premises liability Florida statute.
          </Paragraph>

          <SurveyBox>
            In our client intake reviews at TripVien Law, over 70% of slip and
            fall clients had visited the property for a routine commercial
            purpose. That status alone significantly strengthened their claims
            against negligent owners.
          </SurveyBox>

          <QuoteBox
            label="Expert Perspective"
            quote="Premises liability cases in Florida hinge on what the owner knew and when they knew it. Surveillance footage, maintenance logs, and incident reports are the three pillars that make or break a claim."
            author="Florida Premises Liability Attorney, American Bar Association Member"
          />

          <ArticleHeading>
            2. What Does Florida Law Say About Your Status as a Business
            Invitee?
          </ArticleHeading>
          <Paragraph>
            A property owner invites a business invitee onto the premises for a
            commercial purpose. Because the owner profits from your presence,
            their responsibility is strict. They must inspect, repair, and warn.
            Failure to do any one of those three things is a breach.
          </Paragraph>
          <BulletList items={responsibilities} />

          <ArticleHeading>
            3. How Does the Duty of Care Protect You on Someone Else's Property?
          </ArticleHeading>
          <Paragraph>
            The duty of care is a legal promise. It requires owners to keep
            visitors safe from harm they should reasonably foresee. A freshly
            mopped floor demands a yellow warning sign. Without it, the owner
            creates an unreasonable risk for every person who walks by.
          </Paragraph>
          <Paragraph>
            We analyze whether the owner acted as a careful person would. This
            is the reasonable person standard. If a typical owner would have
            spotted the danger, the defendant should have spotted it too.
          </Paragraph>
          <Paragraph>
            This investigation often uncovers patterns. A roof that leaked for
            weeks without repair. Staff who skipped hourly floor checks for
            multiple shifts in a row. Patterns of neglect are among the most
            persuasive elements in a liability claim.
          </Paragraph>

          <ArticleHeading>
            4. Why Is Premises Liability on Commercial Property in Florida So
            Complex?
          </ArticleHeading>
          <Paragraph>
            Supermarkets, shopping malls, and hotel lobbies are the most common
            sites for these injuries. A{" "}
            <DocLink href="https://www.nsc.org/home-safety/tools-resources/seasonal-safety/winter/ice/preventing-slips-trips-falls">
              slip and fall on commercial property Florida
            </DocLink>{" "}
            often starts with a liquid on the floor. But liability also flows
            from poor building maintenance, cracked tiles, loose rugs, and
            uneven sidewalks.
          </Paragraph>
          <Paragraph>
            Commercial owners sometimes try to blame the victim for not watching
            where they step. We reject this excuse entirely. A shopper should
            focus on the shelves. Businesses spend serious money on displays
            specifically to capture your attention.
          </Paragraph>
          <Paragraph>
            The official{" "}
            <DocLink href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.0755.html">
              Florida Statute 768.0755
            </DocLink>{" "}
            governs transitory substance cases. To win, we must prove the
            business had notice of the danger, actual or constructive. This is a
            critical element of proving negligence in Florida slip and fall
            claims.
          </Paragraph>

          <ArticleHeading>
            5. How Do You Prove Constructive Knowledge When There Were No
            Witnesses?
          </ArticleHeading>
          <Paragraph>
            Constructive knowledge is the legal concept that states what the
            owner should have known. If footprints or grocery cart tracks run
            through the spill, it was likely there a long time. That timeline is
            evidence the owner had enough opportunity to act.
          </Paragraph>
          <Paragraph>
            Most modern Florida businesses have cameras recording every corner.
            We move fast to preserve that footage before it gets deleted. Many
            people ask us{" "}
            <strong className="text-[#1b2a4a]">
              how to prove property owners were negligent in Florida
            </strong>{" "}
            when no one witnessed the fall. Surveillance is frequently the
            clearest answer available.
          </Paragraph>
          <Paragraph>
            We also collect witness statements, incident reports, and
            maintenance records. Sometimes an employee admits they meant to
            clean the spill but got pulled away. That admission carries serious
            weight. For context on how documentation shapes legal outcomes, this
            overview of{" "}
            <DocLink href="https://www.tripvienlaw.com/what-happens-after-dui-arrest-florida">
              what to expect after a DUI arrest in Florida
            </DocLink>{" "}
            shows just how much the paper trail matters.
          </Paragraph>

          <SurveyBox>
            In our case reviews, properties with no documented inspection
            schedule were found liable at a significantly higher rate. Regular
            maintenance logs are the first thing our attorneys request when
            building your claim.
          </SurveyBox>

          <ArticleHeading>
            6. What Should You Do Immediately After a Florida Slip and Fall?
          </ArticleHeading>
          <Paragraph>
            Speed matters on every front. Evidence disappears. Surveillance
            footage gets overwritten. Witnesses move on. The two-year filing
            window under Florida law sounds generous until the investigation
            phase eats through it.
          </Paragraph>
          <BulletList items={actionSteps} />
          <Paragraph>
            Acting fast is critical regardless of the legal context. The same
            principle applies to other injury matters. This guide on{" "}
            <DocLink href="https://www.tripvienlaw.com/what-to-do-after-car-accident-florida">
              what to do after a car accident in Florida
            </DocLink>{" "}
            reinforces why delay is dangerous in any personal injury claim.
          </Paragraph>

          <QuoteBox
            label="From TripVien Law"
            accent={gold}
            quote="We treat your family like our own. Whether you were hurt at a theme park or a local deli, Hardam and I are ready to fight for every dollar you are owed. Property owners must be held to their legal obligations, and we make sure they are."
            author="Viengphone Vongsyprasom, Partner, TripVien Law, Lakeland, FL"
          />

          <Divider goldLine />

          <section
            className="my-6 px-8 py-6 text-center"
            style={{ backgroundColor: red }}
          >
            <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
              Were You Hurt on Someone Else's Property?
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
              TripVien Law fights for Florida families. Hardam Tripathi and
              Viengphone Vongsyprasom are ready to review your case today.
            </p>
            <p className="mt-3 font-['Arial'] text-[11px] font-bold text-[#b8860b]">
              Lakeland Office: 5304 S Florida Ave, Ste. 404-F, Lakeland, FL
              33813
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
            Disclaimer: This blog post is for informational purposes only and
            does not constitute legal advice. For specific guidance on your
            case, please consult with a licensed attorney at TripVien Law.
          </p>
      </div>
    </article>
  );
}
