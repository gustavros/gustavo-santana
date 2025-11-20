import { ThemeProvider } from "@/modules/theme";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/modules/i18n";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Santana",
  description: "Gustavo Santana personal website",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://github.com/gustavros.png"
        />
      </head>
      <LanguageProvider>
        <body className={grotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableColorScheme
          >
            {children}
          </ThemeProvider>
        </body>
      </LanguageProvider>
    </html>
  );
}
