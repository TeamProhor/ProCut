import { OcDataBuddyIcon, OcMarbleIcon } from "@/components/icons";

export const siteTranslations = {
	en: {
		brand: {
			title: "ProCut",
			description:
				"A simple but powerful video editor that gets the job done. In your browser.",
			url: "https://procut.app",
			openGraphImage: "/open-graph/default.jpg",
			twitterImage: "/open-graph/default.jpg",
			favicon: "/favicon.ico",
			logoUrl: "/logos/procut/svg/logo.svg",
		},
		social: {
			x: "https://x.com/procutapp",
			github: "https://github.com/TeamProhor/ProCut",
			discord: "https://discord.com/invite/Mu3acKZvCp",
		},
		externalTools: [
			{
				name: "Marble",
				description:
					"Modern headless CMS for content management and the blog for ProCut",
				url: "https://marblecms.com?utm_source=procut",
				icon: OcMarbleIcon,
			},
			{
				name: "Databuddy",
				description: "GDPR compliant analytics and user insights for ProCut",
				url: "https://databuddy.cc?utm_source=procut",
				icon: OcDataBuddyIcon,
			},
		],
		sponsors: [
			{
				name: "Fal.ai",
				url: "https://fal.ai?utm_source=procut",
				logo: "/logos/others/fal.svg",
				description:
					"Generative image, video, and audio models all in one place.",
				invertOnDark: true,
			},
		],
	},
	bn: {
		brand: {
			title: "প্রোকাট",
			description:
				"একটি সহজ কিন্তু শক্তিশালী ভিডিও এডিটর যা আপনার ব্রাউজারে কাজ সম্পন্ন করে।",
			url: "https://procut.app",
			openGraphImage: "/open-graph/default.jpg",
			twitterImage: "/open-graph/default.jpg",
			favicon: "/favicon.ico",
			logoUrl: "/logos/procut/svg/logo.svg",
		},
		social: {
			x: "https://x.com/procutapp",
			github: "https://github.com/TeamProhor/ProCut",
			discord: "https://discord.com/invite/Mu3acKZvCp",
		},
		externalTools: [
			{
				name: "মার্বেল",
				description:
					"প্রোকাট-এর কন্টেন্ট ম্যানেজমেন্ট এবং ব্লগের জন্য আধুনিক হেডলেস সিএমএস",
				url: "https://marblecms.com?utm_source=procut",
				icon: OcMarbleIcon,
			},
			{
				name: "ডেটাবেডি",
				description:
					"প্রোকাট-এর জন্য GDPR সম্মত অ্যানালিটিক্স এবং ইউজার ইনসাইটস",
				url: "https://databuddy.cc?utm_source=procut",
				icon: OcDataBuddyIcon,
			},
		],
		sponsors: [
			{
				name: "Fal.ai",
				url: "https://fal.ai?utm_source=procut",
				logo: "/logos/others/fal.svg",
				description:
					"জেনারেটিভ ইমেজ, ভিডিও এবং অডিও মডেল সবকিছু এক জায়গায়।",
				invertOnDark: true,
			},
		],
	},
};
