"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list. We'll surface as soon as Meggy does.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="your.name@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          disabled={status === "loading"}
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-sm border border-white/20 bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-white/35 focus:border-foam/60 focus:bg-white/[0.09] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center justify-center rounded-sm bg-foam px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-abyss transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-abyss/30 border-t-abyss" />
              Sending
            </span>
          ) : (
            "Notify Me"
          )}
        </button>
      </div>

      <div className="mt-3 min-h-[1.25rem] text-xs sm:text-[13px]" aria-live="polite">
        {status === "success" && <p className="text-foam">{message}</p>}
        {status === "error" && <p className="text-red-300">{message}</p>}
        {status === "idle" && (
          <p className="text-white/40">
            One email when the premiere date is announced. Nothing else.
          </p>
        )}
      </div>
    </form>
  );
}
