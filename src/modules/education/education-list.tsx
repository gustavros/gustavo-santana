"use client";

import { Educations } from "@/shared/types";
import { motion } from "framer-motion";

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
    <motion.section
      className="flex min-h-0 flex-col gap-y-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-lg font-bold">{dictionary["title"]}</h1>

      {educations.map((education, index) => (
        <motion.div
          className="flex flex-col gap-2"
          key={education.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between gap-1">
            <h1 className="font-bold">{education.title}</h1>

            <time>
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
        </motion.div>
      ))}
    </motion.section>
  );
}

