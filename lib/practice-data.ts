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
        title: "Citizenship & Naturalization",
        slug: "citizenship-naturalization",
        description:
          "We assist clients through the U.S. citizenship and naturalization process, ensuring accurate filings and strong representation.",
        image: "/images/services/img1.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We guide lawful permanent residents through eligibility review, application preparation, interview readiness, and final approval.",
      },
      {
        title: "Family-Based Immigration",
        slug: "family-based-immigration",
        description:
          "We help families reunite through marriage-based green cards and family-sponsored immigration petitions.",
        image: "/images/services/img7.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our firm handles green cards through marriage, immediate relatives, and family preference categories.",
      },
      {
        title: "Business & Investor Immigration",
        slug: "business-investor-immigration",
        description:
          "We provide immigration solutions for investors, professionals, and multinational companies.",
        image: "/images/services/img8.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We assist with EB visas, E-2 treaty investor visas, L-1 transfers, and O visas.",
      },
      {
        title: "Humanitarian Immigration",
        slug: "humanitarian-immigration",
        description:
          "We represent individuals seeking protection-based immigration relief.",
        image: "/images/services/img9.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Includes U visas, T visas, VAWA self-petitions, asylum cases, and immigration waivers.",
      },
      {
        title: "Removal Defense",
        slug: "removal-defense",
        description:
          "We defend individuals facing deportation or removal proceedings in immigration court.",
        image: "/images/services/img10.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Representation includes bond hearings, cancellation of removal, and court defense strategies.",
      },
      {
        title: "Consular Processing",
        slug: "consular-processing",
        description:
          "We assist clients with visa processing through U.S. embassies and consulates worldwide.",
        image: "/images/services/img11.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our services include NVC processing, visa interviews, waivers, and passport matters.",
      },
      {
        title: "CBP Practice",
        slug: "cbp-practice",
        description:
          "We handle matters involving U.S. Customs and Border Protection.",
        image: "/images/services/img12.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Includes I-94 issues, re-entry problems, advance parole, and import/export matters.",
      },
    ],
  },
  "criminal-defense": {
    title: "Criminal Defense Services",
    services: [
      {
        title: "DUI Defense",
        slug: "dui-defense",
        description:
          "We aggressively defend clients charged with DUI to protect their rights, license, and future.",
        image: "/images/services/img13.png",
        details_img: "/images/services/car-accident.png",
        content:
          "Our defense strategies focus on challenging evidence, procedure errors, and negotiating reduced charges.",
      },
      {
        title: "Traffic Tickets",
        slug: "traffic-tickets",
        description:
          "We defend against traffic violations to minimize fines, points, and license suspension.",
        image: "/images/services/img14.png",
        details_img: "/images/services/car-accident.png",
        content:
          "We help clients contest citations and protect their driving records.",
      },
    ],
  },
};
