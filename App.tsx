import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TerminalTypewriter } from './components/TerminalTypewriter';
import { Reveal, RevealGroup, RevealItem } from './components/Reveal';
import { Navbar } from './components/Navbar';

const focusAreas = [
  {
    number: '01',
    title: 'Medical Imaging',
    summary:
      'Multimodal MRI-MRA registration, neurovascular segmentation, and ROI-focused evaluation.',
  },
  {
    number: '02',
    title: 'Computer Vision',
    summary:
      'Vision models for medical and general-purpose tasks — segmentation, detection, and representation learning.',
  },
  {
    number: '03',
    title: 'Large Language Models',
    summary:
      'Exploring LLMs for reasoning, retrieval, and domain-specific assistants. Early-stage interest, projects in progress.',
  },
];

const featuredWork = [
  {
    title: 'Multimodal MRI-MRA Registration',
    summary:
      'Robust alignment for trigeminal neuralgia imaging, with emphasis on vessel-aware failure analysis and clinically meaningful regions of interest.',
    label: 'Research',
    href: '/research/index.html#mri-mra',
    size: 'large',
  },
  {
    title: 'Neurovascular Segmentation Pipeline',
    summary:
      'A 3D medical imaging workflow for preprocessing, mask conversion, vessel localization, and expert-annotated region analysis.',
    label: 'Research Tooling',
    href: '/research/index.html#neurovascular',
    size: 'large',
  },
  {
    title: 'Shadow Mapping Engine',
    summary:
      'Real-time WebGL 2.0 rendering engine with camera controls, scene node manipulation, and shadow mapping.',
    label: 'Graphics / Systems',
    href: '/projects/shadow-mapping/index.html',
    size: 'small',
  },
];

