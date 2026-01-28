export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  details_img: string;
  content: string;
};

export type PracticeArea = {
  title: string;
  services: Service[];
};

export const PRACTICE_DATA: Record<string, PracticeArea> = {
  "personal-injury": {
  title: "Personal Injury Services",
  services: [
    {
      title: "Car Accidents",
      slug: "car-accidents",
      description:
        "We help victims of car accidents recover compensation for injuries, damages, and losses caused by negligent drivers.",
      image: "/images/services/img1.png",
      details_img: "/images/services/car-accident.png",
      content: `
Car accidents can cause serious injuries, emotional trauma, and unexpected financial stress for victims and their families. Negligent behaviors such as distracted driving, speeding, drunk driving, or reckless actions often lead to preventable crashes. Victims may face mounting medical bills, vehicle repair costs, and lost income while trying to recover physically and emotionally.

Our legal team conducts a thorough investigation of each accident, reviewing police reports, medical records, and witness statements. We work to identify all responsible parties and hold negligent drivers accountable for their actions. Insurance companies often attempt to reduce or deny claims, but we aggressively negotiate on your behalf.

If a fair settlement cannot be reached, we are fully prepared to take your case to court. Our goal is to secure maximum compensation while allowing you to focus on healing. We are committed to protecting your rights and guiding you through every step of the legal process.
      `,
    },
    {
      title: "Trucking & Motorcycle Accidents",
      slug: "trucking-motorcycle-accidents",
      description:
        "We represent victims of serious trucking and motorcycle crashes, helping them pursue compensation for injuries, damages, and long-term losses.",
      image: "/images/services/img2.png",
      details_img: "/images/services/Trucking-&-Motorcycle-Accidents.png",
      content: `
Trucking and motorcycle accidents often result in severe or life-altering injuries due to the size and force involved in these collisions. Victims may suffer from spinal injuries, traumatic brain injuries, broken bones, or permanent disabilities. Motorcyclists are especially vulnerable and are frequently unfairly blamed for accidents they did not cause.

These cases often involve complex legal issues, including multiple liable parties such as trucking companies, drivers, manufacturers, and insurers. Our attorneys carefully investigate every aspect of the crash, including driver logs, vehicle maintenance records, and safety violations. We work diligently to build a strong case supported by expert testimony.

Our firm fights to recover compensation for medical expenses, rehabilitation, lost wages, and long-term care needs. We stand up to powerful insurance companies and corporations to protect your rights. Our commitment is to pursue justice and secure the compensation you deserve.
      `,
    },
    {
      title: "Slip And Fall",
      slug: "slip-and-fall",
      description:
        "We assist individuals injured due to unsafe property conditions in seeking fair compensation and justice.",
      image: "/images/services/img3.png",
      details_img: "/images/services/Slip-and-Fall.png",
      content: `
Slip and fall accidents can occur in stores, apartment buildings, workplaces, or public areas due to unsafe conditions. Wet floors, uneven surfaces, poor lighting, or broken stairs can lead to serious injuries. Victims often experience fractures, head injuries, back pain, or long-term mobility issues.

Property owners have a legal responsibility to maintain safe premises for visitors. When they fail to address hazardous conditions, they may be held liable for resulting injuries. Our legal team investigates whether the property owner knew or should have known about the danger.

We gather evidence such as maintenance records, surveillance footage, and witness statements to support your claim. Our goal is to secure compensation for medical expenses, lost wages, and pain and suffering. We work diligently to hold negligent property owners accountable.
      `,
    },
    {
      title: "Medical Malpractice",
      slug: "medical-malpractice",
      description:
        "We represent patients harmed by medical errors, negligence, or improper treatment. Our focus is on holding providers accountable and securing fair compensation.",
      image: "/images/services/img4.png",
      details_img: "/images/services/Medical-Malpractice.png",
      content: `
Medical malpractice occurs when a healthcare provider fails to meet the accepted standard of care, causing harm to a patient. Common examples include misdiagnosis, surgical errors, medication mistakes, or delayed treatment. These errors can lead to serious injury, worsening conditions, or even wrongful death.

Medical malpractice cases are complex and require a detailed review of medical records and expert analysis. Our attorneys work closely with qualified medical professionals to identify negligence and establish liability. We carefully evaluate every aspect of your care to build a strong case.

Our firm seeks compensation for medical expenses, future treatment, lost income, and emotional suffering. We are committed to holding negligent providers accountable and protecting patient safety. Your trust in medical professionals should never result in preventable harm.
      `,
    },
    {
      title: "Nursing Home Negligence",
      slug: "nursing-home-negligence",
      description:
        "We advocate for residents harmed by neglect, abuse, or inadequate care in nursing facilities. Our team works to protect their rights and seek justice for affected families.",
      image: "/images/services/img5.png",
      details_img: "/images/services/Nursing-Home-Negligence.png",
      content: `
Nursing home negligence can place elderly and vulnerable residents at serious risk. Neglect may include poor hygiene, lack of medical attention, malnutrition, dehydration, or unsafe living conditions. In some cases, residents may also suffer physical or emotional abuse.

Families trust nursing facilities to provide safe and compassionate care for their loved ones. When that trust is violated, it can have devastating consequences. Our legal team investigates facility records, staff conduct, and compliance with state and federal regulations.

We work to hold negligent nursing homes accountable and seek compensation for medical treatment, pain, and emotional trauma. Our goal is to protect residents’ dignity and prevent future harm. We stand with families in their pursuit of justice.
      `,
    },
  ],
},

  immigration: {
  title: "Immigration Services",
  services: [
    {
      title: "Citizenship & Naturalization Services",
      slug: "citizenship-naturalization-services",
      description:
        "Legal guidance through the U.S. citizenship and naturalization process.",
      image: "/images/services/img1.png",
      details_img: "/images/services/citizenship-naturalization-services.png",
      content: `
U.S. citizenship is an important milestone that provides long-term security, voting rights, and full participation in civic life. Many lawful permanent residents are eligible to apply for naturalization but face challenges understanding eligibility requirements and documentation rules. Mistakes or omissions in the application process can lead to delays or denials.

Our firm carefully reviews your immigration history, residency requirements, and eligibility criteria before preparing your naturalization application. We assist with Form N-400 preparation, document collection, and submission to USCIS. Clients also receive guidance on English and civics requirements.

We prepare applicants for the citizenship interview and test, ensuring confidence and readiness. If issues arise, we respond promptly and effectively. Our goal is to guide you smoothly toward becoming a U.S. citizen.
      `,
    },
    {
      title: "Green Card Through Marriage",
      slug: "green-card-through-marriage",
      description:
        "Marriage-based green card representation for spouses of U.S. citizens and residents.",
      image: "/images/services/img2.png",
      details_img: "/images/services/green-card-through-marriage.png",
      content: `
Marriage-based immigration allows U.S. citizens and lawful permanent residents to sponsor their spouses for a green card. These cases require strong evidence to prove the marriage is bona fide and not entered into for immigration purposes. Even genuine couples may face intense scrutiny.

Our firm assists clients with adjustment of status or consular processing depending on their circumstances. We prepare all required forms, supporting documents, and affidavits to establish a valid marital relationship. Interview preparation is a key part of our service.

If USCIS raises concerns or issues a Request for Evidence, we respond strategically. Our priority is protecting your relationship and guiding you toward lawful permanent residence with confidence.
      `,
    },
    {
      title: "Green Card Through Family Preference Categories",
      slug: "green-card-family-preference",
      description:
        "Family-sponsored green card petitions under preference categories.",
      image: "/images/services/img3.png",
      details_img:
        "/images/services/green-card-through-family-preference-categories.png",
      content: `
Family preference immigration allows U.S. citizens and lawful permanent residents to sponsor certain relatives for green cards. These cases are subject to annual visa limits and long waiting periods based on priority dates. Understanding the visa bulletin is critical.

We help families file petitions correctly and track priority dates over time. Our attorneys guide clients through document preparation, eligibility requirements, and government processing stages. Proper planning can help avoid unnecessary delays.

When visas become available, we assist with adjustment of status or consular processing. Our firm remains engaged throughout the process to ensure families stay informed and prepared.
      `,
    },
    {
      title: "Green Card Through Immediate Relatives",
      slug: "green-card-immediate-relatives",
      description:
        "Green card services for immediate relatives of U.S. citizens.",
      image: "/images/services/img4.png",
      details_img:
        "/images/services/green-card-through-immediate-relatives.png",
      content: `
Immediate relatives of U.S. citizens include spouses, parents, and unmarried children under the age of 21. These cases are not subject to annual visa caps, which often allows faster processing. However, proper documentation is still essential.

Our firm assists clients with petition filings, adjustment of status, or consular processing. We ensure all forms and supporting evidence meet USCIS standards. Each case is carefully reviewed for admissibility issues.

We also prepare clients for interviews and respond to government requests. Our focus is reuniting families as efficiently and securely as possible.
      `,
    },
    {
      title: "EB-1, EB-2, EB-3 Practice",
      slug: "employment-based-visas",
      description: "Employment-based immigrant visa representation.",
      image: "/images/services/img5.png",
      details_img: "/images/services/eb-1-eb-2-eb-3.png",
      content: `
Employment-based immigrant visas allow professionals, skilled workers, and other employees to obtain permanent residence in the United States. Each preference category has specific eligibility requirements and documentation standards. These cases often involve both the employer and the employee.

We assist with EB-1, EB-2, and EB-3 petitions, including National Interest Waivers where applicable. Our firm coordinates with employers to ensure compliance with immigration and labor regulations. Strong evidence is prepared to support qualifications and job requirements.

We guide clients through priority dates, adjustments, and consular processing. Our goal is securing long-term work authorization and permanent residency.
      `,
    },

    {
      title: "Department of Labor Processing",
      slug: "department-of-labor-processing",
      description: "PERM labor certification and DOL compliance services.",
      image: "/images/services/img6.png",
      details_img: "/images/services/department-of-labor-processing.png",
      content: `
PERM labor certification is often the first step in many employment-based green card cases. Employers must demonstrate that no qualified U.S. workers are available for the position. The process requires strict compliance with Department of Labor regulations.

Our firm guides employers through prevailing wage determinations, recruitment procedures, and PERM filings. We ensure job advertisements and recruitment efforts meet regulatory standards. Accuracy at this stage is critical.

We work proactively to reduce risks of audits or denials. Our goal is a smooth labor certification process that supports the overall immigration strategy.
      `,
    },

    {
      title: "E-2 Treaty Investor Visa Processing",
      slug: "e2-investor-visa",
      description: "Investor visa services for treaty country nationals.",
      image: "/images/services/img7.png",
      details_img: "/images/services/e-2-treaty-investor-visa-processing.png",
      content: `
The E-2 visa allows nationals of treaty countries to invest in and operate a U.S. business. Applicants must make a substantial investment and actively direct the enterprise. Proper planning and documentation are essential.

We assist investors with business structuring, investment documentation, and visa applications. Our firm ensures compliance with E-2 requirements for ownership, control, and source of funds. Renewals and extensions are also handled.

Our goal is helping investors establish lawful status while building successful businesses in the United States.
      `,
    },

    {
      title: "L-1 Multinational Executive Practice",
      slug: "l1-multinational-executive",
      description:
        "Intra-company transfer visas for executives and managers.",
      image: "/images/services/img8.png",
      details_img:
        "/images/services/l-1-multinational-executive-practice.png",
      content: `
The L-1 visa allows multinational companies to transfer executives, managers, and specialized employees to the United States. These cases require proof of qualifying corporate relationships and job duties. USCIS often applies strict scrutiny.

We assist with L-1A and L-1B petitions, including new office filings. Our firm prepares detailed organizational charts, job descriptions, and business plans. Compliance is carefully maintained.

We support both employers and employees through approvals, extensions, and transitions to permanent residence.
      `,
    },

    {
      title: "O Visas",
      slug: "o-visas",
      description: "Visas for individuals with extraordinary ability.",
      image: "/images/services/img9.png",
      details_img: "/images/services/o-visas.png",
      content: `
O visas are available to individuals who demonstrate extraordinary ability in fields such as science, business, arts, athletics, or education. These cases require strong evidence of national or international recognition. Documentation standards are high.

We assist clients in building persuasive petitions supported by awards, publications, contracts, and expert opinions. Each case is tailored to the applicant’s field and achievements. Advisory opinions are also coordinated.

Our goal is helping talented individuals continue their work legally in the United States with confidence.
      `,
    },

    {
      title: "U Visa",
      slug: "u-visa",
      description: "Immigration relief for victims of qualifying crimes.",
      image: "/images/services/img10.png",
      details_img: "/images/services/u-visa.png",
      content: `
The U visa provides protection and legal status to victims of certain crimes who assist law enforcement. These cases involve sensitive circumstances and strict eligibility requirements. Confidentiality and care are essential.

We assist clients with certification requirements, petition filings, and work authorization requests. Our firm coordinates with law enforcement agencies as needed. Each case is handled with compassion.

Our focus is helping victims gain safety, stability, and lawful status in the United States.
      `,
    },

    {
      title: "T Visa",
      slug: "t-visa",
      description: "Immigration protection for victims of human trafficking.",
      image: "/images/services/img11.png",
      details_img: "/images/services/t-visa.png",
      content: `
The T visa is designed to protect victims of human trafficking who are present in the United States. Applicants must demonstrate severe exploitation and cooperation with authorities where appropriate. These cases are highly sensitive.

Our firm represents trafficking survivors with confidentiality and respect. We assist with status applications, work authorization, and family derivative benefits. Evidence is handled carefully.

We are committed to helping survivors rebuild their lives with legal protection and dignity.
      `,
    },

    {
      title: "VAWA",
      slug: "vawa",
      description: "Self-petitions for survivors of domestic abuse.",
      image: "/images/services/img12.png",
      details_img: "/images/services/vawa.png",
      content: `
VAWA allows certain abused spouses, children, and parents of U.S. citizens or residents to self-petition for immigration benefits. These cases provide protection without requiring the abuser’s involvement. Privacy and safety are paramount.

We assist clients with confidential filings, evidence preparation, and work authorization requests. Each case is approached with compassion and care. Trauma-informed representation is essential.

Our goal is helping survivors gain independence, safety, and lawful status.
      `,
    },

    {
      title: "Asylum",
      slug: "asylum",
      description:
        "Protection-based relief for individuals fearing persecution.",
      image: "/images/services/img13.png",
      details_img: "/images/services/asylum.png",
      content: `
Asylum protects individuals who fear persecution based on race, religion, nationality, political opinion, or social group. These cases require credible testimony and strong supporting evidence. Deadlines are critical.

We represent clients in both affirmative and defensive asylum cases. Our firm prepares detailed statements, country condition evidence, and legal arguments. Interview and hearing preparation is extensive.

We are committed to protecting human rights and securing safety for vulnerable individuals.
      `,
    },

    {
      title: "Criminal & Provisional Waiver Practice",
      slug: "criminal-provisional-waivers",
      description: "Waivers for grounds of inadmissibility.",
      image: "/images/services/img14.png",
      details_img: "/images/services/criminal-provisional-waiver.png",
      content: `
Certain criminal or immigration violations can make individuals inadmissible to the United States. Waivers may allow eligible applicants to overcome these barriers. Each case requires a detailed hardship analysis.

We prepare I-601, I-601A, and related waiver applications. Our firm builds strong evidence demonstrating extreme hardship to qualifying relatives. Strategy and precision are essential.

Our goal is restoring immigration eligibility and reuniting families lawfully.
      `,
    },
      {
  title: "Visas (B1/B2, R, H-1B)",
  slug: "nonimmigrant-visas",
  description:
    "Non-immigrant visa services for work, travel, and religious purposes.",
  image: "/images/services/img15.png",
  details_img: "/images/services/visas-b1-b2-r-h-1b.png",
  content: `
Non-immigrant visas allow individuals to enter the United States temporarily for specific purposes such as travel, employment, or religious activities. Each visa category has strict eligibility requirements and documentation standards. Even small errors can result in delays or denials.

We assist clients with B1/B2 visitor visas, R religious worker visas, and H-1B specialty occupation visas. Our firm carefully evaluates eligibility, prepares accurate applications, and ensures compliance with U.S. immigration regulations. Supporting documents are reviewed thoroughly to avoid inconsistencies.

We also provide interview preparation and guidance on maintaining lawful status. Our goal is to help clients enter and remain in the United States legally and confidently.
  `,
},
{
  title: "National Visa Center Processing",
  slug: "national-visa-center-processing",
  description:
    "Case preparation and document submission through the NVC.",
  image: "/images/services/img16.png",
  details_img: "/images/services/national-visa-center-processing.png",
  content: `
National Visa Center processing is a critical step in many family-based and employment-based immigration cases. The NVC reviews documents, collects fees, and ensures cases are complete before scheduling consular interviews. Errors at this stage can cause long delays.

Our firm manages all NVC correspondence, fee payments, and document submissions on behalf of clients. We ensure that civil documents, financial affidavits, and supporting evidence meet government requirements. Each submission is carefully reviewed for accuracy.

We track case progress and respond promptly to NVC requests. Our objective is to move your case efficiently toward interview scheduling and visa issuance.
  `,
},
{
  title: "Consular Interviews",
  slug: "consular-interviews",
  description:
    "Preparation and representation for U.S. consular interviews.",
  image: "/images/services/img17.png",
  details_img: "/images/services/consular-interviews.png",
  content: `
Consular interviews are a decisive stage in the visa application process. Officers evaluate eligibility, credibility, and admissibility during a short but critical interview. Proper preparation can significantly affect the outcome.

We prepare clients by reviewing potential questions, documents, and interview procedures. Our firm addresses prior immigration issues, security concerns, and eligibility challenges in advance. Mock interviews may be conducted to build confidence.

If concerns arise during the interview, we provide guidance on next steps and follow-up actions. Our goal is to help clients attend interviews prepared, confident, and informed.
  `,
},
{
  title: "DS-160 & DS-260 Visa Processing",
  slug: "ds160-ds260-processing",
  description: "Accurate completion of visa application forms.",
  image: "/images/services/img18.png",
  details_img: "/images/services/ds-160-ds-260-visa-processing.png",
  content: `
The DS-160 and DS-260 forms are essential components of non-immigrant and immigrant visa applications. These forms require detailed personal, travel, and background information. Inconsistencies or errors can lead to delays or refusals.

Our firm ensures accurate and consistent completion of all visa forms. We review prior immigration history, employment records, and personal details to prevent conflicts. Every response is carefully verified.

We also guide clients through submission confirmation and interview scheduling. Our focus is accuracy, compliance, and smooth case progression.
  `,
},
{
  title: "Passports",
  slug: "passports",
  description: "Assistance with U.S. passport applications and issues.",
  image: "/images/services/img19.png",
  details_img: "/images/services/passports.png",
  content: `
A valid U.S. passport is essential for international travel and proof of citizenship. Passport applications may involve first-time filings, renewals, name changes, or corrections. Mistakes can result in processing delays.

We assist clients with preparing passport applications and gathering required documentation. Our firm ensures compliance with Department of State requirements. Special cases involving lost or damaged passports are also handled.

Our goal is timely approval and accurate issuance so clients can travel without complications.
  `,
},
{
  title: "I-94 Practice",
  slug: "i94-practice",
  description: "Legal assistance with I-94 records and corrections.",
  image: "/images/services/img20.png",
  details_img: "/images/services/i-94-practice.png",
  content: `
The I-94 record determines a noncitizen’s lawful period of stay in the United States. Errors in admission dates or visa classifications can create serious legal issues. These mistakes often occur at ports of entry.

We assist clients in reviewing and correcting I-94 records. Our firm works with CBP and other agencies to resolve discrepancies. Timely corrections help prevent overstays or status violations.

Our objective is protecting lawful status and preventing future immigration complications.
  `,
},
{
  title: "Re-Entry and Advance Parole",
  slug: "reentry-advance-parole",
  description: "Travel authorization and lawful re-entry services.",
  image: "/images/services/img21.png",
  details_img: "/images/services/re-entry-and-advance-parole.png",
  content: `
Advance parole and re-entry permits allow certain individuals to travel internationally without abandoning their immigration applications. Traveling without proper authorization can result in denial of re-entry. Planning is critical.

We assist clients with advance parole applications and re-entry permits. Our firm reviews eligibility and prepares supporting documentation. Travel risks are evaluated carefully.

We help clients maintain lawful status while meeting personal and professional travel needs.
  `,
},
{
  title: "Congressional Assistance",
  slug: "congressional-assistance",
  description: "Help resolving delayed or complex immigration matters.",
  image: "/images/services/img22.png",
  details_img: "/images/services/congressional-assistance.png",
  content: `
Some immigration cases face excessive delays or unresolved agency issues. Congressional assistance may help bring attention to stalled or complex matters. This process requires proper documentation and coordination.

We work with congressional offices to submit inquiries on behalf of clients. Our firm prepares case summaries and supporting materials. Communication with agencies is handled professionally.

Our goal is resolving delays and ensuring government accountability.
  `,
},
{
  title: "Import-Export Practice",
  slug: "import-export-practice",
  description: "Legal guidance on trade and border-related matters.",
  image: "/images/services/img23.png",
  details_img: "/images/services/import-export-practice.png",
  content: `
Import and export activities require compliance with U.S. customs and trade regulations. Errors in documentation or classification can result in penalties or delays. Businesses must follow CBP rules carefully.

We assist companies with compliance, licensing, and documentation. Our firm advises on customs procedures and border-related issues. Risk assessment is a key part of our service.

Our goal is helping businesses operate smoothly while remaining compliant with trade laws.
  `,
},
{
  title: "Crimmigration",
  slug: "crimmigration",
  description:
    "Defense where criminal law and immigration law intersect.",
  image: "/images/services/img19.png",
  details_img: "/images/services/crimmigration.png",
  content: `
Crimmigration involves cases where criminal charges or convictions affect immigration status. Even minor offenses can have serious immigration consequences. Early legal analysis is essential.

We evaluate criminal records to assess immigration impact. Our firm coordinates defense strategies to minimize adverse outcomes. Each case is reviewed carefully.

Our goal is protecting lawful status and preventing removal whenever possible.
  `,
},
{
  title: "Master Calendar Hearings",
  slug: "master-calendar-hearings",
  description: "Representation at initial immigration court hearings.",
  image: "/images/services/img15.png",
  details_img: "/images/services/Master-Calendar-Hearings.png",
  content: `
Master calendar hearings are the first stage of immigration court proceedings. These hearings address procedural matters, pleadings, and scheduling. Mistakes can negatively affect the case.

We represent clients during master calendar hearings and handle all court filings. Our firm ensures proper responses to charges and deadlines. Strategic planning begins at this stage.

Our objective is positioning the case for the best possible outcome.
  `,
},
{
  title: "Individual Hearings",
  slug: "individual-hearings",
  description: "Full representation during immigration court trials.",
  image: "/images/services/img16.png",
  details_img: "/images/services/Individual-Hearings.png",
  content: `
Individual hearings are full trials before an immigration judge. Evidence is presented, witnesses are examined, and legal arguments are made. Preparation is critical.

Our attorneys prepare testimony, exhibits, and legal briefs in advance. We advocate aggressively on behalf of clients during hearings. Every detail is addressed.

Our goal is achieving relief and protecting clients’ rights in immigration court.
  `,
},
{
      title: "Motion Practice",
      slug: "motion-practice",
      description:
        "We provide strategic motion practice in both immigration and criminal cases to protect clients’ rights. Our motions are carefully prepared to challenge legal errors, procedural defects, and improper government actions.",
      image: "/images/services/img17.png",
      details_img: "/images/services/Motion-Practice.png",
      content: `
Motion practice plays a critical role in both criminal and immigration cases. Well-prepared legal motions can correct errors, challenge unlawful procedures, and reopen cases that were previously denied or closed. These motions often determine whether a case moves forward or is dismissed.

Our firm prepares and files a wide range of motions, including motions to reopen, motions to reconsider, and motions to terminate proceedings. Each case is thoroughly reviewed to identify legal flaws, due process violations, or improper government actions. We support every motion with detailed legal arguments and relevant evidence.

Strategic motion practice can significantly change the outcome of a case. Our goal is to protect our clients’ rights, correct injustices, and pursue favorable rulings that move cases toward successful resolution.
      `,
    },
    {
      title: "Bond Redetermination Hearings",
      slug: "bond-redetermination-hearings",
      description:
        "We advocate for detained individuals seeking bond reduction or release from immigration detention. Our representation focuses on demonstrating eligibility, community ties, and lack of flight or safety risk.",
      image: "/images/services/img18.png",
      details_img: "/images/services/bond-redetermination-hearings.png",
      content: `
Bond redetermination hearings provide detained individuals an opportunity to seek release from immigration detention. These hearings require strong legal arguments and persuasive evidence to demonstrate eligibility for bond. Preparation is essential to success.

We represent detained clients before immigration judges and advocate for bond reduction or release. Our attorneys present evidence of family ties, employment history, community involvement, and good moral character. We also address any government concerns related to public safety or flight risk.

Our goal is securing release so clients can continue their cases from outside detention. Effective bond advocacy allows individuals to better prepare their defense and maintain family and employment stability.
      `,
    },

    ],
  },

  "dui-defense": {
  title: "DUI Defense Services",
  services: [
    
    {
      title: "DUI Defense",
      slug: "dui-defense",
      description:
        "We provide aggressive defense for individuals charged with DUI offenses. Our approach focuses on protecting driving privileges, minimizing penalties, and safeguarding our clients’ futures.",
      image: "/images/services/img13.png",
      details_img: "/images/services/dui-defense.png",
      content: `
DUI charges can have serious consequences, including license suspension, fines, increased insurance rates, and possible jail time. For non-citizens, DUI convictions may also affect immigration status. Immediate legal action is crucial.

Our DUI defense strategy is tailored to the facts of each case. We analyze traffic stops, arrest procedures, breath or blood tests, and police reports for legal errors. Unlawful stops, improper testing, or constitutional violations are aggressively challenged.

We negotiate with prosecutors to seek reduced charges or dismissals whenever possible. Our objective is protecting your license, freedom, and long-term future through strong and strategic defense.
      `,
    },
    {
      title: "Traffic Tickets",
      slug: "traffic-tickets",
      description:
        "We defend clients against traffic violations to reduce fines, points, and license consequences. Our representation helps protect driving records and avoid unnecessary penalties.",
      image: "/images/services/img14.png",
      details_img: "/images/services/Traffic-Tickets.png",
      content: `
Traffic violations may seem minor, but they can lead to fines, points on your driving record, license suspension, and higher insurance premiums. Repeated violations can have lasting consequences. Proper legal representation can make a significant difference.

We assist clients in contesting traffic tickets and moving violations. Our firm reviews citations for procedural errors, factual inaccuracies, and legal defenses. Representation in traffic court helps minimize stress and disruption.

Our goal is reducing penalties, protecting driving privileges, and keeping your record clean. Effective traffic ticket defense can save time, money, and long-term consequences.
      `,
    },
  ],
},
};