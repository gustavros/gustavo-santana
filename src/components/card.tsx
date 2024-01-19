import { CardsItems } from "@/types";
import { Badge } from "./ui/badge";

export default function Card({ companyName, companyHref, dates, description, position, remote }: CardsItems) {
	return (
		<div className="rounded-lg bg-card text-card-foreground">
			<div className="flex flex-col space-y-1.5">
				<div className="flex items-center justify-between gap-x-2 text-base">
					<h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
						<a href={companyHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
							{companyName}
						</a>

						{remote && (
							<Badge variant="secondary">
								<span>Remote</span>
							</Badge>
						)}
					</h3>
					<div className="text-sm tabular-nums text-gray-500">
						<time>
							{new Date(dates.start).toLocaleDateString("en-US", {
								month: "short",
								year: "numeric",
							})}{" "}
							-{" "}
							{dates.end
								? new Date(dates.end).toLocaleDateString("en-US", {
										month: "short",
										year: "numeric",
								  })
								: "Present"}
						</time>{" "}
					</div>
				</div>
				<h4 className="font-mono text-sm leading-none">{position}</h4>
			</div>

			<div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">{description}</div>
		</div>
	);
}
