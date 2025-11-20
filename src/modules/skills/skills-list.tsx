"use client";

import { SkillsItems } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { motion, Variants } from "framer-motion";
import { useSound } from "@/hooks/use-sound";

interface SkillsListProps {
  skillsItems: SkillsItems[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function SkillsList({ skillsItems }: SkillsListProps) {
  const { playSound } = useSound();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-wrap gap-1"
    >
      {skillsItems.map((item, index) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          onMouseEnter={() => playSound("hover")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Badge variant="secondary" className="w-fit cursor-default">
            {item.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
}
