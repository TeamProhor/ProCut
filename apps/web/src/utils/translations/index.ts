import { homeTranslations } from "./home";
import { projectsTranslations } from "./projects";
import { editorTranslations } from "./editor";

export const translations = {
	en: {
		home: homeTranslations.en,
		projects: projectsTranslations.en,
		editor: editorTranslations.en,
	},
	bn: {
		home: homeTranslations.bn,
		projects: projectsTranslations.bn,
		editor: editorTranslations.bn,
	},
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "en";
