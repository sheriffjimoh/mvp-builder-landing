'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  

  const tools = ["Laravel", "Next.js", "TypeScript", "Tailwind", "Firebase", "Stripe", "Paystack", "MongoDB", "MySQL"];

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MVP Builder
            </div>
            <a href="#work" className="text-white/80 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Ship Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                MVP in 2 Weeks
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Transform your <span className="text-purple-400 font-semibold">vision</span> into a 
              <span className="text-pink-400 font-semibold"> live product</span> with 
              <span className="text-cyan-400 font-semibold"> modern tech</span>
            </p>
          </div>

          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link href="mailto:jimohsherifdeen6@gmail.com" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 px-12 py-6 rounded-2xl text-xl font-bold text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Start Building →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link href="https://jimohsherifdeen.vercel.app/" target='_blank' className="group border-2 border-white/20 hover:border-white/40 backdrop-blur-sm px-8 py-6 rounded-2xl text-xl font-semibold text-white hover:bg-white/5 transition-all duration-300">
              <span className="flex items-center space-x-2">
                <span>View Recent Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-3000"></div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-6xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              The Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From idea to launch in three simple steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "We dive deep into your vision, map out the MVP scope, and create a bulletproof plan.",
                icon: "💡",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                number: "02", 
                title: "Development",
                desc: "Lightning-fast development with cutting-edge tech. Backend, frontend, payments - everything.",
                icon: "⚡",
                gradient: "from-pink-600 to-cyan-600"
              },
              {
                number: "03",
                title: "Launch",
                desc: "Your MVP goes live, production-ready and scalable. Ready for real users and real revenue.",
                icon: "🚀",
                gradient: "from-cyan-600 to-purple-600"
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20">
                  <div className="text-6xl mb-6">{step.icon}</div>
                  <div className={`text-6xl font-black bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Modern Grid */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20 ">
            <h2 className="text-6xl font-black text-white bg-clip-text z-50">
              Tech Arsenal
            </h2>
            <p className="text-xl text-gray-50">
              Modern tools for modern problems
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={tool}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/50"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {tool}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">LIVE PROJECT</span>
              </div>
              
              <h3 className="text-5xl font-black text-white mb-6">CurnectIntel</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
                A complete <span className="text-purple-400 font-semibold">B2B KYC/KYB platform</span> shipped in 
                just 3 weeks. Features real-time analytics, wallet systems, API management, and seamless Paystack integration.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {["Laravel", "Next.js", "Paystack", "Real-time APIs", "Dashboard"].map((tech) => (
                  <span key={tech} className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-sm font-medium text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-16 relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-6xl font-black">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Ship?
                </span>
              </h2>
              
              <p className="text-2xl text-gray-300 font-light">
                Let&apos;s turn your vision into reality — fast, modern, and scalable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 px-12 py-6 rounded-2xl text-xl font-bold text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  Start Your Project →
                </button>
                
                <button className="border-2 border-white/20 hover:border-white/40 backdrop-blur-sm px-8 py-6 rounded-2xl text-xl font-semibold text-white hover:bg-white/5 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MVP Builder
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="https://jimohsherifdeen.vercel.app" target="_blank" className="text-gray-200 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="https://x.com/sherifdeenolat2" target="_blank" className="text-gray-200 hover:text-purple-400 transition-colors">
                Twitter
              </a>
              <span className="text-gray-500">Built by Jimoh Sherifdeen</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </main>
  );
}