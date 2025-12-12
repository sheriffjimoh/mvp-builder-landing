'use client';
import React, { useState } from 'react';
import { ArrowRight, Check, Code2, Zap, Users, Calendar, Smartphone, Globe } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      alert('Thanks! I\'ll reach out soon.');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Your MVP Guy</div>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              ⚡ Ship Your Product in 2-3 Weeks
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Product Idea Into a Real, Working App
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Full-stack engineer with 6+ years experience. I help founders build and launch MVPs, web apps and mobile apps, using modern tech like Laravel, Next.js, React Native, and TypeScript. No agencies, no delays, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://calendly.com/jimohsherifdeen6/30min" 
                target='_blank'
                className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all text-lg font-medium inline-flex items-center gap-2 group"
              >
                Start Your MVP
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://jimohsherifdeen.vercel.app/projects" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-colors text-lg font-medium"
              >
                View Past Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Options */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Platform</h2>
            <p className="text-gray-600">I build for web, mobile, or both</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web App</h3>
              <p className="text-gray-600">Responsive web applications that work on any device</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600">Native iOS & Android apps built with React Native</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="flex gap-1">
                  <Globe className="w-6 h-6 text-white" />
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Both</h3>
              <p className="text-gray-600">Complete cross-platform solution for maximum reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">6+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2-3</div>
              <div className="text-gray-600">Weeks to Launch</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Remote Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Build Your MVP</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A straightforward process designed for speed and quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-2">STEP 1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery Call</h3>
                <p className="text-gray-600 leading-relaxed">
                  We discuss your product idea, target users, and core features. I&apos;ll help refine your vision into a buildable MVP scope.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-2">STEP 2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build & Iterate</h3>
                <p className="text-gray-600 leading-relaxed">
                  I develop your MVP using proven tech stack. You get regular updates and can request changes throughout the process.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-2">STEP 3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your MVP goes live with full deployment. I provide post-launch support to ensure everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch and validate your product
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Modern, responsive web or mobile app',
              'User authentication & authorization',
              'Database design & implementation',
              'RESTful API development',
              'Admin dashboard (if needed)',
              'Deployment & hosting setup',
              'Cross-platform compatibility',
              'Post-launch support & bug fixes'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, battle-tested technologies for fast, reliable development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Laravel', 'Next.js', 'React Native', 'TypeScript', 'React', 'PHP', 'MySQL', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Node.js', 'REST APIs'].map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center font-medium text-gray-900 hover:border-gray-900 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let&apos;s turn your product idea into reality. Share your email and I&apos;ll reach out within 24 hours to discuss your project or book a 30-minute discovery call right away.
          </p>
          
          {/* <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div> */}

          <div className="mb-12">
            {/* <div className="text-gray-400 mb-4">or</div> */}
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

      {/* Footer */}
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
            © 2025 Your MVP Guy. Full-stack engineer specializing in rapid MVP development.
          </div>
        </div>
      </footer>
    </div>
  );
}