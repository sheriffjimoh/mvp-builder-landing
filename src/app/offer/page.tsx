import Nav from "../component/nav";
import Footer from "../component/footer";
import CTA from "../component/cta";
import { Check, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MVPOfferPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
            <Nav />

            {/* Who It’s For */}
            <section className="bg-gray-50/50 py-24 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
                        <p className="text-lg text-gray-600">Founders who want laser-focused MVPs, not feature-packed experiments</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Solo founders with a clear core feature",
                            "Non‑technical founders who want to avoid scope creep",
                            "Teams building their first paying MVP",
                            "Founders tired of over-engineering everything",
                            "People who want to validate before raising funds",
                            "Builders who value launch speed over feature count",
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
            <section className="py-16 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Everything You Need to Launch</h2>
                        <p className="text-gray-600">A lean product with ruthless prioritization. Only features that drive conversions.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Feature Filtering", desc: "We ruthlessly cut anything that doesn't directly convert users." },
                            { title: "Auth System", desc: "Secure login/signup (Google, Email) pre-configured." },
                            { title: "Core Feature", desc: "One powerful feature that solves your core problem." },
                            { title: "Conversion UI/UX", desc: "Clean, intuitive design optimized for user activation." },
                            { title: "Admin Dashboard", desc: "Manage users and content from a private panel." },
                            { title: "Payments", desc: "Stripe/Paystack integration to monetize day one." },
                            { title: "Notifications", desc: "Email/SMS to drive engagement and retention." },
                            { title: "Live Deployment", desc: "Setup on Vercel/AWS with custom domain." },
                            { title: "Post-Launch Support", desc: "30 days of free support after we go live." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border border-gray-200 bg-white hover:border-gray-400 transition-colors"
                            >
                                <div className="text-sm font-bold text-gray-400 mb-3">◆</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section id="process" className="py-16 border-t border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Typical MVP Timeline</h2>
                        <p className="text-gray-600">From kickoff to launch in 2–3 weeks</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { title: "Week 1", subtitle: "Strategy", desc: "Define core goals, user flow, and must-have conversion feature." },
                            { title: "Week 2", subtitle: "Build", desc: "Rapid development on essential MVP screens, integrations, and launch-ready UI." },
                            { title: "Week 3", subtitle: "Launch", desc: "Test, refine, deploy live, and activate early post-launch support." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 border border-gray-200"
                            >
                                <div className="text-xs font-bold text-gray-400 mb-1 uppercase">{item.title}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.subtitle}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


          





  {/* Pricing */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10\">Transparent Pricing</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Starter */}
                        <div className="bg-white border border-gray-200 p-8 flex flex-col">
                            <h3 className="font-bold text-gray-900">MVP Starter</h3>
                            <p className="text-gray-600 mt-1 text-sm">Validate your core idea fast.</p>
                            <div className="my-6">
                                <span className="text-3xl font-bold text-gray-900">$1,500</span>
                                <span className="text-gray-500 text-sm">/project</span>
                            </div>

                            <ul className="space-y-2 text-gray-600 mb-6 flex-1 text-sm">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-900" /> Scoping session</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-900" /> Core feature build</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-900" /> Authentication</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-900" /> Basic dashboard</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-gray-900" /> Deployment</li>
                            </ul>
                            <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank" className="w-full block text-center py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors text-sm">Get Started</a>
                        </div>

                        {/* Launch (Featured) */}
                        <div className="bg-gray-900 text-white border border-gray-900 p-8 flex flex-col relative">
                            <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs font-bold px-3 py-1">MOST POPULAR</div>
                            <h3 className="font-bold">MVP Launch</h3>
                            <p className="text-gray-400 mt-1 text-sm">Launch with real users & payments.</p>
                            <div className="my-6">
                                <span className="text-3xl font-bold text-white">$3,000</span>
                                <span className="text-gray-400 text-sm">/project</span>
                            </div>

                            <ul className="space-y-2 text-gray-300 mb-6 flex-1 text-sm">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Everything in Starter</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Payments & subscriptions</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Email notifications</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Analytics integration</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Launch support</li>
                            </ul>
                            <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank\" className="w-full block text-center py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors text-sm\">Start Building</a>
                        </div>

                        {/* Scale */}
                        <div className="bg-white border border-gray-200 p-8 flex flex-col">
                            <h3 className="font-bold text-gray-900">MVP Scale</h3>
                            <p className="text-gray-600 mt-1 text-sm">Extend & scale your product.</p>
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
