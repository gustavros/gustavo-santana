import { Educations } from "@/types";

type EducationListProps = {
  dictionary: Dictionary["education"];
};

// Helper function to parse DD/MM/YYYY format to Date
function parseDate(dateString: string): Date {
  if (!dateString) return new Date();
  const [day, month, year] = dateString.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

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
  ];

  return (
    <section className="flex min-h-0 flex-col gap-y-3 py-3">
      <h1 className="text-xl font-bold">{dictionary["title"]}</h1>

      {educations.map((education) => (
        <div className="flex flex-col gap-2" key={education.title}>
          <div className="flex items-center justify-between gap-1">
            <h1 className="font-bold">{education.title}</h1>

            <time className="text-sm tabular-nums text-gray-500">
              <span className="font-mono text-xs md:text-sm">
                {parseDate(education.dates.start).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
              <span className="px-1">-</span>
              <span className="font-mono text-xs md:text-sm">
                {education.dates.end
                  ? parseDate(education.dates.end).toLocaleDateString("en-US", {
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
