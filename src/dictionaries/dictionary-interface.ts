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
}
