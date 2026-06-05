"use client";

import { Button } from "./ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/utils/ui";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useTranslation();

  return (
    <div
      className={cn(
        "flex items-center rounded-md border p-1 px-1.5 h-10",
        className,
      )}
    >
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-7 px-2 text-xs rounded-sm hover:bg-background",
          language === "en" && "!bg-accent",
        )}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-7 px-2 text-xs rounded-sm hover:bg-background",
          language === "bn" && "!bg-accent",
        )}
        onClick={() => setLanguage("bn")}
      >
        BN
      </Button>
    </div>
  );
}
