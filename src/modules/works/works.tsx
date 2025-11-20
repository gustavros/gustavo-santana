"use client";

import type { Works } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/use-sound";

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
  const { playSound } = useSound();

  const works: Works[] = [
    {
      companyName: "Loomi",
      companyHref: "https://loomi.com.br/",
      position: `${dictionary.jobs["loomi"].position}`,
      hybrid: true,
      description: `${dictionary.jobs["loomi"].description}`,
      dates: {
        start: "01/10/2025",
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
        start: "01/07/2024",
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
  ];

  return (
    <div className="flex flex-col gap-3">
      {works.map((work, index) => (
        <motion.div
          key={work.companyName}
          className="rounded-lg bg-card text-card-foreground p-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          onMouseEnter={() => playSound("hover")}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-col space-y-1">
            <div className="flex items-start md:items-center justify-between gap-x-2 text-base">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h1 className="font-semibold leading-none text-lg">
                  <motion.a
                    href={work.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    onMouseEnter={() => playSound("hover")}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {work.companyName}
                  </motion.a>
                </h1>

                <div className="py-2 flex gap-1">
                  {work.remote && (
                    <motion.div
                      onMouseEnter={() => playSound("hover")}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="default">
                        <span className="font-mono">{dictionary.remote}</span>
                      </Badge>
                    </motion.div>
                  )}

                  {work.hybrid && (
                    <motion.div
                      onMouseEnter={() => playSound("hover")}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="default">
                        <span className="font-mono">{dictionary.hybrid || "Híbrido"}</span>
                      </Badge>
                    </motion.div>
                  )}

                  {work.freelancer && (
                    <motion.div
                      onMouseEnter={() => playSound("hover")}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="secondary">
                        <span className="font-mono">Freelancer</span>
                      </Badge>
                    </motion.div>
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

          <div className="mt-1 text-pretty font-mono text-sm text-muted-foreground">
            {work.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

