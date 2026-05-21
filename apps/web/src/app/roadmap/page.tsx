"use client";

import { BasePage } from "@/app/base-page";
import { GitHubContributeSection } from "@/components/gitHub-contribute-section";
import { Badge } from "@/components/ui/badge";
import { ReactMarkdownWrapper } from "@/components/ui/react-markdown-wrapper";
import { cn } from "@/utils/ui";
import { useTranslation } from "@/hooks/use-translation";

const LAST_UPDATED = "February 25, 2026";

type StatusType = "complete" | "pending" | "default" | "info";

interface Status {
	text: string;
	type: StatusType;
}

interface RoadmapItem {
	title: string;
	description: string;
	status: Status;
}

export default function RoadmapPage() {
	const { t } = useTranslation();
	const roadmap = t.static.roadmap;

	const roadmapItems: RoadmapItem[] = [
		{
			title: roadmap.items.start.title,
			description: roadmap.items.start.description,
			status: {
				text: roadmap.status.completed,
				type: "complete",
			},
		},
		{
			title: roadmap.items.coreUi.title,
			description: roadmap.items.coreUi.description,
			status: {
				text: roadmap.status.completed,
				type: "complete",
			},
		},
		{
			title: roadmap.items.essential.title,
			description: roadmap.items.essential.description,
			status: {
				text: roadmap.status.inProgress,
				type: "pending",
			},
		},
		{
			title: roadmap.items.native.title,
			description: roadmap.items.native.description,
			status: {
				text: roadmap.status.notStarted,
				type: "default",
			},
		},
	];

	return (
		<BasePage
			title={roadmap.title}
			description={roadmap.description.replace("{date}", LAST_UPDATED)}
		>
			<div className="mx-auto flex max-w-4xl flex-col gap-16">
				<div className="flex flex-col gap-6">
					{roadmapItems.map((item, index) => (
						<RoadmapItem key={item.title} item={item} index={index} />
					))}
				</div>
				<GitHubContributeSection
					title={roadmap.wantToHelpTitle}
					description={roadmap.wantToHelpDescription}
				/>
			</div>
		</BasePage>
	);
}

function RoadmapItem({ item, index }: { item: RoadmapItem; index: number }) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-medium">
				<span className="leading-normal select-none">{index + 1}</span>
				<h3>{item.title}</h3>
				<StatusBadge status={item.status} className="ml-1" />
			</div>
			<div className="text-foreground/70 leading-relaxed">
				<ReactMarkdownWrapper>{item.description}</ReactMarkdownWrapper>
			</div>
		</div>
	);
}

function StatusBadge({
	status,
	className,
}: {
	status: Status;
	className?: string;
}) {
	return (
		<Badge
			className={cn("shadow-none", className, {
				"bg-green-500! text-white": status.type === "complete",
				"bg-yellow-500! text-white": status.type === "pending",
				"bg-blue-500! text-white": status.type === "info",
				"bg-foreground/10! text-accent-foreground": status.type === "default",
			})}
		>
			{status.text}
		</Badge>
	);
}
