import About from "@/components/about";
import Header from "@/components/header";
import SkillsList from "@/components/skills-list";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { skillsItems } from "@/utils/data";
import WorksList from "@/components/works-list";

type HomeProps = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dictionary = await getDictionary(lang);

  return (
    <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
      <Header dictionary={dictionary.header} />

      <About dictionary={dictionary.about} />

      <WorksList dictionary={dictionary.works} />

      <section className="flex min-h-0 flex-col gap-y-3">
        <h1 className="text-xl font-bold">{dictionary.skills["title"]}</h1>
        <div className="flex w-full flex-wrap gap-1">
          <SkillsList skillsItems={skillsItems} />
        </div>
      </section>

      <section className="flex min-h-0 flex-col gap-y-3 py-3">
        <h1 className="text-xl font-bold">{dictionary.education["title"]}</h1>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-1">
            <h1 className="font-bold">
              {dictionary.education["uninassau"].title}
            </h1>

            <time>
              <span className="font-mono">2024 - 2026</span>
            </time>
          </div>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {dictionary.education["uninassau"].description}
          </p>
        </div>
      </section>
    </section>
  );
}
