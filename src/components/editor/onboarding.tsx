"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocalStorage } from "@/services/storage/use-local-storage";
import { Button } from "../ui/button";
import { Dialog, DialogBody, DialogContent, DialogTitle } from "../ui/dialog";
import { useTranslation } from "@/hooks/use-translation";

export function Onboarding() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage({
    key: "hasSeenOnboarding",
    defaultValue: false,
  });

  const isOpen = !hasSeenOnboarding;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleClose = () => {
    setHasSeenOnboarding({ value: true });
  };

  const getStepTitle = () => {
    switch (step) {
      case 0:
        return t.editor.onboarding.steps.welcome.title;
      case 1:
        return t.editor.onboarding.steps.earlyBeta.title;
      case 2:
        return t.editor.onboarding.steps.testing.title;
      default:
        return t.editor.onboarding.steps.fallback;
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-5">
            <div className="space-y-3">
              <Title title={t.editor.onboarding.steps.welcome.title} />
              <Description
                description={t.editor.onboarding.steps.welcome.description}
              />
            </div>
            <NextButton onClick={handleNext}>
              {t.editor.onboarding.next}
            </NextButton>
          </div>
        );
      case 1:
        return (
          <div className="space-y-5">
            <div className="space-y-3">
              <Title title={getStepTitle()} />
              <Description
                description={t.editor.onboarding.steps.earlyBeta.description1}
              />
              <Description
                description={t.editor.onboarding.steps.earlyBeta.description2}
              />
              <Description
                description={t.editor.onboarding.steps.earlyBeta.description3}
              />
            </div>
            <NextButton onClick={handleNext}>
              {t.editor.onboarding.next}
            </NextButton>
          </div>
        );
      case 2:
        return (
          <div className="space-y-5">
            <div className="space-y-3">
              <Title title={getStepTitle()} />
              <Description
                description={t.editor.onboarding.steps.testing.description.replace(
                  "{discord}",
                  t.site.social.discord,
                )}
              />
            </div>
            <NextButton onClick={handleClose}>
              {t.editor.onboarding.finish}
            </NextButton>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>
          <span className="sr-only">{getStepTitle()}</span>
        </DialogTitle>
        <DialogBody>{renderStepContent()}</DialogBody>
      </DialogContent>
    </Dialog>
  );
}

function Title({ title }: { title: string }) {
  return <h2 className="text-lg font-bold md:text-xl">{title}</h2>;
}

function Description({ description }: { description: string }) {
  return (
    <div className="text-muted-foreground">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mb-0">{children}</p>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/80 underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {description}
      </ReactMarkdown>
    </div>
  );
}

function NextButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button onClick={onClick} variant="default" className="w-full">
      {children}
      <ArrowRightIcon className="size-4" />
    </Button>
  );
}
