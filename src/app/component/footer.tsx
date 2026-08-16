export default function Footer() {
  return (
    <footer className="bg-[color:var(--surface-2)] text-[color:var(--muted)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="text-2xl font-semibold text-white">Your MVP Guy</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Rapid MVP development with modern tech, clear product strategy, and launch-ready execution.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Quick links</p>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <a href="#about" className="block hover:text-white">About</a>
                <a href="#services" className="block hover:text-white">Services</a>
                <a href="#work" className="block hover:text-white">Work</a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">Contact</p>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank" rel="noreferrer" className="block hover:text-white">
                  Book a call
                </a>
                <a href="https://x.com/sherifdeenolat2" target="_blank" rel="noreferrer" className="block hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 text-center">
          © 2026 Your MVP Guy. Full-stack engineer specializing in rapid MVP development.
        </div>
      </div>
    </footer>
  );
}

