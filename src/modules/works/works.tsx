import type { Works } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";

type WorksProps = {
  dictionary: Dictionary["works"];
};

// Helper function to parse DD/MM/YYYY format to Date
function parseDate(dateString: string): Date {
  if (!dateString) return new Date();
  const [day, month, year] = dateString.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

export default function Works({ dictionary }: WorksProps) {
  const works: Works[] = [
    {
      companyName: "Loomi",
      companyHref: "https://loomi.com.br/",
      position: `${dictionary.jobs["loomi"].position}`,
      hybrid: true,
      description: `${dictionary.jobs["loomi"].description}`,
      dates: {
        start: "10/01/2025",
        end: "",
      },
    },
    {
      companyName: "BeeCorp - Saúde e Bem-estar",
      companyHref: "https://beecorp.com.br/",
      position: `${dictionary.jobs["beecorp"].position}`,
      remote: true,
      description: `${dictionary.jobs["beecorp"].description}`,
      dates: {
        start: "07/03/2024",
        end: "29/08/2025",
      },
    },
    {
      companyName: "Quackity Studios",
      companyHref: "https://www.qsmp.co",
      position: `${dictionary.jobs["quackity-studios"].position}`,
      remote: true,
      description: `${dictionary.jobs["quackity-studios"].description}`,
      dates: {
        start: "11/07/2023",
        end: "04/01/2024",
      },
    },
    {
      companyName: "Encapse Arquitetura",
      companyHref: "https://www.encapse.arq.br/",
      position: `${dictionary.jobs["encapse-arquitetura"].position}`,
      freelancer: true,
      remote: true,
      description: `${dictionary.jobs["encapse-arquitetura"].description}`,
      dates: {
        start: "06/01/2023",
        end: "08/01/2023",
      },
    },
    {
      companyName: "Galory's",
      companyHref: "https://www.galorys.com/",
      position: `${dictionary.jobs["galorys"].position}`,
      remote: true,
      description: `${dictionary.jobs["galorys"].description}`,
      dates: {
        start: "07/01/2022",
        end: "03/01/2023",
      },
    },
    {
      companyName: "Shield Ethical",
      companyHref: "https://shieldethical.com.br/",
      position: `${dictionary.jobs["shield-ethical"].position}`,
      freelancer: true,
      remote: true,
      description: `${dictionary.jobs["shield-ethical"].description}`,
      dates: {
        start: "10/01/2022",
        end: "11/01/2022",
      },
    },
    {
      companyName: "Hide Pagamentos",
      companyHref: "https://sapagamentos.com/facility/",
      position: `${dictionary.jobs["hide-pagamentos"].position}`,
      freelancer: true,
      remote: true,
      description: `${dictionary.jobs["hide-pagamentos"].description}`,
      dates: {
        start: "10/01/2022",
        end: "10/01/2022",
      },
    },
    {
      companyName: "Galory's ®️ Official - Grand Theft Auto",
      companyHref: "https://galorys.com/games/grandtheftauto",
      position: `${dictionary.jobs["galorys-gta"].position}`,
      freelancer: true,
      remote: true,
      description: `${dictionary.jobs["galorys-gta"].description}`,
      dates: {
        start: "07/01/2022",
        end: "07/01/2022",
      },
    },
  ];

  return (
    <>
      {works.map((work) => (
        <div
          key={work.companyName}
          className="rounded-lg bg-card text-card-foreground"
        >
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-start md:items-center justify-between gap-x-2 text-base">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h1 className="font-semibold leading-none text-lg">
                  <a
                    href={work.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {work.companyName}
                  </a>
                </h1>

                <div className="py-2 flex gap-1">
                  {work.remote && (
                    <Badge variant="default">
                      <span className="font-mono">{dictionary.remote}</span>
                    </Badge>
                  )}

                  {work.hybrid && (
                    <Badge variant="default">
                      <span className="font-mono">{dictionary.hybrid || "Híbrido"}</span>
                    </Badge>
                  )}

                  {work.freelancer && (
                    <Badge variant="secondary">
                      <span className="font-mono">Freelancer</span>
                    </Badge>
                  )}
                </div>
              </div>

              <div className="text-sm tabular-nums text-gray-500">
                <span className="font-mono text-xs md:text-sm">
                  {parseDate(work.dates.start).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
                <span className="px-1">-</span>
                <span className="font-mono text-xs md:text-sm">
                  {work.dates.end
                    ? parseDate(work.dates.end).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })
                    : `${dictionary.present}`}
                </span>
              </div>
            </div>
            <h4 className="font-mono text-base leading-none">{work.position}</h4>
          </div>

          <div className="mt-2 text-pretty font-mono text-sm text-muted-foreground">
            {work.description}
          </div>
        </div>
      ))}
    </>
  );
}

