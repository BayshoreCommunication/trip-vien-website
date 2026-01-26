export interface TeamMember {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  image: string;

  bio: string[];
  extendedBio?: string[];
  philosophy?: string[];

  education?: string[];
  barAdmissions?: string[];
  courtAdmissions?: string[];

  dark?: boolean;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Hardam Tripathi, Esq.",
    title: "U.S. Immigration Attorney",
    subtitle: "",
    image: "/images/about/hardam-tripathi.png",
    dark: true,

    bio: [
      "At Tripathi Vongsyprasom  Law P.A we set out to create a unique law firm where outstanding immigration representation and a deep commitment to humanity go hand in hand.",
      "Attorney Hardam Tripathi is a former legal professional in the federal government. He believes in providing honest, compassionate, and results-driven representation.",
      "Law is home to some of the most experienced lawyers in immigration law. The firm’s growth has been fueled by excellence, integrity, and a hard-earned reputation for quality.",
      "Attorney Tripathi specializes in U.S. Immigration and Nationality Law, with a focus on Business & Investor-Based Immigration, including Treaty-Based Investor Visas (E-2), Citizenship by Investment (Golden Visas), Employment-Based visas (EB-2, EB-3, EB-4, EB-5), and commercial real estate investments.",
      "He also zealously advocates for family-based immigration matters, including waivers of inadmissibility, adjustment of status, citizenship/naturalization, and visa & green card services.",
    ],

    extendedBio: [
      "Prior to launching his own firm, Tripathi served as a management consultant with a Big Four firm, advising clients on strategic risk intelligence and risk management in government and public services.",
      "He has worked with multiple firms in Florida, assisting clients with regulatory and policy guidance related to federal and state government programs.",
      "Tripathi devotes significant time to encouraging best practices in immigration law and regularly meets with members of Congress to advocate for funding related to public health initiatives and immigrant communities.",
      "He actively lobbies Congress for immigration veterans and displaced individuals affected by geopolitical conflicts, helping clients navigate complex global and federal immigration laws with confidence.",
    ],

    education: [
      "Western Michigan University Cooley Law School, J.D., Homeland & National Security Law, 2017",
      "University of Florida, M.S. in Pharmaceutical Policy, 2014",
      "University of South Florida, B.S. in Business Management & Marketing, 2012",
    ],

    barAdmissions: ["State Bar of Wisconsin", "District of Columbia Bar"],

    courtAdmissions: [
      "United States Court of Appeals for the Seventh Circuit",
      "United States District Court for the Western District of Wisconsin",
      "United States District Court for the Eastern District of Wisconsin",
      "United States Immigration Courts",
      "Supreme Court of Wisconsin",
      "Red Cliff Band of Lake Superior Chippewa Tribal Court",
      "District of Columbia Court of Appeals",
    ],
  },

  {
    id: 2,
    name: "Viengphone Vongsyrprasom, Esq.",
    title: "U.S. Immigration Attorney",
    subtitle: ".",
    image: "/images/about/viengphone.jpeg",

    bio: [
      "Attorney Vongsyprasom is a compassionate and strategic advocate devoted to helping clients navigate some of life’s most challenging legal situations.",
      "She focuses her practice on U.S. Immigration and Nationality Law, DUI Defense, and Personal Injury Litigation, offering clients the skill, empathy, and dedication they deserve.",
      "Her immigration practice covers a wide range of cases, including family-based visa petitions, marriage-based green cards, adjustment of status, consular processing, citizenship and naturalization, and waivers of inadmissibility such as I-601 and I-601A.",
      "She also represents clients in removal (deportation) defense, bond hearings, motions to reopen or reconsider, and humanitarian cases such as VAWA self-petitions, U visas for victims of crime, and humanitarian parole.",
      "Her deep understanding of the U.S. immigration system and her fierce advocacy style have helped countless families stay together and achieve stability in the United States.",
    ],

    extendedBio: [
      "As a DUI defense attorney, Ms. Vongsyprasom provides strong, client-focused representation for individuals facing charges that threaten their freedom or immigration status.",
      "In her personal injury practice, Ms. Vongsyprasom brings unique experience as a former staff counsel for Government Employees Insurance Company (GEICO).",
      "Before co-founding Tripathi Vongsyprasom Law, P.A., she practiced landlord-tenant disputes, homeowners association defense, family law, and criminal defense.",
    ],

    philosophy: [
      "Attorney Vongsyprasom believes in providing honest, compassionate, and results-driven representation.",
      "She understands that behind every case is a person or family with dreams, fears, and goals.",
    ],

    education: [
      "Western Michigan University Cooley Law School, J.D., 2018",
      "University of South Florida, B.S. in Criminology, 2013",
    ],

    barAdmissions: ["The Florida Bar"],

    courtAdmissions: [
      "United States Immigration Courts",
      "Supreme Court of Florida",
    ],
  },

  {
    id: 3,
    name: "Arjo Neel",
    title: "E2 & EB-5 Business Immigration Consultant",
    subtitle: "Non-Attorney Business Immigration Consultant",
    image: "/images/about/arjo-neel.png",
    dark: true,
    bio: [
      "Arjo Neel is a seasoned professional in the field of business immigration consulting, with a robust career spanning four years marked by exceptional achievements and contributions to the industry. Throughout this period, Arjo has leveraged his expertise to provide invaluable guidance on numerous immigration projects, demonstrating a keen understanding of intricate legal and financial requirements.",

      "During his tenure, Arjo has successfully consulted on and written business plans for over 50 projects, focusing primarily on investment-based immigration pathways such as the E-2 and EB-5 visa programs. His proficiency in navigating complex financial landscapes, including managing intricate money trails and documentation, has been instrumental in securing successful visa applications for his clients.",

      "Arjo Neel's professional portfolio includes collaborations with a diverse range of clients, including franchises, startups, and new business formations. His adeptness at tailoring business plans to meet immigration criteria and ensure viability underscores his commitment to facilitating his clients' immigration goals effectively.",
    ],

    extendedBio: [
      "In addition to his role as a business plan writer and consultant, Arjo has cultivated strong partnerships with immigration attorneys, enabling him to stay abreast of legal developments and intricacies affecting immigration policies. This collaboration ensures that his clients receive comprehensive and up-to-date advice, mitigating risks associated with legal complexities.",

      "Arjo Neel's brief yet impactful career in business immigration consulting reflects his dedication to excellence, client-centric approach, and deep-rooted commitment to facilitating successful immigration journeys through sound business strategies. His contributions have solidified his reputation as a trusted advisor and pivotal figure within the industry, paving the way for continued success and innovation in the field of business immigration consulting.",
    ],
  },

  {
    id: 4,
    name: "Sakawat Hossain",
    title: "Senior Associate Paralegal",
    subtitle: "",
    image: "/images/about/sakawat-hossain.png",

    bio: [
      "Sakawat Hossain is currently in charge of Trip Vien Law, P.A., overseeing the entire lifecycle of legal cases and ensuring their progress. Sakawat Hossain is currently in charge of Trip Vien Law, P.A., overseeing the entire lifecycle of legal cases and ensuring they progress smoothly from initiation to resolution. ",
      "This includes managing deadlines, tracking case developments, and coordinating with all parties involved. You serve as a primary point of contact for the client, maintaining regular communication to update them on.",
    ],
  },

  {
    id: 5,
    name: "S. M. Faisal Abrar",
    title: "Senior Case Manager",
    subtitle: "",
    image: "/images/about/sm-faisal-abrar.png",
    dark: true,
    bio: [
      "S. M. Faisal Abrar, is a practitioner lawyer in Bangladesh Obtained his LLB from AMERICAN INTERNATIONAL UNIVERSITY BANGLADESH & LLM from NORTH SOUTH UNIVERSITY. He specialized in Human Rights Law as his published documentary about Rohingya Refugees was exhibited at University of Barcelona, in Spain.",

      "Currently Abrar serves as a Senior Paralegal at Trip Vien Law, P.A. He has adequate knowledge on family based immigration matters involving processing of Green Cards, Citizenship, and Visa matters with respect to the U.S. Department of Homeland Security’s Citizenship and Immigration Services and the U.S. Department of State’s Bureau of Consular Affairs, respectively.",
    ],

    education: [
      "American International University Bangladesh, Bachelor of Law (LL.B), 2021",
      "North South University, Bangladesh, Master of Laws (LL.M), 2023",
    ],

    courtAdmissions: [
      "Supreme Court of Bangladesh",
      "Court of Metropolitan Magistrate",
    ],
  },
];
