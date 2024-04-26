interface Dictionary {
  header: {
    theme: {
      light: string;
      dark: string;
      system: string;
    };
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  works: {
    title: string;
    present: string;
    remote: string;
    jobs: {
      [key: string]: {
        position: string;
        description: string;
      };
    };
  };
  skills: {
    title: string;
  };
  education: {
    title: string;
    educations: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
}
