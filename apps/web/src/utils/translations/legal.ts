export const legalTranslations = {
	en: {
		privacy: {
			title: "Privacy policy",
			description:
				"Learn how we handle your data and privacy. Contact us if you have any questions.",
			lastUpdated: "Last updated: March 15, 2026",
			summary: {
				title: "Quick summary",
				heading: "Your content never leaves your device.",
				items: [
					"Basic editing happens locally in your browser - we never see your files",
					"AI features like auto captions run locally in your browser too - nothing is uploaded",
					"ProCut does not currently require an account or login",
					"Project data stays on your device, not our servers",
					"We use anonymized analytics to improve the app, but no personal video content is tracked",
					"You can clear local data from your browser at any time",
					"We don't sell or share your data with anyone (we don't even have it)",
				],
				questions: "Questions? Email us at {email}",
			},
			sections: {
				content: {
					title: "How We Handle Your Content",
					text: "All editing and processing happens locally on your device. We never upload, store, or have access to your video or audio files. Your content remains completely private and under your control. AI-powered features like auto captions also run in your browser using on-device models - no content ever leaves your device.",
				},
				accounts: {
					title: "Accounts & Authentication",
					p1: "ProCut does not currently offer user accounts, login, or Google sign-in.",
					p2: "Because there is no account system today, we do not collect account emails, profile information, or OAuth identity data.",
					p3: "Your projects are never stored on our servers. All project data, including names, thumbnails, and creation dates, is stored locally in your browser using IndexedDB.",
				},
				analytics: {
					title: "Analytics",
					p1: "We use {link} for basic, anonymized visitor counts. We do not track clicks, interactions, or how you use the editor.",
					p2: "No personal information is collected, no individual users are tracked, and no data that could identify you is stored.",
				},
				storage: {
					title: "Local Storage & Cookies",
					p1: "We use browser local storage and IndexedDB to:",
					items: [
						"Save your projects locally on your device",
						"Remember your editor preferences and settings",
						"Store app state needed for the editor to work between sessions",
					],
					p2: "All data stays on your device and can be cleared at any time through your browser settings.",
				},
				thirdParty: {
					title: "Third-Party Services",
					p1: "ProCut integrates with these services:",
					items: [
						"Vercel: For hosting and content delivery",
						"Databuddy: For anonymized analytics",
					],
				},
				rights: {
					title: "Your Rights",
					p1: "You have complete control over your data:",
					items: [
						"No account is required to use ProCut today",
						"Clear local storage to remove all saved projects",
						"Contact us with any privacy concerns",
					],
				},
				transparency: {
					title: "Open Source Transparency",
					p1: "ProCut is completely open source. You can review our code, see exactly how we handle data, and even self-host the application if you prefer.",
					p2: "View our source code on {link}.",
				},
				contact: {
					title: "Contact Us",
					p1: "Questions about this privacy policy or how we handle your data?",
					p2: "Open an issue on our {github}, email us at {email}, or reach out on {x}.",
				},
			},
		},
		terms: {
			title: "Terms of service",
			description:
				"Fair and transparent terms for our free, open-source video editor. Contact us if you have any questions.",
			lastUpdated: "Last updated: March 15, 2026",
			summary: {
				title: "Quick summary",
				heading: "You own your content, we own nothing.",
				items: [
					"Everything runs locally in your browser - nothing is ever uploaded to our servers",
					"We never claim ownership of your content",
					"Free for personal and commercial use with no watermarks or restrictions",
					"You're responsible for how you use it - don't break the law",
					"Service provided \"as is\" - we can't guarantee perfect uptime",
					"Open source means you can review our code and self-host if needed",
					"No account required - your exported videos are always yours",
				],
				questions: "Questions? Email us at {email}",
			},
			sections: {
				ownership: {
					title: "Your Content, Your Rights",
					p1: "You own everything you create. All editing and processing happens locally on your device. We never see, store, or have access to your files. We make no claims to ownership, licensing, or rights over your videos, projects, or any content you create using ProCut.",
					items: [
						"Your content never leaves your device",
						"You retain all intellectual property rights to your content",
						"You can export and use your content however you choose",
						"No watermarks, no licensing restrictions from ProCut",
					],
				},
				usage: {
					title: "How You Can Use ProCut",
					p1: "ProCut is free for personal and commercial use. You can:",
					items: [
						"Create videos for personal, educational, or commercial purposes",
						"Use ProCut for client work and paid projects",
						"Share and distribute videos created with ProCut",
						"Modify and distribute the ProCut software (under MIT license)",
					],
					p2: "You're responsible for how you use ProCut and the content you create. Don't use it for anything illegal in your jurisdiction.",
				},
				ai: {
					title: "AI Features",
					p1: "AI features like auto captions run entirely in your browser using on-device models. No content is uploaded to any server. These features are optional - you can use ProCut without them.",
				},
				service: {
					title: "Service",
					p1: "ProCut does not currently require an account. The service is provided \"as is\" without warranties. While we strive for reliability, we can't guarantee uninterrupted service.",
				},
				benefits: {
					title: "Open Source Benefits",
					p1: "Because ProCut is open source, you have additional rights:",
					items: [
						"Review our code to see exactly how we handle your data",
						"Self-host ProCut on your own servers",
						"Modify the software to suit your needs",
						"Contribute improvements back to the community",
					],
					p2: "View our source code and license on {link}.",
				},
				liability: {
					title: "Limitations and Liability",
					p1: "ProCut is provided free of charge. To the extent permitted by law:",
					items: [
						"We're not liable for any loss of data or content",
						"Projects are stored in your browser and may be lost if you clear browser data",
						"We're not responsible for how you use the service",
						"Our liability is limited to the maximum extent allowed by law",
					],
					p2: "Since your content stays on your device, we have no way to recover lost projects. Consider exporting important videos when finished editing.",
				},
				changes: {
					title: "Service Changes",
					p1: "We may update ProCut and these terms:",
					items: [
						"We'll notify you of significant changes to these terms",
						"Continued use means you accept any updates",
						"You can always self-host an older version if you prefer",
						"Major changes will be discussed with the community on GitHub",
					],
				},
				stopping: {
					title: "Stopping Use",
					p1: "You can stop using ProCut at any time:",
					items: ["Clear your browser data to remove local projects"],
				},
				contact: {
					title: "Contact Us",
					p1: "Questions about these terms or need to report an issue?",
					p2: "Contact us through our {github}, email us at {email}, or reach out on {x}.",
					p3: "These terms are governed by applicable law in your jurisdiction. We prefer to resolve disputes through friendly discussion in our open-source community.",
				},
			},
		},
	},
	bn: {
		privacy: {
			title: "প্রাইভেসী পলিসি",
			description:
				"আমরা কীভাবে আপনার ডেটা এবং প্রাইভেসী পরিচালনা করি তা জানুন। কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।",
			lastUpdated: "সর্বশেষ আপডেট: ১৫ মার্চ, ২০২৬",
			summary: {
				title: "সংক্ষিপ্ত সারসংক্ষেপ",
				heading: "আপনার কন্টেন্ট কখনো আপনার ডিভাইস থেকে বের হয় না।",
				items: [
					"মৌলিক এডিটিং আপনার ব্রাউজারে লোকাললি ঘটে - আমরা কখনো আপনার ফাইল দেখি না",
					"অটো ক্যাপশনের মতো এআই ফিচারগুলোও আপনার ব্রাউজারে লোকাললি চলে - কিছুই আপলোড করা হয় না",
					"ProCut-এ বর্তমানে কোনো অ্যাকাউন্ট বা লগইনের প্রয়োজন নেই",
					"প্রজেক্ট ডেটা আপনার ডিভাইসেই থাকে, আমাদের সার্ভারে নয়",
					"অ্যাপটিকে আরও উন্নত করতে আমরা অ্যানোনিমাইজড অ্যানালিটিক্স ব্যবহার করি, কিন্তু কোনো ব্যক্তিগত ভিডিও কন্টেন্ট ট্র্যাক করা হয় না",
					"আপনি যেকোনো সময় আপনার ব্রাউজার থেকে লোকাল ডেটা মুছে ফেলতে পারেন",
					"আমরা আপনার ডেটা কারো কাছে বিক্রি বা শেয়ার করি না (আমাদের কাছে তা নেইও)",
				],
				questions: "প্রশ্ন আছে? আমাদের ইমেল করুন {email}-এ",
			},
			sections: {
				content: {
					title: "আমরা কীভাবে আপনার কন্টেন্ট পরিচালনা করি",
					text: "সব এডিটিং এবং প্রসেসিং আপনার ডিভাইসে লোকাললি ঘটে। আমরা কখনো আপনার ভিডিও বা অডিও ফাইল আপলোড, স্টোর বা অ্যাক্সেস করি না। আপনার কন্টেন্ট সম্পূর্ণ ব্যক্তিগত এবং আপনার নিয়ন্ত্রণে থাকে। অটো ক্যাপশনের মতো এআই-চালিত ফিচারগুলোও অন-ডিভাইস মডেল ব্যবহার করে আপনার ব্রাউজারে চলে - কোনো কন্টেন্ট কখনো আপনার ডিভাইস থেকে বের হয় না।",
				},
				accounts: {
					title: "অ্যাকাউন্ট এবং অথেন্টিকেশন",
					p1: "ProCut বর্তমানে ইউজার অ্যাকাউন্ট, লগইন বা গুগল সাইন-ইন অফার করে না।",
					p2: "যেহেতু বর্তমানে কোনো অ্যাকাউন্ট সিস্টেম নেই, তাই আমরা অ্যাকাউন্টের ইমেল, প্রোফাইল ইনফরমেশন বা OAuth আইডেন্টিটি ডেটা সংগ্রহ করি না।",
					p3: "আপনার প্রজেক্টগুলো কখনো আমাদের সার্ভারে জমা রাখা হয় না। নাম, থাম্বনেইল এবং তৈরির তারিখসহ সব প্রজেক্ট ডেটা IndexedDB ব্যবহার করে আপনার ব্রাউজারে লোকাললি জমা থাকে।",
				},
				analytics: {
					title: "অ্যানালিটিক্স",
					p1: "ভিজিটর সংখ্যা গণনার জন্য আমরা {link} ব্যবহার করি। আমরা ক্লিক, ইন্টারঅ্যাকশন বা আপনি কীভাবে এডিটরটি ব্যবহার করছেন তা ট্র্যাক করি না।",
					p2: "কোনো ব্যক্তিগত তথ্য সংগ্রহ করা হয় না, কোনো ইন্ডিভিজুয়াল ইউজারকে ট্র্যাক করা হয় না এবং আপনাকে শনাক্ত করতে পারে এমন কোনো ডেটা স্টোর করা হয় না।",
				},
				storage: {
					title: "লোকাল স্টোরেজ এবং কুকিজ",
					p1: "আমরা ব্রাউজারের লোকাল স্টোরেজ এবং IndexedDB ব্যবহার করি:",
					items: [
						"আপনার ডিভাইসে প্রজেক্টগুলো লোকাললি সেভ করতে",
						"আপনার এডিটর প্রেফারেন্স এবং সেটিংস মনে রাখতে",
						"সেশনগুলোর মধ্যে এডিটরের কাজের জন্য প্রয়োজনীয় অ্যাপ স্টেট স্টোর করতে",
					],
					p2: "সব ডেটা আপনার ডিভাইসেই থাকে এবং আপনার ব্রাউজার সেটিংসের মাধ্যমে যেকোনো সময় মুছে ফেলা যায়।",
				},
				thirdParty: {
					title: "থার্ড-পার্টি সার্ভিস",
					p1: "ProCut এই সার্ভিসগুলোর সাথে যুক্ত:",
					items: [
						"Vercel: হোস্টিং এবং কন্টেন্ট ডেলিভারির জন্য",
						"Databuddy: অ্যানোনিমাইজড অ্যানালিটিক্স-এর জন্য",
					],
				},
				rights: {
					title: "আপনার অধিকার",
					p1: "আপনার ডেটার ওপর আপনার সম্পূর্ণ নিয়ন্ত্রণ রয়েছে:",
					items: [
						"ProCut ব্যবহারের জন্য বর্তমানে কোনো অ্যাকাউন্টের প্রয়োজন নেই",
						"সব সেভ করা প্রজেক্ট মুছে ফেলতে লোকাল স্টোরেজ ক্লিয়ার করুন",
						"প্রাইভেসী সংক্রান্ত যেকোনো উদ্বেগের জন্য আমাদের সাথে যোগাযোগ করুন",
					],
				},
				transparency: {
					title: "ওপেন সোর্স স্বচ্ছতা",
					p1: "ProCut সম্পূর্ণ ওপেন সোর্স। আপনি আমাদের কোড রিভিউ করতে পারেন, আমরা ঠিক কীভাবে ডেটা পরিচালনা করি তা দেখতে পারেন এবং চাইলে নিজেই অ্যাপ্লিকেশনটি হোস্ট করতে পারেন।",
					p2: "আমাদের সোর্স কোড দেখুন {link}-এ।",
				},
				contact: {
					title: "যোগাযোগ করুন",
					p1: "এই প্রাইভেসী পলিসি বা আমরা কীভাবে আপনার ডেটা পরিচালনা করি সে সম্পর্কে কোনো প্রশ্ন আছে?",
					p2: "আমাদের {github}-এ ইস্যু ওপেন করুন, {email}-এ ইমেল করুন অথবা {x}-এ যোগাযোগ করুন।",
				},
			},
		},
		terms: {
			title: "সার্ভিস শর্তাবলী",
			description:
				"আমাদের ফ্রি এবং ওপেন সোর্স ভিডিও এডিটরের জন্য স্বচ্ছ এবং সঠিক শর্তাবলী। কোনো প্রশ্ন থাকলে যোগাযোগ করুন।",
			lastUpdated: "সর্বশেষ আপডেট: ১৫ মার্চ, ২০২৬",
			summary: {
				title: "সংক্ষিপ্ত সারসংক্ষেপ",
				heading: "আপনার কন্টেন্ট আপনারই, আমরা কিছুর মালিক নই।",
				items: [
					"সবকিছু আপনার ব্রাউজারে লোকাললি চলে - আমাদের সার্ভারে কিছুই আপলোড করা হয় না",
					"আমরা কখনো আপনার কন্টেন্টের মালিকানা দাবি করি না",
					"ব্যক্তিগত এবং বাণিজ্যিক ব্যবহারের জন্য ফ্রি, কোনো জলছাপ বা সীমাবদ্ধতা নেই",
					"আপনি কীভাবে এটি ব্যবহার করবেন তার জন্য আপনিই দায়ী - আইন লঙ্ঘন করবেন না",
					"সার্ভিসটি \"যেমন আছে\" (as is) সেভাবে প্রদান করা হয় - আমরা নিখুঁত আপটাইমের গ্যারান্টি দিতে পারি না",
					"ওপেন সোর্স মানে আপনি আমাদের কোড রিভিউ করতে পারেন এবং প্রয়োজনে নিজেই হোস্ট করতে পারেন",
					"কোনো অ্যাকাউন্টের প্রয়োজন নেই - আপনার এক্সপোর্ট করা ভিডিওগুলো সবসময় আপনারই থাকবে",
				],
				questions: "প্রশ্ন আছে? আমাদের ইমেল করুন {email}-এ",
			},
			sections: {
				ownership: {
					title: "আপনার কন্টেন্ট, আপনার অধিকার",
					p1: "আপনার তৈরি করা সবকিছুর মালিক আপনি। সব এডিটিং এবং প্রসেসিং আপনার ডিভাইসে লোকাললি ঘটে। আমরা কখনো আপনার ফাইল দেখি না, স্টোর করি না বা অ্যাক্সেস করি না। আপনার ভিডিও, প্রজেক্ট বা ProCut ব্যবহার করে তৈরি করা কোনো কন্টেন্টের ওপর আমরা মালিকানা, লাইসেন্সিং বা অধিকার দাবি করি না।",
					items: [
						"আপনার কন্টেন্ট কখনো আপনার ডিভাইস থেকে বের হয় না",
						"আপনি আপনার কন্টেন্টের সব ইন্টেলেকচুয়াল প্রপার্টি রাইটস বজায় রাখেন",
						"আপনি আপনার কন্টেন্ট যেভাবে চান সেভাবে এক্সপোর্ট এবং ব্যবহার করতে পারেন",
						"ProCut থেকে কোনো জলছাপ বা লাইসেন্সিং সীমাবদ্ধতা নেই",
					],
				},
				usage: {
					title: "আপনি কীভাবে ProCut ব্যবহার করতে পারেন",
					p1: "ProCut ব্যক্তিগত এবং বাণিজ্যিক ব্যবহারের জন্য ফ্রি। আপনি পারেন:",
					items: [
						"ব্যক্তিগত, শিক্ষামূলক বা বাণিজ্যিক উদ্দেশ্যে ভিডিও তৈরি করতে",
						"ক্লায়েন্ট ওয়ার্ক এবং পেইড প্রজেক্টের জন্য ProCut ব্যবহার করতে",
						"ProCut দিয়ে তৈরি ভিডিও শেয়ার এবং ডিস্ট্রিবিউট করতে",
						"ProCut সফটওয়্যার পরিবর্তন এবং ডিস্ট্রিবিউট করতে (MIT লাইসেন্সের অধীনে)",
					],
					p2: "আপনি কীভাবে ProCut ব্যবহার করছেন এবং আপনার তৈরি করা কন্টেন্টের জন্য আপনিই দায়ী। আপনার এলাকায় অবৈধ এমন কিছুর জন্য এটি ব্যবহার করবেন না।",
				},
				ai: {
					title: "এআই ফিচার",
					p1: "অটো ক্যাপশনের মতো এআই ফিচারগুলো অন-ডিভাইস মডেল ব্যবহার করে সম্পূর্ণভাবে আপনার ব্রাউজারে চলে। কোনো কন্টেন্ট কোনো সার্ভারে আপলোড করা হয় না। এই ফিচারগুলো ঐচ্ছিক - আপনি এগুলি ছাড়াই ProCut ব্যবহার করতে পারেন।",
				},
				service: {
					title: "সার্ভিস",
					p1: "ProCut-এ বর্তমানে কোনো অ্যাকাউন্টের প্রয়োজন নেই। সার্ভিসটি ওয়ারেন্টি ছাড়াই \"যেমন আছে\" সেভাবে প্রদান করা হয়। আমরা নির্ভরযোগ্যতার চেষ্টা করলেও নিরবচ্ছিন্ন সার্ভিসের গ্যারান্টি দিতে পারি না।",
				},
				benefits: {
					title: "ওপেন সোর্স সুবিধা",
					p1: "যেহেতু ProCut ওপেন সোর্স, আপনার অতিরিক্ত কিছু অধিকার রয়েছে:",
					items: [
						"আমরা ঠিক কীভাবে আপনার ডেটা পরিচালনা করি তা দেখতে আমাদের কোড রিভিউ করুন",
						"আপনার নিজের সার্ভারে ProCut হোস্ট করুন",
						"আপনার প্রয়োজন অনুযায়ী সফটওয়্যার পরিবর্তন করুন",
						"কমিউনিটিতে উন্নতির জন্য অবদান রাখুন",
					],
					p2: "আমাদের সোর্স কোড এবং লাইসেন্স দেখুন {link}-এ।",
				},
				liability: {
					title: "সীমাবদ্ধতা এবং দায়বদ্ধতা",
					p1: "ProCut বিনামূল্যে প্রদান করা হয়। আইন অনুযায়ী অনুমোদিত সীমা পর্যন্ত:",
					items: [
						"ডেটা বা কন্টেন্ট হারানোর জন্য আমরা দায়ী নই",
						"প্রজেক্টগুলো আপনার ব্রাউজারে জমা থাকে এবং ব্রাউজার ডেটা মুছে ফেললে সেগুলো হারিয়ে যেতে পারে",
						"আপনি কীভাবে সার্ভিসটি ব্যবহার করছেন তার জন্য আমরা দায়ী নই",
						"আমাদের দায়বদ্ধতা আইনত অনুমোদিত সর্বোচ্চ সীমা পর্যন্ত সীমিত",
					],
					p2: "যেহেতু আপনার কন্টেন্ট আপনার ডিভাইসে থাকে, তাই হারানো প্রজেক্ট পুনরুদ্ধার করার কোনো উপায় আমাদের নেই। এডিটিং শেষ হলে গুরুত্বপূর্ণ ভিডিওগুলো এক্সপোর্ট করার কথা বিবেচনা করুন।",
				},
				changes: {
					title: "সার্ভিস পরিবর্তন",
					p1: "আমরা ProCut এবং এই শর্তাবলী আপডেট করতে পারি:",
					items: [
						"এই শর্তাবলীতে উল্লেখযোগ্য পরিবর্তন হলে আমরা আপনাকে জানাব",
						"ব্যবহার চালিয়ে যাওয়ার অর্থ হলো আপনি যেকোনো আপডেট গ্রহণ করেছেন",
						"আপনি চাইলে সবসময় পুরনো কোনো ভার্সন নিজেই হোস্ট করতে পারেন",
						"প্রধান পরিবর্তনগুলো GitHub-এ কমিউনিটির সাথে আলোচনা করা হবে",
					],
				},
				stopping: {
					title: "ব্যবহার বন্ধ করা",
					p1: "আপনি যেকোনো সময় ProCut ব্যবহার বন্ধ করতে পারেন:",
					items: ["লোকাল প্রজেক্টগুলো মুছে ফেলতে আপনার ব্রাউজার ডেটা ক্লিয়ার করুন"],
				},
				contact: {
					title: "যোগাযোগ করুন",
					p1: "এই শর্তাবলী সম্পর্কে কোনো প্রশ্ন আছে বা কোনো সমস্যা রিপোর্ট করতে চান?",
					p2: "আমাদের {github}-এর মাধ্যমে যোগাযোগ করুন, {email}-এ ইমেল করুন অথবা {x}-এ যোগাযোগ করুন।",
					p3: "এই শর্তাবলী আপনার এলাকায় প্রযোজ্য আইন দ্বারা পরিচালিত। আমরা আমাদের ওপেন-সোর্স কমিউনিটিতে বন্ধুত্বপূর্ণ আলোচনার মাধ্যমে বিরোধ নিষ্পত্তি করতে পছন্দ করি।",
				},
			},
		},
	},
};
