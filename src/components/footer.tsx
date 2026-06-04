"use client";

import Link from "next/link";
import { RiDiscordFill, RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

type Category = "resources" | "company";

interface FooterLink {
	label: string;
	href: string;
}

export function Footer() {
	const { t } = useTranslation();

	const links: Record<Category, FooterLink[]> = {
		resources: [
			{ label: t.home.footer.roadmap, href: "/roadmap" },
			{ label: t.home.footer.changelog, href: "/changelog" },
			{ label: t.home.footer.blog, href: "/blog" },
			{ label: t.home.footer.privacy, href: "/privacy" },
			{ label: t.home.footer.terms, href: "/terms" },
		],
		company: [
			{ label: t.home.footer.contributors, href: "/contributors" },
			{ label: t.home.footer.sponsors, href: "/sponsors" },
			{ label: t.home.footer.brand, href: "/brand" },
			{ label: t.home.footer.about, href: `${t.site.social.github}/blob/main/README.md` },
		],
	};

	return (
		<footer className="bg-background border-t">
			<div className="mx-auto max-w-5xl px-8 py-10">
				<div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2">
					{/* Brand Section */}
					<div className="max-w-sm md:col-span-1">
						<div className="mb-4 flex items-center justify-start gap-2">
							<Image
								src={t.site.brand.logoUrl}
								alt={t.site.brand.title}
								width={24}
								height={24}
								className="invert dark:invert-0"
							/>
							<span className="text-lg font-bold">{t.site.brand.title}</span>
						</div>
						<p className="text-muted-foreground mb-5 text-sm md:text-left">
							{t.home.footer.description}
						</p>
						<div className="flex justify-start gap-3">
							<Link
								href={t.site.social.github}
								className="text-muted-foreground hover:text-foreground transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="size-5" />
							</Link>
							<Link
								href={t.site.social.x}
								className="text-muted-foreground hover:text-foreground transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<RiTwitterXLine className="size-5" />
							</Link>
							<Link
								href={t.site.social.discord}
								className="text-muted-foreground hover:text-foreground transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<RiDiscordFill className="size-5" />
							</Link>
						</div>
					</div>

					<div className="flex items-start justify-start gap-12 py-2">
						{(["resources", "company"] as const).map((category) => (
							<div key={category} className="flex flex-col gap-2">
								<h3 className="text-foreground font-semibold">
									{category === "resources"
										? t.home.footer.resources
										: t.home.footer.company}
								</h3>
								<ul className="space-y-2 text-sm">
									{links[category].map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												className="text-muted-foreground hover:text-foreground transition-colors"
												target={
													link.href.startsWith("http") ? "_blank" : undefined
												}
												rel={
													link.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Bottom Section */}
				<div className="flex flex-col items-start justify-between gap-4 pt-2 md:flex-row">
					<div className="text-muted-foreground flex items-center gap-4 text-sm">
						<span>
							© {new Date().getFullYear()} {t.site.brand.title}, {t.home.footer.allRightsReserved}
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
