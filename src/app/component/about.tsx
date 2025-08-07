export const AboutSection = () => {
    return (
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-8">
                <img 
                  src="https://imagizer.imageshack.com/img923/2757/2RJKn5.png"
                  alt="Jimoh Sherifdeen - Full Stack Software Engineer"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
                  About Me
                </h2>
                <div className="text-xl text-gray-300 space-y-6 leading-relaxed">
                  <p>
                    Hi, I&apos;m <span className="text-purple-400 font-semibold">Jimoh Sherifdeen</span>, 
                    a full-stack software engineer with <span className="text-pink-400 font-semibold">6+ years</span> of experience 
                    turning ideas into reality.
                  </p>
                  
                  <p>
                    My coding journey began in <span className="text-cyan-400 font-semibold">2018</span> with a simple dream: 
                    to build platforms like Facebook. What started with HTML has evolved into expertise across modern web and mobile development.
                  </p>
                  
                  <p>
                    As a <span className="text-purple-400 font-semibold">Computer Science graduate</span>, I&apos;ve worked as a freelancer, 
                    full-time professional, and part-time engineer. I specialize in <span className="text-pink-400 font-semibold">remote work</span> and 
                    <span className="text-cyan-400 font-semibold"> Agile methodology</span>.
                  </p>
                  
                  <p>
                    My superpower? <span className="text-purple-400 font-semibold">Rapid learning</span> and adapting to new technologies. 
                    I help founders ship MVPs in <span className="text-pink-400 font-semibold">2-3 weeks</span> using modern tech stacks.
                  </p>
                </div>
              </div>
              
              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {["6+ Years Experience", "Computer Science Graduate", "Remote Work Expert", "Agile Methodology", "Continuous Learner"].map((skill) => (
                  <span key={skill} className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-sm font-medium text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* CTA */}
              <div className="pt-4">
                <a 
                  href="https://jimohsherifdeen.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
                >
                  View Full Portfolio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }