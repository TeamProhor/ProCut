import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { submitFeedback, MAX_MESSAGE_LENGTH } from "@/feedback";

const submitSchema = z.object({
  message: z
    .string()
    .min(1, "Message is required")
    .max(MAX_MESSAGE_LENGTH, "Message too long"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = submitSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid input", details: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const entry = await submitFeedback(result.data);
  return NextResponse.json({ entry }, { status: 201 });
}
