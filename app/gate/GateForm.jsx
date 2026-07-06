"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function GateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/manual";

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/gate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push(next);
      router.refresh();
    } else {
      setError(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto px-5 py-24">
      <span className="font-mono text-sm tracking-widest uppercase text-brass">
        Human OS
      </span>
      <h1 className="font-display text-3xl mt-3 mb-3">This section is gated.</h1>
      <p className="font-body text-sm text-inkSoft mb-8">
        Enter the password to continue.
      </p>

      <form onSubmit={submit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          className="w-full px-4 py-3 rounded-sm border font-body text-sm mb-4 bg-canvas text-ink focus:outline-none focus:ring-2 focus:ring-brass"
          style={{ borderColor: "#B9B2A0" }}
        />

        {error && (
          <p className="font-body text-sm text-red-700 mb-4">Incorrect password.</p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-signal text-canvas font-body font-medium text-sm hover:bg-signalDark transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
        >
          {loading ? "Checking..." : "Enter"} {!loading && <ArrowRight size={15} />}
        </button>
      </form>
    </div>
  );
}
