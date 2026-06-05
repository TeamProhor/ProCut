"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { translations, type TranslationKeys } from "@/utils/translations";

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t: TranslationKeys = translations[language];

  return { t, language, setLanguage };
}