const methodNotes = [
  {
    title: 'Reproducible preprocessing',
    summary:
      'Clear data conversion, standardized image spaces, and scripts that can be rerun.',
  },
  {
    title: 'Targeted evaluation',
    summary:
      'Metrics designed around actual failure cases, not only aggregate benchmark scores.',
  },
  {
    title: 'Research-engineering bridge',
    summary:
      'Code, experiments, visualization, and documentation built together from the start.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F3ED] text-black">
      <Navbar />

      <main>
        <section className="pt-28 md:pt-32 pb-14 md:pb-16 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-8 md:mb-10">
              <div className="text-sm" style={{ fontFamily: "'Ubuntu Mono', monospace" }}>
                <TerminalTypewriter
                  prompt="Dlwlx05:~/home$"
                  actions={[
                    { type: 'pause' as const, duration: 700 },
                    { type: 'type' as const, text: 'cd research/medical-imaging' },
                    { type: 'pause' as const, duration: 1000 },
                    { type: 'delete' as const, count: 27 },
                    { type: 'pause' as const, duration: 450 },
                    { type: 'type' as const, text: 'run registration --modality mri-mra', speed: 42 },
                    { type: 'pause' as const, duration: 1100 },
                    { type: 'delete' as const, count: 35 },
                    { type: 'pause' as const, duration: 450 },
                    { type: 'type' as const, text: 'eval vessel-alignment --roi trigeminal', speed: 38 },
                    { type: 'pause' as const, duration: 1200 },
                    { type: 'delete' as const, count: 38 },
                    { type: 'pause' as const, duration: 450 },
                    { type: 'type' as const, text: 'notes: reproducible pipelines + robust metrics', speed: 36 },
                    { type: 'pause' as const, duration: 1200 },
                    { type: 'delete' as const, count: 46 },
                    { type: 'pause' as const, duration: 700 },
                  ]}
                  typeSpeed={72}
                  deleteSpeed={45}
                  loop={true}
                  loopDelay={1700}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-2 lg:order-1">
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
                    <p className="text-sm md:text-base text-black/72 leading-relaxed max-w-2xl">
                      M.S.E. student in Electrical and Computer Engineering at Johns Hopkins University.
                      I build machine learning systems for medical imaging, with growing interests in
                      computer vision and large language models. Current work centers on MRI-MRA registration
                      and neurovascular analysis.
                    </p>
                  </Reveal>
                  <Reveal delay={0.35}>
                    <p className="text-sm md:text-base text-black/65">
                      Medical Imaging · Computer Vision · LLM
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={0.45}>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
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

              <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8 order-1 lg:order-2">
                <Reveal delay={0.2} y={24} duration={0.8}>
                  <div className="relative w-full max-w-[560px] ml-auto">
                    <ImageWithFallback
                      src="/photos/IMG_0086.jpg"
                      alt="Xupeng Zhang portrait"
                      className="w-full h-[400px] md:h-[540px] object-cover border border-black/10"
                    />
                    <div className="absolute -bottom-4 -left-4 hidden md:block bg-[#F5F3ED] border border-black/10 px-4 py-3 max-w-[230px]">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-black/45">Current direction</p>
                      <p className="text-sm mt-1">MRI-MRA registration · vessel-aware evaluation</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 px-6 md:px-8 border-y border-black/10 bg-white/35">
          <div className="max-w-screen-2xl mx-auto">
            <Reveal>
              <div className="mb-7">
                <p className="text-xs uppercase tracking-[0.2em] text-black/45 mb-3">Current Focus</p>
                <h2 className="text-2xl md:text-3xl">Research systems for imaging and signals</h2>
              </div>
            </Reveal>

            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {focusAreas.map((area) => (
                <RevealItem key={area.title}>
                  <article className="border border-black/10 bg-[#F5F3ED] p-5 hover:-translate-y-1 transition-transform duration-300 h-full">
                    <p className="text-xs uppercase tracking-[0.16em] text-purple-700/75">{area.number}</p>
                    <h3 className="mt-3 text-lg">{area.title}</h3>
                    <p className="mt-3 text-black/70 leading-relaxed">{area.summary}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <Reveal>
              <div className="mb-8 md:mb-10">
                <p className="text-xs uppercase tracking-[0.2em] text-black/45 mb-3">Selected Work</p>
                <h2 className="text-2xl md:text-3xl">Featured Work</h2>
              </div>
            </Reveal>

            <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6" stagger={0.1}>
              {featuredWork.map((item) => (
                <RevealItem
                  key={item.title}
                  className={
                    item.size === 'large' ? 'lg:col-span-6' : 'lg:col-span-6 xl:col-span-3'
                  }
                >
                  <article
                    className={`h-full border border-black/12 bg-white/70 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 ${
                      item.size === 'large' ? 'p-6 md:p-7' : 'p-6'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-purple-700/75">{item.label}</p>
                    <h3 className={`${item.size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'} mt-4 leading-snug`}>
                      {item.title}
                    </h3>
                    <p className="mt-4 text-black/70 leading-relaxed">{item.summary}</p>
                    <a href={item.href} className="inline-flex mt-6 text-sm tracking-wide text-black/80 hover:text-black">
                      Explore →
                    </a>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 md:px-8 bg-white/30 border-y border-black/10">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/45 mb-3">How I Work</p>
              <h2 className="text-2xl md:text-3xl leading-tight">Accurate, inspectable, reproducible.</h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                I care about research systems that are not only accurate, but also easy to inspect,
                rerun, evaluate, and explain.
              </p>
            </Reveal>

            <RevealGroup className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {methodNotes.map((note) => (
                <RevealItem key={note.title}>
                  <article className="border border-black/10 bg-[#F5F3ED] p-5 h-full">
                    <h3 className="text-base">{note.title}</h3>
                    <p className="mt-3 text-black/70 leading-relaxed">{note.summary}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 md:px-8">
          <RevealGroup className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6" stagger={0.12}>
            <RevealItem className="lg:col-span-8">
              <article className="h-full border border-black/10 bg-white/55 p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-black/45 mb-4">Selected Writing</p>
                <h2 className="text-xl md:text-2xl leading-snug">
                  Trajectory of Mobile Grasping Robot in Reinforcement Learning Application
                </h2>
                <p className="mt-3 text-black/70">
                  Published work on robot trajectory and reinforcement learning. China Science and Technology,
                  ISSN 1671-2064; CN11-4650/N, Jul 2024.
                </p>
                <div className="mt-6 pt-6 border-t border-black/10">
                  <p className="text-sm uppercase tracking-[0.14em] text-black/50">In preparation</p>
                  <ul className="mt-3 text-black/72 list-disc pl-5 space-y-2">
                    <li>Multimodal MRI-MRA registration for trigeminal neuralgia imaging.</li>
                  </ul>
                </div>
              </article>
            </RevealItem>

            <RevealItem className="lg:col-span-4">
              <article className="h-full border border-black/10 bg-[#F5F3ED] p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-black/45 mb-4">Outside the Lab</p>
                <h2 className="text-xl md:text-2xl leading-snug">Photography archive</h2>
                <p className="mt-3 text-black/70 leading-relaxed">
                  A small collection of light, places, and scenes that felt worth saving.
                </p>
                <a href="/photos.html" className="inline-flex mt-6 text-sm tracking-wide text-black/80 hover:text-black">
                  View Photos →
                </a>
              </article>
            </RevealItem>
          </RevealGroup>
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
