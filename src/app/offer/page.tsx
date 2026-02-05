import Nav from "../component/nav";
import Footer from "../component/footer";
import CTA from "../component/cta";
import { Check, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MVPOfferPage() {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
            <Nav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_-100px,#e5e7eb,transparent)]"></div>

                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-block mb-6 px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate-fade-in-up">
                        LIMITED SPOTS: Accepting 2 Projects for {currentMonth}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                        From Idea to Live SaaS MVP<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
                            in 21-30 Days
                        </span>
                    </h1>

                    <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We help solo founders turn raw ideas into launch‑ready web MVPs, fast, focused, and built for real users.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
                        <a
                            href="https://calendly.com/jimohsherifdeen6/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gray-900 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-lg font-bold"
                        >
                            Book Free Strategy Call
                        </a>
                        <Link
                            href="#process"
                            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all text-lg font-bold"
                        >
                            View Our Process
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" /> 100% Code Ownership
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" /> Global Launch Support
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It’s For */}
            <section className="bg-gray-50/50 py-24 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
                        <p className="text-lg text-gray-600">Designed for founders who value speed and quality</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Solo founders starting from scratch",
                            "Non‑technical founders with SaaS ideas",
                            "Teams building their first MVP",
                            "Founders who want to validate before raising funds",
                            "People tired of overthinking tech stacks",
                            "Builders who want to launch fast without overbuilding",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4"
                            >
                                <div className="mt-1 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-gray-900" />
                                </div>
                                <span className="font-medium text-gray-800 text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Launch</h2>
                        <p className="text-lg text-gray-600">No hidden fees. No &quot;maintenance&quot; traps. Just a complete product.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Product Scoping", desc: "We refine your features to what truly matters for V1." },
                            { title: "Auth System", desc: "Secure login/signup (Google, Email) pre-configured." },
                            { title: "Core Features", desc: "Custom development of your unique value proposition." },
                            { title: "Modern UI/UX", desc: "Clean, responsive design that looks pro on all devices." },
                            { title: "Admin Dashboard", desc: "Manage users and content from a private panel." },
                            { title: "Payments", desc: "Stripe/Paystack integration to accept money day one." },
                            { title: "Notifications", desc: "Transactional emails to keep users engaged." },
                            { title: "Live Deployment", desc: "Setup on Vercel/AWS with custom domain." },
                            { title: "Bug Fixes", desc: "30 days of free support after we go live." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group p-8 border border-gray-200 rounded-3xl bg-white hover:border-gray-900 transition-colors"
                            >
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section id="process" className="bg-gray-900 text-white py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Typical MVP Timeline</h2>
                        <p className="text-lg text-gray-400">From kickoff to launch party in 6 weeks</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

                        {[
                            { title: "Week 1", subtitle: "Strategy", desc: "Scoping call & feature lock-in" },
                            { title: "Week 2–4", subtitle: "Build", desc: "Sprint development & updates" },
                            { title: "Week 5", subtitle: "Polishing", desc: "Testing & refinements" },
                            { title: "Week 6", subtitle: "Launch", desc: "Go live & handover" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative z-10 bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-white/20 transition-colors"
                            >
                                <div className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{item.title}</div>
                                <h3 className="text-2xl font-bold text-white mb-3">{item.subtitle}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Transparent Pricing</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900">MVP Starter</h3>
                            <p className="text-gray-600 mt-2 text-sm">Validate your core idea fast.</p>
                            <div className="my-8">
                                <span className="text-4xl font-extrabold text-gray-900">$1,500</span>
                                <span className="text-gray-500">/project</span>
                            </div>

                            <ul className="space-y-4 text-gray-600 mb-8 flex-1">
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Scoping session</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Core feature build</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Authentication</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Basic dashboard</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Deployment</li>
                            </ul>
                            <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank" className="w-full block text-center py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-50 transition-colors">Get Started</a>
                        </div>

                        {/* Launch (Featured) */}
                        <div className="bg-black text-white rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">MOST POPULAR</div>
                            <h3 className="text-xl font-bold">MVP Launch</h3>
                            <p className="text-gray-400 mt-2 text-sm">Launch with real users & payments.</p>
                            <div className="my-8">
                                <span className="text-4xl font-extrabold text-white">$3,000</span>
                                <span className="text-gray-500">/project</span>
                            </div>

                            <ul className="space-y-4 text-gray-300 mb-8 flex-1">
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /> Everything in Starter</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /> Payments & subscriptions</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /> Email notifications</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /> Analytics integration</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /> Launch support</li>
                            </ul>
                            <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank" className="w-full block text-center py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors">Start Building</a>
                        </div>

                        {/* Scale */}
                        <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900">MVP Scale</h3>
                            <p className="text-gray-600 mt-2 text-sm">Extend & scale your product.</p>
                            <div className="my-8">
                                <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                            </div>

                            <ul className="space-y-4 text-gray-600 mb-8 flex-1">
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Advanced features</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> API integrations</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Performance optimization</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Mobile app extension</li>
                                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gray-900" /> Ongoing support</li>
                            </ul>
                            <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank" className="w-full block text-center py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-50 transition-colors">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Reversal */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Our Launch Guarantee</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            We are committed to results. If we don’t deliver your MVP within the agreed timeline, we keep working at no extra cost until your product is live and working perfectly.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA />

            <Footer />
        </main>
    );
}
