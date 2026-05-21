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

export default function TermsPage() {
	const { t } = useTranslation();
	const terms = t.legal.terms;

	return (
		<BasePage title={terms.title} description={terms.description}>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem
					value="quick-summary"
					className="rounded-2xl border px-5"
				>
					<AccordionTrigger className="no-underline!">
						{terms.summary.title}
					</AccordionTrigger>
					<AccordionContent>
						<h3 className="mb-3 text-lg font-medium">
							{terms.summary.heading}
						</h3>
						<ol className="list-decimal space-y-2 pl-6">
							{terms.summary.items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ol>
						<p className="mt-4">
							{terms.summary.questions.split("{email}")[0]}
							<a
								href="mailto:oss@opencut.app"
								className="text-primary hover:underline"
							>
								oss@opencut.app
							</a>
							{terms.summary.questions.split("{email}")[1]}
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.ownership.title}</h2>
				<p>{terms.sections.ownership.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{terms.sections.ownership.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.usage.title}</h2>
				<p>{terms.sections.usage.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{terms.sections.usage.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p>{terms.sections.usage.p2}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.ai.title}</h2>
				<p>{terms.sections.ai.p1}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.service.title}</h2>
				<p>{terms.sections.service.p1}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.benefits.title}</h2>
				<p>{terms.sections.benefits.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{terms.sections.benefits.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p>
					{terms.sections.benefits.p2.split("{link}")[0]}
					<a
						href={SOCIAL_LINKS.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						GitHub
					</a>
					{terms.sections.benefits.p2.split("{link}")[1]}
				</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.liability.title}</h2>
				<p>{terms.sections.liability.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{terms.sections.liability.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p>{terms.sections.liability.p2}</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.changes.title}</h2>
				<p>{terms.sections.changes.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{terms.sections.changes.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.stopping.title}</h2>
				<p>{terms.sections.stopping.p1}</p>
				<ul className="list-disc space-y-2 pl-6">
					{terms.sections.stopping.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{terms.sections.contact.title}</h2>
				<p>{terms.sections.contact.p1}</p>
				<p>
					{terms.sections.contact.p2.split("{github}")[0]}
					<a
						href={`${SOCIAL_LINKS.github}/issues`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						GitHub repository
					</a>
					{terms.sections.contact.p2.split("{github}")[1].split("{email}")[0]}
					<a
						href="mailto:oss@opencut.app"
						className="text-primary hover:underline"
					>
						oss@opencut.app
					</a>
					{terms.sections.contact.p2.split("{email}")[1].split("{x}")[0]}
					<a
						href={SOCIAL_LINKS.x}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						X (Twitter)
					</a>
					{terms.sections.contact.p2.split("{x}")[1]}
				</p>
				<p>{terms.sections.contact.p3}</p>
			</section>
			<Separator />
			<p className="text-muted-foreground text-sm">
				{terms.lastUpdated}
			</p>
		</BasePage>
	);
}

