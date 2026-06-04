import { homeTranslations } from "./home";
import { projectsTranslations } from "./projects";
import { editorTranslations } from "./editor";
import { staticTranslations } from "./static";
import { legalTranslations } from "./legal";
import { siteTranslations } from "./site";

export const translations = {
	en: {
		home: homeTranslations.en,
		projects: projectsTranslations.en,
		editor: editorTranslations.en,
		static: staticTranslations.en,
		legal: legalTranslations.en,
		site: siteTranslations.en,
	},
	bn: {
		home: homeTranslations.bn,
		projects: projectsTranslations.bn,
		editor: editorTranslations.bn,
		static: staticTranslations.bn,
		legal: legalTranslations.bn,
		site: siteTranslations.bn,
	},
} as const;

type DeepString<T> = T extends string
	? string
	: T extends object
		? { [K in keyof T]: DeepString<T[K]> }
		: T;

export type Language = keyof typeof translations;
export type TranslationKeys = DeepString<typeof translations.en>;

export const DEFAULT_LANGUAGE: Language = "en";
