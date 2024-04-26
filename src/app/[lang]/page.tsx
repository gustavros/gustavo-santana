import About from "@/components/about";
import Header from "@/components/header";
import SkillsList from "@/components/skills-list";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { skillsItems } from "@/utils/data";
import WorksList from "@/components/works-list";
import EducationList from "@/components/education-list";

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

      <EducationList dictionary={dictionary.education} />
    </section>
  );
}
