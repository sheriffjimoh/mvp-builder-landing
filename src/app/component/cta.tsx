export default function CTA() {
  return (
    <section id="contact" className="bg-[color:var(--surface-2)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Let&apos;s build together</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to launch your MVP in weeks?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          We turn product ideas into working MVPs fast, with clean design, scalable code, and launch-ready performance.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/jimohsherifdeen6/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-400"
          >
            Book a Call
          </a>
          <a
            href="/offer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
          >
            See Offer Details
          </a>
        </div>
      </div>
    </section>
  );
}

