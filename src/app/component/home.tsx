'use client';
import React, { useState } from 'react';
import { ArrowRight, Globe, Smartphone, Users, Code2, Zap, Check } from 'lucide-react';
import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
import CTA from './cta';

export default function Home() {
  const [email, setEmail] = useState('');

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('en-US', { month: 'short' });
  const currentYear = currentDate.getFullYear();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-900 selection:text-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_-100px,#e5e7eb,transparent)]"></div>

        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-gray-800 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting New Projects for {currentMonth} {currentYear}
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Turn Your Idea Into a <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 animate-gradient-x">
                World-Class MVP
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              I help founders build and launch polished web and mobile apps in weeks, not months. No agencies, no bloat, just high-quality code.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/offer"
                className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all text-lg font-semibold inline-flex items-center gap-2 shadow-lg shadow-gray-200 hover:shadow-gray-300 transform hover:-translate-y-0.5"
              >
                View Our Offer
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://jimohsherifdeen.vercel.app/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all text-lg font-semibold"
              >
                View Past Projects
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${(i + 2) * 100} flex items-center justify-center text-xs overflow-hidden`}>
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e5e7eb`} alt="Avatar" />
                    </div>
                  ))}
                </div>
                <span>Trusted by 20+ founders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Options */}
      <section className="py-20 px-6 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Platform</h2>
            <p className="text-lg text-gray-600">I build for web, mobile, or both with equal proficiency</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web App</h3>
              <p className="text-gray-600 leading-relaxed">Responsive, fast-loading web applications built with Next.js that work perfectly on any device size.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App</h3>
              <p className="text-gray-600 leading-relaxed">Native iOS & Android apps built with React Native for smooth performance and native feel.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <div className="flex gap-1">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <Smartphone className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Platform</h3>
              <p className="text-gray-600 leading-relaxed">Complete solution with shared codebase for web and mobile, maximizing efficiency and reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-4">
              <div className="text-5xl font-extrabold text-gray-900 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="px-4 pt-8 md:pt-0">
              <div className="text-5xl font-extrabold text-gray-900 mb-2">2-3</div>
              <div className="text-gray-600 font-medium">Weeks to Launch</div>
            </div>
            <div className="px-4 pt-8 md:pt-0">
              <div className="text-5xl font-extrabold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Remote Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Build Your MVP</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A transparent, streamlined process designed to get you from idea to launch without the headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="relative group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="bg-white pt-8 h-full">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-3 tracking-wider">STEP 1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery Call</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We discuss your product idea, target users, and core features. I&apos;ll help refine your vision into a concrete, buildable MVP scope that fits your budget.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left transition-delay-100"></div>
              <div className="bg-white pt-8 h-full">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  <Code2 className="w-8 h-8" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-3 tracking-wider">STEP 2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build & Iterate</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  I develop your MVP using a battle-tested tech stack. You get regular updates, testable staging links, and can request changes throughout the process.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left transition-delay-200"></div>
              <div className="bg-white pt-8 h-full">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-3 tracking-wider">STEP 3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Support</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Your MVP goes live with full deployment setup. I provide 30 days of post-launch support to fix bugs and ensure everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What You Get</h2>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to launch and validate your product, handled by one expert.
              </p>
              <Link href="/offer" className="inline-flex items-center gap-2 font-semibold text-gray-900 border-b-2 border-gray-900 hover:text-gray-700 transition-colors pb-1">
                View Full Offer Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
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
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on the modern web's most reliable technologies for speed, scale, and performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Laravel', 'Next.js', 'React Native', 'TypeScript', 'React', 'PHP', 'MySQL', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Node.js', 'REST APIs'].map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-full px-6 py-3 font-medium text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}