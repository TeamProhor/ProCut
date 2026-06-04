import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/hooks/use-translation";

export function DeleteProjectDialog({
	isOpen,
	onOpenChange,
	onConfirm,
	projectNames,
}: {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onConfirm: () => void;
	projectNames: string[];
}) {
	const { t } = useTranslation();
	const count = projectNames.length;
	const isSingle = count === 1;
	const singleName = isSingle ? projectNames[0] : null;

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent
				onOpenAutoFocus={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
			>
				<DialogHeader>
					<DialogTitle>
						{singleName ? (
							<>
								{t.projects.dialogs.delete.titleSingle.split("'{name}'")[0]}
								{"'"}
								<span className="inline-block max-w-[300px] truncate align-bottom">
									{singleName}
								</span>
								{"'"}
								{t.projects.dialogs.delete.titleSingle.split("'{name}'")[1]}
							</>
						) : (
							t.projects.dialogs.delete.titleMultiple.replace("{count}", count.toString())
						)}
					</DialogTitle>
				</DialogHeader>
				<DialogBody>
					<Alert variant="destructive">
						<AlertTitle>{t.projects.dialogs.delete.warning}</AlertTitle>
						<AlertDescription>
							{singleName
								? t.projects.dialogs.delete.descriptionSingle.replace("{name}", `"${singleName}"`)
								: t.projects.dialogs.delete.descriptionMultiple.replace("{count}", count.toString())}
						</AlertDescription>
					</Alert>
					<div className="flex flex-col gap-3">
						<Label className="text-xs font-semibold text-slate-500">
							{t.projects.dialogs.delete.confirmInstruction}
						</Label>
						<Input
							type="text"
							placeholder={t.projects.dialogs.delete.confirmPlaceholder}
							size="lg"
							variant="destructive"
						/>
					</div>
				</DialogBody>
				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						{t.projects.dialogs.delete.cancel}
					</Button>
					<Button variant="destructive" onClick={onConfirm}>
						{t.projects.dialogs.delete.submit}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
