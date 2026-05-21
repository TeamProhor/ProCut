import { homeTranslations } from "./home";
import { projectsTranslations } from "./projects";

export const translations = {
	en: {
		home: homeTranslations.en,
		projects: projectsTranslations.en,
	},
	bn: {
		home: homeTranslations.bn,
		projects: projectsTranslations.bn,
	},
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "en";
