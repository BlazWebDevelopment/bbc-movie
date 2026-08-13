"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

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
      setMessage("You're on the list. We'll let you know when Kairo arrives.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <div className="group relative flex items-stretch overflow-hidden rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md transition focus-within:border-white/40 focus-within:bg-white/[0.06]">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          disabled={status === "loading"}
          className="flex-1 bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none disabled:opacity-60 sm:text-base"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="relative m-1 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:text-sm"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              Sending
            </span>
          ) : (
            "Notify Me"
          )}
        </button>
      </div>

      <div className="mt-3 min-h-[1.25rem] text-xs sm:text-sm" aria-live="polite">
        {status === "success" && (
          <p className="text-emerald-300/90">{message}</p>
        )}
        {status === "error" && (
          <p className="text-red-300/90">{message}</p>
        )}
        {status === "idle" && (
          <p className="text-white/40">
            We&apos;ll only email you about Kairo: The Lone Wolf. No spam.
          </p>
        )}
      </div>
    </form>
  );
}
