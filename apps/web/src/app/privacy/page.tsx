"use client";

import { BasePage } from "@/app/base-page";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS } from "@/site/social";
import { useTranslation } from "@/hooks/use-translation";

export default function PrivacyPage() {
	const { t } = useTranslation();
	const privacy = t.legal.privacy;

	return (
		<BasePage title={privacy.title} description={privacy.description}>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem
					value="quick-summary"
					className="rounded-2xl border px-5"
				>
					<AccordionTrigger className="no-underline!">
						{privacy.summary.title}
					</AccordionTrigger>
					<AccordionContent>
						<h3 className="mb-3 text-lg font-medium">
							{privacy.summary.heading}
						</h3>
						<ol className="list-decimal space-y-2 pl-6">
							{privacy.summary.items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ol>
						<p className="mt-4">
							{privacy.summary.questions.split("{email}")[0]}
							<a
								href="mailto:oss@opencut.app"
								className="text-primary hover:underline"
							>
								oss@opencut.app
							</a>
							{privacy.summary.questions.split("{email}")[1]}
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.content.title}</h2>
				<p>{privacy.sections.content.text}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.accounts.title}</h2>
				<p>{privacy.sections.accounts.p1}</p>
				<p>{privacy.sections.accounts.p2}</p>
				<p>{privacy.sections.accounts.p3}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.analytics.title}</h2>
				<p>
					{privacy.sections.analytics.p1.split("{link}")[0]}
					<a
						href="https://www.databuddy.cc"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						Databuddy
					</a>
					{privacy.sections.analytics.p1.split("{link}")[1]}
				</p>
				<p>{privacy.sections.analytics.p2}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.storage.title}</h2>
				<p>{privacy.sections.storage.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{privacy.sections.storage.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p>{privacy.sections.storage.p2}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.thirdParty.title}</h2>
				<p>{privacy.sections.thirdParty.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{privacy.sections.thirdParty.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.rights.title}</h2>
				<p>{privacy.sections.rights.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{privacy.sections.rights.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.transparency.title}</h2>
				<p>{privacy.sections.transparency.p1}</p>
				<p>
					{privacy.sections.transparency.p2.split("{link}")[0]}
					<a
						href={SOCIAL_LINKS.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						GitHub
					</a>
					{privacy.sections.transparency.p2.split("{link}")[1]}
				</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{privacy.sections.contact.title}</h2>
				<p>{privacy.sections.contact.p1}</p>
				<p>
					{privacy.sections.contact.p2
						.split("{github}")[0]}
					<a
						href={`${SOCIAL_LINKS.github}/issues`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						GitHub repository
					</a>
					{privacy.sections.contact.p2
						.split("{github}")[1]
						.split("{email}")[0]}
					<a
						href="mailto:oss@opencut.app"
						className="text-primary hover:underline"
					>
						oss@opencut.app
					</a>
					{privacy.sections.contact.p2
						.split("{email}")[1]
						.split("{x}")[0]}
					<a
						href={SOCIAL_LINKS.x}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						X (Twitter)
					</a>
					{privacy.sections.contact.p2.split("{x}")[1]}
				</p>
			</section>

			<Separator />

			<p className="text-muted-foreground text-sm">
				{privacy.lastUpdated}
			</p>
		</BasePage>
	);
}

