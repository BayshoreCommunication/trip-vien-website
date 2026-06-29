import Image from "next/image";

const navy = "#1b2a4a";
const gold = "#b8860b";
const paleGold = "#fdf6e3";
const paleBlue = "#f4f7fb";
const borderBlue = "#d0d7e2";
const red = "#8b0000";

const imageAlt =
  "Attorney conducting a legal deposition in an injury lawsuit with court reporter and sworn testimony process.";
const imageTitle = "What to Expect During a Deposition in an Injury Lawsuit";
const imageDescription =
  "Educational personal injury law graphic explaining the deposition process in an injury lawsuit. Covers sworn testimony, participants involved, common questions, court reporting, transcript review, and the importance of preparation to protect your legal case.";
const imageCaption =
  "Learn what happens during a deposition in an injury lawsuit and how proper preparation can help protect your case.";

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

export default function WhatToExpectDuringDepositionInjuryLawsuitBlog() {
  const keyPoints = [
    {
      strong: "Conference Room Location: ",
      text: "Deposition happens in an attorney's conference room.",
    },
    {
      strong: "Sworn Testimony: ",
      text: "Everything you say is sworn testimony and can be used against you at trial.",
    },
    {
      strong: "Opposing Control: ",
      text: "The opposing attorney controls the questions. Yours watches and objects.",
    },
    {
      strong: "Florida Rules: ",
      text: "Depositions in Florida follow Rule 1.310 under the state's civil procedure rules.",
    },
    {
      strong: "Keep It Short: ",
      text: "Short, direct answers protect you. Volunteering extra information rarely helps.",
    },
    {
      strong: "Prep Work: ",
      text: "Attorney Viengphone Vongsyprasom at Tripathi Vongsyprasom Law prepares every personal injury client before their deposition.",
    },
  ];

  const comparisonRows = [
    [
      "Location",
      "Attorney's conference room",
      "Courtroom",
    ],
    ["Audience", "Attorneys & court reporters", "Judge, jury & public"],
    ["Format", "Conversational", "Formal examination"],
    ["Recording", "Written transcript, sometimes video", "Court transcript, always on record"],
    ["Objections", "Noted but you still must answer most", "Judge rules on objections immediately"],
    ["Used later?", "Yes, to impeach trial testimony", "Stands on its own"],
  ];

  const faqs = [
    [
      "Can I refuse to answer questions at a deposition?",
      "In limited situations, yes. Your attorney can object to improper or privileged questions. But most questions in a personal injury deposition must be answered.",
    ],
    [
      "What if I lie during a deposition?",
      "That is perjury. It is a felony in Florida. It destroys your credibility & exposes you to criminal liability, often dismissing the case entirely.",
    ],
    [
      "Can the insurance company see my deposition transcript?",
      "Yes. The defense attorney almost always represents the insurance carrier in injury cases. Your transcript goes directly into their claims file.",
    ],
    [
      "Does opposing counsel always depose the plaintiff?",
      "In contested injury cases, yes. Deposing the plaintiff is standard. They want your story locked in before trial.",
    ],
    [
      "What should I wear to a deposition?",
      "Business casual at minimum. No courtroom required, but you are on the record. First impressions affect how opposing counsel assesses your case value.",
    ],
    [
      "Can a deposition be stopped once it starts?",
      "Your attorney can call recesses. In rare cases of abusive questioning, they can terminate the session entirely. See the Florida Bar's position on deposition conduct for more detail.",
    ],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What to Expect During a Deposition in an Injury Lawsuit",
    description: "In an Florida injury lawsuit, a deposition is a formal, pre-trial period of questioning. Tripathi Vongsyprasom Law shares the ultimate playbook.",
    image: "https://www.tripvienlaw.com/images/static-blogs/what-to-expect-during-deposition-injury-lawsuit.png",
    url: "https://www.tripvienlaw.com/blog/what-to-expect-during-deposition-injury-lawsuit",
    publisher: {
      "@type": "Organization",
      name: "Tripathi Vongsyprasom Law",
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
              src="/images/static-blogs/what-to-expect-during-deposition-injury-lawsuit.png"
              alt={imageAlt}
              title={imageTitle}
              aria-describedby="deposition-image-description"
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
          <p id="deposition-image-description" className="sr-only">
            {imageDescription}
          </p>
        </figure>

        <section
          className="px-8 py-8 text-center"
          style={{ backgroundColor: navy }}
        >
          <p className="mb-2 font-['Arial'] text-[12px] font-bold uppercase tracking-wide text-[#b8860b]">
            Personal Injury Law | Florida 2026
          </p>
          <h1 className="mx-auto max-w-[620px] font-['Arial'] text-[26px] font-bold leading-tight text-white md:text-[28px]">
            What to Expect During a Deposition in an Injury Lawsuit
          </h1>
          <p className="mt-3 font-['Georgia'] text-[15px] italic text-[#b0c4de]">
            Tripathi Vongsyprasom Law, P.A. | tripvienlaw.com
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
            In an injury lawsuit in Florida, a deposition is a formal, pre-trial period of questioning and answering. The opposing attorney asks you questions on the record. A court reporter captures every word. Whatever you say can be used at trial. Understanding the process before you walk into that room can protect your case.
          </p>
        </section>

        <section className="mt-5">
          <p className="font-['Arial'] text-[12px] font-bold text-[#1b2a4a]">
            Important Points To Remember
          </p>
          <BulletList items={keyPoints} />
        </section>

        <Divider />

        <SectionLabel>By The Numbers</SectionLabel>
        <section className="mt-3 grid grid-cols-1 border border-[#d0d7e2] md:grid-cols-3">
          <MetricCard
            value="2–4 Hrs"
            label="Average deposition length in FL injury cases"
          />
          <MetricCard
            value="100%"
            label="Of your answers are recorded and admissible at trial"
            dark
          />
          <MetricCard
            value="30 Days"
            label="Typical window to review and sign your transcript"
          />
        </section>

        <Paragraph>
          Most Florida injury clients hear the word &quot;deposition&quot; and immediately tense up. Understandably. Depositions are predictable. They follow a pattern. If you understand that pattern, you walk in calm and walk out with your case intact. Attorney Viengphone Vongsyprasom at Tripathi Vongsyprasom Law, P.A. spent years as former staff counsel for GEICO before co-founding the firm. She has watched depositions flip cases from both sides of the table.
        </Paragraph>

        <ArticleHeading>
          1. Depositions & Why They Happen
        </ArticleHeading>
        <Paragraph>
          Before the trial begins, there&apos;s a step called &quot;deposition.&quot; Every word you say gets recorded by a certified court reporter. Sometimes the session is also video-recorded, which makes how you come across visually a factor too.
        </Paragraph>
        <Paragraph>
          In Florida, depositions fall under <DocLink href="https://www.floridabar.org/rules/ctproc/">Rule 1.310 of the Florida Rules of Civil Procedure</DocLink>. Both sides have the legal right to depose witnesses, the plaintiff, the defendant, and any other relevant party. Some depositions for personal injuries last around two hours. Others stretch closer to four, especially when things get messy. Truck crashes or doctor errors? Those often take more time than usual.
        </Paragraph>
        <Paragraph>
          The transcript becomes a permanent document of the official record. If your trial testimony contradicts something you said here, the opposing attorney will bring that deposition out in front of the jury. That is the danger most people don&apos;t see coming.
        </Paragraph>

        <ArticleHeading>
          2. Who Will Be in the Room With You?
        </ArticleHeading>
        <Paragraph>
          You will see a court reporter, the opposing attorney, your own attorney, and sometimes a videographer. That is usually it. No judge. No jury. Just you and the attorneys.
        </Paragraph>
        <Paragraph>
          The opposing attorney does most of the talking. Their job is to lock you into a story and find inconsistencies. They are neither your enemy nor ally. Politeness doesn&apos;t mean harmless. Their questions are deliberate.
        </Paragraph>
        <Paragraph>
          Your attorney sits right beside you. They can object to improper questions, call breaks, and coach you beforehand. Attorney Vongsyprasom holds deposition prep sessions for every client with an active <DocLink href="/practice-areas/personal-injury">personal injury</DocLink> case. She discusses the kinds of questions to anticipate as well as the pitfalls to avoid in order to maintain composure under duress.
        </Paragraph>

        <SectionLabel>Deposition vs. Trial Testimony</SectionLabel>
        <section className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-['Arial'] text-[12px]">
            <thead>
              <tr className="text-white" style={{ backgroundColor: navy }}>
                <th className="px-2 py-2 text-left">Factor</th>
                <th className="px-2 py-2 text-left">Deposition</th>
                <th className="px-2 py-2 text-left">Trial Testimony</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([factor, deposition, trial], index) => (
                <tr
                  key={factor}
                  style={{ backgroundColor: index % 2 === 0 ? paleBlue : "#ffffff" }}
                >
                  <td className="border border-white px-2 py-3 font-bold text-[#1b2a4a]">
                    {factor}
                  </td>
                  <td className="border border-white px-2 py-3 text-[#555555]">
                    {deposition}
                  </td>
                  <td className="border border-white px-2 py-3 font-bold text-[#8b0000]">
                    {trial}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <ArticleHeading>
          3. What Kinds of Questions Will They Actually Ask You?
        </ArticleHeading>
        <Paragraph>
          Expect three broad categories. First comes background. Where you live, your employment history, your prior medical treatment, any past accidents or lawsuits. Second comes the incident itself. How and where it happened, what you saw, who you believe was at fault. Third comes your injuries. Pain levels, treatment timeline, medical providers, how your life has changed since the accident.
        </Paragraph>
        <Paragraph>
          The trickiest territory is your medical history. Florida defense attorneys and insurance companies look hard for pre-existing conditions. If you had a prior back injury and now claim lumbar damage from a <DocLink href="/practice-areas/personal-injury/car-accidents">car accident</DocLink>, they will dig into that. Florida&apos;s modified comparative fault rules under <DocLink href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html">Florida Statute 768.81</DocLink> allow them to reduce your damages based on any percentage of fault you share.
        </Paragraph>
        <Paragraph>
          Answer what was asked. Nothing more. Short answers protect you. Long answers create openings.
        </Paragraph>

        <ArticleHeading>
          4. What Should You Never Do During a Deposition?
        </ArticleHeading>
        <Paragraph>
          Guessing is the biggest mistake. If you say &quot;I think&quot; and then get that fact wrong, the other side now has a weapon.
        </Paragraph>
        <Paragraph>
          You should never argue with the opposing attorney. Watching old clips, jurors form opinions early. A smirk or heavy sigh might seem small then but plays large later.
        </Paragraph>
        <Paragraph>
          Also, don&apos;t look at your attorney while answering. It signals you are unsure of yourself. That prep needs to happen before you arrive. Clients preparing for <DocLink href="/practice-areas/personal-injury/slip-and-fall">slip and fall</DocLink> cases at Tripathi Vongsyprasom Law go through multiple prep sessions specifically because liability disputes in these cases often hinge on how confidently the plaintiff describes the scene.
        </Paragraph>

        <QuoteBox
          label="Expert Perspective"
          quote="The majority of clients have good intentions, which is precisely the issue. They talk too much because they want to be cooperative. The most effective thing you can do during a deposition is to stop, reflect, and only respond to the questions posed. Nothing more."
          author="Viengphone Vongsyprasom, Esq., Personal Injury Attorney, Tripathi Vongsyprasom Law, P.A."
        />

        <ArticleHeading>
          5. What Tripathi Vongsyprasom Law&apos;s Cases Show
        </ArticleHeading>
        <Paragraph>
          A pattern shows up again and again in injury depositions across Lakeland and the Tampa Bay area. Clients walk in thinking that being cooperative means being chatty. It doesn&apos;t. Oversharing is one of the most common ways plaintiffs hurt their own case without realizing it.
        </Paragraph>
        <Paragraph>
          A second misconception is that attorneys can fix bad deposition answers later. They can&apos;t. Not easily. Once the transcript exists, it follows your case all the way to verdict. An errata sheet lets you correct a transcription error. It does not let you rethink your testimony.
        </Paragraph>
        <Paragraph>
          Memory fades after trauma and injury. Courts understand this. The <DocLink href="https://www.ninds.nih.gov">National Institute of Neurological Disorders and Stroke</DocLink> confirms that traumatic injuries routinely affect memory and recall. Your attorney can explain this to the record.
        </Paragraph>

        <SectionLabel>Myth vs. Reality in Florida Depositions</SectionLabel>
        <section className="mt-3 grid grid-cols-1 border border-[#d0d7e2]">
          <div className="border-b border-[#d0d7e2] bg-[#f4f7fb] px-4 py-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#8b0000]">Myth</p>
              <p className="mt-1 font-['Georgia'] text-[14px] leading-[1.45] text-[#1b2a4a]">The deposition is informal. It&apos;s just a conversation.</p>
            </div>
            <div className="border-t border-[#d0d7e2] pt-3 md:border-t-0 md:pt-0 md:pl-4 md:border-l">
              <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#b8860b]">Reality</p>
              <p className="mt-1 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">What&apos;s said cannot be untied once written down by law.</p>
            </div>
          </div>
          <div className="border-b border-[#d0d7e2] bg-[#ffffff] px-4 py-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#8b0000]">Myth</p>
              <p className="mt-1 font-['Georgia'] text-[14px] leading-[1.45] text-[#1b2a4a]">Saying &apos;I don&apos;t remember&apos; makes me look dishonest.</p>
            </div>
            <div className="border-t border-[#d0d7e2] pt-3 md:border-t-0 md:pt-0 md:pl-4 md:border-l">
              <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#b8860b]">Reality</p>
              <p className="mt-1 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">It&apos;s often the most legally safe and accurate answer you can give.</p>
            </div>
          </div>
          <div className="bg-[#f4f7fb] px-4 py-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#8b0000]">Myth</p>
              <p className="mt-1 font-['Georgia'] text-[14px] leading-[1.45] text-[#1b2a4a]">My attorney can fix bad answers later with the errata sheet.</p>
            </div>
            <div className="border-t border-[#d0d7e2] pt-3 md:border-t-0 md:pt-0 md:pl-4 md:border-l">
              <p className="font-['Arial'] text-[12px] font-bold uppercase text-[#b8860b]">Reality</p>
              <p className="mt-1 font-['Georgia'] text-[14px] leading-[1.45] text-[#555555]">Errata sheets fix transcription errors only. Your testimony stands.</p>
            </div>
          </div>
        </section>

        <QuoteBox
          label="From Tripathi Vongsyprasom Law"
          accent={gold}
          quote="Deposition testimony builds the foundation of your case. If it cracks during discovery, it rarely holds up at trial. Preparation is the case."
          author="Hardam Tripathi, Tripathi Vongsyprasom Law, P.A."
        />

        <ArticleHeading>
          6. What Happens After Deposition Ends?
        </ArticleHeading>
        <Paragraph>
          You have 30 days to review and sign it. If there are factual transcription errors, you note them on an errata sheet. But substantive answer changes are not permitted. Your testimony stands.
        </Paragraph>
        <Paragraph>
          Both sides receive the transcript. If your case settles, the deposition helped establish its value. If it goes to trial, your words return under cross-examination. Federal courts in Florida stick to national civil procedure guidelines when handling lawsuits. State level personal injury disputes run on local discovery policies instead.
        </Paragraph>
        <Paragraph>
          Are you from Oldsmar, Lakeland, or another part of the Tampa Bay region? Make an appointment for a <DocLink href="/contact">free consultation</DocLink> with Tripathi Vongsyprasom Law if you have an ongoing injury case that is nearing discovery. Make sure to get in touch with us prior to the day of your deposition.
        </Paragraph>

        <section
          className="my-6 px-8 py-6 text-center"
          style={{ backgroundColor: red }}
        >
          <h2 className="font-['Arial'] text-[20px] font-bold leading-tight text-white">
            Ready to Protect Your Personal Injury Case? Let Us Handle It.
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] font-['Georgia'] text-[14px] leading-[1.45] text-[#ffcdd2]">
            Florida&apos;s trusted personal injury attorneys are ready to protect your rights and prepare you for deposition success.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block font-['Arial'] text-[11px] font-bold uppercase tracking-wide text-[#b8860b] underline"
          >
            Talk to an Injury Attorney &gt;&gt;
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
          please consult with a licensed attorney at Tripathi Vongsyprasom Law.
        </p>
      </div>
    </article>
  );
}
