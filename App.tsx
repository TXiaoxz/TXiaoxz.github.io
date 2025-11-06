import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TerminalTypewriter } from './components/TerminalTypewriter';

export default function App() {
  // Skills data
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'TypeScript', category: 'Programming' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'Signal Processing', category: 'Audio' },
    { name: 'Git', category: 'Tools' },
  ];
  return (
    <div className="min-h-screen bg-[#F5F3ED]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3ED] border-b border-black/10">
        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1 group">
            <span className="tracking-tight transition-transform duration-300 group-hover:scale-110">{'<'}X</span>
            <span className="text-purple-600 transition-transform duration-300 group-hover:rotate-180 inline-block">_</span>
            <span className="tracking-tight transition-transform duration-300 group-hover:scale-110">Z{'>'}</span>
          </a>
          <div className="flex items-center gap-12">
            {/* <a href="#work" className="tracking-wider relative group">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a> */}
            <a href="#about" className="tracking-wider relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="tracking-wider relative group">
              SKILLS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/photos.html" className="tracking-wider relative group">
              PHOTOS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="tracking-wider relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          {/* Terminal Typewriter Effect - Above photos */}
          <div className="mb-16 ml-8 flex justify-start">
            <div className="text-sm" style={{ fontFamily: "'Ubuntu Mono', monospace" }}>
              <TerminalTypewriter
                prompt="Dlwlx05:~/home$"
                actions={[
                  { type: 'pause' as const, duration: 800 },
                  { type: 'type' as const, text: 'cd UCD_Undergraduate' },
                  { type: 'pause' as const, duration: 1200 },
                  { type: 'delete' as const, count: 20 },
                  { type: 'pause' as const, duration: 500 },
                  { type: 'type' as const, text: 'cd JHU_Master' },
                  { type: 'pause' as const, duration: 1200 },
                  { type: 'delete' as const, count: 13 },
                  { type: 'pause' as const, duration: 500 },
                  { type: 'type' as const, text: 'sjhafhkofhashdfkjh', speed: 40 },
                  { type: 'pause' as const, duration: 400 },
                  { type: 'type' as const, text: 'asdfghjkl', speed: 35 },
                  { type: 'pause' as const, duration: 300 },
                  { type: 'type' as const, text: '???', speed: 30 },
                  { type: 'pause' as const, duration: 1000 },
                  { type: 'delete' as const, count: 31 },
                  { type: 'pause' as const, duration: 800 },
                ]}
                typeSpeed={80}
                deleteSpeed={50}
                loop={true}
                loopDelay={2000}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Right Image - Shows first on mobile */}
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-3">
              <div className="w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
                <ImageWithFallback
                  src="/photos/IMG_0086.jpg"
                  alt="Fashion model"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Center Name - Shows second on mobile */}
            <div className="lg:col-span-3 flex items-center justify-center order-2">
              <h1 className="tracking-wider text-center">
                XUPENG ZHANG
              </h1>
            </div>

            {/* Left Image - Shows third on mobile */}
            <div className="lg:col-span-3 lg:col-start-1 order-3 lg:order-1">
              <div className="w-full max-w-[280px] mx-auto">
                <ImageWithFallback
                  src="/photos/IMG_2685_jpg.jpg"
                  alt="Portrait"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - Temporarily Hidden */}
      {/* <section className="border-t border-black/10 py-20">
        <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <div className="space-y-2 group cursor-pointer">
            <p className="tracking-wider transition-transform duration-300 group-hover:translate-x-1">21 PROJECTS</p>
            <p className="tracking-wider transition-transform duration-300 group-hover:translate-x-1">DISCOVER MORE</p>
          </div>
          <div className="mt-8 flex justify-center">
            <ChevronDown className="w-5 h-5 animate-bounce hover:scale-125 transition-transform cursor-pointer" />
          </div>
        </div>
      </section> */}

      {/* Work Section - Temporarily Hidden */}
      {/* <section id="work" className="py-24 px-8 bg-white/30">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="tracking-wider mb-16 text-center">SELECTED WORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] bg-black/5 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-black/5 to-black/10 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="tracking-wide group-hover:translate-x-1 transition-transform duration-300">Project {item}</p>
                <p className="text-black/50 mt-1 group-hover:text-black/70 transition-colors duration-300">Category</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="tracking-wider mb-8">ABOUT</h2>
          <div className="space-y-6 text-black/70">
            <p>
              Graduate student in Electrical and Computer Engineering at Johns Hopkins University,
              specializing in Machine Learning, Signal Processing, and Computer Vision.
              Completed my Bachelor's in Computer Science at UC Davis.
            </p>
            <p>
              My research interests span medical imaging data preprocessing, human pose estimation,
              and deep learning applications. Currently exploring audio signal processing and random
              signal analysis while building practical ML systems for real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-8 bg-white/30">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="tracking-wider mb-16 text-center">TECHNICAL SKILLS</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-2 border border-black/20 bg-white/50 rounded-md hover:bg-white hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="tracking-wide">{skill.name}</span>
                  <span className="ml-2 text-black/40">·</span>
                  <span className="ml-2 text-black/40">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-white/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="tracking-wider mb-8">GET IN TOUCH</h2>
          <div className="space-y-4">
            <p className="tracking-wide">
              <a href="mailto:xzhan419@jh.edu" className="relative group inline-block">
                xzhan419@jh.edu
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-black transition-all duration-300 group-hover:w-0"></span>
              </a>
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <a href="#" className="tracking-wide relative group">
                INSTAGRAM
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="tracking-wide relative group">
                LINKEDIN
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="https://github.com/TXiaoxz"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-wide relative group"
              >
                GITHUB
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8 px-8">
        <div className="max-w-screen-2xl mx-auto text-center text-black/50">
          <p>© 2025 Xupeng Zhang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
