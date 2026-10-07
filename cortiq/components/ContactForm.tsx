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
      `Demande de devis : ${data.get("company") || "nouvelle demande"}`
    );
    const body = encodeURIComponent(
      `Nom : ${data.get("name")}\nEntreprise : ${data.get("company")}\nPack visé : ${data.get("pack")}\n\nMessage :\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@cortiq.fr?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-surface p-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
          Message prêt
        </span>
        <h3 className="mt-4 text-xl font-medium text-fg">
          Votre client mail s'est ouvert
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Si rien ne s'est passé, écrivez-nous directement à{" "}
          <a href="mailto:hello@cortiq.fr" className="text-orange-400 underline underline-offset-2">
            hello@cortiq.fr
          </a>
          . Nous lisons tout.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface p-8 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Votre prénom
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="border-b border-line bg-transparent py-2.5 text-[15px] text-fg outline-none transition-colors placeholder:text-fg/25 focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Le nom de votre marque ou entreprise
          </label>
          <input
            id="company"
            name="company"
            required
            type="text"
            placeholder="Nom de la marque"
            className="border-b border-line bg-transparent py-2.5 text-[15px] text-fg outline-none transition-colors placeholder:text-fg/25 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="pack" className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          La formule qui vous intéresse
        </label>
        <select
          id="pack"
          name="pack"
          defaultValue="Je ne sais pas encore, j'ai juste des questions"
          className="border-b border-line bg-transparent py-2.5 text-[15px] text-fg outline-none transition-colors focus:border-orange-500"
        >
          <option className="bg-bg">Je ne sais pas encore, j'ai juste des questions</option>
          <option className="bg-bg">Crash-test · 890 €</option>
          <option className="bg-bg">Lab · 1 690 € / mois</option>
          <option className="bg-bg">À la demande · 220 € / vidéo</option>
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
          placeholder="Votre produit, votre cible, et ce qui ne marche pas assez bien aujourd'hui."
          className="resize-none border-b border-line bg-transparent py-2.5 text-[15px] text-fg outline-none transition-colors placeholder:text-fg/25 focus:border-orange-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600 disabled:opacity-60"
      >
        {loading ? "Ouverture…" : "Envoyer, sans engagement"}
        {!loading && (
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        )}
      </button>
    </form>
  );
}
