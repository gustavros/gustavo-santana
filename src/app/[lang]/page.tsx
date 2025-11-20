import { About } from "@/modules/about";
import { Header } from "@/modules/header";
import { SkillsList, skillsItems } from "@/modules/skills";
import { Locale } from "@/modules/i18n";
import { getDictionary } from "@/modules/i18n/get-dictionary";
import { WorksList } from "@/modules/works";
import { EducationList } from "@/modules/education";
import { AnimatedPageWrapper, AnimatedSection } from "@/components/animated-page-wrapper";

type HomeProps = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: HomeProps) {
  const dictionary = await getDictionary(lang);

  return (
    <AnimatedPageWrapper>
      <AnimatedSection>
        <Header dictionary={dictionary.header} />
      </AnimatedSection>

      <AnimatedSection>
        <About dictionary={dictionary.about} />
      </AnimatedSection>

      <AnimatedSection>
        <WorksList dictionary={dictionary.works} />
      </AnimatedSection>

      <AnimatedSection className="flex min-h-0 flex-col gap-y-3">
        <h1 className="text-lg font-bold">{dictionary.skills["title"]}</h1>
        <div className="flex w-full flex-wrap gap-1">
          <SkillsList skillsItems={skillsItems} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <EducationList dictionary={dictionary.education} />
      </AnimatedSection>
    </AnimatedPageWrapper>
  );
}
