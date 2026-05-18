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


        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-2 bg-gray-100 rounded text-sm font-medium text-gray-700 border border-gray-200">
              Accepting New Projects for {currentMonth} {currentYear}
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
              Launch an MVP That <br className="hidden md:block" />
              Actually Converts
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              I help founders filter out unnecessary features and focus on the single core feature that converts. Launch in weeks, not months. No bloat, no scope creep, just the essentials that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/offer"
                className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-base font-medium border border-gray-900"
              >
                View Our Offer
              </Link>

              <a
                href="#projects"
                className="px-8 py-3 bg-white text-gray-900 border border-gray-900 hover:bg-gray-50 transition-colors text-base font-medium"
              >
                See Real Projects
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
      <section className="py-12 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Platform</h2>
            <p className="text-gray-600">I build for web, mobile, or both</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Web App</h3>
              <p className="text-gray-600 text-sm">Responsive web applications built with modern tech that work on any device.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600 text-sm">Native iOS & Android apps built with React Native.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cross-Platform</h3>
              <p className="text-gray-600 text-sm">Complete solution with shared codebase for web and mobile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="px-4">
              <div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-gray-900 mb-1">2-3</div>
              <div className="text-gray-600 text-sm">Weeks to Launch</div>
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Remote Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How We Build Your MVP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined process designed to get you from idea to launch without headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-gray-700" />
              </div>
              <div className="text-xs font-bold text-gray-400 mb-2 uppercase">Step 1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery Call</h3>
              <p className="text-gray-600 text-sm">
                We discuss your product idea, target users, and core features. I'll help refine your vision into a concrete, buildable MVP scope.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-gray-700" />
              </div>
              <div className="text-xs font-bold text-gray-400 mb-2 uppercase">Step 2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Build & Iterate</h3>
              <p className="text-gray-600 text-sm">
                I develop your MVP using battle-tested tech. You get regular updates, testable links, and can request changes throughout.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-gray-700" />
              </div>
              <div className="text-xs font-bold text-gray-400 mb-2 uppercase">Step 3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Launch & Support</h3>
              <p className="text-gray-600 text-sm">
                Your MVP goes live with deployment setup. I provide 30 days of post-launch support to fix bugs and ensure everything runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3  top-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What You Get</h2>
              <p className="text-xl text-gray-600 mb-8">
                A lean MVP with only the features that drive conversions. No bloat. No "nice-to-haves." Just the essentials.
              </p>
              <Link href="/offer" className="inline-flex items-center gap-2 font-semibold text-gray-900 border-b-2 border-gray-900 hover:text-gray-700 transition-colors pb-1">
                View Full Offer Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                'Ruthless feature prioritization (kill the non-essentials)',
                'Modern, conversion-focused UI/UX',
                'User authentication & authorization',
                'Database design & implementation',
                'Payment integration (Stripe/Paystack)',
                'Deployment & hosting setup',
                'Core API built for scale',
                'Post-launch support & optimization'
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
              Built on the modern web&apos;s most reliable technologies for speed, scale, and performance.
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

      {/* Projects & Testimonials */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Projects. Real Results.</h2>
            <p className="text-xl text-gray-600">MVPs built fast. Features ruthlessly filtered. Founders converting users.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <a href="https://curnectintel.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-8 border border-gray-200 hover:border-gray-400 transition-colors block">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Curnetintel.com</h3>
                <p className="text-sm text-gray-500 mt-1">Business Intelligence Platform</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "We wanted to build an all-in-one intelligence tool but kept adding features. Sheriff helped us focus on data import and visualization,the core feature founders actually paid for. Launched in 3 weeks. Now processing 10K+ daily insights."
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Raji Samad</div>
                  <div className="text-xs text-gray-500">Founder, Curnetintel</div>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://masterbots.ai" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-8 border border-gray-200 hover:border-gray-400 transition-colors block">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Masterbots.ai</h3>
                <p className="text-sm text-gray-500 mt-1">AI Automation Platform</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "We had 15 AI features planned but couldn't prioritize. Sheriff's approach: strip it down to one powerful bot builder. That single feature drove 60% of our early revenue. Rest of features came later when we had runway."
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Dan Jun</div>
                  <div className="text-xs text-gray-500">Founder, Masterbots.ai</div>
                </div>
              </div>
            </a>

            {/* Project 3 */}
            <a href="https://catalogcove.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded p-8 border border-gray-200 hover:border-gray-400 transition-colors block">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Catalogcove.com</h3>
                <p className="text-sm text-gray-500 mt-1">Product Catalog Management</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "We were overengineering everything. Sheriff pushed us to focus: one CSV import flow that works perfectly. Shipped 2 weeks ahead of schedule. Our first 200 users adopted just for that one feature."
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Jimoh Ridwan</div>
                  <div className="text-xs text-gray-500">Founder, Catalogcove</div>
                </div>
              </div>
            </a>
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