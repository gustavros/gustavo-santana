"use client";

import { Icons } from "@/shared/assets/icons";
import { cn } from "@/shared/utils";
import { SocialsButtons } from "@/shared/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/use-sound";

interface SocialsButtonsListProps {
  socialsButtons: SocialsButtons[];
}

export default function SocialsButtonsList({
  socialsButtons,
}: SocialsButtonsListProps) {
  const { playSound } = useSound();

  return (
    <>
      {socialsButtons.map((item, index) => {
        const Icon = Icons[item.icon || "externalLink"];

        return (
          item.href && (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={item.href}>
                <motion.span
                  className={cn(
                    "group flex items-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground border w-fit"
                  )}
                  onMouseEnter={() => playSound("hover")}
                  onMouseDown={() => playSound("click")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />

                  <span className="font-medium sr-only">{item.name}</span>
                </motion.span>
              </Link>
            </motion.div>
          )
        );
      })}
    </>
  );
}

