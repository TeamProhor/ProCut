import { DraggableItem } from "@/components/editor/panels/assets/draggable-item";
import { PanelView } from "@/components/editor/panels/assets/views/base-panel";
import { useEditor } from "@/editor/use-editor";
import { DEFAULTS } from "@/timeline/defaults";
import { buildTextElement } from "@/timeline/element-utils";
import type { MediaTime } from "@/wasm";
import { useTranslation } from "@/hooks/use-translation";

export function TextView() {
  const { t } = useTranslation();
  const editor = useEditor();

  const handleAddToTimeline = ({ currentTime }: { currentTime: MediaTime }) => {
    const activeScene = editor.scenes.getActiveScene();
    if (!activeScene) return;

    const element = buildTextElement({
      raw: DEFAULTS.text.element,
      startTime: currentTime,
    });

    editor.timeline.insertElement({
      element,
      placement: { mode: "auto" },
    });
  };

  return (
    <PanelView title={t.editor.text.title}>
      <DraggableItem
        name={t.editor.text.defaultText}
        preview={
          <div className="bg-accent flex size-full items-center justify-center rounded">
            <span className="text-xs select-none">
              {t.editor.text.defaultText}
            </span>
          </div>
        }
        dragData={{
          id: "temp-text-id",
          type: DEFAULTS.text.element.type,
          name: DEFAULTS.text.element.name,
          content: t.editor.text.defaultText,
        }}
        aspectRatio={1}
        onAddToTimeline={handleAddToTimeline}
        shouldShowLabel={false}
      />
    </PanelView>
  );
}
