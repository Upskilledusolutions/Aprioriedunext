const BACKEND_URL = process.env.NEXT_PUBLIC_BACKENDURL;

export function createReasoningActivityAttemptId() {
  if (typeof window !== "undefined" && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `reasoning-attempt-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export async function persistReasoningQuestionAttempt(attempt) {
  if (!BACKEND_URL) {
    throw new Error("NEXT_PUBLIC_BACKENDURL is not configured");
  }

  const response = await fetch(`${BACKEND_URL}/api/reasoning/attempts`, {
    method: "POST",
    credentials: "include",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attempt),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Reasoning question attempt persistence failed");
  }

  return data.attempt;
}
