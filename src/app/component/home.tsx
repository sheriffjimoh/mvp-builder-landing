'use client';
import { ArrowRight, Briefcase, Globe, LayoutDashboard, Sparkles, Users, Zap } from 'lucide-react';
import Nav from './nav';
import Footer from './footer';
import CTA from './cta';

export default function Home() {
  const stats = [
    { label: 'Years experience', value: '6+' },
    { label: 'Launch time', value: '2-3 weeks' },
    { label: 'Remote', value: '100% worldwide' },
  ];

  const services = [
    {
      title: 'Web App',
      description: 'Responsive web applications built with modern tech that work on any device.',
      icon: LayoutDashboard,
      accent: 'sky',
    },
    {
      title: 'Mobile App',
      description: 'Native iOS & Android apps built with React Native for fast MVP launches.',
      icon: Zap,
      accent: 'cyan',
    },
    {
      title: 'Cross-Platform',
      description: 'Shared codebase for web and mobile so your MVP ships faster and stays maintainable.',
      icon: Globe,
      accent: 'teal',
    },
  ];

  const process = [
    {
      title: 'Discovery call',
      description: 'We clarify your product idea, target users, and the single feature that must convert.',
    },
    {
      title: 'Build & iterate',
      description: 'I develop your MVP quickly, deliver testable builds, and refine it with your feedback.',
    },
    {
      title: 'Launch & support',
      description: 'Deploy live, hand over docs, and provide 30 days of post-launch support.',
    },
  ];

  const projects = [
    {
      company: 'Curnetintel.com',
      description: 'Business Intelligence Platform',
      quote: 'Focused on core data import and visualization for fast adoption.',
      icon: Globe,
      accent: 'sky',
      url: 'https://curnectintel.com',
    },
    {
      company: 'Masterbots.ai',
      description: 'AI Automation Platform',
      quote: 'One powerful bot builder drove 60% of early revenue while keeping launch lean.',
      icon: Zap,
      accent: 'cyan',
      url: 'https://masterbots.ai',
    },
    {
      company: 'Catalogcove.com',
      description: 'Product Catalog Management',
      quote: 'A single perfect import flow shipped 2 weeks early and delivered better adoption.',
      icon: Users,
      accent: 'teal',
      url: 'https://catalogcove.com',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/20 selection:text-slate-100">
      <Nav />

      <main className="relative overflow-hidden">
        <section className="relative overflow-hidden bg-slate-950 pb-24 pt-28">
          <div className="absolute right-0 top-24 h-[520px] w-[520px] rounded-full bg-sky-600/20" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative z-10">
                <div className="max-w-xl rounded-[2rem] border border-slate-800 bg-slate-900 p-10 shadow-2xl shadow-slate-950/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Launch an MVP that converts</p>
                  <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Your agency for fast, conversion-focused MVPs.
                  </h1>
                  <p className="mt-5 text-base leading-7 text-slate-300">
                    We help founders cut scope, launch the one feature that matters, and ship web or mobile products in 2–3 weeks.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://calendly.com/jimohsherifdeen6/30min"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                    >
                      Book a discovery call
                    </a>
                    <a
                      href="/offer"
                      className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                    >
                      See offer details
                    </a>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-5 text-center">
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.32em] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute -left-11 -top-10 h-80 w-80 rounded-full bg-sky-600" />
                  <div className="relative overflow-hidden rounded-full border-8 border-slate-950 bg-slate-950">
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                      alt="Developer portrait"
                      className="h-[420px] w-[420px] object-cover"
                    />
                  </div>
                  <div className="absolute -right-12 bottom-0 h-24 w-24 rounded-full bg-sky-600/80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.95fr_0.7fr] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">About</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Agency-grade MVP delivery for founders.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                We build products that launch quickly, avoid feature bloat, and focus on user conversion. Your MVP is designed to win early customers and validate product-market fit.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Scope</p>
                  <p className="mt-4 text-lg font-semibold text-white">Ruthless prioritization</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Launch</p>
                  <p className="mt-4 text-lg font-semibold text-white">Delivery in 2–3 weeks</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-800 bg-slate-950 p-8 shadow-2xl shadow-slate-950/30">
              <div className="flex flex-col items-center text-center">
                <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-slate-900 bg-slate-900">
                  <img
                    // src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
                    src="/img.png"
                    alt="Profile avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-6 text-2xl font-semibold text-white">Your MVP Guy</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">Agency for MVP launches</p>
              </div>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Deliverables</p>
                  <p className="mt-4 text-lg font-semibold text-white">Conversion-focused MVP</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Support</p>
                  <p className="mt-4 text-lg font-semibold text-white">30 days post-launch support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">What we build</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Web, mobile, and cross-platform MVPs.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                Platform-agnostic MVP development that gives founders the flexibility to launch on the right channels fast.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                const accent =
                  service.accent === 'cyan'
                    ? 'bg-cyan-500/15 text-cyan-400'
                    : service.accent === 'teal'
                    ? 'bg-cyan-500/15 text-cyan-400'
                    : 'bg-sky-500/15 text-sky-400';
                return (
                  <div key={service.title} className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1">
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-7">{service.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-500">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Process</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                How we build your MVP.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                A streamlined process designed to get you from idea to launch without headaches.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {process.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-800 bg-slate-950 p-8 shadow-lg shadow-slate-950/10">
                  <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-sky-300">
                    {item.title}
                  </span>
                  <p className="mt-6 text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-slate-950 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Real results</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Real MVPs launched faster.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                Work built for founders who needed fast product validation and strong early conversion.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;
                const accent = project.accent === 'cyan' ? 'bg-cyan-500/15 text-cyan-300' : 'bg-sky-500/15 text-sky-400';
                return (
                  <a
                    key={project.company}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl ${accent}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-semibold">{project.company}</h3>
                    <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                    <p className="mt-6 text-sm leading-7 text-slate-400 italic">{project.quote}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
