import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                    Your MVP Guy
                </Link>
                <div className="flex items-center gap-4">
                    <a
                        href="https://jimohsherifdeen.vercel.app/projects"
                        target='_blank'
                        className="hidden sm:inline-block px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        Past Projects
                    </a>
                    <a
                        href="https://calendly.com/jimohsherifdeen6/30min"
                        target='_blank'
                        className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </nav>
    )
}