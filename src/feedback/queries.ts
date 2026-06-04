import type { FeedbackEntry, SubmitFeedbackInput } from "./types";
import { generateUUID } from "@/utils/id";

export async function submitFeedback({
	message,
}: SubmitFeedbackInput): Promise<FeedbackEntry> {
	const id = generateUUID();
	const now = new Date();

	console.log(`[Feedback] New feedback received: ${message}`);

	return { id, message, createdAt: now.toISOString() };
}
