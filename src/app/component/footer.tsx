import React from 'react';

export default function Footer() {
    return (
        <footer id="work" className="py-12 px-6 bg-gray-900 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-2xl font-bold">Your MVP Guy</div>
                    <div className="flex gap-8 text-gray-400">
                        <a href="https://x.com/sherifdeenolat2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a href="https://jimohsherifdeen.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Portfolio
                        </a>
                        <a href="https://calendly.com/jimohsherifdeen6/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Book a Call
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    © 2026 Your MVP Guy. Full-stack engineer specializing in rapid MVP development.
                </div>
            </div>
        </footer>
    );
}
