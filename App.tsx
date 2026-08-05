import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TerminalTypewriter } from './components/TerminalTypewriter';
import { Reveal } from './components/Reveal';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F3ED] text-black flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="w-full pt-12 md:pt-14 pb-16 md:pb-20 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-6 md:mb-8">
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 xl:col-span-5 space-y-8">
                <div className="space-y-4">
                  <Reveal delay={0.05}>
                    <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                      Johns Hopkins University · Electrical and Computer Engineering
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <h1 className="text-3xl md:text-5xl leading-tight">Xupeng (Zack) Zhang</h1>
                  </Reveal>
                  <Reveal delay={0.25}>
                    <p className="text-sm md:text-base text-black/72 leading-relaxed max-w-xl">
                      M.S.E. student building machine learning systems for medical imaging and healthcare,
                      advised by{' '}
                      <a
                        href="https://peirong26.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-black/25 underline-offset-4 hover:decoration-black transition-colors"
                      >
                        Prof. Peirong Liu
                      </a>{' '}
                      in the LDR Group.
                    </p>
                  </Reveal>
                  <Reveal delay={0.35}>
                    <p className="text-sm md:text-base text-black/55">
                      Medical Imaging · Computer Vision · LLM
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={0.45}>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href="/research/index.html" className="px-4 py-2.5 bg-black text-[#F5F3ED] text-sm tracking-wide hover:-translate-y-0.5 transition-transform">
                      View Research
                    </a>
                    <a href="/projects/index.html" className="px-4 py-2.5 border border-black/20 bg-[#F5F3ED] text-sm tracking-wide hover:-translate-y-0.5 transition-transform">
                      View Projects
                    </a>
                    <div className="flex items-center gap-3 text-sm text-black/55">
                      <a href="/cv/index.html" className="hover:text-black transition-colors">CV</a>
                      <span aria-hidden="true">·</span>
                      <a href="/contact/index.html" className="hover:text-black transition-colors">Contact</a>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
                <Reveal delay={0.2} y={24} duration={0.8}>
                  <figure className="w-full max-w-[560px] ml-auto">
                    <ImageWithFallback
                      src="/photos/IMG_0086.jpg"
                      alt="Blossoming tree along a road at dusk on the UC Davis campus, photographed by Xupeng Zhang"
                      className="w-full h-[400px] md:h-[540px] object-cover border border-black/10"
                    />
                    <figcaption className="mt-2.5 text-right text-[11px] tracking-[0.1em] uppercase text-black/35">
                      UC Davis, California
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-8 px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 items-start text-sm">
          <div className="md:col-span-7">
            <p className="text-black/45">© 2026 Xupeng Zhang. All rights reserved.</p>
          </div>
          <div className="md:col-span-5 flex flex-wrap md:justify-end gap-3 text-black/65">
            <a href="mailto:xzhan419@jh.edu" className="hover:text-black transition-colors">Email</a>
            <a href="https://github.com/TXiaoxz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <a href="/cv/index.html" className="hover:text-black transition-colors">CV</a>
            <a href="/contact/index.html" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
