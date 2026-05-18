import React from 'react';

export default function CTA() {
    return (
        <section id="contact" className="py-16 px-6 bg-gray-100 border-y border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Build Your MVP?
                </h2>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                    Let&apos;s turn your product idea into reality. Book a 30-minute discovery call to discuss your project.
                </p>

                <div className="mb-8">
                    <a
                        href="https://calendly.com/jimohsherifdeen6/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium border border-gray-900"
                    >
                        Book a 30-Min Call
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="font-bold">→</span>
                        <span>2-3 weeks delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">→</span>
                        <span>Modern tech stack</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">→</span>
                        <span>Post-launch support</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
