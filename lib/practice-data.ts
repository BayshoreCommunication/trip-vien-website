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
        content:
          "Assault is the intentional threat one person makes toward another, creating a real fear of harm even when no physical contact occurs...",
      },
      {
        title: "Trucking & Motorcycle Accidents",
        slug: "trucking-motorcycle-accidents",
        description:
          "We represent victims of serious trucking and motorcycle crashes, helping them pursue compensation for injuries, damages, and long-term losses.",
        image: "/images/services/img2.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Truck and motorcycle accidents often cause catastrophic injuries...",
      },
      {
        title: "Slip And Fall",
        slug: "slip-and-fall",
        description:
          "We assist individuals injured due to unsafe property conditions in seeking fair compensation and justice.",
        image: "/images/services/img3.png",
        details_img: "/images/services/car-accident.png",
        content: "Property owners have a duty to keep their premises safe...",
      },
      {
        title: "Medical Malpractice",
        slug: "medical-malpractice",
        description:
          "We represent patients harmed by medical errors, negligence, or improper treatment. Our focus is on holding providers accountable and securing fair compensation.",
        image: "/images/services/img4.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Doctors and hospitals must meet professional standards of care...",
      },
      {
        title: "Nursing Home Negligence",
        slug: "nursing-home-negligence",
        description:
          "We advocate for residents harmed by neglect, abuse, or inadequate care in nursing facilities. Our team works to protect their rights and seek justice for affected families.",
        image: "/images/services/img5.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Doctors and hospitals must meet professional standards of care...",
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
        details_img: "/images/services/car-accident.png",
        content:
          "We assist lawful permanent residents with eligibility review, application preparation, interview readiness, and final approval for U.S. citizenship.",
      },
      {
        title: "Green Card Through Marriage",
        slug: "green-card-through-marriage",
        description:
          "Marriage-based green card representation for spouses of U.S. citizens and residents.",
        image: "/images/services/img2.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our firm handles marriage-based petitions, adjustment of status, consular processing, and interview preparation.",
      },
      {
        title: "Green Card Through Family Preference Categories",
        slug: "green-card-family-preference",
        description:
          "Family-sponsored green card petitions under preference categories.",
        image: "/images/services/img3.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist eligible family members with priority date tracking, filings, and visa availability issues.",
      },
      {
        title: "Green Card Through Immediate Relatives",
        slug: "green-card-immediate-relatives",
        description:
          "Green card services for immediate relatives of U.S. citizens.",
        image: "/images/services/img4.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Includes spouses, parents, and unmarried children under 21 of U.S. citizens.",
      },
      {
        title: "EB-1, EB-2, EB-3 Practice",
        slug: "employment-based-visas",
        description: "Employment-based immigrant visa representation.",
        image: "/images/services/img5.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist professionals, skilled workers, and employers with EB-1, EB-2, and EB-3 petitions.",
      },
      {
        title: "Department of Labor Processing",
        slug: "department-of-labor-processing",
        description: "PERM labor certification and DOL compliance services.",
        image: "/images/services/img6.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We guide employers through recruitment, wage determinations, and labor certification filings.",
      },
      {
        title: "E-2 Treaty Investor Visa Processing",
        slug: "e2-investor-visa",
        description: "Investor visa services for treaty country nationals.",
        image: "/images/services/img7.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist investors with E-2 visa applications, renewals, and compliance requirements.",
      },
      {
        title: "L-1 Multinational Executive Practice",
        slug: "l1-multinational-executive",
        description:
          "Intra-company transfer visas for executives and managers.",
        image: "/images/services/img8.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our firm supports multinational companies with L-1A and L-1B petitions.",
      },
      {
        title: "O Visas",
        slug: "o-visas",
        description: "Visas for individuals with extraordinary ability.",
        image: "/images/services/img9.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist artists, athletes, and professionals with O-1 visa applications and extensions.",
      },
      {
        title: "U Visa",
        slug: "u-visa",
        description: "Immigration relief for victims of qualifying crimes.",
        image: "/images/services/img10.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We help eligible crime victims obtain lawful status and work authorization through U visas.",
      },
      {
        title: "T Visa",
        slug: "t-visa",
        description: "Immigration protection for victims of human trafficking.",
        image: "/images/services/img11.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our firm represents trafficking victims seeking safety and lawful immigration status.",
      },
      {
        title: "VAWA",
        slug: "vawa",
        description: "Self-petitions for survivors of domestic abuse.",
        image: "/images/services/img12.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist eligible applicants with VAWA self-petitions confidentially and compassionately.",
      },
      {
        title: "Asylum",
        slug: "asylum",
        description:
          "Protection-based relief for individuals fearing persecution.",
        image: "/images/services/img13.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We represent asylum seekers in affirmative and defensive asylum cases.",
      },
      {
        title: "Criminal & Provisional Waiver Practice",
        slug: "criminal-provisional-waivers",
        description: "Waivers for grounds of inadmissibility.",
        image: "/images/services/img14.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We prepare I-601, I-601A, and other waivers to overcome immigration barriers.",
      },
      {
        title: "Visas (B1/B2, R, H-1B)",
        slug: "nonimmigrant-visas",
        description:
          "Non-immigrant visa services for work, travel, and religious purposes.",
        image: "/images/services/img15.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist with visitor, religious worker, and specialty occupation visas.",
      },
      {
        title: "National Visa Center Processing",
        slug: "national-visa-center-processing",
        description:
          "Case preparation and document submission through the NVC.",
        image: "/images/services/img16.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our firm manages NVC correspondence, fees, and document qualification.",
      },
      {
        title: "Consular Interviews",
        slug: "consular-interviews",
        description:
          "Preparation and representation for U.S. consular interviews.",
        image: "/images/services/img17.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We prepare clients for visa interviews and address consular concerns.",
      },
      {
        title: "DS-160 & DS-260 Visa Processing",
        slug: "ds160-ds260-processing",
        description: "Accurate completion of visa application forms.",
        image: "/images/services/img18.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We ensure proper submission of non-immigrant and immigrant visa applications.",
      },
      {
        title: "Passports",
        slug: "passports",
        description: "Assistance with U.S. passport applications and issues.",
        image: "/images/services/img19.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We help with new passport applications, renewals, and corrections.",
      },
      {
        title: "I-94 Practice",
        slug: "i94-practice",
        description: "Legal assistance with I-94 records and corrections.",
        image: "/images/services/img20.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We resolve admission record issues to maintain lawful status.",
      },
      {
        title: "Re-Entry and Advance Parole",
        slug: "reentry-advance-parole",
        description: "Travel authorization and lawful re-entry services.",
        image: "/images/services/img21.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist with advance parole and re-entry permits for international travel.",
      },
      {
        title: "Congressional Assistance",
        slug: "congressional-assistance",
        description: "Help resolving delayed or complex immigration matters.",
        image: "/images/services/img22.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We work with congressional offices to address case delays and agency issues.",
      },
      {
        title: "Import-Export Practice",
        slug: "import-export-practice",
        description: "Legal guidance on trade and border-related matters.",
        image: "/images/services/img23.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist businesses with compliance, documentation, and CBP-related issues.",
      },
      {
        title: "Crimmigration",
        slug: "crimmigration",
        description:
          "Defense where criminal law and immigration law intersect.",
        image: "/images/services/img19.png",
        details_img: "/images/services/legal-documents.png",
        content:
          "We analyze criminal charges and convictions to minimize immigration consequences and protect legal status.",
      },
      {
        title: "Master Calendar Hearings",
        slug: "master-calendar-hearings",
        description: "Representation at initial immigration court hearings.",
        image: "/images/services/img15.png",
        details_img: "/images/services/courtroom.png",
        content:
          "We represent clients at master calendar hearings, handling pleadings, filings, and procedural matters before the immigration court.",
      },
      {
        title: "Individual Hearings",
        slug: "individual-hearings",
        description: "Full representation during immigration court trials.",
        image: "/images/services/img16.png",
        details_img: "/images/services/courtroom.png",
        content:
          "Our attorneys present evidence, examine witnesses, and advocate before immigration judges during individual hearings.",
      },
    ],
  },

  "criminal-defense": {
    title: "DUI & Defense Services",
    services: [
      {
        title: "Motion Practice",
        slug: "motion-practice",
        description:
          "Strategic motion filing in immigration and criminal cases.",
        image: "/images/services/img17.png",
        details_img: "/images/services/legal-documents.png",
        content:
          "We prepare and file motions to reopen, reconsider, terminate proceedings, and address legal or procedural issues.",
      },
      {
        title: "Bond Redetermination Hearings",
        slug: "bond-redetermination-hearings",
        description: "Advocacy for bond reduction or release from detention.",
        image: "/images/services/img18.png",
        details_img: "/images/services/courtroom.png",
        content:
          "We represent detained individuals seeking bond redetermination while immigration cases are pending.",
      },

      {
        title: "DUI Defense",
        slug: "dui-defense",
        description: "Aggressive defense against DUI charges.",
        image: "/images/services/img13.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our defense strategies focus on challenging evidence, procedural errors, and negotiating reduced charges.",
      },
      {
        title: "Traffic Tickets",
        slug: "traffic-tickets",
        description: "Defense against traffic violations and citations.",
        image: "/images/services/img14.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We help clients contest traffic tickets, reduce penalties, and protect their driving records.",
      },
    ],
  },
};
