import Card from "@/components/card";
import SkillsList from "@/components/skills-list";
import SocialsButtonsList from "@/components/socials-button-list";
import { ModeToggle } from "@/components/theme-toggle/theme-toggle";

import { cardsItems, skillsItems, socialsButtons } from "@/utils/data";

import { Pin } from "lucide-react";

import Image from "next/image";

export default function Home() {
	return (
		<section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
			<header className="flex justify-between items-center w-full">
				<div className="flex-1">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">Gustavo Santana</h1>
						<p className="font-mono text-sm text-muted-foreground pt-1 max-w-96 w-full">
							Hello! I have a passion for creating user-friendly and minimalists websites.
						</p>
						<div className="flex items-center gap-2 py-1">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.google.com/maps/place/Recife"
								className="flex items-center gap-1 text-muted-foreground text-xs hover:underline"
							>
								<Pin className="h-4 w-4" /> <span className="font-mono">Pernambuco, Brazil.</span>
							</a>

							<span className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
								{new Date().toLocaleString("en-US", {
									timeZone: "America/Sao_Paulo",
								})}
							</span>
						</div>
					</div>

					<div className="pt-2 flex items-center gap-1">
						<SocialsButtonsList socialsButtons={socialsButtons} />

						<span className="block print:hidden">
							<ModeToggle />
						</span>
					</div>
				</div>

				<Image
					src="https://github.com/gustavros.png"
					alt="Profile"
					width={120}
					height={120}
					className="rounded aspect-square"
				/>
			</header>

			<section className="flex min-h-0 flex-col gap-y-3">
				<h1 className="font-bold text-xl">About</h1>
				<p className="text-pretty font-mono text-sm text-muted-foreground">
					I have 1.6 years experience with HTML, CSS, JavaScript, TypeScript, Tailwind CSS, ReactJS, Next.js, Git,
					GitHub and more. I love studying and learning things, because of my curiosity and my expertise in solving
					problems, I can quickly learn anything.
				</p>
			</section>

			<section className="flex min-h-0 flex-col gap-y-4">
				<h1 className="font-bold text-xl">Work Experience</h1>

				{cardsItems.map((item, index) => (
					<Card key={item.companyName} {...item} />
				))}
			</section>

			<section className="flex min-h-0 flex-col gap-y-3">
				<h1 className="font-bold text-xl">Skills</h1>

				<div className="flex flex-wrap gap-1 w-full">
					<SkillsList skillsItems={skillsItems} />
				</div>
			</section>

			<section className="flex min-h-0 flex-col gap-y-3">
				<h1 className="font-bold text-xl">Education</h1>
				<p className="text-pretty font-mono text-sm text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cumque!
				</p>
			</section>
		</section>
	);
}
