"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Audit growth — ${data.get("company") || "nouvelle demande"}`
    );
    const body = encodeURIComponent(
      `Nom : ${data.get("name")}\nEntreprise : ${data.get("company")}\nStade : ${data.get("stage")}\n\nMessage :\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@cortiq.fr?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">
          Message prêt
        </span>
        <h3 className="mt-4 text-xl font-medium text-ink">
          Votre client mail s'est ouvert
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Si rien ne s'est passé, écrivez-nous directement à{" "}
          <a href="mailto:hello@cortiq.fr" className="text-orange-600 underline underline-offset-2">
            hello@cortiq.fr
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-8 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Nom
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Entreprise
          </label>
          <input
            id="company"
            name="company"
            required
            type="text"
            placeholder="Nom de la startup"
            className="border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="stage" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          Stade
        </label>
        <select
          id="stage"
          name="stage"
          defaultValue="Pré-seed"
          className="border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-orange-500"
        >
          <option>Pré-seed</option>
          <option>Seed</option>
          <option>Series A</option>
        </select>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Où en êtes-vous sur l'acquisition aujourd'hui ?"
          className="resize-none border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-orange-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600 disabled:opacity-60"
      >
        {loading ? "Ouverture…" : "Envoyer la demande"}
        {!loading && (
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        )}
      </button>
    </form>
  );
}
