import { Icons } from "@/assets/icons";

type WorksType = {
  dictionary: Dictionary["works"];
};

export interface SocialsButtons {
  name: string;
  icon: keyof typeof Icons;
  href: string;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface Works  {
  companyName: string;
  companyHref?: string;
  position: string;
  remote?: boolean;
  freelancer?: boolean;
  description: string;
  dates: {
    start: string;
    end: string;
  };
}

export interface SkillsItems {
  name: string;
}
