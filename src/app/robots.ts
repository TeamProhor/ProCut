import type { MetadataRoute } from "next";
import { translations } from "@/utils/translations";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/_next/", "/projects/", "/editor/"],
		},
		sitemap: `${translations.en.site.brand.url}/sitemap.xml`,
	};
}
