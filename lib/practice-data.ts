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
          "We help victims of car accidents recover compensation.",
        image: "/images/services/car-accident.jpg",
        content:
          "Assault is the intentional threat one person makes toward another, creating a real fear of harm even when no physical contact occurs...",
      },
      {
        title: "Trucking & Motorcycle Accidents",
        slug: "trucking-motorcycle-accidents",
        description:
          "We represent victims of serious trucking and motorcycle crashes.",
        image: "/images/services/truck.jpg",
        content:
          "Truck and motorcycle accidents often cause catastrophic injuries...",
      },
      {
        title: "Slip And Fall",
        slug: "slip-and-fall",
        description:
          "Unsafe property conditions can cause serious injuries.",
        image: "/images/services/slip.jpg",
        content:
          "Property owners have a duty to keep their premises safe...",
      },
      {
        title: "Medical Malpractice",
        slug: "medical-malpractice",
        description:
          "Medical negligence cases require experienced advocacy.",
        image: "/images/services/medical.jpg",
        content:
          "Doctors and hospitals must meet professional standards of care...",
      },
    ],
  },
};
