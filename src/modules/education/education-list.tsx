import { Educations } from "@/shared/types";

type EducationListProps = {
  dictionary: Dictionary["education"];
};

export default function EducationList({ dictionary }: EducationListProps) {
  const educations: Educations[] = [
    {
      title: `${dictionary.educations["uninassau"].title}`,
      description: `${dictionary.educations["uninassau"].description}`,
      dates: {
        start: "03/01/2024",
        end: "04/01/2026",
      },
    },
    {
      title: `${dictionary.educations["high-school"].title}`,
      description: `${dictionary.educations["high-school"].description}`,
      dates: {
        start: "02/04/2016",
        end: "12/18/2019",
      },
    },
  ];

  return (
    <section className="flex min-h-0 flex-col gap-y-3 py-3">
      <h1 className="text-xl font-bold">{dictionary["title"]}</h1>

      {educations.map((education) => (
        <div className="flex flex-col gap-2" key={education.title}>
          <div className="flex items-center justify-between gap-1">
            <h1 className="font-bold">{education.title}</h1>

            <time>
              <span className="font-mono text-xs md:text-sm">
                {new Date(education.dates.start).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
              <span className="px-1">-</span>
              <span className="font-mono text-xs md:text-sm">
                {education.dates.end
                  ? new Date(education.dates.end).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "Present"}
              </span>
            </time>
          </div>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {education.description}
          </p>
        </div>
      ))}
    </section>
  );
}

