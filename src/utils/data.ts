import { CardsItems, NavItem, SkillsItems, SocialsButtons } from "@/types";

export const cardsItems: CardsItems[] = [
  {
    companyName: "Encapse Arquitetura",
    companyHref: "https://www.encapse.arq.br/",
    position: "Front-End Developer",
    remote: true,
    description:
      "I played a key role in creating the Encapse Arquitetura landing page, showcasing my proficiency in modern web technologies like React, Tailwind CSS, and Zod for form validations. The main aim was to design an attractive online presence for the architecture firm.",
    dates: {
      start: "06/01/2023",
      end: "08/01/2023",
    },
  },
  {
    companyName: "Galory's",
    companyHref: "https://www.galorys.com/",
    position: "Front-End Developer",
    remote: true,
    description:
      "My objective was to create interactive and responsive user interfaces using modern technologies such as React, Styled Components, and TypeScript. Additionally, I integrated backend APIs to facilitate seamless communication between the interface and system functionalities.",
    dates: {
      start: "07/01/2022",
      end: "03/01/2023",
    },
  },
  {
    companyName: "Shield Ethical",
    companyHref: "https://shieldethical.com.br/",
    position: "Front-End Developer",
    remote: true,
    description:
      "My goal was to develop an interactive and responsive landing page with a focus on user experience, following the principles of pixel perfect to a high standard.",
    dates: {
      start: "10/01/2022",
      end: "11/01/2022",
    },
  },
  {
    companyName: "Hide Pagamentos",
    companyHref: "https://www.sapagamentos.com/",
    position: "Front-End Developer",
    remote: true,
    description: `My objective was to develop an interactive and responsive landing page with a focus on user experience, following the principles of pixel perfect.`,
    dates: {
      start: "10/01/2022",
      end: "10/01/2022",
    },
  },
  {
    companyName: "Galory's ®️ Official - Grand Theft Auto",
    companyHref: "https://galorys.com/games/grandtheftauto",
    position: "Front-End Developer",
    remote: true,
    description: `I created a landing page for a GTA 5 Role Play website. I designed the concept in Figma and implemented backend APIs to ensure seamless functionality between the interface and landing page data.`,
    dates: {
      start: "07/01/2022",
      end: "07/01/2022",
    },
  },
];

export const socialsButtons: SocialsButtons[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gustavo-santana/",
    icon: "linkedin",
  },
  {
    name: "Github",
    href: "https://github.com/gustavros",
    icon: "gitHub",
  },
  {
    name: "E-mail",
    href: "mailto:gustavossw@hotmail.com",
    icon: "email",
  },
  {
    name: "Phone",
    href: "tel:+5581983704666",
    icon: "phone",
  },
];

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "home",
    label: "Home",
  },
  {
    title: "Journey",
    href: "/journey",
    icon: "journey",
    label: "Journey",
  },
  {
    title: "Curriculum Vitae",
    href: "/curriculum",
    icon: "curriculum",
    label: "Curriculum Vitae",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: "externalLink",
    label: "Curriculum Vitae",
  },
];

export const skillsItems: SkillsItems[] = [
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "HTML5",
  },
  {
    name: "CSS3",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "Styled Components",
  },
  {
    name: "SASS",
  },
  {
    name: "Node.js",
  },

  {
    name: "MongoDB",
  },
];
