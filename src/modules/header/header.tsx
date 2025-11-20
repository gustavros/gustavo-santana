"use client";

import Image from "next/image";
import SocialsButtonsList from "./socials-button-list";
import { Pin } from "lucide-react";
import { socialsButtons } from "./data";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/shared/ui/select";
import { ModeToggle } from "@/modules/theme";
import { useLanguage, Locale } from "@/modules/i18n";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { motion } from "framer-motion";
import { useSound } from "@/hooks/use-sound";

import { Cookies } from "react-cookie";
import { Icons } from "@/shared/assets/icons";

type HeaderProps = {
  dictionary: Dictionary["header"];
};

const cookies = new Cookies();

export default function Header({ dictionary }: HeaderProps) {
  const { languages, selectedLanguage, selectLanguage } = useLanguage();
  const { playSound } = useSound();

  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathName = useCallback(
    (locale: string) => {
      if (!pathname) return "/";

      const segments = pathname.split("/");
      segments[1] = locale;

      return segments.join("/");
    },
    [pathname]
  );

  const handleLanguageSelect = useCallback(
    (language: string) => {
      playSound("click");
      selectLanguage(language as Locale);

      cookies.set("language", language, {
        path: "/",
      });

      router.push(redirectedPathName(language));
    },
    [redirectedPathName, router, selectLanguage, playSound]
  );

  return (
    <header className="flex w-full flex-col items-center justify-between">
      <motion.div
        className="my-1 flex w-full items-center justify-between gap-2 py-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Select onValueChange={handleLanguageSelect} value={selectedLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languages.map((language) => {
                const Icon = Icons[language.flag || "externalLink"];

                return (
                  <SelectItem key={language.value} value={language.value}>
                    <div className="flex items-center gap-2">
                      {language.flag && <Icon className="ml-2 h-4 w-4" />}

                      {language.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <ModeToggle dictionary={dictionary.theme} />
      </motion.div>

      <div className="flex w-full">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold">Gustavo Santana</h1>

            <p className="pt-0.5 font-mono text-sm text-muted-foreground">
              {dictionary.description}
            </p>

            <div className="flex items-center gap-2 py-0.5">
              <motion.a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Recife"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:underline"
                onMouseEnter={() => playSound("hover")}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Pin className="h-4 w-4" />

                <span className="font-mono">Pernambuco, Brazil.</span>
              </motion.a>

              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground print:hidden">
                GMT -3
              </span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-1 pt-1 print:hidden">
            <SocialsButtonsList socialsButtons={socialsButtons} />
          </div>

          <div className="hidden flex-col gap-1 pt-0.5 print:flex">
            <motion.a
              href="mailto:gustavossw@hotmail.com"
              className="font-mono text-sm underline"
              onMouseEnter={() => playSound("hover")}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              gustavossw@hotmail.com
            </motion.a>
            <motion.a
              href="tel:+5581983704666"
              className="font-mono text-sm underline"
              onMouseEnter={() => playSound("hover")}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              +55 (81) 98370-4666
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden sm:block"
        >
          <Image
            src="https://github.com/gustavros.png"
            alt="Profile"
            width={140}
            height={140}
            className="aspect-square rounded"
          />
        </motion.div>
      </div>
    </header>
  );
}
