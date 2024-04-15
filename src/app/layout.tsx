import { ThemeProvider } from "@/components/theme-toggle/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/use-language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gustavo Santana",
	description: "Gustavo Santana personal website",
};

export default function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: {
		lang: string;
	}
}) {
	return (
		<html lang={params.lang}>
			<head>
				<link rel="icon" type="image/png" sizes="32x32" href="https://github.com/gustavros.png" />
			</head>
			<LanguageProvider>
				<body className={inter.className}>
					<ThemeProvider attribute="class" defaultTheme="system" enableColorScheme>
						{children}
					</ThemeProvider>
				</body>
			</LanguageProvider>

		</html>
	);
}
