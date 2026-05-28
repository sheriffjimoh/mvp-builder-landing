"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './theme-toggle';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/30 backdrop-blur-2xl border-b border-slate-800/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
          Your MVP Guy
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            Process
          </a>
          <a href="#work" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            Work
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/jimohsherifdeen6/30min"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 md:inline-flex"
          >
            Book a Call
          </a>
          <div className="hidden md:inline-flex">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-6 py-5">
            <a href="#about" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              About
            </a>
            <a href="#services" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Services
            </a>
            <a href="#experience" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Experience
            </a>
            <a href="#work" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Work
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Contact
            </a>
            <a
              href="https://calendly.com/jimohsherifdeen6/30min"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
            >
              Book a Call
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
