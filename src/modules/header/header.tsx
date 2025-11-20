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

import { Cookies } from "react-cookie";
import { Icons } from "@/shared/assets/icons";

type HeaderProps = {
  dictionary: Dictionary["header"];
};

const cookies = new Cookies();

export default function Header({ dictionary }: HeaderProps) {
  const { languages, selectedLanguage, selectLanguage } = useLanguage();

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
      selectLanguage(language as Locale);

      cookies.set("language", language, {
        path: "/",
      });

      router.push(redirectedPathName(language));
    },
    [redirectedPathName, router, selectLanguage]
  );

  return (
    <header className="flex w-full flex-col items-center justify-between">
      <div className="my-4 flex w-full items-center justify-between gap-2 py-4">
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
      </div>

      <div className="flex w-full">
        <div className="flex-1">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold">Gustavo Santana</h1>

            <p className="pt-1 font-mono text-sm text-muted-foreground">
              {dictionary.description}
            </p>

            <div className="flex items-center gap-2 py-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Recife"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:underline"
              >
                <Pin className="h-4 w-4" />

                <span className="font-mono">Pernambuco, Brazil.</span>
              </a>

              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground print:hidden">
                GMT -3
              </span>
            </div>
          </div>

          <div className="flex items-center justify-start gap-1 pt-2 print:hidden">
            <SocialsButtonsList socialsButtons={socialsButtons} />
          </div>

          <div className="hidden flex-col gap-1 pt-1 print:flex">
            <a
              href="mailto:gustavossw@hotmail.com"
              className="font-mono text-sm underline"
            >
              gustavossw@hotmail.com
            </a>
            <a
              href="tel:+5581983704666"
              className="font-mono text-sm underline"
            >
              +55 (81) 98370-4666
            </a>
          </div>
        </div>

        <Image
          src="https://github.com/gustavros.png"
          alt="Profile"
          width={140}
          height={140}
          className="aspect-square rounded hidden sm:block"
        />
      </div>
    </header>
  );
}

