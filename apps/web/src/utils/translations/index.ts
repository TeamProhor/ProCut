import { homeTranslations } from "./home";

export const translations = {
	en: {
		home: homeTranslations.en,
	},
	bn: {
		home: homeTranslations.bn,
	},
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

export const DEFAULT_LANGUAGE: Language = "en";
