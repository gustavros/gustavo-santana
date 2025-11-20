"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/use-sound";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

type ModeToggleProps = {
  dictionary: Dictionary["header"]["theme"];
};

export function ModeToggle({ dictionary }: ModeToggleProps) {
  const { setTheme } = useTheme();
  const { playSound } = useSound();

  const handleThemeChange = (theme: string) => {
    playSound("toggle");
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          onMouseEnter={() => playSound("hover")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          {dictionary.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          {dictionary.dark}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          {dictionary.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

