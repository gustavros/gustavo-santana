import { Icons } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { SocialsButtons } from "@/types";
import Link from "next/link";

interface SocialsButtonsListProps {
	socialsButtons: SocialsButtons[];
}

export default function SocialsButtonsList({ socialsButtons }: SocialsButtonsListProps) {
	return (
		<>
			{socialsButtons.map((item, index) => {
				const Icon = Icons[item.icon || "externalLink"];

				return (
					item.href && (
						<Link key={item.name} href={item.href}>
							<span
								className={cn(
									"group flex items-center rounded-md p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground border w-fit",
								)}
							>
								<Icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />

								<span className="font-medium sr-only">{item.name}</span>
							</span>
						</Link>
					)
				);
			})}
		</>
	);
}
