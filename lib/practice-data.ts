export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
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
        content:
          "Assault is the intentional threat one person makes toward another, creating a real fear of harm even when no physical contact occurs...",
      },
      {
        title: "Trucking & Motorcycle Accidents",
        slug: "trucking-motorcycle-accidents",
        description:
          "We represent victims of serious trucking and motorcycle crashes, helping them pursue compensation for injuries, damages, and long-term losses.",
        image: "/images/services/img2.png",
        content:
          "Truck and motorcycle accidents often cause catastrophic injuries...",
      },
      {
        title: "Slip And Fall",
        slug: "slip-and-fall",
        description:
          "We assist individuals injured due to unsafe property conditions in seeking fair compensation and justice.",
        image: "/images/services/img3.png",
        content:
          "Property owners have a duty to keep their premises safe...",
      },
      {
        title: "Medical Malpractice",
        slug: "medical-malpractice",
        description:
          "We represent patients harmed by medical errors, negligence, or improper treatment. Our focus is on holding providers accountable and securing fair compensation.",
        image: "/images/services/img4.png",
        content:
          "Doctors and hospitals must meet professional standards of care...",
      },
      {
        title: "Nursing Home Negligence",
        slug: "nursing-home-negligence",
        description:
          "We advocate for residents harmed by neglect, abuse, or inadequate care in nursing facilities. Our team works to protect their rights and seek justice for affected families.",
        image: "/images/services/img5.png",
        content:
          "Doctors and hospitals must meet professional standards of care...",
      },
    ],
  },
};
