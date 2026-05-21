import { homeTranslations } from "./home";
import { projectsTranslations } from "./projects";
import { editorTranslations } from "./editor";
import { staticTranslations } from "./static";
import { legalTranslations } from "./legal";

export const translations = {
	en: {
		home: homeTranslations.en,
		projects: projectsTranslations.en,
		editor: editorTranslations.en,
		static: staticTranslations.en,
		legal: legalTranslations.en,
	},
	bn: {
		home: homeTranslations.bn,
		projects: projectsTranslations.bn,
		editor: editorTranslations.bn,
		static: staticTranslations.bn,
		legal: legalTranslations.bn,
	},
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "en";
