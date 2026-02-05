import React from 'react';
import { Calendar, Zap, Check } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Build Your MVP?
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    Let&apos;s turn your product idea into reality. Share your email and I&apos;ll reach out within 24 hours to discuss your project or book a 30-minute discovery call right away.
                </p>

                <div className="mb-12">
                    <a
                        href="https://calendly.com/jimohsherifdeen6/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-700 text-white rounded-full hover:border-gray-500 transition-colors font-medium"
                    >
                        <Calendar className="w-5 h-5" />
                        Book a 30-Min Call
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>2-3 weeks delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        <span>Modern tech stack</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>Post-launch support</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
